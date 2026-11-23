import { assetUrl } from "@/lib/assets";
import { SWC_HEADER_HTML, SWC_FOOTER_HTML } from "@/sections/site-chrome/chrome-html";
import { LiveSiteChromeScripts } from "./LiveSiteChromeScripts";

/**
 * scandiweb.com's own header and footer (a snapshot of the live Webflow markup), for routes that must
 * look exactly like the main site instead of using the app's Header and the shared Webflow footer.
 *
 * - chrome.css holds the site's shared Webflow CSS, trimmed to the chrome's classes and scoped under .swc.
 * - chrome.js runs the chrome's embedded scripts (mega menus, scroll state, footer menus, photo strip,
 *   newsletter form) and loads the site's Webflow runtime after the page has loaded (mobile menu, tabs).
 * - Routes using LiveSiteFooter must be listed in LIVE_CHROME_ROUTES (RootFooterGate) so the root
 *   layout skips the shared footer.
 */

const V = "20261123";

export function LiveSiteHeader() {
  return (
    <>
      <link rel="stylesheet" precedence="default" href={assetUrl(`/site-chrome/chrome.css?v=${V}`)} />
      <div className="swc swc-header" dangerouslySetInnerHTML={{ __html: SWC_HEADER_HTML }} />
    </>
  );
}

export function LiveSiteFooter() {
  return (
    <>
      <div className="swc swc-footer" dangerouslySetInnerHTML={{ __html: SWC_FOOTER_HTML }} />
      <LiveSiteChromeScripts src={assetUrl(`/site-chrome/chrome.js?v=${V}`)} />
    </>
  );
}
