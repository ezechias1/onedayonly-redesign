"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Eye, ShoppingCart, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWishlistStore } from "@/store/wishlist-store";
import { useCartStore } from "@/store/cart-store";
import { DiscountBadge } from "./DiscountBadge";
import { PriceDisplay } from "./PriceDisplay";
import { Badge } from "@/components/ui/Badge";
import type { Product, Badge as BadgeType } from "@/types/product";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ProductCardProps {
  product: Product;
  className?: string;
}

// ---------------------------------------------------------------------------
// Badge config mapping
// ---------------------------------------------------------------------------

const badgeConfig: Record<
  Exclude<BadgeType, "more-options">,
  { label: string; variant: "info" | "success" | "warning" | "discount" }
> = {
  "best-seller": { label: "Best Seller", variant: "warning" },
  new: { label: "New", variant: "info" },
  "flash-deal": { label: "Flash Deal", variant: "discount" },
  "last-chance": { label: "Last Chance", variant: "warning" },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * The core product card used throughout the site.
 *
 * Features:
 * - Linked to /products/[slug]
 * - Discount badge, status badges, "More Options" chip
 * - Wishlist toggle with heart animation
 * - Quick-view button on hover
 * - Sold-out overlay with "Aggenee!" text
 * - Low-stock urgency indicator
 * - Quick add-to-cart on hover (desktop)
 * - Hover effects: image scale, shadow elevation
 */
export function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // -- Stores ---------------------------------------------------------------
  const toggleWishlist = useWishlistStore((s) => s.toggleItem);
  const isWishlisted = useWishlistStore((s) =>
    s.items.some((i) => i.id === product.id)
  );
  const addToCart = useCartStore((s) => s.addItem);
  const openDrawer = useCartStore((s) => s.openDrawer);

  // -- Derived data ---------------------------------------------------------
  const defaultImage = product.images.find((img) => img.isDefault);
  const imageUrl =
    defaultImage?.url ?? product.images[0]?.url ?? "/placeholder.svg";
  const imageAlt = defaultImage?.alt ?? product.name;

  const hasMoreOptions = product.badges.includes("more-options");
  const statusBadges = product.badges.filter(
    (b): b is Exclude<BadgeType, "more-options"> => b !== "more-options"
  );

  const isLowStock = product.stock.type === "low_stock";
  const lowStockCount =
    product.stock.type === "low_stock" ? product.stock.remaining : 0;

  // -- Handlers -------------------------------------------------------------
  function handleWishlistClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  }

  function handleQuickAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (!product.isSoldOut) {
      addToCart(product);
      openDrawer();
    }
  }

  // -- Render ---------------------------------------------------------------
  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group relative flex flex-col rounded-card overflow-hidden",
        "bg-white dark:bg-dark-surface",
        "shadow-sm hover:shadow-lg",
        "transition-shadow duration-300 ease-in-out",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Image Section ──────────────────────────────────────── */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-dark-border">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          className={cn(
            "object-cover transition-transform duration-500 ease-out",
            "group-hover:scale-105",
            product.isSoldOut && "grayscale"
          )}
        />

        {/* Discount badge - top left */}
        {product.discountPercentage > 0 && (
          <div className="absolute top-2 left-2 z-10">
            <DiscountBadge
              discount={product.discountPercentage}
              pulse={product.discountPercentage >= 70}
            />
          </div>
        )}

        {/* Status badges - top right */}
        {statusBadges.length > 0 && (
          <div className="absolute top-2 right-2 z-10 flex flex-col gap-1 items-end">
            {statusBadges.map((badge) => {
              const config = badgeConfig[badge];
              return (
                <Badge key={badge} variant={config.variant} size="sm">
                  {config.label}
                </Badge>
              );
            })}
          </div>
        )}

        {/* "More Options" badge at bottom of image */}
        {hasMoreOptions && (
          <div className="absolute bottom-2 left-2 z-10">
            <Badge variant="info" size="sm" className="bg-black/70 backdrop-blur-sm">
              More Options
            </Badge>
          </div>
        )}

        {/* Low stock urgency indicator */}
        {isLowStock && !product.isSoldOut && (
          <div className="absolute bottom-2 right-2 z-10">
            <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/90 backdrop-blur-sm px-2 py-0.5 text-[10px] font-bold text-white">
              <AlertTriangle className="h-3 w-3" />
              Only {lowStockCount} left!
            </span>
          </div>
        )}

        {/* Wishlist heart button */}
        <AnimatePresence>
          <motion.button
            onClick={handleWishlistClick}
            className={cn(
              "absolute top-2 right-2 z-20 flex h-8 w-8 items-center justify-center",
              "rounded-full bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm",
              "shadow-sm transition-opacity duration-200",
              // Always visible on mobile, hover-only on desktop
              "opacity-100 md:opacity-0 md:group-hover:opacity-100",
              // Shift down when status badges are present
              statusBadges.length > 0 && "top-auto bottom-12"
            )}
            whileTap={{ scale: 0.85 }}
            aria-label={
              isWishlisted
                ? `Remove ${product.shortName} from wishlist`
                : `Add ${product.shortName} to wishlist`
            }
          >
            <motion.div
              animate={isWishlisted ? { scale: [1, 1.3, 1] } : { scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Heart
                className={cn(
                  "h-4 w-4 transition-colors duration-200",
                  isWishlisted
                    ? "fill-brand-red text-brand-red"
                    : "text-gray-600 dark:text-gray-400"
                )}
              />
            </motion.div>
          </motion.button>
        </AnimatePresence>

        {/* Quick View button - appears on hover */}
        <div
          className={cn(
            "absolute inset-0 z-10 flex items-center justify-center",
            "pointer-events-none opacity-0 transition-opacity duration-200",
            "group-hover:opacity-100 group-hover:pointer-events-auto",
            product.isSoldOut && "hidden"
          )}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Quick view would open a modal - placeholder for now
            }}
            className={cn(
              "flex items-center gap-1.5 rounded-pill px-4 py-2",
              "bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm",
              "text-xs font-semibold text-gray-800 dark:text-gray-200",
              "shadow-md hover:bg-white dark:hover:bg-dark-surface",
              "transition-all duration-200",
              "pointer-events-auto"
            )}
            aria-label={`Quick view ${product.shortName}`}
          >
            <Eye className="h-3.5 w-3.5" />
            Quick View
          </button>
        </div>

        {/* ── Sold-Out Overlay ──────────────────────────────────── */}
        {product.isSoldOut && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 backdrop-blur-[2px]">
            <span className="font-heading text-2xl font-extrabold text-white drop-shadow-lg">
              Aggenee!
            </span>
            <Badge variant="sold-out" size="md" className="mt-2">
              Sold Out
            </Badge>
          </div>
        )}
      </div>

      {/* ── Info Section ───────────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-3">
        {/* Brand */}
        <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-0.5">
          {product.brand.name}
        </span>

        {/* Product name */}
        <h3 className="text-sm font-medium leading-snug text-gray-800 dark:text-gray-100 line-clamp-2 mb-1.5">
          {product.shortName}
        </h3>

        {/* Price */}
        <div className="mt-auto flex items-end justify-between gap-2">
          <PriceDisplay
            price={product.price}
            originalPrice={product.originalPrice}
            showFrom={product.hasVariantPricing}
          />

          {/* Quick add-to-cart button (desktop hover) */}
          {!product.isSoldOut && (
            <button
              onClick={handleQuickAdd}
              className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                "bg-brand-red text-white",
                "opacity-0 translate-y-1 transition-all duration-200",
                "group-hover:opacity-100 group-hover:translate-y-0",
                "hover:bg-red-700 active:scale-95",
                "hidden md:flex"
              )}
              aria-label={`Add ${product.shortName} to cart`}
            >
              <ShoppingCart className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
