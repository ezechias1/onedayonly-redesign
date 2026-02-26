import { Skeleton } from "@/components/ui/Skeleton";
import { ProductCardSkeleton } from "@/components/category/DealSection";

// ---------------------------------------------------------------------------
// Category Page Loading Skeleton
// ---------------------------------------------------------------------------

export default function CategoryLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb skeleton */}
      <div className="py-3">
        <Skeleton variant="text" width="180px" />
      </div>

      {/* Category header skeleton */}
      <Skeleton variant="rectangular" height={160} className="rounded-card" />

      {/* Filter bar skeleton */}
      <div className="mt-6 flex items-center justify-between">
        <Skeleton variant="text" width="100px" height={36} />
        <Skeleton variant="text" width="160px" height={36} />
      </div>

      {/* Content skeleton */}
      <div className="mt-6 flex gap-6">
        {/* Sidebar skeleton (desktop only) */}
        <div className="hidden w-[250px] shrink-0 lg:block">
          <Skeleton variant="rectangular" height={400} className="rounded-card" />
        </div>

        {/* Product grid skeleton */}
        <div className="flex-1 space-y-8">
          {/* Section hero skeleton */}
          <Skeleton
            variant="rectangular"
            height={200}
            className="rounded-card"
          />

          {/* Product cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
