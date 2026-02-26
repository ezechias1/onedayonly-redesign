import type { Metadata } from "next";
import { Flame, Clock, Tag } from "lucide-react";

import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Badge } from "@/components/ui/Badge";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Clearance Sale | OneDayOnly",
  description:
    "Last chance to grab these deals before they are gone! Browse clearance and extra-time deals at unbeatable prices.",
  openGraph: {
    title: "Clearance Sale | OneDayOnly",
    description:
      "Last chance to grab these deals before they are gone! Browse clearance and extra-time deals at unbeatable prices.",
  },
};

// ---------------------------------------------------------------------------
// Breadcrumb data
// ---------------------------------------------------------------------------

const breadcrumbItems = [{ label: "Clearance Sale" }];

// ---------------------------------------------------------------------------
// Data helpers
// ---------------------------------------------------------------------------

/**
 * Collect clearance products:
 * 1. Products with the 'last-chance' badge
 * 2. Products from the 'extra-time-deals' category
 * 3. If fewer than 12 results, pad with sold-out products
 */
function getClearanceProducts() {
  const MINIMUM = 12;

  const primarySet = new Set<string>();
  const primary = products.filter((p) => {
    const isLastChance = p.badges.includes("last-chance");
    const isExtraTime = p.categoryId === "cat-extra-time-deals";

    if (isLastChance || isExtraTime) {
      primarySet.add(p.id);
      return true;
    }
    return false;
  });

  if (primary.length >= MINIMUM) return primary;

  // Pad with sold-out products that are not already included
  const soldOut = products.filter(
    (p) => p.isSoldOut && !primarySet.has(p.id),
  );

  return [...primary, ...soldOut].slice(0, Math.max(MINIMUM, primary.length));
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ClearancePage() {
  const clearanceProducts = getClearanceProducts();

  const inStockCount = clearanceProducts.filter((p) => !p.isSoldOut).length;
  const soldOutCount = clearanceProducts.length - inStockCount;

  return (
    <div className="container mx-auto px-4 pb-16">
      <Breadcrumb items={breadcrumbItems} />

      {/* ── Hero Banner ──────────────────────────────────────────── */}
      <section
        className={cn(
          "relative overflow-hidden rounded-card mb-8",
          "bg-gradient-to-br from-red-600 via-orange-500 to-amber-500",
          "px-6 py-10 sm:px-10 sm:py-14",
        )}
      >
        {/* Background decorative flames */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-yellow-300 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-red-800 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <Flame className="h-7 w-7 text-white" />
            </div>
            <Badge
              variant="warning"
              size="md"
              className="bg-white/20 backdrop-blur-sm text-white animate-pulse"
            >
              Limited Time
            </Badge>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-3 drop-shadow-lg">
            Clearance Sale
          </h1>
          <p className="text-lg sm:text-xl text-white/90 font-medium mb-4">
            Last chance to grab these deals before they&apos;re gone!
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <Tag className="h-4 w-4" />
              {clearanceProducts.length} deals
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {inStockCount} still available
            </span>
            {soldOutCount > 0 && (
              <span className="inline-flex items-center gap-1.5 opacity-60">
                {soldOutCount} sold out
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── Product Grid ─────────────────────────────────────────── */}
      {clearanceProducts.length > 0 ? (
        <ProductGrid>
          {clearanceProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      ) : (
        <div className="py-20 text-center max-w-md mx-auto">
          <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-dark-surface flex items-center justify-center mx-auto mb-6">
            <Flame className="h-12 w-12 text-gray-300 dark:text-gray-600" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            No Clearance Deals Right Now
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Check back soon — new clearance deals drop regularly!
          </p>
        </div>
      )}
    </div>
  );
}
