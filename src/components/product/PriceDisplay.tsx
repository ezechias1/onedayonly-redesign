import { formatPrice, cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface PriceDisplayProps {
  /** Sale price in ZAR cents */
  price: number;
  /** Original (RRP) price in ZAR cents */
  originalPrice: number;
  /** Show "From" prefix for variant pricing */
  showFrom?: boolean;
  /** Size preset */
  size?: "sm" | "md" | "lg";
  className?: string;
}

// ---------------------------------------------------------------------------
// Size presets
// ---------------------------------------------------------------------------

const sizeStyles = {
  sm: {
    sale: "text-sm font-bold",
    original: "text-xs",
  },
  md: {
    sale: "text-base font-bold",
    original: "text-sm",
  },
  lg: {
    sale: "text-xl font-extrabold",
    original: "text-base",
  },
} as const;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Price display showing the sale price in bold brand-red and the original
 * price with a strikethrough. Optionally shows a "From" prefix when the
 * product has variant-level pricing.
 */
export function PriceDisplay({
  price,
  originalPrice,
  showFrom = false,
  size = "sm",
  className,
}: PriceDisplayProps) {
  const styles = sizeStyles[size];
  const hasDiscount = originalPrice > price;

  return (
    <div className={cn("flex items-baseline gap-2 flex-wrap", className)}>
      <span className={cn(styles.sale, "text-brand-red")}>
        {showFrom && (
          <span className="text-xs font-normal text-gray-500 mr-1">From</span>
        )}
        {formatPrice(price)}
      </span>
      {hasDiscount && (
        <span
          className={cn(
            styles.original,
            "text-gray-400 line-through decoration-gray-300"
          )}
        >
          {formatPrice(originalPrice)}
        </span>
      )}
    </div>
  );
}

export default PriceDisplay;
