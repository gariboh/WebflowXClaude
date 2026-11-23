import type { Metadata } from "next";
import { LiveSiteHeader, LiveSiteFooter } from "@/components/site/LiveSiteChrome";

const URL = "https://scandiweb.com/solutions/magento-security";
const TITLE = "Magento security services: monthly patches and PCI DSS";
const DESCRIPTION =
  "Magento security services from the world’s most certified Adobe Commerce team. We patch your store monthly and protect checkout for PCI DSS. Book a check.";

export const metadata: Metadata = {
  // absolute, so the root layout's "%s | scandiweb" template does not push the title past 60 characters
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "scandiweb",
    type: "website",
    images: [{ url: `${URL}/img/og-magento-security.jpg`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function MagentoSecurityLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* scandiweb.com's own header and footer (the root layout skips its shared footer here: RootFooterGate) */}
      <LiveSiteHeader />
      {children}
      <LiveSiteFooter />
    </>
  );
}
