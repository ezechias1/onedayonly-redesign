'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';
import { useRecentlyViewedStore } from '@/store/recently-viewed-store';

// ---------------------------------------------------------------------------
// RecentlyViewed — horizontal scrollable row of recently viewed products
// ---------------------------------------------------------------------------

interface RecentlyViewedProps {
  /** Exclude this product id (e.g. the currently viewed product) */
  excludeId?: string;
}

export function RecentlyViewed({ excludeId }: RecentlyViewedProps) {
  const [mounted, setMounted] = useState(false);
  const items = useRecentlyViewedStore((s) => s.items);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const display = excludeId ? items.filter((i) => i.id !== excludeId) : items;

  if (display.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full"
      aria-label="Recently viewed products"
    >
      <div className="flex items-center gap-2 mb-4">
        <Clock className="h-4 w-4 text-gray-400" />
        <h2 className="font-heading text-lg font-bold text-gray-900 dark:text-white">
          Recently Viewed
        </h2>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
        {display.map((item) => (
          <Link
            key={item.id}
            href={`/products/${item.slug}`}
            className={cn(
              'flex-shrink-0 w-36 sm:w-44 group',
              'rounded-card overflow-hidden bg-white dark:bg-dark-surface shadow-sm',
              'hover:shadow-md transition-shadow duration-200',
            )}
          >
            <div className="relative aspect-square overflow-hidden bg-white dark:bg-gray-900">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="176px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {item.discountPercentage > 0 && (
                <span className="absolute top-1.5 left-1.5 bg-brand-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                  -{item.discountPercentage}%
                </span>
              )}
            </div>
            <div className="p-2">
              <p className="text-[10px] font-bold uppercase text-gray-500 dark:text-gray-400 truncate">
                {item.brand}
              </p>
              <p className="text-xs font-medium text-gray-800 dark:text-gray-200 truncate">
                {item.shortName}
              </p>
              <p className="text-sm font-bold text-brand-red mt-0.5">
                {formatPrice(item.price)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}

export default RecentlyViewed;
