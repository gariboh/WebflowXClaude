import Script from "next/script";
import { assetUrl } from "@/lib/assets";
import { MSEC_BODY_HTML } from "@/sections/magento-security/page-html";
import { MsecScripts } from "@/sections/magento-security/MsecScripts";

/* /solutions/magento-security: the approved Magento security services page, carried over one-to-one
   from its standalone build (REDESIGNED Magento security artifact v76). The markup renders inside
   .msec, and msec.css scopes every rule under .msec, so the page's class names cannot reach the
   site Header or the Webflow Footer. The markup, CSS and JS were ported together from the artifact.
   The contact form is HubSpot form 69e2d076 (portal 25724996, eu1), created for this page; its id is set in msec.js. */

const V = "20261123b";
const FONTS =
  "https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&family=Secular+One&display=swap";

export default function Page() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" precedence="default" href={FONTS} />
      <link rel="stylesheet" precedence="default" href={assetUrl(`/magento-security/msec.css?v=${V}`)} />
      <main className="msec" dangerouslySetInnerHTML={{ __html: MSEC_BODY_HTML }} />
      <Script src="https://js-eu1.hsforms.net/forms/embed/v2.js" strategy="afterInteractive" />
      <MsecScripts src={assetUrl(`/magento-security/msec.js?v=${V}`)} />
    </>
  );
}
