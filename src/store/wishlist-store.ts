import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Product } from "@/types/product";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/**
 * Lightweight snapshot of a product stored in the wishlist.
 * We deliberately keep this minimal so localStorage stays small.
 */
export interface WishlistItem {
  id: string;
  slug: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  isSoldOut: boolean;
}

export interface WishlistState {
  items: WishlistItem[];
}

export interface WishlistActions {
  /** Add a product to the wishlist. No-op if already present. */
  addItem: (product: Product) => void;
  /** Remove a product from the wishlist by its product id. */
  removeItem: (productId: string) => void;
  /** Toggle a product in/out of the wishlist. Returns `true` if the item was added. */
  toggleItem: (product: Product) => boolean;
  /** Check whether a product is already wishlisted. */
  isInWishlist: (productId: string) => boolean;
  /** Remove every item from the wishlist. */
  clearWishlist: () => void;
}

export type WishlistStore = WishlistState & WishlistActions;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toWishlistItem(product: Product): WishlistItem {
  const defaultImage = product.images.find((img) => img.isDefault);

  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    brand: product.brand.name,
    image: defaultImage?.url ?? product.images[0]?.url ?? "",
    price: product.price,
    originalPrice: product.originalPrice,
    discountPercentage: product.discountPercentage,
    isSoldOut: product.isSoldOut,
  };
}

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      // -- State ---------------------------------------------------------------
      items: [],

      // -- Actions --------------------------------------------------------------

      addItem: (product) => {
        if (get().items.some((item) => item.id === product.id)) {
          return;
        }
        set({ items: [...get().items, toWishlistItem(product)] });
      },

      removeItem: (productId) => {
        set({ items: get().items.filter((item) => item.id !== productId) });
      },

      toggleItem: (product) => {
        const exists = get().items.some((item) => item.id === product.id);
        if (exists) {
          get().removeItem(product.id);
          return false;
        }
        get().addItem(product);
        return true;
      },

      isInWishlist: (productId) => {
        return get().items.some((item) => item.id === productId);
      },

      clearWishlist: () => {
        set({ items: [] });
      },
    }),
    {
      name: "odo-wishlist",
    },
  ),
);

// ---------------------------------------------------------------------------
// Derived / computed selectors
// ---------------------------------------------------------------------------

/** Total number of wishlisted products. */
export const selectWishlistCount = (state: WishlistState): number =>
  state.items.length;
