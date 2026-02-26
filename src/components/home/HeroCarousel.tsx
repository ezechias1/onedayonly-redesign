"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { banners } from "@/data/banners";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Full-width hero carousel for the homepage.
 *
 * Features:
 * - Auto-plays every 5 seconds, pauses on hover
 * - Gradient overlay on each slide with title, subtitle, and CTA
 * - Dot indicators at bottom
 * - Left/right arrow navigation (hidden on mobile)
 * - Smooth slide transitions via Embla Carousel
 */
export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // -- Sync selected slide index --------------------------------------------
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // -- Navigation -----------------------------------------------------------
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative w-full" aria-label="Featured promotions">
      {/* Embla viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="relative flex-[0_0_100%] min-w-0"
            >
              {/* Aspect ratios: 16/9 mobile, 21/9 desktop */}
              <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to right, ${banner.backgroundColor ?? "#000"}dd 0%, ${banner.backgroundColor ?? "#000"}88 50%, transparent 100%)`,
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-lg space-y-3 md:space-y-4">
                      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
                        {banner.title}
                      </h2>
                      {banner.subtitle && (
                        <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-md">
                          {banner.subtitle}
                        </p>
                      )}
                      <Link
                        href={banner.ctaLink}
                        className={cn(
                          "inline-flex items-center justify-center",
                          "rounded-pill px-6 py-2.5 md:px-8 md:py-3",
                          "bg-white text-gray-900 font-semibold text-sm md:text-base",
                          "hover:bg-gray-100 active:bg-gray-200",
                          "transition-colors duration-200",
                          "shadow-lg"
                        )}
                      >
                        {banner.ctaText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow navigation - hidden on mobile */}
      <button
        onClick={scrollPrev}
        className={cn(
          "absolute left-3 top-1/2 -translate-y-1/2 z-20",
          "hidden md:flex items-center justify-center",
          "h-10 w-10 rounded-full",
          "bg-white/20 backdrop-blur-sm text-white",
          "hover:bg-white/40 transition-colors duration-200",
          "shadow-lg"
        )}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2 z-20",
          "hidden md:flex items-center justify-center",
          "h-10 w-10 rounded-full",
          "bg-white/20 backdrop-blur-sm text-white",
          "hover:bg-white/40 transition-colors duration-200",
          "shadow-lg"
        )}
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "rounded-full transition-all duration-300",
              index === selectedIndex
                ? "w-8 h-2.5 bg-white"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === selectedIndex ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;
