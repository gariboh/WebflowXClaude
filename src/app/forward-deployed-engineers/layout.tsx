import type { Metadata } from "next";
import { Header } from "@/components/site/Header";

const URL = "https://scandiweb.com/solutions/forward-deployed-engineers";
const TITLE = "Hire forward deployed engineers for eCommerce | scandiweb";
const DESCRIPTION =
  "Hire forward deployed engineers who know eCommerce. scandiweb engineers join your team and put AI to work on your Magento or Shopify store and ERP.";

export const metadata: Metadata = {
  // absolute, so the root layout's "%s | scandiweb" template does not double the suffix
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
    images: [{ url: `${URL}/img/fde-office-engineer.jpg` }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function ForwardDeployedEngineersLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
