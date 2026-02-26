"use client";

import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SortOption =
  | "popular"
  | "price-asc"
  | "price-desc"
  | "discount"
  | "newest";

export interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
  className?: string;
}

const OPTIONS: { value: SortOption; label: string }[] = [
  { value: "popular", label: "Most Popular" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "discount", label: "Biggest Discount" },
  { value: "newest", label: "Newest" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Sort dropdown for category listing pages.
 *
 * Renders a styled `<select>` element with an ArrowUpDown icon prefix.
 */
export function SortDropdown({ value, onChange, className }: SortDropdownProps) {
  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <ArrowUpDown className="pointer-events-none absolute left-3 h-4 w-4 text-gray-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className={cn(
          "appearance-none rounded-pill border border-gray-200 bg-white py-2 pl-9 pr-8",
          "text-sm font-medium text-gray-700",
          "transition-colors hover:border-gray-300 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20",
          "dark:border-dark-border dark:bg-dark-surface dark:text-gray-300 dark:hover:border-gray-600",
          "cursor-pointer",
        )}
      >
        {OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortDropdown;
