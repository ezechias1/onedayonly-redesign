"use client";

import { useState, useMemo, useCallback } from "react";
import {
  FilterSidebar,
  type FilterValues,
} from "@/components/category/FilterSidebar";
import { SortDropdown, type SortOption } from "@/components/category/SortDropdown";
import { DealSection } from "@/components/category/DealSection";
import type { Category, DealSection as DealSectionType, Product } from "@/types/product";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SectionWithProducts {
  section: DealSectionType;
  products: Product[];
}

export interface CategoryPageClientProps {
  category: Category;
  sectionProducts: SectionWithProducts[];
  allProducts: Product[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function applyFilters(products: Product[], filters: FilterValues): Product[] {
  return products.filter((p) => {
    if (p.price < filters.priceMin || p.price > filters.priceMax) return false;
    if (filters.brands.length > 0 && !filters.brands.includes(p.brand.name)) return false;
    if (filters.minDiscount > 0 && p.discountPercentage < filters.minDiscount) return false;
    if (filters.inStockOnly && p.isSoldOut) return false;
    return true;
  });
}

function applySort(products: Product[], sort: SortOption): Product[] {
  const sorted = [...products];
  switch (sort) {
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "discount":
      sorted.sort((a, b) => b.discountPercentage - a.discountPercentage);
      break;
    case "newest":
      sorted.sort(
        (a, b) =>
          new Date(b.dealDate).getTime() - new Date(a.dealDate).getTime(),
      );
      break;
    case "popular":
    default:
      // keep original order (curated)
      break;
  }
  return sorted;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Client-side wrapper that handles filtering, sorting, and responsive layout
 * for the category listing page.
 */
export function CategoryPageClient({
  category: _category,
  sectionProducts,
  allProducts,
}: CategoryPageClientProps) {
  const [sort, setSort] = useState<SortOption>("popular");
  const [filters, setFilters] = useState<FilterValues>({
    priceMin: 0,
    priceMax: 1_500_000,
    brands: [],
    minDiscount: 0,
    inStockOnly: false,
  });

  // Compute available brands from all products in the category
  const availableBrands = useMemo(() => {
    const brandMap = new Map<string, number>();
    allProducts.forEach((p) => {
      brandMap.set(p.brand.name, (brandMap.get(p.brand.name) ?? 0) + 1);
    });
    return Array.from(brandMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [allProducts]);

  const handleFilterChange = useCallback((next: FilterValues) => {
    setFilters(next);
  }, []);

  // Filter and sort each section's products
  const filteredSections = useMemo(() => {
    return sectionProducts
      .map(({ section, products }) => ({
        section,
        products: applySort(applyFilters(products, filters), sort),
      }))
      .filter(({ products }) => products.length > 0);
  }, [sectionProducts, filters, sort]);

  // Flat list fallback when no deal sections exist
  const flatProducts = useMemo(() => {
    if (sectionProducts.length > 0) return [];
    return applySort(applyFilters(allProducts, filters), sort);
  }, [sectionProducts, allProducts, filters, sort]);

  const totalVisible = filteredSections.reduce(
    (sum, s) => sum + s.products.length,
    flatProducts.length,
  );

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <FilterSidebar
            availableBrands={availableBrands}
            onFilterChange={handleFilterChange}
          />
          <span className="hidden text-sm text-gray-500 lg:inline">
            {totalVisible} {totalVisible === 1 ? "deal" : "deals"}
          </span>
        </div>
        <SortDropdown value={sort} onChange={setSort} />
      </div>

      {/* Main layout: sidebar + content */}
      <div className="flex gap-6">
        {/* Desktop sidebar is rendered by FilterSidebar */}
        <FilterSidebar
          availableBrands={availableBrands}
          onFilterChange={handleFilterChange}
          className="hidden lg:block"
        />

        {/* Content */}
        <div className="flex-1 space-y-10">
          {/* Deal sections */}
          {filteredSections.map(({ section, products }) => (
            <DealSection
              key={section.id}
              dealSection={section}
              products={products}
            />
          ))}

          {/* Flat product grid (fallback when no deal sections) */}
          {sectionProducts.length === 0 && flatProducts.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {flatProducts.map((product) => (
                <DealSection
                  key={product.id}
                  dealSection={{
                    id: "flat",
                    categoryId: product.categoryId,
                    title: "",
                    image: "",
                    productIds: [product.id],
                    sortOrder: 0,
                  }}
                  products={[product]}
                />
              ))}
            </div>
          )}

          {/* Empty state */}
          {totalVisible === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
                No deals match your filters
              </p>
              <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
                Try adjusting your filters to see more results.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryPageClient;
