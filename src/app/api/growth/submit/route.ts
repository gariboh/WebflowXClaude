import { NextRequest, NextResponse } from "next/server";
import { BLOCKLIST, CALENDLY_EVENT_TYPE, CALENDLY_PUBLIC_URL } from "@/sections/retention-90/server-config";
import { cleanProps, cleanTags, GA_SCOPE, omnisendUpsert } from "@/sections/retention-90/omnisend-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* Growth Accelerator: server side of the uplift index (the email step, fired when the score shows).
   - Same gate as Retention: honeypot + blocklists. Every outcome answers 200 {ok:true}.
   - A passing submission is saved in Omnisend ("Scandiweb.com (demand)") with the growth-accelerator
     tag, ga-* tags and ga_* properties. Those start the Growth Accelerator automations.
   - Qualification (€50K+ a month) is decided here from the revenue answer: qualified contacts get
     ga-qualified and a Calendly link back; the rest get ga-under50k and no link.
   The lead email itself is sent by the browser (formsubmit), as on every funnel. */

const PAGE_URL = "https://scandiweb.com/solutions/growth-accelerator";
const TIMEOUT = () => AbortSignal.timeout(8000);

type Body = Record<string, unknown> & { omni?: { props?: unknown; tags?: unknown } };

function blocked(email: string, store: string): boolean {
  const e = email.toLowerCase();
  const s = store.toLowerCase().replace(/^www\./, "");
  let extra: { emails?: unknown; localParts?: unknown; stores?: unknown } = {};
  try { extra = JSON.parse(process.env.RETENTION_BLOCKLIST || "{}"); } catch { /* bad env JSON: config list still applies */ }
  const list = (base: string[], add: unknown) => [...base, ...(Array.isArray(add) ? add.map(String) : [])];
  if (list(BLOCKLIST.emails, extra.emails).some((x) => x.toLowerCase() === e)) return true;
  const local = e.split("@")[0] || "";
  if (list(BLOCKLIST.localParts, extra.localParts).some((re) => { try { return new RegExp(re, "i").test(local); } catch { return false; } })) return true;
  return list(BLOCKLIST.stores, extra.stores).some((x) => x.toLowerCase() === s);
}

/* Calendly: single-use link when CALENDLY_TOKEN is set, else the public link, prefilled either way */
async function calendlyLink(name: string, email: string, store: string): Promise<string> {
  const token = process.env.CALENDLY_TOKEN;
  let base = process.env.CALENDLY_URL || CALENDLY_PUBLIC_URL;
  if (token) {
    try {
      const r = await fetch("https://api.calendly.com/scheduling_links", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ max_event_count: 1, owner: `https://api.calendly.com/event_types/${process.env.CALENDLY_EVENT_TYPE || CALENDLY_EVENT_TYPE}`, owner_type: "EventType" }),
        signal: TIMEOUT(),
      });
      const j = (await r.json()) as { resource?: { booking_url?: string } };
      if (j.resource?.booking_url) base = j.resource.booking_url;
      else console.log(JSON.stringify({ event: "ga_calendly_link_failed", status: r.status }));
    } catch (e) { console.log(JSON.stringify({ event: "ga_calendly_link_failed", error: String(e) })); }
  }
  const q = new URLSearchParams({ name, email, a1: store, utm_source: "growth-accelerator", utm_medium: "result" });
  return base + (base.includes("?") ? "&" : "?") + q.toString();
}

export async function POST(req: NextRequest) {
  let body: Body;
  try { body = (await req.json()) as Body; } catch { return NextResponse.json({ ok: true }); }
  const ip = req.headers.get("cf-connecting-ip") || req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const ua = req.headers.get("user-agent") || "";
  const country = req.headers.get("cf-ipcountry") || "";
  const email = String(body.email || "").trim();
  const store = String(body.store || "").trim().toLowerCase().slice(0, 120);
  const name = String(body.name || "").trim().slice(0, 80);

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !store) return NextResponse.json({ ok: true });
  if (String(body.company_website || "").trim() || blocked(email, store)) {
    console.log(JSON.stringify({ event: "ga_blocked", store, ip, country }));
    return NextResponse.json({ ok: true });
  }

  /* revenue answer: monthly € midpoint of the band (30000 = under €50K) */
  const qualified = Number(body.rev) >= 50000;
  const cal = qualified ? await calendlyLink(name, email, store) : "";
  const bookUrl = qualified ? `${PAGE_URL}?${new URLSearchParams({ book: "1", e: email, cal }).toString()}` : "";
  const browserTags = (Array.isArray(body.omni?.tags) ? body.omni.tags : []).filter((t) => !/^ga-(qualified|under50k)$/.test(String(t)));

  const omni = await omnisendUpsert({
    /* mergeTags: an existing contact (a Retention lead, or someone scanning twice) keeps its tags */
    email, firstName: name, subscribeEmail: true, mergeTags: true,
    tags: cleanTags([GA_SCOPE.base, qualified ? "ga-qualified" : "ga-under50k", ...browserTags], GA_SCOPE),
    props: {
      ...cleanProps(body.omni?.props, GA_SCOPE),
      ga_qualified: qualified ? "yes" : "no",
      ga_country: country,
      ga_scored_date: new Date().toISOString().slice(0, 10),
      ...(bookUrl ? { ga_book_url: bookUrl } : {}),
      ga_page_url: PAGE_URL,
    },
    consent: { ip, userAgent: ua, source: "scandiweb-growth-accelerator" },
  });
  const res = NextResponse.json({ ok: true, bookingUrl: cal, qualified });
  res.headers.set("x-omnisend", omni);
  return res;
}
