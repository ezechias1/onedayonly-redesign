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

export default Skeleton;
