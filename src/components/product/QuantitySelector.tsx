"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface QuantitySelectorProps {
  value: number;
  onChange: (n: number) => void;
  max?: number;
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Quantity stepper with minus/plus buttons and a numeric display.
 *
 * - Rounded pill shape
 * - Disables minus at 1, plus at `max` (default 10)
 */
export function QuantitySelector({
  value,
  onChange,
  max = 10,
  className,
}: QuantitySelectorProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-pill border border-gray-200 dark:border-dark-border",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        disabled={value <= 1}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-l-pill transition-colors",
          "text-gray-600 hover:bg-gray-50 active:bg-gray-100",
          "dark:text-gray-400 dark:hover:bg-dark-surface dark:active:bg-dark-border",
          "disabled:cursor-not-allowed disabled:opacity-30",
        )}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>

      <span
        className="flex h-10 w-10 items-center justify-center text-sm font-semibold text-gray-900 dark:text-gray-100"
        aria-live="polite"
        aria-label={`Quantity: ${value}`}
      >
        {value}
      </span>

      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-r-pill transition-colors",
          "text-gray-600 hover:bg-gray-50 active:bg-gray-100",
          "dark:text-gray-400 dark:hover:bg-dark-surface dark:active:bg-dark-border",
          "disabled:cursor-not-allowed disabled:opacity-30",
        )}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

export default QuantitySelector;
