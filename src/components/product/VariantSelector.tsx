"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Variant } from "@/types/product";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface VariantSelectorProps {
  variants: Variant[];
  selected: string | null;
  onSelect: (id: string) => void;
  className?: string;
}

// ---------------------------------------------------------------------------
// Colour name -> approximate CSS colour mapping
// ---------------------------------------------------------------------------

const COLOUR_MAP: Record<string, string> = {
  black: "#000000",
  white: "#FFFFFF",
  "white smoke": "#F5F5F5",
  red: "#EF4444",
  blue: "#3B82F6",
  "navy blue": "#1E3A5F",
  navy: "#1E3A5F",
  green: "#22C55E",
  yellow: "#EAB308",
  orange: "#F97316",
  purple: "#A855F7",
  pink: "#EC4899",
  grey: "#9CA3AF",
  gray: "#9CA3AF",
  brown: "#92400E",
  beige: "#D2B48C",
  charcoal: "#36454F",
  silver: "#C0C0C0",
  gold: "#FFD700",
};

function getSwatchColor(name: string): string {
  const lower = name.toLowerCase();
  return COLOUR_MAP[lower] ?? "#9CA3AF";
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Visual variant picker supporting colour swatches, size pills, and dropdowns.
 *
 * - `color` type: circular swatches with check icon on selected
 * - `size` type: pill-shaped buttons
 * - `dropdown` type: styled select element
 *
 * Out-of-stock variants appear dimmed with a diagonal line.
 */
export function VariantSelector({
  variants,
  selected,
  onSelect,
  className,
}: VariantSelectorProps) {
  if (variants.length === 0) return null;

  // Group variants by optionType (they typically share a single type)
  const optionType = variants[0].optionType;
  const label = variants[0].optionLabel;

  // ---------- Color swatches ----------
  if (optionType === "color") {
    return (
      <fieldset className={cn("space-y-2", className)}>
        <legend className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}:{" "}
          <span className="font-normal text-gray-500">
            {variants.find((v) => v.id === selected)?.name ?? "Select"}
          </span>
        </legend>

        <div className="flex flex-wrap gap-2">
          {variants.map((v) => {
            const isSelected = v.id === selected;
            const color = getSwatchColor(v.name);
            const isLight =
              v.name.toLowerCase().includes("white") ||
              v.name.toLowerCase().includes("beige") ||
              v.name.toLowerCase().includes("yellow") ||
              v.name.toLowerCase().includes("gold");

            return (
              <button
                key={v.id}
                type="button"
                onClick={() => v.inStock && onSelect(v.id)}
                disabled={!v.inStock}
                title={v.name}
                className={cn(
                  "relative flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all",
                  isSelected
                    ? "border-brand-red ring-2 ring-brand-red/30"
                    : "border-gray-200 hover:border-gray-400 dark:border-dark-border",
                  !v.inStock && "cursor-not-allowed opacity-40",
                )}
                aria-label={`${v.name}${!v.inStock ? " (out of stock)" : ""}`}
              >
                <span
                  className="h-6 w-6 rounded-full"
                  style={{ backgroundColor: color }}
                />
                {isSelected && (
                  <Check
                    className={cn(
                      "absolute h-3.5 w-3.5",
                      isLight ? "text-gray-800" : "text-white",
                    )}
                  />
                )}
                {/* Out of stock diagonal line */}
                {!v.inStock && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="block h-[1px] w-full rotate-45 bg-gray-400" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </fieldset>
    );
  }

  // ---------- Size pills ----------
  if (optionType === "size") {
    return (
      <fieldset className={cn("space-y-2", className)}>
        <legend className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </legend>

        <div className="flex flex-wrap gap-2">
          {variants.map((v) => {
            const isSelected = v.id === selected;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => v.inStock && onSelect(v.id)}
                disabled={!v.inStock}
                className={cn(
                  "rounded-pill border px-4 py-1.5 text-sm font-medium transition-all",
                  isSelected
                    ? "border-brand-red bg-brand-red/5 text-brand-red"
                    : "border-gray-200 text-gray-700 hover:border-gray-400 dark:border-dark-border dark:text-gray-300",
                  !v.inStock &&
                    "cursor-not-allowed opacity-40 line-through",
                )}
                aria-label={`${v.name}${!v.inStock ? " (out of stock)" : ""}`}
              >
                {v.name}
              </button>
            );
          })}
        </div>
      </fieldset>
    );
  }

  // ---------- Dropdown ----------
  return (
    <fieldset className={cn("space-y-2", className)}>
      <legend className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </legend>

      <select
        value={selected ?? ""}
        onChange={(e) => onSelect(e.target.value)}
        className={cn(
          "w-full rounded-input border border-gray-200 bg-white px-3 py-2 text-sm",
          "text-gray-700 transition-colors",
          "focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20",
          "dark:border-dark-border dark:bg-dark-surface dark:text-gray-300",
        )}
      >
        <option value="" disabled>
          Select {label}
        </option>
        {variants.map((v) => (
          <option key={v.id} value={v.id} disabled={!v.inStock}>
            {v.name}
            {!v.inStock ? " (Out of stock)" : ""}
          </option>
        ))}
      </select>
    </fieldset>
  );
}

export default VariantSelector;
