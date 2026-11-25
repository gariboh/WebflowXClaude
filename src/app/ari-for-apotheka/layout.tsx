import type { Metadata } from "next";

const TITLE = "Ari for Apotheka";
const SHARE_TITLE = `${TITLE} | scandiweb`;
const DESCRIPTION =
  "A short video for the Apotheka Estonia team: how Ari, the first agent for Magento, makes store changes in minutes.";
const URL = "https://scandiweb.com/solutions/ari-for-apotheka";
const POSTER = "https://scandiweb.com/solutions/ari-for-apotheka/poster.jpg";

export const metadata: Metadata = {
  title: { absolute: SHARE_TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: SHARE_TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "scandiweb",
    type: "website",
    images: [{ url: POSTER, width: 720, height: 1280 }],
  },
  twitter: { card: "summary_large_image", title: SHARE_TITLE, description: DESCRIPTION, images: [POSTER] },
  /* A personal page for one prospect: keep it out of search results. */
  robots: { index: false, follow: false },
};

/* Nothing on the page but the video and the "Book a call" button: no site header (this route has no category
   layout), and the global Webflow footer, the Hachly / Intercom chat and HubSpot pop-ups are hidden on this route only
   (same approach as aeo/clinics). */
export default function AriForApothekaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <style>{`html,body{background:#000!important}
.footer_block{display:none!important}
#hachly-ai-container{display:none!important}
.intercom-lightweight-app,.intercom-launcher,.intercom-launcher-frame,#intercom-container{display:none!important}
#hs-web-interactives-top-push-anchor,#hs-web-interactives-top-anchor,#hs-web-interactives-bottom-anchor,#hs-web-interactives-floating-container,#hs-interactives-modal-overlay{display:none!important}
body{overflow-y:auto!important}`}</style>
      {children}
    </>
  );
}
