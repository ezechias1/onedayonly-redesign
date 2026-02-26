import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SkeletonVariant = "text" | "circular" | "rectangular" | "card";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shape variant */
  variant?: SkeletonVariant;
  /** Width (CSS value). Defaults differ per variant. */
  width?: string | number;
  /** Height (CSS value). Defaults differ per variant. */
  height?: string | number;
  /** Number of text lines to render (only for variant="text") */
  lines?: number;
}

// ---------------------------------------------------------------------------
// Variant-specific classes
// ---------------------------------------------------------------------------

const variantClasses: Record<SkeletonVariant, string> = {
  text: "rounded-md h-4 w-full",
  circular: "rounded-full w-12 h-12",
  rectangular: "rounded-md w-full h-32",
  card: "rounded-card w-full h-64",
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Skeleton loading placeholder with shimmer animation.
 *
 * Uses the `.skeleton` class from globals.css for a smooth shimmer gradient.
 * Falls back to `animate-pulse` with bg-gray-200 when the shimmer class is
 * unavailable.
 *
 * Variants:
 * - `text` - Single line placeholder (stacks with `lines` prop)
 * - `circular` - Avatar / icon placeholder
 * - `rectangular` - Image / banner placeholder
 * - `card` - Full card placeholder with card border-radius
 */
export function Skeleton({
  variant = "rectangular",
  width,
  height,
  lines = 1,
  className,
  style,
  ...rest
}: SkeletonProps) {
  const baseClasses = cn(
    "skeleton",
    "bg-gray-200 dark:bg-dark-border",
    variantClasses[variant],
    className,
  );

  const inlineStyle: React.CSSProperties = {
    ...style,
    ...(width != null ? { width: typeof width === "number" ? `${width}px` : width } : {}),
    ...(height != null ? { height: typeof height === "number" ? `${height}px` : height } : {}),
  };

  // Multi-line text skeleton
  if (variant === "text" && lines > 1) {
    return (
      <div className="flex flex-col gap-2" role="status" aria-label="Loading">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              baseClasses,
              // Last line is shorter for a more natural look
              i === lines - 1 && "w-3/4",
            )}
            style={inlineStyle}
            {...rest}
          />
        ))}
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div
      className={baseClasses}
      style={inlineStyle}
      role="status"
      aria-label="Loading"
      {...rest}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ProductCardSkeleton — matches ProductCard layout
// ---------------------------------------------------------------------------

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col rounded-card overflow-hidden bg-white dark:bg-dark-surface shadow-sm" aria-hidden="true">
      <Skeleton variant="rectangular" className="aspect-square w-full rounded-none h-auto" />
      <div className="flex flex-col gap-2 p-3">
        <Skeleton variant="text" width="4rem" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="75%" />
        <div className="flex items-center justify-between mt-1">
          <Skeleton variant="text" width="5rem" height={20} />
          <Skeleton variant="text" width="3.5rem" />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ProductGridSkeleton — grid of ProductCardSkeletons
// ---------------------------------------------------------------------------

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default Skeleton;
