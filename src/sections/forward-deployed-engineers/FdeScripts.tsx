"use client";

import { useEffect } from "react";

/**
 * Runs the forward deployed engineers page's own scripts (service tabs, testimonial rotation,
 * process carousel, hero canvas, HubSpot form) after every mount. Markup set through
 * dangerouslySetInnerHTML never executes scripts on its own.
 */
export function FdeScripts({ src }: { src: string }) {
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
