'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Announcement messages
// ---------------------------------------------------------------------------

const announcements = [
  'Free delivery on orders over R500',
  'New deals every day at midnight',
  'Up to 80% off top brands',
];

// ---------------------------------------------------------------------------
// AnnouncementBar
// ---------------------------------------------------------------------------

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <div
      className="relative bg-brand-blue text-white overflow-hidden"
      role="banner"
      aria-label="Promotional announcements"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center">
        {/* Marquee-style content */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium overflow-hidden">
          <div className="flex items-center gap-4 animate-marquee whitespace-nowrap">
            {announcements.map((msg, i) => (
              <span key={i} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="w-1 h-1 rounded-full bg-white/50 shrink-0" aria-hidden="true" />
                )}
                <span>{msg}</span>
              </span>
            ))}
          </div>
        </div>

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
