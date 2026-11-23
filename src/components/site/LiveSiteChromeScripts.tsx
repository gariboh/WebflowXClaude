"use client";

import { useEffect } from "react";

/**
 * Runs scandiweb.com's header and footer scripts (public/site-chrome/chrome.js) after mount. Markup set
 * through dangerouslySetInnerHTML never executes scripts on its own. chrome.js guards itself, so it
 * initialises once per page load.
 */
export function LiveSiteChromeScripts({ src }: { src: string }) {
  useEffect(() => {
    if (document.querySelector(`script[data-swc-chrome]`)) return;
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.setAttribute("data-swc-chrome", "1");
    document.body.appendChild(s);
  }, [src]);

  return null;
}
