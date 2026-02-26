"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Fuse from "fuse.js";
import { Search, SlidersHorizontal } from "lucide-react";

import { products } from "@/data/products";
import { formatPrice, formatDiscount } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

// ---------------------------------------------------------------------------
// Fuse.js instance
// ---------------------------------------------------------------------------

const fuse = new Fuse(products, {
  keys: [
    { name: "name", weight: 0.35 },
    { name: "shortName", weight: 0.25 },
    { name: "brand.name", weight: 0.25 },
    { name: "description", weight: 0.15 },
  ],
  threshold: 0.4,
  includeScore: true,
});

// ---------------------------------------------------------------------------
// Sort options
// ---------------------------------------------------------------------------

type SortOption = "relevance" | "price-asc" | "price-desc" | "discount";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "relevance", label: "Most Relevant" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "discount", label: "Biggest Discount" },
];

function sortProducts(items: Product[], sort: SortOption): Product[] {
  const sorted = [...items];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "discount":
      return sorted.sort((a, b) => b.discountPercentage - a.discountPercentage);
    default:
      return sorted; // relevance order from fuse.js
  }
}

function getDefaultImage(product: Product): string {
  const defaultImg = product.images.find((img) => img.isDefault);
  return defaultImg?.url ?? product.images[0]?.url ?? "";
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const [sortBy, setSortBy] = useState<SortOption>("relevance");

  const results = useMemo<Product[]>(() => {
    if (!query.trim()) return [];
    return fuse.search(query, { limit: 50 }).map((result) => result.item);
  }, [query]);

  const sortedResults = useMemo(
    () => sortProducts(results, sortBy),
    [results, sortBy],
  );

  // Empty state: no query
  if (!query.trim()) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-2xl">
        <Search className="mx-auto h-16 w-16 text-gray-300 dark:text-gray-600 mb-6" />
        <h1 className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Start Searching for Deals
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Type in the search bar above to find amazing deals on your favourite
          brands.
        </p>
        <Link
          href="/"
          className={cn(
            "inline-flex items-center px-8 py-3 rounded-pill",
            "bg-brand-red text-white font-semibold",
            "hover:bg-red-700 transition-colors",
          )}
        >
          Browse All Deals
        </Link>
      </div>
    );
  }

  // Empty state: no results
  if (sortedResults.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-2xl">
        <Search className="mx-auto h-16 w-16 text-gray-300 dark:text-gray-600 mb-6" />
        <h1 className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          No Deals Found
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          We couldn&apos;t find any deals matching &ldquo;{query}&rdquo;. Try a
          different search term or browse our categories.
        </p>
        <Link
          href="/"
          className={cn(
            "inline-flex items-center px-8 py-3 rounded-pill",
            "bg-brand-red text-white font-semibold",
            "hover:bg-red-700 transition-colors",
          )}
        >
          Browse Categories
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100">
            {sortedResults.length} result
            {sortedResults.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Showing today&apos;s deals matching your search
          </p>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className={cn(
              "h-10 px-4 pr-8 rounded-pill text-sm",
              "bg-white dark:bg-dark-surface",
              "border border-gray-200 dark:border-dark-border",
              "text-gray-700 dark:text-gray-300",
              "focus:outline-none focus:ring-2 focus:ring-brand-red/50",
              "cursor-pointer appearance-none",
            )}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
            }}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedResults.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className={cn(
              "group rounded-card overflow-hidden",
              "bg-white dark:bg-dark-surface",
              "border border-gray-100 dark:border-dark-border",
              "hover:shadow-lg hover:-translate-y-0.5",
              "transition-all duration-200",
            )}
          >
            {/* Image */}
            <div className="relative aspect-square bg-gray-100 dark:bg-dark-border overflow-hidden">
              <Image
                src={getDefaultImage(product)}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Discount Badge */}
              {product.discountPercentage > 0 && (
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-brand-red text-white text-xs font-bold">
                  {formatDiscount(product.discountPercentage)}
                </span>
              )}
              {product.isSoldOut && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-bold text-sm uppercase tracking-wider">
                    Sold Out
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-3">
              <p className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                {product.brand.name}
              </p>
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate mt-0.5 group-hover:text-brand-red transition-colors">
                {product.shortName}
              </h3>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-base font-bold text-brand-red">
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
        ))}
      </div>
    </div>
  );
}
