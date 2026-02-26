'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Announcement messages
// ---------------------------------------------------------------------------

const announcements = [
  'Free delivery on orders over R500',
  'New deals every day at midnight',
  'Up to 80% off top brands',
  'Shop SA\'s best daily deals',
];

const ROTATE_INTERVAL = 4000;

// ---------------------------------------------------------------------------
// AnnouncementBar
// ---------------------------------------------------------------------------

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  if (dismissed) {
    return null;
  }

  return (
    <div
      className="relative bg-brand-blue text-white overflow-hidden"
      role="banner"
      aria-label="Promotional announcements"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center min-h-[36px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="text-xs sm:text-sm font-medium text-center"
          >
            {announcements[current]}
          </motion.span>
        </AnimatePresence>

        {/* Dismiss button */}
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcement"
          className={cn(
            'absolute right-2 sm:right-4 top-1/2 -translate-y-1/2',
            'p-1 rounded-full hover:bg-white/20 transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white',
          )}
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default AnnouncementBar;
