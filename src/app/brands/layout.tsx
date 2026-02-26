import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Brands",
  description:
    "Browse all brands available on OneDayOnly. Find daily deals from your favourite brands at up to 80% off.",
};

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
