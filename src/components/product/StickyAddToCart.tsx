'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/store/cart-store';
import type { Product, Variant } from '@/types/product';

// ---------------------------------------------------------------------------
// StickyAddToCart — slim bottom bar on product pages
// ---------------------------------------------------------------------------

interface StickyAddToCartProps {
  product: Product;
  variant?: Variant;
  quantity: number;
}

export function StickyAddToCart({ product, variant, quantity }: StickyAddToCartProps) {
  const [visible, setVisible] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const openDrawer = useCartStore((s) => s.openDrawer);

  const handleScroll = useCallback(() => {
    // Show sticky bar when scrolled past 500px (roughly past the main Add to Cart button)
    setVisible(window.scrollY > 500);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const displayPrice =
    variant?.price !== undefined && product.hasVariantPricing
      ? variant.price
      : product.price;

  const handleAdd = () => {
    if (product.isSoldOut) return;
    addItem(product, variant, quantity);
    openDrawer();
    toast.success('Added to cart!', {
      description: `${product.shortName} x${quantity}`,
    });
  };

  if (product.isSoldOut) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="sticky-add-to-cart"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={cn(
            'fixed bottom-0 left-0 right-0 z-40',
            'bg-white dark:bg-dark-surface',
            'border-t border-gray-200 dark:border-dark-border',
            'shadow-[0_-4px_20px_rgba(0,0,0,0.1)]',
            'dark:shadow-[0_-4px_20px_rgba(0,0,0,0.3)]',
          )}
        >
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
            {/* Product info */}
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                {product.shortName}
              </span>
              <span className="font-heading text-lg font-bold text-brand-red">
                {formatPrice(displayPrice)}
              </span>
            </div>

            {/* Add to Cart button */}
            <button
              type="button"
              onClick={handleAdd}
              className={cn(
                'flex items-center gap-2 shrink-0',
                'rounded-pill px-6 py-3',
                'bg-brand-red hover:bg-red-700 active:bg-red-800',
                'text-white font-bold text-sm',
                'transition-colors duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50',
              )}
            >
              <ShoppingCart className="h-4 w-4" />
              I want one!
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default StickyAddToCart;
