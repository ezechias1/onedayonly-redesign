"use client";

import { useState, useEffect } from "react";
import { Truck, Shield, Star, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice, formatDiscount } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { ProductImageGallery } from "@/components/product/ProductImageGallery";
import { VariantSelector } from "@/components/product/VariantSelector";
import { QuantitySelector } from "@/components/product/QuantitySelector";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import { ShareButton } from "@/components/product/ShareButton";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { StickyAddToCart } from "@/components/product/StickyAddToCart";
import { RecentlyViewed } from "@/components/product/RecentlyViewed";
import { useRecentlyViewedStore } from "@/store/recently-viewed-store";
import type { Product, Variant } from "@/types/product";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

// ---------------------------------------------------------------------------
// Trust Indicator Row
// ---------------------------------------------------------------------------

function TrustIndicators() {
  const indicators = [
    { icon: Shield, text: "Easy returns within 7 days" },
    { icon: Star, text: "4.5/5 on Google" },
    { icon: Lock, text: "Secure checkout" },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {indicators.map(({ icon: Icon, text }, i) => (
        <div
          key={`indicator-${i}`}
          className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"
        >
          <Icon className="h-3.5 w-3.5 text-brand-blue" />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Client-side product detail with interactive elements:
 * variant selection, quantity, add to cart, image gallery.
 *
 * Renders as a two-column layout on desktop (gallery left 55%, info right 45%)
 * and stacked on mobile.
 */
export function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    product.variants.find((v) => v.inStock)?.id ?? product.variants[0]?.id ?? null,
  );
  const [quantity, setQuantity] = useState(1);

  const selectedVariant = product.variants.find(
    (v) => v.id === selectedVariantId,
  );

  // Track recently viewed
  const addRecentlyViewed = useRecentlyViewedStore((s) => s.addItem);
  useEffect(() => {
    const defaultImage = product.images.find((img) => img.isDefault);
    addRecentlyViewed({
      id: product.id,
      slug: product.slug,
      name: product.name,
      shortName: product.shortName,
      brand: product.brand.name,
      image: defaultImage?.url ?? product.images[0]?.url ?? '',
      price: product.price,
      originalPrice: product.originalPrice,
      discountPercentage: product.discountPercentage,
    });
  }, [product, addRecentlyViewed]);

  // Resolve price based on variant
  const displayPrice =
    selectedVariant?.price !== undefined && product.hasVariantPricing
      ? selectedVariant.price
      : product.price;

  const displayOriginalPrice =
    selectedVariant?.originalPrice !== undefined && product.hasVariantPricing
      ? selectedVariant.originalPrice
      : product.originalPrice;

  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://www.onedayonly.co.za/products/${product.slug}`;

  return (
    <>
      {/* Gallery (left column on desktop) */}
      <ProductImageGallery images={product.images} />

      {/* Product Info (right column on desktop) */}
      <div className="flex flex-col gap-5">
        {/* Discount badge */}
        {product.discountPercentage > 0 && (
          <Badge variant="discount" size="md" pulse className="self-start">
            {formatDiscount(product.discountPercentage)}
          </Badge>
        )}

        {/* Brand */}
        <span className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          {product.brand.name}
        </span>

        {/* Product name */}
        <h1 className="-mt-3 font-heading text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          {product.name}
        </h1>

        {/* Price display */}
        <div className="flex items-baseline gap-3">
          <span className="font-heading text-3xl font-bold text-brand-red">
            {formatPrice(displayPrice)}
          </span>
          {displayOriginalPrice > displayPrice && (
            <span className="text-lg text-gray-400 line-through">
              {formatPrice(displayOriginalPrice)}
            </span>
          )}
        </div>

        {/* Shipping note */}
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Excludes shipping
        </p>

        {/* ETA */}
        <div className="flex items-center gap-2 rounded-input border border-gray-100 bg-gray-50 px-3 py-2 dark:border-dark-border dark:bg-dark-surface">
          <Truck className="h-4 w-4 text-brand-blue" />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            ETA: 5&ndash;10 working days
          </span>
        </div>

        {/* Stock status */}
        {product.stock.type === "low_stock" && (
          <p className="text-sm font-semibold text-amber-600">
            Only {product.stock.remaining} left in stock!
          </p>
        )}

        {/* Variant selector */}
        {product.variants.length > 0 && (
          <VariantSelector
            variants={product.variants}
            selected={selectedVariantId}
            onSelect={setSelectedVariantId}
          />
        )}

        {/* Quantity selector */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Quantity
          </label>
          <QuantitySelector value={quantity} onChange={setQuantity} />
        </div>

        {/* Add to Cart */}
        <AddToCartButton
          product={product}
          variant={selectedVariant}
          quantity={quantity}
        />

        {/* Trust indicators */}
        <TrustIndicators />

        {/* Share */}
        <ShareButton url={shareUrl} title={product.name} />
      </div>

      {/* Related Products - full width below */}
      {relatedProducts.length > 0 && (
        <div className="col-span-full mt-10 border-t border-gray-100 pt-8 dark:border-dark-border">
          <RelatedProducts products={relatedProducts} />
        </div>
      )}

      {/* Recently Viewed */}
      <div className="col-span-full mt-10 border-t border-gray-100 pt-8 dark:border-dark-border">
        <RecentlyViewed excludeId={product.id} />
      </div>

      {/* Sticky Add to Cart bar */}
      <StickyAddToCart
        product={product}
        variant={selectedVariant}
        quantity={quantity}
      />
    </>
  );
}

export default ProductDetailClient;
