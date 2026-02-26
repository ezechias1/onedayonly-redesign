import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell With Us",
  description:
    "Partner with OneDayOnly to reach 500K+ active shoppers. Zero listing fees, marketing included, and fast payouts for suppliers.",
};

export default function SellWithUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
