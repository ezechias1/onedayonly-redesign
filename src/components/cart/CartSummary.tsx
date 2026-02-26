"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, RotateCcw, ShieldCheck, Tag } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  useCartStore,
  selectSubtotal,
  selectTotalSavings,
} from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const FREE_SHIPPING_THRESHOLD = 50000; // R500 in cents
const SHIPPING_COST = 9900; // R99 in cents

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function CartSummary() {
  const subtotal = useCartStore(selectSubtotal);
  const totalSavings = useCartStore(selectTotalSavings);
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");

  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shipping = isFreeShipping ? 0 : SHIPPING_COST;
  const orderTotal = subtotal + shipping;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode.trim()) {
      setPromoError("");
      return;
    }
    setPromoError("Invalid code");
  };

  return (
    <div className="rounded-card border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6">
      <h2 className="font-heading text-lg font-bold text-gray-900 dark:text-gray-100 mb-5">
        Order Summary
      </h2>

      {/* Line Items */}
      <div className="space-y-3 pb-4 border-b border-gray-100 dark:border-dark-border">
        {/* Subtotal */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Subtotal
          </span>
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {formatPrice(subtotal)}
          </span>
        </div>

        {/* Shipping */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Estimated Shipping
          </span>
          {isFreeShipping ? (
            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
              FREE
            </span>
          ) : (
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {formatPrice(shipping)}
            </span>
          )}
        </div>

        {/* Free shipping progress */}
        {!isFreeShipping && (
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Add {formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)} more for free
            shipping
          </p>
        )}

        {/* Savings */}
        {totalSavings > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-green-600 dark:text-green-400">
              Total Savings
            </span>
            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
              -{formatPrice(totalSavings)}
            </span>
          </div>
        )}
      </div>

      {/* Order Total */}
      <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-dark-border">
        <span className="text-base font-bold text-gray-900 dark:text-gray-100">
          Order Total
        </span>
        <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {formatPrice(orderTotal)}
        </span>
      </div>

      {/* Promo Code */}
      <form onSubmit={handleApplyPromo} className="py-4 border-b border-gray-100 dark:border-dark-border">
        <label
          htmlFor="promo-code"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Promo Code
        </label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              id="promo-code"
              type="text"
              value={promoCode}
              onChange={(e) => {
                setPromoCode(e.target.value);
                setPromoError("");
              }}
              placeholder="Enter code"
              className={cn(
                "w-full h-10 pl-9 pr-3 rounded-pill text-sm",
                "bg-gray-50 dark:bg-dark-bg",
                "border",
                promoError
                  ? "border-red-300 dark:border-red-700"
                  : "border-gray-200 dark:border-dark-border",
                "text-gray-900 dark:text-gray-100",
                "placeholder:text-gray-400",
                "focus:outline-none focus:ring-2 focus:ring-brand-red/50",
              )}
            />
          </div>
          <Button type="submit" variant="outline" size="sm">
            Apply
          </Button>
        </div>
        {promoError && (
          <p className="mt-1.5 text-xs text-red-500">{promoError}</p>
        )}
      </form>

      {/* Checkout Button */}
      <div className="pt-4">
        <Link href="/checkout">
          <Button variant="primary" size="lg" className="w-full">
            Proceed to Checkout
          </Button>
        </Link>
      </div>

      {/* Trust Badges */}
      <div className="mt-5 flex items-center justify-center gap-6">
        <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
          <Lock className="h-4 w-4" />
          <span className="text-xs">Secure Checkout</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
          <RotateCcw className="h-4 w-4" />
          <span className="text-xs">Easy Returns</span>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
