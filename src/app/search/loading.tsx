import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Skeleton helpers
// ---------------------------------------------------------------------------

function SkeletonBox({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-gray-200 dark:bg-dark-border",
        className,
      )}
    />
  );
}

function ProductCardSkeleton() {
  return (
    <div className="rounded-card overflow-hidden border border-gray-100 dark:border-dark-border">
      {/* Image skeleton */}
      <SkeletonBox className="aspect-square w-full rounded-none" />
      {/* Info skeleton */}
      <div className="p-3 space-y-2">
        <SkeletonBox className="h-3 w-16" />
        <SkeletonBox className="h-4 w-full" />
        <div className="flex items-center gap-2">
          <SkeletonBox className="h-5 w-16" />
          <SkeletonBox className="h-3 w-12" />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Loading page
// ---------------------------------------------------------------------------

export default function SearchLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="space-y-2">
          <SkeletonBox className="h-8 w-64" />
          <SkeletonBox className="h-4 w-48" />
        </div>
        <SkeletonBox className="h-10 w-44 rounded-pill" />
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
