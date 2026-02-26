import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/Skeleton";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ProductCardSkeletonProps {
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Skeleton loading state that matches the ProductCard layout.
 * Shows placeholder shimmer for image, brand, name, and price.
 */
export function ProductCardSkeleton({ className }: ProductCardSkeletonProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-card overflow-hidden",
        "bg-white dark:bg-dark-surface shadow-sm",
        className
      )}
      role="status"
      aria-label="Loading product"
    >
      {/* Image placeholder */}
      <Skeleton variant="rectangular" className="aspect-square w-full !h-auto !rounded-none" />

      {/* Info section */}
      <div className="flex flex-col gap-2 p-3">
        {/* Brand */}
        <Skeleton variant="text" width="40%" height={10} />

        {/* Product name (two lines) */}
        <Skeleton variant="text" width="90%" height={14} />
        <Skeleton variant="text" width="65%" height={14} />

        {/* Price row */}
        <div className="flex items-baseline gap-2 mt-1">
          <Skeleton variant="text" width={60} height={16} />
          <Skeleton variant="text" width={50} height={12} />
        </div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default ProductCardSkeleton;
