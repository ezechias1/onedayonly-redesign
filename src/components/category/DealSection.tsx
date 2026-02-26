"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice, formatDiscount } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { DealSection as DealSectionType, Product } from "@/types/product";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface DealSectionProps {
  dealSection: DealSectionType;
  products: Product[];
  className?: string;
}

const INITIAL_SHOW = 4;

// ---------------------------------------------------------------------------
// Inline ProductCard (lightweight card used within the category page)
// ---------------------------------------------------------------------------

function ProductCard({ product }: { product: Product }) {
  const defaultImage = product.images.find((img) => img.isDefault) ?? product.images[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-card border border-gray-100 bg-white",
        "transition-shadow hover:shadow-lg",
        "dark:border-dark-border dark:bg-dark-surface",
        product.isSoldOut && "opacity-60",
      )}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-dark-bg">
        {defaultImage && (
          <Image
            src={defaultImage.url}
            alt={defaultImage.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )}

        {/* Discount badge */}
        {product.discountPercentage > 0 && (
          <Badge
            variant="discount"
            size="sm"
            className="absolute left-2 top-2"
          >
            {formatDiscount(product.discountPercentage)}
          </Badge>
        )}

        {/* Sold out overlay */}
        {product.isSoldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <Badge variant="sold-out" size="md">
              Sold Out
            </Badge>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-1 p-3">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
          {product.brand.name}
        </span>
        <h3 className="line-clamp-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          {product.shortName}
        </h3>
        <div className="mt-auto flex items-baseline gap-2 pt-1">
          <span className="font-heading text-base font-bold text-brand-red">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// ProductCardSkeleton (exported for loading states)
// ---------------------------------------------------------------------------

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-card border border-gray-100 bg-white dark:border-dark-border dark:bg-dark-surface">
      <div className="aspect-square animate-pulse bg-gray-200 dark:bg-dark-border" />
      <div className="flex flex-col gap-2 p-3">
        <div className="h-3 w-16 animate-pulse rounded bg-gray-200 dark:bg-dark-border" />
        <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-dark-border" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-dark-border" />
        <div className="mt-1 h-5 w-20 animate-pulse rounded bg-gray-200 dark:bg-dark-border" />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

/**
 * A grouped deal section within a category page.
 *
 * Shows a hero banner image, a grid of product cards, and a "Show more"
 * button when the section has more than 4 products.
 */
export function DealSection({
  dealSection,
  products,
  className,
}: DealSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, INITIAL_SHOW);
  const hasMore = products.length > INITIAL_SHOW;

  return (
    <section className={cn("space-y-4", className)}>
      {/* Section hero image */}
      <div className="relative aspect-video overflow-hidden rounded-card">
        <Image
          src={dealSection.image}
          alt={dealSection.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 75vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 sm:p-6">
          <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
            {dealSection.title}
          </h2>
          <p className="mt-1 text-sm text-white/80">
            {products.length} {products.length === 1 ? "deal" : "deals"}
          </p>
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Show more */}
      {hasMore && !showAll && (
        <div className="flex justify-center pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAll(true)}
            rightIcon={<ChevronDown className="h-4 w-4" />}
          >
            Show {products.length - INITIAL_SHOW} more
          </Button>
        </div>
      )}
    </section>
  );
}

export default DealSection;
