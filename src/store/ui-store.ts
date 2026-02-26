import { create } from "zustand";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface UIState {
  /** Whether the global search overlay is visible. */
  isSearchOpen: boolean;
  /** Whether the mobile navigation drawer is visible. */
  isMobileMenuOpen: boolean;
  /** Product id of the currently open quick-view modal, or `null`. */
  activeQuickView: string | null;
}

export interface UIActions {
  toggleSearch: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  toggleMobileMenu: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  setQuickView: (productId: string | null) => void;
  /** Close all overlays in one call (useful on route change). */
  closeAll: () => void;
}

export type UIStore = UIState & UIActions;

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

export const useUIStore = create<UIStore>()((set, get) => ({
  // -- State -----------------------------------------------------------------
  isSearchOpen: false,
  isMobileMenuOpen: false,
  activeQuickView: null,

  // -- Actions ---------------------------------------------------------------

  toggleSearch: () => {
    const opening = !get().isSearchOpen;
    set({
      isSearchOpen: opening,
      // Close other overlays when search opens
      ...(opening && { isMobileMenuOpen: false, activeQuickView: null }),
    });
  },

  openSearch: () => {
    set({
      isSearchOpen: true,
      isMobileMenuOpen: false,
      activeQuickView: null,
    });
  },

  closeSearch: () => {
    set({ isSearchOpen: false });
  },

  toggleMobileMenu: () => {
    const opening = !get().isMobileMenuOpen;
    set({
      isMobileMenuOpen: opening,
      ...(opening && { isSearchOpen: false, activeQuickView: null }),
    });
  },

  openMobileMenu: () => {
    set({
      isMobileMenuOpen: true,
      isSearchOpen: false,
      activeQuickView: null,
    });
  },

  closeMobileMenu: () => {
    set({ isMobileMenuOpen: false });
  },

  setQuickView: (productId) => {
    set({
      activeQuickView: productId,
      // Close other overlays when quick view opens
      ...(productId && { isSearchOpen: false, isMobileMenuOpen: false }),
    });
  },

  closeAll: () => {
    set({
      isSearchOpen: false,
      isMobileMenuOpen: false,
      activeQuickView: null,
    });
  },
}));
