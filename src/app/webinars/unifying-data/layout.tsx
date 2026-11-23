import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Webinar: unify your data once, use it everywhere | scandiweb",
  },
  description:
    "Companies with scattered data grow 2.9x slower. Learn why your sales numbers never match and how to bring your data together. Registrants can get a free dashboard prototype.",
  alternates: {
    canonical: "https://scandiweb.com/solutions/webinars/unifying-data",
  },
  robots: { index: false, follow: false },
};

export default function UnifyingDataWebinarLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
