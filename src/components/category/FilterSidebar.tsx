"use client";

import { useState, useCallback } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  DrawerRoot,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/Drawer";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface FilterValues {
  priceMin: number;
  priceMax: number;
  brands: string[];
  minDiscount: number;
  inStockOnly: boolean;
}

export interface FilterSidebarProps {
  /** All brands available in the current category (name + product count) */
  availableBrands: { name: string; count: number }[];
  onFilterChange: (filters: FilterValues) => void;
  className?: string;
}

const PRICE_MIN = 0;
const PRICE_MAX = 1_500_000; // R15,000 in cents
const DISCOUNT_OPTIONS = [20, 40, 60] as const;

// ---------------------------------------------------------------------------
// Default filters
// ---------------------------------------------------------------------------

function defaultFilters(): FilterValues {
  return {
    priceMin: PRICE_MIN,
    priceMax: PRICE_MAX,
    brands: [],
    minDiscount: 0,
    inStockOnly: false,
  };
}

// ---------------------------------------------------------------------------
// Inner filter form (shared between desktop sidebar & mobile drawer)
// ---------------------------------------------------------------------------

function FilterForm({
  filters,
  availableBrands,
  onChange,
  onClear,
}: {
  filters: FilterValues;
  availableBrands: { name: string; count: number }[];
  onChange: (next: FilterValues) => void;
  onClear: () => void;
}) {
  const hasActiveFilters =
    filters.priceMin > PRICE_MIN ||
    filters.priceMax < PRICE_MAX ||
    filters.brands.length > 0 ||
    filters.minDiscount > 0 ||
    filters.inStockOnly;

  const toggleBrand = (brand: string) => {
    const next = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    onChange({ ...filters, brands: next });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* ── Price Range ──────────────────────────────────── */}
      <fieldset>
        <legend className="font-heading text-sm font-semibold text-gray-900 dark:text-gray-100">
          Price Range
        </legend>
        <p className="mt-1 text-xs text-brand-grey dark:text-gray-400">
          {formatPrice(filters.priceMin)} &ndash; {formatPrice(filters.priceMax)}
        </p>

        <div className="mt-3 flex flex-col gap-3">
          <label className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
            Min
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={10000}
              value={filters.priceMin}
              onChange={(e) =>
                onChange({
                  ...filters,
                  priceMin: Math.min(Number(e.target.value), filters.priceMax - 10000),
                })
              }
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-brand-red dark:bg-dark-border"
            />
          </label>

          <label className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
            Max
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={10000}
              value={filters.priceMax}
              onChange={(e) =>
                onChange({
                  ...filters,
                  priceMax: Math.max(Number(e.target.value), filters.priceMin + 10000),
                })
              }
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-brand-red dark:bg-dark-border"
            />
          </label>
        </div>
      </fieldset>

      {/* ── Brand Filter ─────────────────────────────────── */}
      {availableBrands.length > 0 && (
        <fieldset>
          <legend className="font-heading text-sm font-semibold text-gray-900 dark:text-gray-100">
            Brand
          </legend>

          <div className="mt-2 flex max-h-48 flex-col gap-1.5 overflow-y-auto">
            {availableBrands.map((brand, brandIndex) => (
              <label
                key={`${brandIndex}-${brand.name}`}
                className="flex cursor-pointer items-center gap-2 rounded-md px-1.5 py-1 text-sm hover:bg-gray-50 dark:hover:bg-dark-surface"
              >
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand.name)}
                  onChange={() => toggleBrand(brand.name)}
                  className="h-4 w-4 rounded border-gray-300 text-brand-red accent-brand-red focus:ring-brand-red"
                />
                <span className="flex-1 text-gray-700 dark:text-gray-300">
                  {brand.name}
                </span>
                <span className="text-xs text-gray-400">({brand.count})</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {/* ── Discount Filter ──────────────────────────────── */}
      <fieldset>
        <legend className="font-heading text-sm font-semibold text-gray-900 dark:text-gray-100">
          Discount
        </legend>

        <div className="mt-2 flex flex-wrap gap-2">
          {DISCOUNT_OPTIONS.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() =>
                onChange({
                  ...filters,
                  minDiscount: filters.minDiscount === d ? 0 : d,
                })
              }
              className={cn(
                "rounded-pill px-3 py-1.5 text-xs font-semibold transition-colors",
                filters.minDiscount === d
                  ? "bg-brand-red text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-dark-surface dark:text-gray-300 dark:hover:bg-dark-border",
              )}
            >
              {d}%+
            </button>
          ))}
        </div>
      </fieldset>

      {/* ── Availability ─────────────────────────────────── */}
      <fieldset>
        <label className="flex cursor-pointer items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) =>
              onChange({ ...filters, inStockOnly: e.target.checked })
            }
            className="h-4 w-4 rounded border-gray-300 text-brand-red accent-brand-red focus:ring-brand-red"
          />
          <span className="text-gray-700 dark:text-gray-300">In Stock Only</span>
        </label>
      </fieldset>

      {/* ── Clear All ────────────────────────────────────── */}
      {hasActiveFilters && (
        <Button variant="ghost" size="sm" onClick={onClear} className="self-start">
          <X className="mr-1 h-3.5 w-3.5" />
          Clear All Filters
        </Button>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

/**
 * Filter sidebar for category pages.
 *
 * - Desktop: rendered inline as a sticky sidebar (~250 px wide)
 * - Mobile: rendered inside a Drawer triggered by a "Filters" button
 */
export function FilterSidebar({
  availableBrands,
  onFilterChange,
  className,
}: FilterSidebarProps) {
  const [filters, setFilters] = useState<FilterValues>(defaultFilters);

  const handleChange = useCallback(
    (next: FilterValues) => {
      setFilters(next);
      onFilterChange(next);
    },
    [onFilterChange],
  );

  const handleClear = useCallback(() => {
    const defaults = defaultFilters();
    setFilters(defaults);
    onFilterChange(defaults);
  }, [onFilterChange]);

  return (
    <>
      {/* ── Desktop sidebar ────────────────────────────── */}
      <aside
        className={cn(
          "hidden lg:block",
          "sticky top-24 w-[250px] shrink-0 self-start",
          "rounded-card border border-gray-100 bg-white p-5 dark:border-dark-border dark:bg-dark-surface",
          className,
        )}
      >
        <h2 className="mb-4 font-heading text-base font-bold text-gray-900 dark:text-white">
          Filters
        </h2>
        <FilterForm
          filters={filters}
          availableBrands={availableBrands}
          onChange={handleChange}
          onClear={handleClear}
        />
      </aside>

      {/* ── Mobile trigger + drawer ────────────────────── */}
      <div className="lg:hidden">
        <DrawerRoot>
          <DrawerTrigger asChild>
            <Button variant="outline" size="sm">
              <SlidersHorizontal className="mr-1.5 h-4 w-4" />
              Filters
            </Button>
          </DrawerTrigger>

          <DrawerContent side="left" width="w-80">
            <div className="flex items-center justify-between pb-4">
              <DrawerTitle>Filters</DrawerTitle>
              <DrawerClose
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-full",
                  "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300",
                  "hover:bg-gray-100 dark:hover:bg-dark-border",
                  "transition-colors",
                )}
                aria-label="Close filters"
              >
                <X className="h-4 w-4" />
              </DrawerClose>
            </div>

            <FilterForm
              filters={filters}
              availableBrands={availableBrands}
              onChange={handleChange}
              onClear={handleClear}
            />
          </DrawerContent>
        </DrawerRoot>
      </div>
    </>
  );
}

export default FilterSidebar;
