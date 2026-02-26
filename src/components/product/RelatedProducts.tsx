"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice, formatDiscount } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import type { Product } from "@/types/product";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RelatedProductsProps {
  products: Product[];
  className?: string;
}

// ---------------------------------------------------------------------------
// Compact Product Card
// ---------------------------------------------------------------------------

function CompactCard({ product }: { product: Product }) {
  const defaultImage =
    product.images.find((img) => img.isDefault) ?? product.images[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group flex w-44 shrink-0 flex-col overflow-hidden rounded-card border border-gray-100 bg-white sm:w-52",
        "transition-shadow hover:shadow-lg",
        "dark:border-dark-border dark:bg-dark-surface",
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-dark-bg">
        {defaultImage && (
          <Image
            src={defaultImage.url}
            alt={defaultImage.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="208px"
          />
        )}
        {product.discountPercentage > 0 && (
          <Badge variant="discount" size="sm" className="absolute left-2 top-2">
            {formatDiscount(product.discountPercentage)}
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-0.5 p-2.5">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
          {product.brand.name}
        </span>
        <h3 className="line-clamp-2 text-xs font-medium text-gray-900 dark:text-gray-100">
          {product.shortName}
        </h3>
        <div className="mt-auto flex items-baseline gap-1.5 pt-1">
          <span className="font-heading text-sm font-bold text-brand-red">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-[10px] text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

/**
 * Horizontal carousel of related products.
 *
 * - Shows 4-8 products from the same category (excluding the current one)
 * - Arrow navigation on desktop
 * - Touch-scroll on mobile
 */
export function RelatedProducts({
  products,
  className,
}: RelatedProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (products.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -240 : 240;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
          You May Also Like
        </h2>

        {/* Desktop arrows */}
        <div className="hidden gap-1 sm:flex">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 dark:border-dark-border dark:text-gray-400 dark:hover:bg-dark-surface"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 dark:border-dark-border dark:text-gray-400 dark:hover:bg-dark-surface"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
      >
        {products.map((product) => (
          <CompactCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
