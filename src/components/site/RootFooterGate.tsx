"use client";

import { usePathname } from "next/navigation";

/**
 * Routes (without the /solutions basePath) that render scandiweb.com's own footer through
 * LiveSiteFooter, so the root layout's shared Webflow footer is not shown there.
 */
export const LIVE_CHROME_ROUTES = ["/magento-security", "/forward-deployed-engineers"];

export function RootFooterGate({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const path = pathname && pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  if (path && LIVE_CHROME_ROUTES.includes(path)) return null;
  return <>{children}</>;
}
