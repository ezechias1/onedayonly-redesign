"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { ShoppingBag, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import {
  useCartStore,
  selectTotalItems,
} from "@/store/cart-store";
import { products } from "@/data/products";
import { formatPrice, formatDiscount } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getDefaultImage(product: Product): string {
  const defaultImg = product.images.find((img) => img.isDefault);
  return defaultImg?.url ?? product.images[0]?.url ?? "";
}

function getRandomProducts(count: number): Product[] {
  const shuffled = [...products]
    .filter((p) => !p.isSoldOut)
    .sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// ---------------------------------------------------------------------------
// Breadcrumb data
// ---------------------------------------------------------------------------

const breadcrumbItems = [{ label: "Shopping Cart" }];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const totalItems = useCartStore(selectTotalItems);
  const clearCart = useCartStore((s) => s.clearCart);

  const isEmpty = items.length === 0;

  // "You May Also Like" products — memoised to avoid reshuffling on every render
  const recommended = useMemo(() => getRandomProducts(4), []);

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart cleared");
  };

  return (
    <div className="container mx-auto px-4 pb-16">
      <Breadcrumb items={breadcrumbItems} />

      {isEmpty ? (
        /* ---------------------------------------------------------------- */
        /* Empty Cart                                                       */
        /* ---------------------------------------------------------------- */
        <div className="py-20 text-center max-w-md mx-auto">
          <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-dark-surface flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="h-12 w-12 text-gray-300 dark:text-gray-600" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Your Cart is Empty
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Looks like you haven&apos;t added any deals yet. Start browsing and
            grab today&apos;s hottest offers!
          </p>
          <Link href="/">
            <Button variant="primary" size="lg">
              Browse Deals
            </Button>
          </Link>
        </div>
      ) : (
        /* ---------------------------------------------------------------- */
        /* Cart with items                                                  */
        /* ---------------------------------------------------------------- */
        <>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <h1 className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100">
              Shopping Cart
              <span className="ml-2 text-base font-normal text-gray-500 dark:text-gray-400">
                ({totalItems} {totalItems === 1 ? "item" : "items"})
              </span>
            </h1>
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<Trash2 className="h-4 w-4" />}
              onClick={handleClearCart}
              className="text-gray-500 hover:text-red-500"
            >
              Clear Cart
            </Button>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
            {/* Cart Items */}
            <div className="bg-white dark:bg-dark-surface rounded-card border border-gray-200 dark:border-dark-border p-5">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="lg:sticky lg:top-4 self-start">
              <CartSummary />
            </div>
          </div>
        </>
      )}

      {/* ------------------------------------------------------------- */}
      {/* You May Also Like                                              */}
      {/* ------------------------------------------------------------- */}
      <section className="mt-16">
        <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {recommended.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className={cn(
                "group rounded-card overflow-hidden",
                "bg-white dark:bg-dark-surface",
                "border border-gray-100 dark:border-dark-border",
                "hover:shadow-lg hover:-translate-y-0.5",
                "transition-all duration-200",
              )}
            >
              {/* Image */}
              <div className="relative aspect-square bg-gray-100 dark:bg-dark-border overflow-hidden">
                <Image
                  src={getDefaultImage(product)}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.discountPercentage > 0 && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-brand-red text-white text-xs font-bold">
                    {formatDiscount(product.discountPercentage)}
                  </span>
                )}
              </div>
              {/* Info */}
              <div className="p-3">
                <p className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                  {product.brand.name}
                </p>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate mt-0.5 group-hover:text-brand-red transition-colors">
                  {product.shortName}
                </h3>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-base font-bold text-brand-red">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-xs text-gray-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
