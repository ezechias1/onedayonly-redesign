import { Skeleton } from "@/components/ui/Skeleton";

// ---------------------------------------------------------------------------
// Product Detail Loading Skeleton
// ---------------------------------------------------------------------------

export default function ProductLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb skeleton */}
      <div className="py-3">
        <Skeleton variant="text" width="250px" />
      </div>

      {/* Main content */}
      <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[55%_1fr]">
        {/* Gallery skeleton */}
        <div className="space-y-3">
          <Skeleton
            variant="rectangular"
            className="aspect-square rounded-card"
            height="auto"
          />
          <div className="flex gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                width={64}
                height={64}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Info skeleton */}
        <div className="space-y-4">
          <Skeleton variant="text" width="60px" height={24} />
          <Skeleton variant="text" width="100px" height={14} />
          <Skeleton variant="text" width="80%" height={28} />
          <Skeleton variant="text" width="60%" height={20} />

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <Skeleton variant="text" width="120px" height={36} />
            <Skeleton variant="text" width="80px" height={20} />
          </div>

          {/* Shipping note */}
          <Skeleton variant="text" width="100px" height={14} />

          {/* ETA box */}
          <Skeleton
            variant="rectangular"
            height={40}
            className="rounded-input"
          />

          {/* Variant placeholders */}
          <div className="flex gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} variant="circular" width={36} height={36} />
            ))}
          </div>

          {/* Quantity */}
          <Skeleton
            variant="rectangular"
            width={120}
            height={40}
            className="rounded-pill"
          />

          {/* CTA button */}
          <Skeleton
            variant="rectangular"
            height={56}
            className="rounded-pill"
          />

          {/* Trust indicators */}
          <div className="flex gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} variant="text" width="120px" height={14} />
            ))}
          </div>
        </div>
      </div>

      {/* Tabs skeleton */}
      <div className="mt-10 border-t border-gray-100 pt-8 dark:border-dark-border">
        <div className="flex gap-4 border-b border-gray-200 pb-2">
          <Skeleton variant="text" width="60px" height={20} />
          <Skeleton variant="text" width="70px" height={20} />
          <Skeleton variant="text" width="120px" height={20} />
        </div>
        <div className="mt-4 space-y-2">
          <Skeleton variant="text" lines={4} />
        </div>
      </div>
    </div>
  );
}
