import { HeroCarousel } from "@/components/home/HeroCarousel";
import { TopProductsRow } from "@/components/home/TopProductsRow";
import { BrandDealFeed } from "@/components/home/BrandDealFeed";
import { RecentlyViewedSection } from "@/components/home/RecentlyViewedSection";

// ---------------------------------------------------------------------------
// Page metadata
// ---------------------------------------------------------------------------

export const metadata = {
  title: "OneDayOnly | SA's Best Daily Deals",
  description:
    "South Africa's leading daily deals site. Up to 80% off top brands — new deals every day at midnight. Shop electronics, fashion, beauty, homeware and more.",
};

// ---------------------------------------------------------------------------
// Homepage
// ---------------------------------------------------------------------------

/**
 * Homepage assembling all home section components.
 *
 * Layout order:
 * 1. HeroCarousel    – full-width banner carousel
 * 2. TopProductsRow  – horizontal carousel of today's top deals
 * 3. BrandDealFeed   – brand-grouped deal sections with promo banners
 */
export default function HomePage() {
  return (
    <>
      {/* Hero banner carousel */}
      <HeroCarousel />

      {/* Top deals carousel */}
      <TopProductsRow />

      {/* Brand-grouped deal sections with promo banners */}
      <BrandDealFeed />

      {/* Recently viewed products */}
      <RecentlyViewedSection />
    </>
  );
}
