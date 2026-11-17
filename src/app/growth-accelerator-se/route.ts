import { GA_SE_PAGE_HTML } from "@/sections/growth-accelerator-v2/page-html-se";

/* /solutions/growth-accelerator-se: the Growth Accelerator funnel for Sweden (English copy). Same page as
   /solutions/growth-accelerator (NL), with Swedish wording and benchmarks; generated as page-html-se.ts.
   The approved Orbit v2 page is served as one standalone HTML document: its own header, styles
   and scripts, no site chrome. Assets live in public/ga-assets. The page talks to
   /api/growth-se/submit (lead + Omnisend, gase-* namespace) and /api/growth-se/update (booked, phone, confirmed).
   Query modes, used by the emails: ?book=1&e=&cal= opens the booking step,
   ?confirm=1&e=&s=&w=&t= is the confirmation link in the booking email. */
export const dynamic = "force-static";

export function GET() {
  return new Response(GA_SE_PAGE_HTML, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=300",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
