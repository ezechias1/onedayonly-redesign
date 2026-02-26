import { Badge } from "@/components/ui/Badge";
import { formatDiscount } from "@/lib/utils";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface DiscountBadgeProps {
  /** Discount percentage as a whole number (e.g. 81 for 81% off) */
  discount: number;
  /** Optional size override */
  size?: "sm" | "md";
  /** Pulse animation for extra urgency */
  pulse?: boolean;
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Compact badge showing the discount percentage in "-81%" format.
 * Uses the Badge component with the `discount` variant (bold red background).
 */
export function DiscountBadge({
  discount,
  size = "sm",
  pulse = false,
  className,
}: DiscountBadgeProps) {
  if (discount <= 0) return null;

  return (
    <Badge
      variant="discount"
      size={size}
      pulse={pulse}
      className={cn("shadow-sm", className)}
    >
      {formatDiscount(discount)}
    </Badge>
  );
}

export default DiscountBadge;
