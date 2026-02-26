'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import {
  Search,
  Heart,
  ShoppingBag,
  Sun,
  Moon,
  Menu,
  User,
  Clock,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { getTimeUntilMidnight, padZero } from '@/lib/utils';
import { useCartStore, selectTotalItems } from '@/store/cart-store';
import { useWishlistStore, selectWishlistCount } from '@/store/wishlist-store';
import { useUIStore } from '@/store/ui-store';

// ---------------------------------------------------------------------------
// Logo
// ---------------------------------------------------------------------------

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-0 shrink-0" aria-label="OneDayOnly Home">
      <span className="font-heading font-bold text-2xl tracking-tight">
        <span className="text-white">one</span>
        <span className="text-brand-red">day</span>
        <span className="text-white">only</span>
      </span>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Countdown Timer
// ---------------------------------------------------------------------------

function CountdownTimer() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(getTimeUntilMidnight());

    const interval = setInterval(() => {
      setTime(getTimeUntilMidnight());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="hidden lg:flex items-center gap-2 text-sm">
      <Clock className="w-4 h-4 text-brand-red" aria-hidden="true" />
      <span className="text-gray-400 uppercase text-xs font-heading font-semibold tracking-wide">
        Deals expire in:
      </span>
      <span className="font-heading font-bold text-white tabular-nums">
        {padZero(time.hours)}:{padZero(time.minutes)}:{padZero(time.seconds)}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Icon Button
// ---------------------------------------------------------------------------

interface IconButtonProps {
  onClick?: () => void;
  label: string;
  badge?: number;
  children: React.ReactNode;
  className?: string;
}

function IconButton({ onClick, label, badge, children, className }: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        'relative p-2 rounded-full text-gray-300 hover:text-white',
        'transition-colors duration-200 hover:bg-white/10',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        className,
      )}
    >
      {children}
      {badge != null && badge > 0 && (
        <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-brand-red rounded-full leading-none">
          {badge > 99 ? '99+' : badge}
        </span>
      )}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Dark Mode Toggle
// ---------------------------------------------------------------------------

function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-2 w-10 h-10" />
    );
  }

  const isDark = theme === 'dark';

  return (
    <IconButton
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </IconButton>
  );
}

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  const openSearch = useUIStore((s) => s.openSearch);
  const toggleMobileMenu = useUIStore((s) => s.toggleMobileMenu);

  const totalItems = useCartStore(selectTotalItems);
  const toggleDrawer = useCartStore((s) => s.toggleDrawer);

  const wishlistCount = useWishlistStore(selectWishlistCount);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      className={cn(
        'sticky top-0 z-50 w-full bg-black',
        scrolled && 'backdrop-blur-md bg-black/95 shadow-lg shadow-black/20',
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* ── Left: Hamburger (mobile) + Logo ── */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Open navigation menu"
              className="lg:hidden p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Logo />
          </div>

          {/* ── Center: Search Bar (desktop) ── */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <button
              type="button"
              onClick={openSearch}
              className={cn(
                'flex items-center gap-3 w-full',
                'bg-gray-800 hover:bg-gray-700',
                'rounded-pill px-4 py-2.5',
                'text-gray-400 text-sm',
                'transition-colors duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue',
              )}
            >
              <Search className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Search today&apos;s deals...</span>
            </button>
          </div>

          {/* ── Right: Actions ── */}
          <div className="flex items-center gap-1 sm:gap-2">
            <CountdownTimer />

            {/* Search icon (mobile) */}
            <IconButton
              onClick={openSearch}
              label="Search deals"
              className="md:hidden"
            >
              <Search className="w-5 h-5" />
            </IconButton>

            {/* Dark mode */}
            <div className="hidden sm:block">
              <DarkModeToggle />
            </div>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="hidden sm:block"
              aria-label={`Wishlist${wishlistCount > 0 ? ` (${wishlistCount} items)` : ''}`}
            >
              <IconButton label="View wishlist" badge={wishlistCount}>
                <Heart className="w-5 h-5" />
              </IconButton>
            </Link>

            {/* Cart */}
            <IconButton
              onClick={toggleDrawer}
              label={`Shopping cart${totalItems > 0 ? ` (${totalItems} items)` : ''}`}
              badge={totalItems}
            >
              <ShoppingBag className="w-5 h-5" />
            </IconButton>

            {/* Account (desktop) */}
            <Link
              href="/account"
              className="hidden lg:flex items-center gap-2 pl-3 ml-2 border-l border-gray-700 text-gray-300 hover:text-white transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">My Account</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
