"use client";

import { useEffect } from "react";

/**
 * Runs the Magento security page's own scripts (services chat, testimonial rotation, process tabs,
 * hero canvas, HubSpot form) after every mount. Markup set through dangerouslySetInnerHTML never
 * executes scripts on its own.
 */
export function MsecScripts({ src }: { src: string }) {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    document.body.appendChild(s);
    return () => {
      s.remove();
    };
  }, [src]);

  return null;
}
