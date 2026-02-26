'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Search,
  User,
  Heart,
  Settings,
  LogIn,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/store/ui-store';
import { headerNav, categoryNav } from '@/data/navigation';
import { categories } from '@/data/categories';

// ---------------------------------------------------------------------------
// Overlay variants
// ---------------------------------------------------------------------------

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerVariants = {
  hidden: { x: '-100%' },
  visible: {
    x: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 35 },
  },
  exit: {
    x: '-100%',
    transition: { type: 'tween' as const, duration: 0.25 },
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Map a category nav slug to its emoji icon from the categories dataset. */
function getCategoryIcon(href: string): string {
  const slug = href.split('/').pop() ?? '';
  const category = categories.find((c) => c.slug === slug);
  return category?.icon ?? '';
}

// ---------------------------------------------------------------------------
// MobileMenu
// ---------------------------------------------------------------------------

export function MobileMenu() {
  const pathname = usePathname();
  const isOpen = useUIStore((s) => s.isMobileMenuOpen);
  const closeMobileMenu = useUIStore((s) => s.closeMobileMenu);
  const openSearch = useUIStore((s) => s.openSearch);

  // Close on route change
  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSearchClick = () => {
    closeMobileMenu();
    // Small delay so the close animation starts before search opens
    setTimeout(() => openSearch(), 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="mobile-menu-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.nav
            key="mobile-menu-drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 left-0 z-50 w-[85vw] max-w-sm bg-white dark:bg-dark-surface shadow-2xl flex flex-col"
            aria-label="Mobile navigation"
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200 dark:border-dark-border shrink-0">
              <span className="font-heading font-bold text-xl">
                <span className="text-black dark:text-white">one</span>
                <span className="text-brand-red">day</span>
                <span className="text-black dark:text-white">only</span>
              </span>
              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
                className="p-2 rounded-full text-gray-500 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-border transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* ── Scrollable Content ── */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              {/* Search */}
              <div className="px-4 pt-4 pb-2">
                <button
                  type="button"
                  onClick={handleSearchClick}
                  className={cn(
                    'flex items-center gap-3 w-full',
                    'bg-gray-100 dark:bg-dark-border',
                    'rounded-pill px-4 py-3',
                    'text-gray-500 dark:text-gray-400 text-sm',
                    'transition-colors hover:bg-gray-200 dark:hover:bg-gray-700',
                  )}
                >
                  <Search className="w-4 h-4 shrink-0" />
                  <span>Search deals...</span>
                </button>
              </div>

              {/* Main Nav */}
              <div className="px-2 py-3">
                <div className="px-3 pb-1">
                  <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Navigate
                  </span>
                </div>
                {headerNav.map((item, index) => (
                  <Link
                    key={`nav-${index}-${item.href}`}
                    href={item.href}
                    className={cn(
                      'flex items-center justify-between px-3 py-3 rounded-lg',
                      'text-sm font-medium transition-colors',
                      pathname === item.href
                        ? 'bg-brand-red/10 text-brand-red font-semibold'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-border',
                    )}
                  >
                    <span className="flex items-center gap-3">
                      {item.label}
                      {item.badge && (
                        <span className="px-1.5 py-0.5 text-[10px] font-bold bg-brand-red text-white rounded">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 dark:bg-dark-border mx-4" />

              {/* Categories */}
              <div className="px-2 py-3">
                <div className="px-3 pb-1">
                  <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Categories
                  </span>
                </div>
                {categoryNav.map((item, index) => {
                  const icon = getCategoryIcon(item.href);
                  return (
                    <Link
                      key={`cat-${index}-${item.href}`}
                      href={item.href}
                      className={cn(
                        'flex items-center justify-between px-3 py-2.5 rounded-lg',
                        'text-sm transition-colors',
                        pathname === item.href
                          ? 'bg-brand-red/10 text-brand-red font-semibold'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-border',
                      )}
                    >
                      <span className="flex items-center gap-3">
                        {icon && <span className="text-base w-6 text-center" aria-hidden="true">{icon}</span>}
                        <span>{item.label}</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 dark:bg-dark-border mx-4" />

              {/* Account Links */}
              <div className="px-2 py-3">
                <div className="px-3 pb-1">
                  <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Account
                  </span>
                </div>
                <Link
                  href="/account"
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-border transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>My Account</span>
                </Link>
                <Link
                  href="/wishlist"
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-border transition-colors"
                >
                  <Heart className="w-4 h-4" />
                  <span>Wishlist</span>
                </Link>
                <Link
                  href="/track-order"
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-border transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  <span>Track My Order</span>
                </Link>
                <Link
                  href="/login"
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-border transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Sign In / Register</span>
                </Link>
              </div>

              {/* Spacer at bottom */}
              <div className="h-8" />
            </div>

            {/* ── Footer ── */}
            <div className="shrink-0 px-4 py-3 border-t border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg">
              <p className="text-xs text-gray-400 text-center">
                New deals every day at midnight SAST
              </p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
