"use client";

import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

import Drawer from "@/components/ui/Drawer";
import { Button } from "@/components/ui/Button";
import { CartItem } from "./CartItem";
import {
  useCartStore,
  selectTotalItems,
  selectSubtotal,
  selectTotalSavings,
} from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function CartDrawer() {
  const isDrawerOpen = useCartStore((s) => s.isDrawerOpen);
  const closeDrawer = useCartStore((s) => s.closeDrawer);
  const items = useCartStore((s) => s.items);
  const totalItems = useCartStore(selectTotalItems);
  const subtotal = useCartStore(selectSubtotal);
  const totalSavings = useCartStore(selectTotalSavings);

  const isEmpty = items.length === 0;

  return (
    <Drawer.Root open={isDrawerOpen} onOpenChange={(open) => !open && closeDrawer()}>
      <Drawer.Content side="right" width="w-96" showClose={false}>
        <div className="flex flex-col h-full -mx-4 -mb-4">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-dark-border">
            <Drawer.Title className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Your Cart
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                ({totalItems} {totalItems === 1 ? "item" : "items"})
              </span>
            </Drawer.Title>
            <Drawer.Close
              className={cn(
                "inline-flex h-8 w-8 items-center justify-center rounded-full",
                "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300",
                "hover:bg-gray-100 dark:hover:bg-dark-border",
                "transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
              )}
              aria-label="Close cart"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </Drawer.Close>
          </div>

          {isEmpty ? (
            /* Empty Cart State */
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-dark-surface flex items-center justify-center mb-5">
                <ShoppingBag className="h-10 w-10 text-gray-300 dark:text-gray-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                Your cart is feeling lonely!
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Add some amazing deals to get started.
              </p>
              <Drawer.Close asChild>
                <Link href="/">
                  <Button variant="primary" size="md">
                    Browse Deals
                  </Button>
                </Link>
              </Drawer.Close>
            </div>
          ) : (
            <>
              {/* Scrollable Items */}
              <div className="flex-1 overflow-y-auto px-5 py-2">
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="shrink-0 border-t border-gray-200 dark:border-dark-border px-5 py-4 bg-white dark:bg-dark-surface">
                {/* Subtotal */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Subtotal
                  </span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                {/* Savings */}
                {totalSavings > 0 && (
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-green-600 dark:text-green-400">
                      Estimated savings
                    </span>
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                      -{formatPrice(totalSavings)}
                    </span>
                  </div>
                )}

                {/* Checkout Button */}
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full mb-3"
                  onClick={() => {
                    closeDrawer();
                    // Future: navigate to checkout
                  }}
                >
                  Proceed to Checkout
                </Button>

                {/* Continue Shopping */}
                <Drawer.Close asChild>
                  <button
                    className={cn(
                      "w-full text-center text-sm font-medium",
                      "text-gray-500 hover:text-brand-red dark:text-gray-400 dark:hover:text-brand-red",
                      "transition-colors py-1",
                    )}
                  >
                    Continue Shopping
                  </button>
                </Drawer.Close>
              </div>
            </>
          )}
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
}

export default CartDrawer;
