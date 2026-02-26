import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Vouchers",
  description:
    "Give the gift of choice with OneDayOnly gift vouchers. Available from R50 to R5,000. Delivered instantly via email.",
};

export default function GiftVouchersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
