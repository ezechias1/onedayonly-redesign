// ---------------------------------------------------------------------------
// Product domain types for OneDayOnly e-commerce platform
// ---------------------------------------------------------------------------

/** Product brand information */
export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  featuredImage?: string;
}

/** A single product image asset */
export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isDefault: boolean;
}

/**
 * Product variant (colour, size, dropdown option, etc.).
 * When `price` / `originalPrice` are present the variant overrides the
 * product-level pricing.
 */
export interface Variant {
  id: string;
  name: string;
  optionType: "dropdown" | "color" | "size";
  optionLabel: string;
  price?: number;
  originalPrice?: number;
  image?: string;
  inStock: boolean;
}

/**
 * Discriminated union that describes the current stock level.
 *
 * - `in_stock`  - plenty of stock available
 * - `low_stock` - limited remaining (show urgency UI)
 * - `sold_out`  - no stock left
 */
export type StockStatus =
  | { type: "in_stock" }
  | { type: "low_stock"; remaining: number }
  | { type: "sold_out" };

/** Badge types surfaced on product cards */
export type Badge =
  | "best-seller"
  | "more-options"
  | "new"
  | "flash-deal"
  | "last-chance";

/** Core product entity (daily deal) */
export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  brand: Brand;
  categoryId: string;
  dealSectionId: string;
  description: string;
  features: string[];
  whatsInTheBox: string[];
  images: ProductImage[];
  variants: Variant[];
  /** Price in ZAR cents */
  price: number;
  /** Original (RRP) price in ZAR cents */
  originalPrice: number;
  /** Pre-computed discount percentage (0-100) */
  discountPercentage: number;
  /** When true individual variants may carry their own pricing */
  hasVariantPricing: boolean;
  stock: StockStatus;
  badges: Badge[];
  isSoldOut: boolean;
  /** ISO-8601 date string (YYYY-MM-DD) the deal is/was live */
  dealDate: string;
}

/** Top-level product category */
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  image: string;
  dealCount: number;
  seoContent: string;
}

/** A curated section of deals within a category */
export interface DealSection {
  id: string;
  categoryId: string;
  title: string;
  image: string;
  productIds: string[];
  sortOrder: number;
}
