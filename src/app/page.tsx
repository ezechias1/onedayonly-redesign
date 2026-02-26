import { HeroCarousel } from "@/components/home/HeroCarousel";
import { CountdownTimer } from "@/components/home/CountdownTimer";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { FeaturedDeals } from "@/components/home/FeaturedDeals";
import { TrustBar } from "@/components/home/TrustBar";
import { TrendingDeals } from "@/components/home/TrendingDeals";
import { NewsletterSignup } from "@/components/home/NewsletterSignup";

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
 * 1. HeroCarousel   – full-width banner carousel
 * 2. CountdownTimer  – deal expiry countdown strip
 * 3. CategoryShowcase – horizontal category cards
 * 4. FeaturedDeals   – top-discount product grid
 * 5. TrustBar        – value proposition strip
 * 6. TrendingDeals   – trending products carousel
 * 7. NewsletterSignup – email subscription CTA
 */
export default function HomePage() {
  return (
    <>
      {/* Hero banner carousel */}
      <HeroCarousel />

      {/* Countdown timer */}
      <CountdownTimer />

      {/* Category showcase */}
      <CategoryShowcase />

      {/* Featured deals */}
      <FeaturedDeals />

      {/* Trust bar */}
      <TrustBar />

      {/* Trending deals carousel */}
      <TrendingDeals />

      {/* Newsletter signup */}
      <NewsletterSignup />
    </>
  );
}
