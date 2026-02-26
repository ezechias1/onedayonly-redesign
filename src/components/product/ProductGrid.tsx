import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ProductGridProps {
  children: React.ReactNode;
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Responsive grid wrapper for product cards.
 *
 * Breakpoints:
 * - Mobile:  2 columns
 * - md:      3 columns
 * - lg:      4 columns
 * - xl:      5 columns
 */
export function ProductGrid({ children, className }: ProductGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export default ProductGrid;
