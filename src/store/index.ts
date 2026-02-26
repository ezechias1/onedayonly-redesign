// ---------------------------------------------------------------------------
// Barrel export for all stores
// ---------------------------------------------------------------------------

export {
  useCartStore,
  selectTotalItems,
  selectSubtotal,
  selectTotalSavings,
} from "./cart-store";
export type { CartState, CartActions, CartStore } from "./cart-store";

export {
  useWishlistStore,
  selectWishlistCount,
} from "./wishlist-store";
export type {
  WishlistItem,
  WishlistState,
  WishlistActions,
  WishlistStore,
} from "./wishlist-store";

export { useUIStore } from "./ui-store";
export type { UIState, UIActions, UIStore } from "./ui-store";

export { useRecentlyViewedStore } from "./recently-viewed-store";
export type { RecentlyViewedItem } from "./recently-viewed-store";

export { Providers } from "./providers";
