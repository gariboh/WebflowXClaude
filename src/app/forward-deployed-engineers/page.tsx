import Script from "next/script";
import { assetUrl } from "@/lib/assets";
import { FDE_BODY_HTML } from "@/sections/forward-deployed-engineers/page-html";
import { FdeScripts } from "@/sections/forward-deployed-engineers/FdeScripts";

/* /solutions/forward-deployed-engineers: the approved forward deployed engineers page, carried over
   one-to-one from its standalone build (artifact v24). The markup renders inside .fde, and fde.css
   scopes every rule under .fde, so the page's class names cannot reach the site Header or the
   Webflow Footer. The markup, CSS and JS were ported together from the artifact.
   The contact form is HubSpot form 444d0bad (portal 25724996, eu1), created for this page. */

const V = "20261119b";
const FONTS =
  "https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&family=Secular+One&display=swap";

export default function Page() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" precedence="default" href={FONTS} />
      <link rel="stylesheet" precedence="default" href={assetUrl(`/forward-deployed-engineers/fde.css?v=${V}`)} />
      <main className="fde" dangerouslySetInnerHTML={{ __html: FDE_BODY_HTML }} />
      <Script src="https://js-eu1.hsforms.net/forms/embed/v2.js" strategy="afterInteractive" />
      <FdeScripts src={assetUrl(`/forward-deployed-engineers/fde.js?v=${V}`)} />
    </>
  );
}
