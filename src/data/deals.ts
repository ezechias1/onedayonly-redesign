// ---------------------------------------------------------------------------
// Deal sections – curated groups of products within each category
// ---------------------------------------------------------------------------

import { DealSection } from '@/types/product';

export const dealSections: DealSection[] = [
  // ── Electronics ──────────────────────────────────────────────
  {
    id: 'ds-premium-tech',
    categoryId: 'cat-electronics',
    title: 'Premium Tech',
    image: 'https://picsum.photos/seed/ds-premium-tech/800/400',
    productIds: ['prod-001', 'prod-002', 'prod-003'],
    sortOrder: 1,
  },
  {
    id: 'ds-tech-me-away',
    categoryId: 'cat-electronics',
    title: 'Tech Me Away',
    image: 'https://picsum.photos/seed/ds-tech-me-away/800/400',
    productIds: ['prod-006', 'prod-007', 'prod-070'],
    sortOrder: 2,
  },
  {
    id: 'ds-charge-up',
    categoryId: 'cat-electronics',
    title: 'Charge Up',
    image: 'https://picsum.photos/seed/ds-charge-up/800/400',
    productIds: ['prod-004', 'prod-005', 'prod-071'],
    sortOrder: 3,
  },

  // ── Home & Garden ────────────────────────────────────────────
  {
    id: 'ds-home-sweet-home',
    categoryId: 'cat-home-and-garden',
    title: 'Home Sweet Home',
    image: 'https://picsum.photos/seed/ds-home-sweet-home/800/400',
    productIds: ['prod-009', 'prod-011', 'prod-069'],
    sortOrder: 1,
  },
  {
    id: 'ds-garden-glow',
    categoryId: 'cat-home-and-garden',
    title: 'Garden Glow',
    image: 'https://picsum.photos/seed/ds-garden-glow/800/400',
    productIds: ['prod-010', 'prod-012'],
    sortOrder: 2,
  },
  {
    id: 'ds-storage-solutions',
    categoryId: 'cat-home-and-garden',
    title: 'Storage Solutions',
    image: 'https://picsum.photos/seed/ds-storage-solutions/800/400',
    productIds: ['prod-008', 'prod-072'],
    sortOrder: 3,
  },

  // ── Health & Beauty ──────────────────────────────────────────
  {
    id: 'ds-fit-and-fabulous',
    categoryId: 'cat-health-and-beauty',
    title: 'Fit & Fabulous',
    image: 'https://picsum.photos/seed/ds-fit-fab/800/400',
    productIds: ['prod-013', 'prod-016'],
    sortOrder: 1,
  },
  {
    id: 'ds-glow-up',
    categoryId: 'cat-health-and-beauty',
    title: 'Glow Up',
    image: 'https://picsum.photos/seed/ds-glow-up/800/400',
    productIds: ['prod-014', 'prod-015'],
    sortOrder: 2,
  },

  // ── Food & Beverages ────────────────────────────────────────
  {
    id: 'ds-pantry-deals',
    categoryId: 'cat-food-and-beverages',
    title: 'Pantry Deals',
    image: 'https://picsum.photos/seed/ds-pantry/800/400',
    productIds: ['prod-017', 'prod-018', 'prod-019', 'prod-020'],
    sortOrder: 1,
  },

  // ── Apparel & Accessories ───────────────────────────────────
  {
    id: 'ds-style-steals',
    categoryId: 'cat-apparel-and-accessories',
    title: 'Style Steals',
    image: 'https://picsum.photos/seed/ds-style-steals/800/400',
    productIds: ['prod-021', 'prod-022', 'prod-025'],
    sortOrder: 1,
  },
  {
    id: 'ds-wardrobe-basics',
    categoryId: 'cat-apparel-and-accessories',
    title: 'Wardrobe Basics',
    image: 'https://picsum.photos/seed/ds-wardrobe-basics/800/400',
    productIds: ['prod-023', 'prod-024'],
    sortOrder: 2,
  },

  // ── Furniture ────────────────────────────────────────────────
  {
    id: 'ds-office-upgrade',
    categoryId: 'cat-furniture',
    title: 'Office Upgrade',
    image: 'https://picsum.photos/seed/ds-office-upgrade/800/400',
    productIds: ['prod-026', 'prod-030'],
    sortOrder: 1,
  },
  {
    id: 'ds-bedroom-bliss',
    categoryId: 'cat-furniture',
    title: 'Bedroom Bliss',
    image: 'https://picsum.photos/seed/ds-bedroom-bliss/800/400',
    productIds: ['prod-027', 'prod-028', 'prod-029'],
    sortOrder: 2,
  },

  // ── Sporting Goods ──────────────────────────────────────────
  {
    id: 'ds-home-gym',
    categoryId: 'cat-sporting-goods',
    title: 'Home Gym',
    image: 'https://picsum.photos/seed/ds-home-gym/800/400',
    productIds: ['prod-031', 'prod-032', 'prod-033'],
    sortOrder: 1,
  },
  {
    id: 'ds-get-active',
    categoryId: 'cat-sporting-goods',
    title: 'Get Active',
    image: 'https://picsum.photos/seed/ds-get-active/800/400',
    productIds: ['prod-034', 'prod-035'],
    sortOrder: 2,
  },

  // ── Shoes ────────────────────────────────────────────────────
  {
    id: 'ds-step-it-up',
    categoryId: 'cat-shoes',
    title: 'Step It Up',
    image: 'https://picsum.photos/seed/ds-step-it-up/800/400',
    productIds: ['prod-036', 'prod-037'],
    sortOrder: 1,
  },
  {
    id: 'ds-everyday-kicks',
    categoryId: 'cat-shoes',
    title: 'Everyday Kicks',
    image: 'https://picsum.photos/seed/ds-everyday-kicks/800/400',
    productIds: ['prod-038', 'prod-039', 'prod-040'],
    sortOrder: 2,
  },

  // ── Luggage & Bags ──────────────────────────────────────────
  {
    id: 'ds-travel-ready',
    categoryId: 'cat-luggage-and-bags',
    title: 'Travel Ready',
    image: 'https://picsum.photos/seed/ds-travel-ready/800/400',
    productIds: ['prod-041', 'prod-042', 'prod-043', 'prod-044'],
    sortOrder: 1,
  },

  // ── Hardware ─────────────────────────────────────────────────
  {
    id: 'ds-tool-time',
    categoryId: 'cat-hardware',
    title: 'Tool Time',
    image: 'https://picsum.photos/seed/ds-tool-time/800/400',
    productIds: ['prod-045', 'prod-046', 'prod-048'],
    sortOrder: 1,
  },
  {
    id: 'ds-secure-it',
    categoryId: 'cat-hardware',
    title: 'Secure It',
    image: 'https://picsum.photos/seed/ds-secure-it/800/400',
    productIds: ['prod-047'],
    sortOrder: 2,
  },

  // ── Baby & Toddler ──────────────────────────────────────────
  {
    id: 'ds-little-ones',
    categoryId: 'cat-baby-and-toddler',
    title: 'Little Ones',
    image: 'https://picsum.photos/seed/ds-little-ones/800/400',
    productIds: ['prod-049', 'prod-050', 'prod-051'],
    sortOrder: 1,
  },
  {
    id: 'ds-tiny-fashion',
    categoryId: 'cat-baby-and-toddler',
    title: 'Tiny Fashion',
    image: 'https://picsum.photos/seed/ds-tiny-fashion/800/400',
    productIds: ['prod-052'],
    sortOrder: 2,
  },

  // ── Business & Industrial ───────────────────────────────────
  {
    id: 'ds-office-essentials',
    categoryId: 'cat-business-and-industrial',
    title: 'Office Essentials',
    image: 'https://picsum.photos/seed/ds-office-essentials/800/400',
    productIds: ['prod-053', 'prod-054', 'prod-055'],
    sortOrder: 1,
  },

  // ── Media ────────────────────────────────────────────────────
  {
    id: 'ds-page-turners',
    categoryId: 'cat-media',
    title: 'Page Turners',
    image: 'https://picsum.photos/seed/ds-page-turners/800/400',
    productIds: ['prod-056', 'prod-057', 'prod-058'],
    sortOrder: 1,
  },

  // ── Toys & Games ─────────────────────────────────────────────
  {
    id: 'ds-game-on',
    categoryId: 'cat-toys-and-games',
    title: 'Game On',
    image: 'https://picsum.photos/seed/ds-game-on/800/400',
    productIds: ['prod-059', 'prod-060'],
    sortOrder: 1,
  },
  {
    id: 'ds-outdoor-fun',
    categoryId: 'cat-toys-and-games',
    title: 'Outdoor Fun',
    image: 'https://picsum.photos/seed/ds-outdoor-fun/800/400',
    productIds: ['prod-061', 'prod-062'],
    sortOrder: 2,
  },

  // ── Animals & Pet Supplies ──────────────────────────────────
  {
    id: 'ds-pampered-pets',
    categoryId: 'cat-animals-and-pet-supplies',
    title: 'Pampered Pets',
    image: 'https://picsum.photos/seed/ds-pampered-pets/800/400',
    productIds: ['prod-063', 'prod-064', 'prod-065'],
    sortOrder: 1,
  },

  // ── Extra Time Deals ────────────────────────────────────────
  {
    id: 'ds-encore',
    categoryId: 'cat-extra-time-deals',
    title: 'Encore! Back by Demand',
    image: 'https://picsum.photos/seed/ds-encore/800/400',
    productIds: ['prod-066', 'prod-067'],
    sortOrder: 1,
  },
  {
    id: 'ds-second-chance',
    categoryId: 'cat-extra-time-deals',
    title: 'Second Chance',
    image: 'https://picsum.photos/seed/ds-second-chance/800/400',
    productIds: ['prod-068'],
    sortOrder: 2,
  },
];
