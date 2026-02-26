"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Trending deals horizontal carousel.
 *
 * Shows products with 'best-seller' or 'flash-deal' badges first,
 * then falls back to top 8 products sorted by discount percentage.
 *
 * Features:
 * - Horizontal scrollable carousel of ProductCards
 * - Arrow navigation on desktop
 * - Smooth Embla carousel scrolling
 */
export function TrendingDeals() {
  // Build the trending list: prioritise badged products, then top discounts
  const badgedProducts = products.filter(
    (p) =>
      !p.isSoldOut &&
      (p.badges.includes("best-seller") || p.badges.includes("flash-deal"))
  );

  const topDiscounts = products
    .filter((p) => !p.isSoldOut && !badgedProducts.some((bp) => bp.id === p.id))
    .sort((a, b) => b.discountPercentage - a.discountPercentage);

  const trending = [...badgedProducts, ...topDiscounts].slice(0, 12);

  // -- Embla Carousel -------------------------------------------------------
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 2,
    containScroll: "trimSnaps",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (trending.length === 0) return null;

  return (
    <section
      className="w-full py-8 sm:py-12 bg-gray-50 dark:bg-dark-bg"
      aria-label="Trending deals"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading with navigation arrows */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 sm:h-6 sm:w-6 text-brand-red" />
            <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
              Trending Now
            </h2>
          </div>

          {/* Desktop navigation arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full",
                "border border-gray-200 dark:border-dark-border",
                "bg-white dark:bg-dark-surface",
                "text-gray-600 dark:text-gray-300",
                "transition-all duration-200",
                "hover:bg-gray-50 dark:hover:bg-dark-border hover:shadow-sm",
                "disabled:opacity-30 disabled:cursor-not-allowed"
              )}
              aria-label="Scroll to previous deals"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full",
                "border border-gray-200 dark:border-dark-border",
                "bg-white dark:bg-dark-surface",
                "text-gray-600 dark:text-gray-300",
                "transition-all duration-200",
                "hover:bg-gray-50 dark:hover:bg-dark-border hover:shadow-sm",
                "disabled:opacity-30 disabled:cursor-not-allowed"
              )}
              aria-label="Scroll to next deals"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden -mx-2">
          <div className="flex">
            {trending.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 px-2"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingDeals;
