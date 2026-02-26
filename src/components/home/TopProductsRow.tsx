"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

// ---------------------------------------------------------------------------
// TopProductsRow — horizontal scrollable row of today's top ~7 deals
// ---------------------------------------------------------------------------

export function TopProductsRow() {
  const topDeals = products
    .filter((p) => !p.isSoldOut)
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 7);

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

  if (topDeals.length === 0) return null;

  return (
    <section
      className="w-full py-6 sm:py-8 bg-white dark:bg-dark-bg"
      aria-label="Today's top deals"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading + arrows */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-lg sm:text-xl font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
            Today&apos;s Top Deals
          </h2>

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
            {topDeals.map((product) => (
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

export default TopProductsRow;
