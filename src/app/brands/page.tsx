"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import { Search, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { brands } from "@/data/brands";
import { products } from "@/data/products";

// ---------------------------------------------------------------------------
// Metadata (exported via head.tsx pattern or set in layout – for client
// components we set the document title via a useEffect-free approach)
// ---------------------------------------------------------------------------
// Note: Since this is 'use client', metadata is set via the generateMetadata
// in the nearest server layout or we rely on the root layout template.
// We export metadata from a separate file if needed.

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Count how many products belong to a given brand */
function getBrandDealCount(brandSlug: string): number {
  return products.filter((p) => p.brand.slug === brandSlug).length;
}

/** Get all unique first letters from brand names, sorted */
function getAlphabet(brandList: typeof brands): string[] {
  const letters = new Set(
    brandList.map((b) => {
      const first = b.name.charAt(0).toUpperCase();
      // Group numbers under "#"
      return /[A-Z]/.test(first) ? first : "#";
    })
  );
  return Array.from(letters).sort((a, b) => {
    if (a === "#") return -1;
    if (b === "#") return 1;
    return a.localeCompare(b);
  });
}

/** Group brands by first letter */
function groupBrands(
  brandList: typeof brands
): Record<string, typeof brands> {
  const groups: Record<string, typeof brands> = {};
  for (const brand of brandList) {
    const first = brand.name.charAt(0).toUpperCase();
    const key = /[A-Z]/.test(first) ? first : "#";
    if (!groups[key]) groups[key] = [];
    groups[key].push(brand);
  }
  // Sort brands within each group
  for (const key of Object.keys(groups)) {
    groups[key].sort((a, b) => a.name.localeCompare(b.name));
  }
  return groups;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function BrandsPage() {
  const [search, setSearch] = useState("");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Filter brands by search query
  const filteredBrands = useMemo(() => {
    if (!search.trim()) return brands;
    const query = search.toLowerCase().trim();
    return brands.filter((b) => b.name.toLowerCase().includes(query));
  }, [search]);

  const grouped = useMemo(() => groupBrands(filteredBrands), [filteredBrands]);
  const alphabet = useMemo(() => getAlphabet(filteredBrands), [filteredBrands]);

  // Full alphabet for the letter nav (A-Z + #)
  const fullAlphabet = useMemo(() => {
    const letters = ["#"];
    for (let i = 65; i <= 90; i++) {
      letters.push(String.fromCharCode(i));
    }
    return letters;
  }, []);

  const scrollToLetter = (letter: string) => {
    const el = sectionRefs.current[letter];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Brands" }]} />

      {/* Header */}
      <div className="mb-6">
        <h1 className="font-heading text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Our Brands
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Browse all {brands.length} brands we partner with for daily deals.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search brands..."
          className={cn(
            "w-full rounded-xl border border-gray-200 dark:border-dark-border",
            "bg-white dark:bg-dark-surface pl-10 pr-10 py-3 text-sm",
            "text-gray-900 dark:text-white placeholder-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red",
            "transition-colors"
          )}
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="flex gap-6">
        {/* A-Z Letter Navigation */}
        <nav className="hidden sm:flex sticky top-24 self-start flex-col gap-0.5">
          {fullAlphabet.map((letter) => {
            const hasEntries = alphabet.includes(letter);
            return (
              <button
                key={letter}
                onClick={() => hasEntries && scrollToLetter(letter)}
                disabled={!hasEntries}
                className={cn(
                  "w-8 h-7 flex items-center justify-center rounded text-xs font-semibold transition-colors",
                  hasEntries
                    ? "text-gray-700 dark:text-gray-300 hover:bg-brand-red hover:text-white"
                    : "text-gray-300 dark:text-gray-600 cursor-not-allowed"
                )}
              >
                {letter}
              </button>
            );
          })}
        </nav>

        {/* Brand grid */}
        <div className="flex-1 min-w-0">
          {filteredBrands.length === 0 ? (
            <div className="text-center py-16">
              <Search className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600 mb-4" />
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                No brands found matching &ldquo;{search}&rdquo;
              </p>
              <button
                onClick={() => setSearch("")}
                className="mt-2 text-brand-red hover:underline text-sm font-medium"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {alphabet.map((letter) => {
                const group = grouped[letter];
                if (!group || group.length === 0) return null;

                return (
                  <div
                    key={letter}
                    ref={(el) => { sectionRefs.current[letter] = el; }}
                    className="scroll-mt-28"
                  >
                    {/* Letter heading */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-red text-white font-heading font-bold text-lg">
                        {letter}
                      </span>
                      <div className="flex-1 h-px bg-gray-200 dark:bg-dark-border" />
                      <span className="text-xs text-gray-400">
                        {group.length} brand{group.length !== 1 ? "s" : ""}
                      </span>
                    </div>

                    {/* Brand cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {group.map((brand) => {
                        const dealCount = getBrandDealCount(brand.slug);
                        return (
                          <Link
                            key={brand.id}
                            href={`/brands/${brand.slug}`}
                            className={cn(
                              "group flex items-center gap-4 rounded-xl border border-gray-200 dark:border-dark-border",
                              "bg-white dark:bg-dark-surface p-4",
                              "hover:border-brand-red/30 hover:shadow-md",
                              "transition-all duration-200"
                            )}
                          >
                            {/* Brand logo placeholder */}
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-dark-bg overflow-hidden">
                              {brand.logo ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img
                                  src={brand.logo}
                                  alt={brand.name}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <ShoppingBag className="h-5 w-5 text-gray-400" />
                              )}
                            </div>

                            <div className="min-w-0 flex-1">
                              <p className="font-heading font-semibold text-gray-900 dark:text-white text-sm truncate group-hover:text-brand-red transition-colors">
                                {brand.name}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                {dealCount} {dealCount === 1 ? "deal" : "deals"}{" "}
                                available
                              </p>
                            </div>

                            {/* Arrow */}
                            <svg
                              className="h-4 w-4 shrink-0 text-gray-300 group-hover:text-brand-red transition-colors"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
