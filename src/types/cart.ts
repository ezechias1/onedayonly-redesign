// ---------------------------------------------------------------------------
// Cart domain types
// ---------------------------------------------------------------------------

/** A single line-item in the shopping cart */
export interface CartItem {
  /** Unique cart-line identifier (productId or productId-variantId) */
  id: string;
  productId: string;
  variantId?: string;
  quantity: number;
  name: string;
  brand: string;
  image: string;
  /** Unit price in ZAR cents */
  price: number;
  /** Original (RRP) unit price in ZAR cents */
  originalPrice: number;
}
