import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RecentlyViewedItem {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  brand: string;
  image: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  viewedAt: number;
}

interface RecentlyViewedState {
  items: RecentlyViewedItem[];
}

interface RecentlyViewedActions {
  addItem: (item: Omit<RecentlyViewedItem, 'viewedAt'>) => void;
  clearItems: () => void;
}

type RecentlyViewedStore = RecentlyViewedState & RecentlyViewedActions;

const MAX_ITEMS = 12;

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

export const useRecentlyViewedStore = create<RecentlyViewedStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const filtered = get().items.filter((i) => i.id !== item.id);
        const newItem: RecentlyViewedItem = { ...item, viewedAt: Date.now() };
        set({ items: [newItem, ...filtered].slice(0, MAX_ITEMS) });
      },

      clearItems: () => {
        set({ items: [] });
      },
    }),
    {
      name: 'odo-recently-viewed',
    },
  ),
);
