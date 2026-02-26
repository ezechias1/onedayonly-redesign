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
    image: 'https://placehold.co/800x400/1a1a2e/e94560/png?text=Premium%20Tech&font=montserrat',
    productIds: ['prod-001', 'prod-002', 'prod-003'],
    sortOrder: 1,
  },
  {
    id: 'ds-tech-me-away',
    categoryId: 'cat-electronics',
    title: 'Tech Me Away',
    image: 'https://placehold.co/800x400/1a1a2e/e94560/png?text=Tech%20Me%20Away&font=montserrat',
    productIds: ['prod-006', 'prod-007', 'prod-070'],
    sortOrder: 2,
  },
  {
    id: 'ds-charge-up',
    categoryId: 'cat-electronics',
    title: 'Charge Up',
    image: 'https://placehold.co/800x400/1a1a2e/e94560/png?text=Charge%20Up&font=montserrat',
    productIds: ['prod-004', 'prod-005', 'prod-071'],
    sortOrder: 3,
  },

  // ── Home & Garden ────────────────────────────────────────────
  {
    id: 'ds-home-sweet-home',
    categoryId: 'cat-home-and-garden',
    title: 'Home Sweet Home',
    image: 'https://placehold.co/800x400/2d4059/ea5455/png?text=Home%20Sweet%20Home&font=montserrat',
    productIds: ['prod-009', 'prod-011', 'prod-069'],
    sortOrder: 1,
  },
  {
    id: 'ds-garden-glow',
    categoryId: 'cat-home-and-garden',
    title: 'Garden Glow',
    image: 'https://placehold.co/800x400/2d4059/ea5455/png?text=Garden%20Glow&font=montserrat',
    productIds: ['prod-010', 'prod-012'],
    sortOrder: 2,
  },
  {
    id: 'ds-storage-solutions',
    categoryId: 'cat-home-and-garden',
    title: 'Storage Solutions',
    image: 'https://placehold.co/800x400/2d4059/ea5455/png?text=Storage%20Solutions&font=montserrat',
    productIds: ['prod-008', 'prod-072'],
    sortOrder: 3,
  },

  // ── Health & Beauty ──────────────────────────────────────────
  {
    id: 'ds-fit-and-fabulous',
    categoryId: 'cat-health-and-beauty',
    title: 'Fit & Fabulous',
    image: 'https://placehold.co/800x400/e8a87c/2d132c/png?text=Fit%20%26%20Fabulous&font=montserrat',
    productIds: ['prod-013', 'prod-016'],
    sortOrder: 1,
  },
  {
    id: 'ds-glow-up',
    categoryId: 'cat-health-and-beauty',
    title: 'Glow Up',
    image: 'https://placehold.co/800x400/e8a87c/2d132c/png?text=Glow%20Up&font=montserrat',
    productIds: ['prod-014', 'prod-015'],
    sortOrder: 2,
  },

  // ── Food & Beverages ────────────────────────────────────────
  {
    id: 'ds-pantry-deals',
    categoryId: 'cat-food-and-beverages',
    title: 'Pantry Deals',
    image: 'https://placehold.co/800x400/1b5e20/c8e6c9/png?text=Pantry%20Deals&font=montserrat',
    productIds: ['prod-017', 'prod-018', 'prod-019', 'prod-020'],
    sortOrder: 1,
  },

  // ── Apparel & Accessories ───────────────────────────────────
  {
    id: 'ds-style-steals',
    categoryId: 'cat-apparel-and-accessories',
    title: 'Style Steals',
    image: 'https://placehold.co/800x400/2d132c/e8a87c/png?text=Style%20Steals&font=montserrat',
    productIds: ['prod-021', 'prod-022', 'prod-025'],
    sortOrder: 1,
  },
  {
    id: 'ds-wardrobe-basics',
    categoryId: 'cat-apparel-and-accessories',
    title: 'Wardrobe Basics',
    image: 'https://placehold.co/800x400/2d132c/e8a87c/png?text=Wardrobe%20Basics&font=montserrat',
    productIds: ['prod-023', 'prod-024'],
    sortOrder: 2,
  },

  // ── Furniture ────────────────────────────────────────────────
  {
    id: 'ds-office-upgrade',
    categoryId: 'cat-furniture',
    title: 'Office Upgrade',
    image: 'https://placehold.co/800x400/3c2a21/d7a86e/png?text=Office%20Upgrade&font=montserrat',
    productIds: ['prod-026', 'prod-030'],
    sortOrder: 1,
  },
  {
    id: 'ds-bedroom-bliss',
    categoryId: 'cat-furniture',
    title: 'Bedroom Bliss',
    image: 'https://placehold.co/800x400/3c2a21/d7a86e/png?text=Bedroom%20Bliss&font=montserrat',
    productIds: ['prod-027', 'prod-028', 'prod-029'],
    sortOrder: 2,
  },

  // ── Sporting Goods ──────────────────────────────────────────
  {
    id: 'ds-home-gym',
    categoryId: 'cat-sporting-goods',
    title: 'Home Gym',
    image: 'https://placehold.co/800x400/004e92/ffffff/png?text=Home%20Gym&font=montserrat',
    productIds: ['prod-031', 'prod-032', 'prod-033'],
    sortOrder: 1,
  },
  {
    id: 'ds-get-active',
    categoryId: 'cat-sporting-goods',
    title: 'Get Active',
    image: 'https://placehold.co/800x400/004e92/ffffff/png?text=Get%20Active&font=montserrat',
    productIds: ['prod-034', 'prod-035'],
    sortOrder: 2,
  },

  // ── Shoes ────────────────────────────────────────────────────
  {
    id: 'ds-step-it-up',
    categoryId: 'cat-shoes',
    title: 'Step It Up',
    image: 'https://placehold.co/800x400/212121/ff6f00/png?text=Step%20It%20Up&font=montserrat',
    productIds: ['prod-036', 'prod-037'],
    sortOrder: 1,
  },
  {
    id: 'ds-everyday-kicks',
    categoryId: 'cat-shoes',
    title: 'Everyday Kicks',
    image: 'https://placehold.co/800x400/212121/ff6f00/png?text=Everyday%20Kicks&font=montserrat',
    productIds: ['prod-038', 'prod-039', 'prod-040'],
    sortOrder: 2,
  },

  // ── Luggage & Bags ──────────────────────────────────────────
  {
    id: 'ds-travel-ready',
    categoryId: 'cat-luggage-and-bags',
    title: 'Travel Ready',
    image: 'https://placehold.co/800x400/263238/80cbc4/png?text=Travel%20Ready&font=montserrat',
    productIds: ['prod-041', 'prod-042', 'prod-043', 'prod-044'],
    sortOrder: 1,
  },

  // ── Hardware ─────────────────────────────────────────────────
  {
    id: 'ds-tool-time',
    categoryId: 'cat-hardware',
    title: 'Tool Time',
    image: 'https://placehold.co/800x400/333333/ffab00/png?text=Tool%20Time&font=montserrat',
    productIds: ['prod-045', 'prod-046', 'prod-048'],
    sortOrder: 1,
  },
  {
    id: 'ds-secure-it',
    categoryId: 'cat-hardware',
    title: 'Secure It',
    image: 'https://placehold.co/800x400/333333/ffab00/png?text=Secure%20It&font=montserrat',
    productIds: ['prod-047'],
    sortOrder: 2,
  },

  // ── Baby & Toddler ──────────────────────────────────────────
  {
    id: 'ds-little-ones',
    categoryId: 'cat-baby-and-toddler',
    title: 'Little Ones',
    image: 'https://placehold.co/800x400/f06292/ffffff/png?text=Little%20Ones&font=montserrat',
    productIds: ['prod-049', 'prod-050', 'prod-051'],
    sortOrder: 1,
  },
  {
    id: 'ds-tiny-fashion',
    categoryId: 'cat-baby-and-toddler',
    title: 'Tiny Fashion',
    image: 'https://placehold.co/800x400/f06292/ffffff/png?text=Tiny%20Fashion&font=montserrat',
    productIds: ['prod-052'],
    sortOrder: 2,
  },

  // ── Business & Industrial ───────────────────────────────────
  {
    id: 'ds-office-essentials',
    categoryId: 'cat-business-and-industrial',
    title: 'Office Essentials',
    image: 'https://placehold.co/800x400/37474f/90a4ae/png?text=Office%20Essentials&font=montserrat',
    productIds: ['prod-053', 'prod-054', 'prod-055'],
    sortOrder: 1,
  },

  // ── Media ────────────────────────────────────────────────────
  {
    id: 'ds-page-turners',
    categoryId: 'cat-media',
    title: 'Page Turners',
    image: 'https://placehold.co/800x400/4a148c/ce93d8/png?text=Page%20Turners&font=montserrat',
    productIds: ['prod-056', 'prod-057', 'prod-058'],
    sortOrder: 1,
  },

  // ── Toys & Games ─────────────────────────────────────────────
  {
    id: 'ds-game-on',
    categoryId: 'cat-toys-and-games',
    title: 'Game On',
    image: 'https://placehold.co/800x400/f4001a/ffffff/png?text=Game%20On&font=montserrat',
    productIds: ['prod-059', 'prod-060'],
    sortOrder: 1,
  },
  {
    id: 'ds-outdoor-fun',
    categoryId: 'cat-toys-and-games',
    title: 'Outdoor Fun',
    image: 'https://placehold.co/800x400/f4001a/ffffff/png?text=Outdoor%20Fun&font=montserrat',
    productIds: ['prod-061', 'prod-062'],
    sortOrder: 2,
  },

  // ── Animals & Pet Supplies ──────────────────────────────────
  {
    id: 'ds-pampered-pets',
    categoryId: 'cat-animals-and-pet-supplies',
    title: 'Pampered Pets',
    image: 'https://placehold.co/800x400/1b5e20/a5d6a7/png?text=Pampered%20Pets&font=montserrat',
    productIds: ['prod-063', 'prod-064', 'prod-065'],
    sortOrder: 1,
  },

  // ── Extra Time Deals ────────────────────────────────────────
  {
    id: 'ds-encore',
    categoryId: 'cat-extra-time-deals',
    title: 'Encore! Back by Demand',
    image: 'https://placehold.co/800x400/0d47a1/64b5f6/png?text=Encore!%20Back%20by%20Demand&font=montserrat',
    productIds: ['prod-066', 'prod-067'],
    sortOrder: 1,
  },
  {
    id: 'ds-second-chance',
    categoryId: 'cat-extra-time-deals',
    title: 'Second Chance',
    image: 'https://placehold.co/800x400/0d47a1/64b5f6/png?text=Second%20Chance&font=montserrat',
    productIds: ['prod-068'],
    sortOrder: 2,
  },
];
