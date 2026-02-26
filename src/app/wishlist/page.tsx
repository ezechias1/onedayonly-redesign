"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { PriceDisplay } from "@/components/product/PriceDisplay";
import { Badge } from "@/components/ui/Badge";
import {
  useWishlistStore,
  selectWishlistCount,
} from "@/store/wishlist-store";
import { useCartStore } from "@/store/cart-store";
import { products } from "@/data/products";
import { formatDiscount } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Look up the full Product record for a wishlist item id. */
function findProduct(productId: string): Product | undefined {
  return products.find((p) => p.id === productId);
}

function getDefaultImage(product: Product): string {
  const defaultImg = product.images.find((img) => img.isDefault);
  return defaultImg?.url ?? product.images[0]?.url ?? "";
}

// ---------------------------------------------------------------------------
// Breadcrumb data
// ---------------------------------------------------------------------------

const breadcrumbItems = [{ label: "Wishlist" }];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function WishlistPage() {
  const items = useWishlistStore((s) => s.items);
  const itemCount = useWishlistStore(selectWishlistCount);
  const removeItem = useWishlistStore((s) => s.removeItem);
  const clearWishlist = useWishlistStore((s) => s.clearWishlist);
  const addToCart = useCartStore((s) => s.addItem);
  const openDrawer = useCartStore((s) => s.openDrawer);

  const isEmpty = items.length === 0;

  // Resolve full product data for each wishlist item
  const wishlistProducts = useMemo(() => {
    return items
      .map((item) => ({
        wishlistItem: item,
        product: findProduct(item.id),
      }))
      .filter(
        (entry): entry is { wishlistItem: typeof entry.wishlistItem; product: Product } =>
          entry.product !== undefined,
      );
  }, [items]);

  const handleClearWishlist = () => {
    clearWishlist();
    toast.success("Wishlist cleared");
  };

  const handleRemoveItem = (productId: string, productName: string) => {
    removeItem(productId);
    toast.success(`${productName} removed from wishlist`);
  };

  const handleAddToCart = (product: Product) => {
    if (product.isSoldOut) return;
    addToCart(product);
    openDrawer();
    toast.success(`${product.shortName} added to cart`);
  };

  return (
    <div className="container mx-auto px-4 pb-16">
      <Breadcrumb items={breadcrumbItems} />

      {isEmpty ? (
        /* ---------------------------------------------------------------- */
        /* Empty Wishlist                                                    */
        /* ---------------------------------------------------------------- */
        <div className="py-20 text-center max-w-md mx-auto">
          <div
            className={cn(
              "w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6",
              "bg-red-50 dark:bg-red-950/30",
            )}
          >
            <Heart className="h-12 w-12 text-brand-red/40" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Your Wishlist is Empty
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Start saving deals you love and never miss out on your favourites.
          </p>
          <Link href="/">
            <Button variant="primary" size="lg">
              Browse Deals
            </Button>
          </Link>
        </div>
      ) : (
        /* ---------------------------------------------------------------- */
        /* Wishlist with items                                               */
        /* ---------------------------------------------------------------- */
        <>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <h1 className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100">
              Your Wishlist
              <span className="ml-2 text-base font-normal text-gray-500 dark:text-gray-400">
                ({itemCount} {itemCount === 1 ? "item" : "items"})
              </span>
            </h1>
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<Trash2 className="h-4 w-4" />}
              onClick={handleClearWishlist}
              className="text-gray-500 hover:text-red-500"
            >
              Clear Wishlist
            </Button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wishlistProducts.map(({ wishlistItem, product }) => (
              <div
                key={wishlistItem.id}
                className={cn(
                  "group relative flex flex-col rounded-card overflow-hidden",
                  "bg-white dark:bg-dark-surface",
                  "shadow-sm hover:shadow-lg",
                  "border border-gray-100 dark:border-dark-border",
                  "transition-shadow duration-300 ease-in-out",
                )}
              >
                {/* Image */}
                <Link
                  href={`/products/${product.slug}`}
                  className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-dark-border"
                >
                  <Image
                    src={getDefaultImage(product)}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    className={cn(
                      "object-cover transition-transform duration-500 ease-out",
                      "group-hover:scale-105",
                      product.isSoldOut && "grayscale",
                    )}
                  />

                  {/* Discount badge */}
                  {product.discountPercentage > 0 && (
                    <span className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full bg-brand-red text-white text-xs font-bold">
                      {formatDiscount(product.discountPercentage)}
                    </span>
                  )}

                  {/* Sold-out overlay */}
                  {product.isSoldOut && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 backdrop-blur-[2px]">
                      <span className="font-heading text-xl font-extrabold text-white drop-shadow-lg">
                        Aggenee!
                      </span>
                      <Badge variant="sold-out" size="sm" className="mt-1.5">
                        Sold Out
                      </Badge>
                    </div>
                  )}
                </Link>

                {/* Info */}
                <div className="flex flex-1 flex-col p-3">
                  {/* Brand */}
                  <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-0.5">
                    {product.brand.name}
                  </span>

                  {/* Product name */}
                  <Link href={`/products/${product.slug}`}>
                    <h3 className="text-sm font-medium leading-snug text-gray-800 dark:text-gray-100 line-clamp-2 mb-1.5 hover:text-brand-red transition-colors">
                      {product.shortName}
                    </h3>
                  </Link>

                  {/* Price */}
                  <PriceDisplay
                    price={product.price}
                    originalPrice={product.originalPrice}
                    showFrom={product.hasVariantPricing}
                    className="mb-3"
                  />

                  {/* Actions */}
                  <div className="mt-auto flex gap-2">
                    {!product.isSoldOut && (
                      <Button
                        variant="primary"
                        size="sm"
                        leftIcon={<ShoppingCart className="h-3.5 w-3.5" />}
                        onClick={() => handleAddToCart(product)}
                        className="flex-1 text-xs"
                      >
                        Add to Cart
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveItem(product.id, product.shortName)}
                      className={cn(
                        "text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20",
                        product.isSoldOut && "flex-1",
                      )}
                      aria-label={`Remove ${product.shortName} from wishlist`}
                    >
                      <Trash2 className="h-4 w-4" />
                      {product.isSoldOut && (
                        <span className="ml-1.5 text-xs">Remove</span>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
