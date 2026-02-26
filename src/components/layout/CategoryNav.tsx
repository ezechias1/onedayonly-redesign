'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { categories } from '@/data/categories';

// ---------------------------------------------------------------------------
// CategoryNav
// ---------------------------------------------------------------------------

export function CategoryNav() {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // ── Check scroll state ──
  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 2);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  // ── Scroll handlers ──
  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = 280;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // ── Scroll active category into view on mount ──
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const activeLink = el.querySelector('[data-active="true"]');
    if (activeLink) {
      activeLink.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [pathname]);

  return (
    <nav
      className="relative w-full bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-dark-border"
      aria-label="Category navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Left Arrow (desktop) */}
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label="Scroll categories left"
            className={cn(
              'hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10',
              'items-center justify-center w-8 h-8',
              'bg-white dark:bg-dark-surface rounded-full shadow-md',
              'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white',
              'border border-gray-200 dark:border-dark-border',
              'transition-all duration-200 hover:shadow-lg',
            )}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {/* Left fade */}
        {canScrollLeft && (
          <div
            className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-dark-surface to-transparent z-[5] pointer-events-none"
            aria-hidden="true"
          />
        )}

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2"
          role="list"
        >
          {categories.map((category) => {
            const href = `/category/${category.slug}`;
            const isActive = pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={category.id}
                href={href}
                role="listitem"
                data-active={isActive}
                className={cn(
                  'flex items-center gap-2 shrink-0',
                  'px-3.5 py-2 rounded-pill',
                  'text-sm font-medium whitespace-nowrap',
                  'transition-all duration-200',
                  isActive
                    ? 'bg-brand-red/10 text-brand-red border-b-2 border-brand-red font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-border hover:text-black dark:hover:text-white',
                )}
              >
                <span className="text-base" aria-hidden="true">
                  {category.icon}
                </span>
                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Right fade */}
        {canScrollRight && (
          <div
            className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-dark-surface to-transparent z-[5] pointer-events-none"
            aria-hidden="true"
          />
        )}

        {/* Right Arrow (desktop) */}
        {canScrollRight && (
          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label="Scroll categories right"
            className={cn(
              'hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10',
              'items-center justify-center w-8 h-8',
              'bg-white dark:bg-dark-surface rounded-full shadow-md',
              'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white',
              'border border-gray-200 dark:border-dark-border',
              'transition-all duration-200 hover:shadow-lg',
            )}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </nav>
  );
}

export default CategoryNav;
