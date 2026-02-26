"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Fuse from "fuse.js";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Search, TrendingUp, X } from "lucide-react";

import { useUIStore } from "@/store/ui-store";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const TRENDING_SEARCHES = [
  "headphones",
  "watch",
  "sneakers",
  "tablet",
  "creatine",
];

const RECENT_SEARCHES_KEY = "odo-recent-searches";
const MAX_RECENT_SEARCHES = 5;
const DEBOUNCE_MS = 300;

// ---------------------------------------------------------------------------
// Fuse.js instance (created once)
// ---------------------------------------------------------------------------

const fuse = new Fuse(products, {
  keys: [
    { name: "name", weight: 0.4 },
    { name: "brand.name", weight: 0.3 },
    { name: "shortName", weight: 0.3 },
  ],
  threshold: 0.4,
  includeScore: true,
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getRecentSearches(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(RECENT_SEARCHES_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function saveRecentSearch(query: string) {
  if (typeof window === "undefined" || !query.trim()) return;
  try {
    const existing = getRecentSearches();
    const filtered = existing.filter(
      (s) => s.toLowerCase() !== query.toLowerCase(),
    );
    const updated = [query, ...filtered].slice(0, MAX_RECENT_SEARCHES);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
  } catch {
    // localStorage may be full or unavailable
  }
}

function getDefaultImage(product: Product): string {
  const defaultImg = product.images.find((img) => img.isDefault);
  return defaultImg?.url ?? product.images[0]?.url ?? "";
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function SearchModal() {
  const router = useRouter();
  const isSearchOpen = useUIStore((s) => s.isSearchOpen);
  const closeSearch = useUIStore((s) => s.closeSearch);

  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query]);

  // Load recent searches when opening
  useEffect(() => {
    if (isSearchOpen) {
      setRecentSearches(getRecentSearches());
    }
  }, [isSearchOpen]);

  // Auto-focus input
  useEffect(() => {
    if (isSearchOpen) {
      // Small delay to ensure the element is mounted
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isSearchOpen]);

  // Reset query on close
  useEffect(() => {
    if (!isSearchOpen) {
      setQuery("");
      setDebouncedQuery("");
    }
  }, [isSearchOpen]);

  // Escape key handler
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isSearchOpen) {
        closeSearch();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, closeSearch]);

  // Search results
  const results = useMemo<Product[]>(() => {
    if (!debouncedQuery.trim()) return [];
    return fuse
      .search(debouncedQuery, { limit: 8 })
      .map((result) => result.item);
  }, [debouncedQuery]);

  const handleSubmit = useCallback(
    (searchQuery?: string) => {
      const q = (searchQuery ?? query).trim();
      if (!q) return;
      saveRecentSearch(q);
      closeSearch();
      router.push(`/search?q=${encodeURIComponent(q)}`);
    },
    [query, closeSearch, router],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleTrendingClick = (term: string) => {
    setQuery(term);
    handleSubmit(term);
  };

  const handleRecentClick = (term: string) => {
    setQuery(term);
    handleSubmit(term);
  };

  const clearRecentSearches = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(RECENT_SEARCHES_KEY);
      setRecentSearches([]);
    }
  };

  const showSuggestions = !debouncedQuery.trim();

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          className="fixed inset-0 z-[60] bg-white dark:bg-dark-bg overflow-y-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {/* Search Header */}
          <div className="sticky top-0 z-10 bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-dark-border">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="flex items-center gap-3 py-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search deals, brands, products..."
                    className={cn(
                      "w-full h-12 pl-12 pr-10 rounded-pill",
                      "bg-gray-100 dark:bg-dark-surface",
                      "border border-gray-200 dark:border-dark-border",
                      "text-base text-gray-900 dark:text-gray-100",
                      "placeholder:text-gray-400",
                      "focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red",
                      "transition-all duration-200",
                    )}
                  />
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-border transition-colors"
                      aria-label="Clear search"
                    >
                      <X className="h-4 w-4 text-gray-400" />
                    </button>
                  )}
                </div>
                <button
                  onClick={closeSearch}
                  className={cn(
                    "shrink-0 px-4 py-2 text-sm font-medium",
                    "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                    "transition-colors",
                  )}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 max-w-4xl py-6">
            {showSuggestions ? (
              /* Suggestions: Recent + Trending */
              <div className="space-y-8">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <section>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Recent Searches
                      </h3>
                      <button
                        onClick={clearRecentSearches}
                        className="text-xs text-gray-400 hover:text-brand-red transition-colors"
                      >
                        Clear all
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((term) => (
                        <button
                          key={term}
                          onClick={() => handleRecentClick(term)}
                          className={cn(
                            "inline-flex items-center gap-1.5 px-4 py-2 rounded-pill",
                            "bg-gray-100 dark:bg-dark-surface",
                            "text-sm text-gray-700 dark:text-gray-300",
                            "hover:bg-gray-200 dark:hover:bg-dark-border",
                            "transition-colors",
                          )}
                        >
                          <Clock className="h-3.5 w-3.5 text-gray-400" />
                          {term}
                        </button>
                      ))}
                    </div>
                  </section>
                )}

                {/* Trending Searches */}
                <section>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Trending Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {TRENDING_SEARCHES.map((term) => (
                      <button
                        key={term}
                        onClick={() => handleTrendingClick(term)}
                        className={cn(
                          "inline-flex items-center gap-1.5 px-4 py-2 rounded-pill",
                          "bg-red-50 dark:bg-red-900/20",
                          "text-sm text-brand-red",
                          "hover:bg-red-100 dark:hover:bg-red-900/30",
                          "transition-colors",
                        )}
                      >
                        <TrendingUp className="h-3.5 w-3.5" />
                        {term}
                      </button>
                    ))}
                  </div>
                </section>
              </div>
            ) : results.length > 0 ? (
              /* Search Results */
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {results.length} result{results.length !== 1 ? "s" : ""} for
                  &ldquo;{debouncedQuery}&rdquo;
                </p>
                <div className="space-y-2">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      onClick={() => {
                        saveRecentSearch(query.trim());
                        closeSearch();
                      }}
                      className={cn(
                        "flex items-center gap-4 p-3 rounded-card",
                        "hover:bg-gray-50 dark:hover:bg-dark-surface",
                        "transition-colors group",
                      )}
                    >
                      {/* Thumbnail */}
                      <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-dark-surface">
                        <Image
                          src={getDefaultImage(product)}
                          alt={product.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                          {product.brand.name}
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate group-hover:text-brand-red transition-colors">
                          {product.shortName}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-sm font-bold text-brand-red">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-xs text-gray-400 line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Arrow */}
                      <Search className="h-4 w-4 text-gray-300 shrink-0 group-hover:text-brand-red transition-colors" />
                    </Link>
                  ))}
                </div>

                {/* View all results link */}
                <button
                  onClick={() => handleSubmit()}
                  className={cn(
                    "mt-4 w-full py-3 rounded-pill text-center",
                    "text-sm font-semibold text-brand-red",
                    "bg-red-50 dark:bg-red-900/20",
                    "hover:bg-red-100 dark:hover:bg-red-900/30",
                    "transition-colors",
                  )}
                >
                  View all results for &ldquo;{debouncedQuery}&rdquo;
                </button>
              </div>
            ) : (
              /* No Results */
              <div className="text-center py-16">
                <Search className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  No deals found for &ldquo;{debouncedQuery}&rdquo;
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Try a different search term or browse our categories
                </p>
                <Link
                  href="/"
                  onClick={closeSearch}
                  className={cn(
                    "inline-flex items-center px-6 py-2.5 rounded-pill",
                    "bg-brand-red text-white text-sm font-semibold",
                    "hover:bg-red-700 transition-colors",
                  )}
                >
                  Browse Categories
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchModal;
