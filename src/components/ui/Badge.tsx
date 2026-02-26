"use client";

import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Variant & Size Maps
// ---------------------------------------------------------------------------

const variantStyles = {
  discount:
    "bg-brand-red text-white uppercase font-bold tracking-wide",
  info:
    "bg-brand-blue text-white font-semibold",
  success:
    "bg-green-500 text-white font-semibold",
  warning:
    "bg-amber-500 text-white font-semibold uppercase tracking-wide",
  "sold-out":
    "bg-gray-500 text-white uppercase font-bold tracking-wide",
} as const;

const sizeStyles = {
  sm: "px-2 py-0.5 text-[10px] leading-tight",
  md: "px-3 py-1 text-xs leading-tight",
} as const;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type BadgeVariant = keyof typeof variantStyles;
export type BadgeSize = keyof typeof sizeStyles;

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual style variant */
  variant?: BadgeVariant;
  /** Size preset */
  size?: BadgeSize;
  /** Optional pulse animation (useful for discount badges) */
  pulse?: boolean;
  children: React.ReactNode;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Badge component for discount tags, labels, and status indicators.
 *
 * Variants:
 * - `discount` - Bold red badge for price reductions (uppercase)
 * - `info` - Blue informational badge
 * - `success` - Green success badge
 * - `warning` - Amber warning badge (uppercase)
 * - `sold-out` - Grey sold-out badge (uppercase)
 */
export function Badge({
  variant = "discount",
  size = "md",
  pulse = false,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        // Base
        "inline-flex items-center justify-center rounded-md whitespace-nowrap",
        // Variant & size
        variantStyles[variant],
        sizeStyles[size],
        // Optional pulse
        pulse && "badge-pulse",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

export default Badge;
