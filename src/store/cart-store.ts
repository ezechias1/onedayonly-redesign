import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { CartItem } from "@/types/cart";
import type { Product, Variant } from "@/types/product";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CartState {
  items: CartItem[];
  isDrawerOpen: boolean;
}

export interface CartActions {
  /** Add a product (optionally with a specific variant) to the cart. */
  addItem: (product: Product, variant?: Variant, quantity?: number) => void;
  /** Remove a line-item by its cart id. */
  removeItem: (itemId: string) => void;
  /** Set the quantity for an existing line-item. Removes the item when qty <= 0. */
  updateQuantity: (itemId: string, quantity: number) => void;
  /** Remove every item from the cart. */
  clearCart: () => void;
  /** Toggle the cart drawer open / closed. */
  toggleDrawer: () => void;
  /** Open the cart drawer. */
  openDrawer: () => void;
  /** Close the cart drawer. */
  closeDrawer: () => void;
}

export type CartStore = CartState & CartActions;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Derive a deterministic cart-line id from a product + optional variant so
 * the same product/variant combination always maps to a single line-item.
 */
function deriveCartItemId(productId: string, variantId?: string): string {
  return variantId ? `${productId}-${variantId}` : productId;
}

/**
 * Resolve the effective price for a product, taking variant-level pricing
 * into account when the product opts into `hasVariantPricing`.
 */
function resolvePrice(product: Product, variant?: Variant): number {
  if (variant?.price !== undefined && product.hasVariantPricing) {
    return variant.price;
  }
  return product.price;
}

function resolveOriginalPrice(product: Product, variant?: Variant): number {
  if (variant?.originalPrice !== undefined && product.hasVariantPricing) {
    return variant.originalPrice;
  }
  return product.originalPrice;
}

function resolveImage(product: Product, variant?: Variant): string {
  if (variant?.image) {
    return variant.image;
  }
  const defaultImage = product.images.find((img) => img.isDefault);
  return defaultImage?.url ?? product.images[0]?.url ?? "";
}

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // -- State ---------------------------------------------------------------
      items: [],
      isDrawerOpen: false,

      // -- Actions --------------------------------------------------------------

      addItem: (product, variant, quantity = 1) => {
        const id = deriveCartItemId(product.id, variant?.id);
        const existing = get().items.find((item) => item.id === id);

        if (existing) {
          // Increment quantity for an existing line-item
          set({
            items: get().items.map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            ),
          });
        } else {
          const newItem: CartItem = {
            id,
            productId: product.id,
            variantId: variant?.id,
            quantity,
            name: variant ? `${product.name} - ${variant.name}` : product.name,
            brand: product.brand.name,
            image: resolveImage(product, variant),
            price: resolvePrice(product, variant),
            originalPrice: resolveOriginalPrice(product, variant),
          };

          set({ items: [...get().items, newItem] });
        }
      },

      removeItem: (itemId) => {
        set({ items: get().items.filter((item) => item.id !== itemId) });
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          set({ items: get().items.filter((item) => item.id !== itemId) });
          return;
        }

        set({
          items: get().items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item,
          ),
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      toggleDrawer: () => {
        set({ isDrawerOpen: !get().isDrawerOpen });
      },

      openDrawer: () => {
        set({ isDrawerOpen: true });
      },

      closeDrawer: () => {
        set({ isDrawerOpen: false });
      },
    }),
    {
      name: "odo-cart",
      // Only persist the items array, not transient UI state like isDrawerOpen
      partialize: (state) => ({ items: state.items }),
    },
  ),
);

// ---------------------------------------------------------------------------
// Derived / computed selectors
// ---------------------------------------------------------------------------

/** Total number of individual items in the cart (sum of all quantities). */
export const selectTotalItems = (state: CartState): number =>
  state.items.reduce((sum, item) => sum + item.quantity, 0);

/** Subtotal in ZAR cents (before shipping / discounts). */
export const selectSubtotal = (state: CartState): number =>
  state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

/** Total savings in ZAR cents (original price vs deal price). */
export const selectTotalSavings = (state: CartState): number =>
  state.items.reduce(
    (sum, item) => sum + (item.originalPrice - item.price) * item.quantity,
    0,
  );
