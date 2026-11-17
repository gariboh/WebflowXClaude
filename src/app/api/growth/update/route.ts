import { NextRequest, NextResponse } from "next/server";
import { CALENDLY_WEBHOOK_TOKEN_FALLBACK } from "@/sections/retention-90/server-config";
import { cleanProps, cleanTags, GA_SCOPE, omnisendUpsert } from "@/sections/retention-90/omnisend-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* Follow-up updates to a Growth Accelerator contact in Omnisend (tags are merged, never replaced):
   - kind "booked":    + ga-booked (stops the nurture, starts the booking-confirmation email). With the
                       Calendly event URI it also saves the call time (ga_call_date, ga_call_time,
                       ga_call_start) and the confirmation link (ga_confirm_url) the email button uses.
                       Answers { when, start } so the page can say "Booked: Thu 20 Nov, 14:30".
   - kind "phone":     the mobile number from the step after booking (ga_phone; no SMS consent).
   - kind "confirmed": + ga-confirmed (they clicked the link in the booking-confirmation email).
   Always answers 200; the Omnisend result rides in a header. */

const PAGE_URL = "https://scandiweb.com/solutions/growth-accelerator";
const EVENT_RE = /^https:\/\/api\.calendly\.com\/scheduled_events\/[A-Za-z0-9-]+$/;
const TZ = "Europe/Amsterdam";

async function callTime(uri: string): Promise<{ start: string; date: string; time: string } | null> {
  const token = process.env.CALENDLY_TOKEN || process.env.CALENDLY_WEBHOOK_TOKEN || CALENDLY_WEBHOOK_TOKEN_FALLBACK;
  if (!token || !EVENT_RE.test(uri)) return null;
  try {
    const r = await fetch(uri, { headers: { Authorization: `Bearer ${token}` }, signal: AbortSignal.timeout(6000) });
    if (!r.ok) { console.log(JSON.stringify({ event: "ga_calendly_event_failed", status: r.status })); return null; }
    const j = (await r.json()) as { resource?: { start_time?: string } };
    const s = j.resource?.start_time ? new Date(j.resource.start_time) : null;
    if (!s || isNaN(s.getTime())) return null;
    const date = new Intl.DateTimeFormat("en-GB", { timeZone: TZ, weekday: "short", day: "numeric", month: "short" }).format(s).replace(",", "");
    const time = new Intl.DateTimeFormat("en-GB", { timeZone: TZ, hour: "2-digit", minute: "2-digit", hour12: false }).format(s);
    return { start: s.toISOString(), date, time };
  } catch (e) { console.log(JSON.stringify({ event: "ga_calendly_event_failed", error: String(e) })); return null; }
}

export async function POST(req: NextRequest) {
  let b: Record<string, unknown>;
  try { b = (await req.json()) as Record<string, unknown>; } catch { return NextResponse.json({ ok: true }); }
  const email = String(b.email || "").trim();
  const kind = String(b.kind || "");
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !["booked", "phone", "confirmed"].includes(kind)) return NextResponse.json({ ok: true });
  const today = new Date().toISOString().slice(0, 10);
  let tags: string[] = [];
  let props: Record<string, string> = {};
  let out: Record<string, string> = {};

  if (kind === "booked") {
    tags = ["ga-booked"];
    props = { ga_booked: "yes", ga_booked_date: today };
    const t = await callTime(String(b.event || ""));
    if (t) {
      const when = `${t.date}, ${t.time}`;
      props = { ...props, ga_call_date: t.date, ga_call_time: t.time, ga_call_start: t.start };
      out = { when, start: t.start };
      props.ga_confirm_url = `${PAGE_URL}?${new URLSearchParams({ confirm: "1", e: email, w: when, t: t.start }).toString()}`;
    } else {
      props.ga_confirm_url = `${PAGE_URL}?${new URLSearchParams({ confirm: "1", e: email }).toString()}`;
    }
  } else if (kind === "phone") {
    const phone = String(b.phone || "").replace(/[\s().-]/g, "").slice(0, 20);
    if (!/^\+?\d{8,14}$/.test(phone)) return NextResponse.json({ ok: true });
    props = { ga_phone: phone };
  } else {
    tags = ["ga-confirmed"];
    props = { ga_confirmed: "yes", ga_confirmed_date: today };
  }

  const ip = req.headers.get("cf-connecting-ip") || req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "";
  const result = await omnisendUpsert({
    email, tags: cleanTags(tags, GA_SCOPE), props: cleanProps(props, GA_SCOPE), mergeTags: true,
    consent: { ip, userAgent: req.headers.get("user-agent") || "", source: "scandiweb-growth-accelerator" },
  });
  const res = NextResponse.json({ ok: true, ...out });
  res.headers.set("x-omnisend", result);
  return res;
}
