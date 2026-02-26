'use client';

import { RecentlyViewed } from '@/components/product/RecentlyViewed';

// ---------------------------------------------------------------------------
// RecentlyViewedSection — wrapper for homepage usage
// ---------------------------------------------------------------------------

export function RecentlyViewedSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <RecentlyViewed />
    </div>
  );
}

export default RecentlyViewedSection;
