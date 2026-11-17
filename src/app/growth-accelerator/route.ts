import { GA_PAGE_HTML } from "@/sections/growth-accelerator-v2/page-html";

/* /solutions/growth-accelerator: the Growth Accelerator funnel (Netherlands, English copy).
   The approved Orbit v2 page is served as one standalone HTML document: its own header, styles
   and scripts, no site chrome. Assets live in public/ga-assets. The page talks to
   /api/growth/submit (lead + Omnisend) and /api/growth/update (booked, phone, confirmed).
   Query modes, used by the emails: ?book=1&e=&cal= opens the booking step,
   ?confirm=1&e=&s=&w=&t= is the confirmation link in the booking email. */
export const dynamic = "force-static";

export function GET() {
  return new Response(GA_PAGE_HTML, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=300",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
