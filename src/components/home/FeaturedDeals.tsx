"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Button } from "@/components/ui/Button";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Featured deals section for the homepage.
 *
 * Shows the top 10 non-sold-out products sorted by highest discount first,
 * displayed in a responsive ProductGrid.
 *
 * Includes a "View All Deals" CTA at the bottom.
 */
export function FeaturedDeals() {
  const featured = products
    .filter((p) => !p.isSoldOut)
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 10);

  if (featured.length === 0) return null;

  return (
    <section className="w-full py-8 sm:py-12" aria-label="Today's hottest deals">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
            Today&apos;s Hottest Deals
          </h2>
          <Link
            href="/"
            className={cn(
              "hidden sm:inline-flex items-center gap-1",
              "text-sm font-semibold text-brand-red",
              "hover:underline underline-offset-4",
              "transition-colors duration-200"
            )}
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Product grid */}
        <ProductGrid>
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>

        {/* Mobile "View All" CTA */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Button
            as="a"
            href="/"
            variant="primary"
            size="md"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            View All Deals
          </Button>
        </div>

        {/* Desktop "View All" CTA */}
        <div className="mt-8 hidden sm:flex justify-center">
          <Button
            as="a"
            href="/"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            View All Deals
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedDeals;
