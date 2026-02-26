"use client";

import { useMemo } from "react";
import { products } from "@/data/products";
import { brands } from "@/data/brands";
import { banners } from "@/data/banners";
import { BrandDealSection } from "./BrandDealSection";
import { PromoBanner } from "./PromoBanner";
import { ProductCard } from "@/components/product/ProductCard";
import type { Product, Brand } from "@/types/product";

// ---------------------------------------------------------------------------
// BrandDealFeed — groups products by brand, renders brand sections + promos
// ---------------------------------------------------------------------------

/** Minimum number of products for a brand to get its own section */
const MIN_BRAND_PRODUCTS = 3;

/** Insert a promo banner every N brand sections */
const PROMO_INTERVAL = 2;

export function BrandDealFeed() {
  const { brandSections, remainingProducts } = useMemo(() => {
    // Group products by brand id
    const grouped = new Map<string, Product[]>();
    for (const product of products) {
      const brandId = product.brand.id;
      const existing = grouped.get(brandId) ?? [];
      existing.push(product);
      grouped.set(brandId, existing);
    }

    // Build brand lookup
    const brandMap = new Map<string, Brand>();
    for (const brand of brands) {
      brandMap.set(brand.id, brand);
    }

    // Separate into sections (3+ products) and remainder
    const sections: { brand: Brand; products: Product[] }[] = [];
    const remainder: Product[] = [];

    for (const [brandId, brandProducts] of grouped) {
      if (brandProducts.length >= MIN_BRAND_PRODUCTS) {
        const brand = brandMap.get(brandId) ?? brandProducts[0].brand;
        sections.push({ brand, products: brandProducts });
      } else {
        remainder.push(...brandProducts);
      }
    }

    // Sort sections by product count descending for better visual flow
    sections.sort((a, b) => b.products.length - a.products.length);

    return { brandSections: sections, remainingProducts: remainder };
  }, []);

  return (
    <div className="w-full py-6 sm:py-8 bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {brandSections.map((section, idx) => (
          <div key={section.brand.id}>
            <BrandDealSection
              brand={section.brand}
              products={section.products}
              reversed={idx % 2 === 1}
            />

            {/* Insert promo banner every PROMO_INTERVAL sections */}
            {(idx + 1) % PROMO_INTERVAL === 0 &&
              idx < brandSections.length - 1 && (
                <div className="mt-8">
                  <PromoBanner
                    banner={
                      banners[
                        Math.floor((idx + 1) / PROMO_INTERVAL - 1) %
                          banners.length
                      ]
                    }
                  />
                </div>
              )}
          </div>
        ))}

        {/* Remaining products from small brands */}
        {remainingProducts.length > 0 && (
          <section aria-label="More deals">
            <h2 className="font-heading text-lg sm:text-xl font-extrabold uppercase tracking-wide text-gray-900 dark:text-white mb-4">
              More Deals
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {remainingProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default BrandDealFeed;
