// ---------------------------------------------------------------------------
// Navigation structure for header and footer
// ---------------------------------------------------------------------------

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  badge?: string;
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

// ── Header navigation ──────────────────────────────────────────
export const headerNav: NavItem[] = [
  {
    label: "Today's Deals",
    href: '/',
  },
  {
    label: 'Categories',
    href: '/',
    children: [
      { label: 'Electronics', href: '/category/electronics' },
      { label: 'Home & Garden', href: '/category/home-and-garden' },
      { label: 'Apparel & Accessories', href: '/category/apparel-and-accessories' },
      { label: 'Health & Beauty', href: '/category/health-and-beauty' },
      { label: 'Shoes', href: '/category/shoes' },
      { label: 'Furniture', href: '/category/furniture' },
      { label: 'Sporting Goods', href: '/category/sporting-goods' },
      { label: 'Food & Beverages', href: '/category/food-and-beverages' },
      { label: 'Luggage & Bags', href: '/category/luggage-and-bags' },
      { label: 'Hardware', href: '/category/hardware' },
      { label: 'Baby & Toddler', href: '/category/baby-and-toddler' },
      { label: 'Toys & Games', href: '/category/toys-and-games' },
      { label: 'Animals & Pet Supplies', href: '/category/animals-and-pet-supplies' },
      { label: 'Business & Industrial', href: '/category/business-and-industrial' },
      { label: 'Media', href: '/category/media' },
      { label: 'Extra Time Deals', href: '/category/extra-time-deals', badge: 'HOT' },
    ],
  },
  {
    label: 'Extra Time',
    href: '/category/extra-time-deals',
    badge: 'HOT',
  },
  {
    label: 'How It Works',
    href: '/about',
  },
];

// ── Category navigation (used in sidebars and mobile menus) ────
export const categoryNav: NavItem[] = [
  { label: 'Electronics', href: '/category/electronics' },
  { label: 'Home & Garden', href: '/category/home-and-garden' },
  { label: 'Apparel & Accessories', href: '/category/apparel-and-accessories' },
  { label: 'Health & Beauty', href: '/category/health-and-beauty' },
  { label: 'Shoes', href: '/category/shoes' },
  { label: 'Furniture', href: '/category/furniture' },
  { label: 'Sporting Goods', href: '/category/sporting-goods' },
  { label: 'Food & Beverages', href: '/category/food-and-beverages' },
  { label: 'Luggage & Bags', href: '/category/luggage-and-bags' },
  { label: 'Hardware', href: '/category/hardware' },
  { label: 'Baby & Toddler', href: '/category/baby-and-toddler' },
  { label: 'Toys & Games', href: '/category/toys-and-games' },
  { label: 'Animals & Pet Supplies', href: '/category/animals-and-pet-supplies' },
  { label: 'Business & Industrial', href: '/category/business-and-industrial' },
  { label: 'Media', href: '/category/media' },
  { label: 'Extra Time Deals', href: '/category/extra-time-deals' },
];

// ── Footer navigation ──────────────────────────────────────────
export const footerSections: FooterSection[] = [
  {
    title: 'Shop',
    links: [
      { label: "Today's Deals", href: '/' },
      { label: 'Extra Time Deals', href: '/category/extra-time-deals' },
      { label: 'All Categories', href: '/' },
      { label: 'Best Sellers', href: '/' },
      { label: 'New Arrivals', href: '/' },
    ],
  },
  {
    title: 'Help & Support',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Shipping & Delivery', href: '/info/shipping' },
      { label: 'Returns & Refunds', href: '/info/returns' },
      { label: 'Track My Order', href: '/track-order' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About OneDayOnly', href: '/about' },
      { label: 'How It Works', href: '/about' },
      { label: 'Careers', href: '/about' },
      { label: 'Press', href: '/about' },
      { label: 'Sell on OneDayOnly', href: '/sell-with-us' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', href: '/info/terms' },
      { label: 'Privacy Policy', href: '/info/privacy' },
      { label: 'Cookie Policy', href: '/info/cookies' },
      { label: 'POPIA Compliance', href: '/info/popia' },
    ],
  },
];

// ── Social links ───────────────────────────────────────────────
export const socialLinks = [
  { platform: 'Facebook', url: 'https://www.facebook.com/OneDayOnly', icon: 'facebook' },
  { platform: 'Instagram', url: 'https://www.instagram.com/onedayonly', icon: 'instagram' },
  { platform: 'Twitter / X', url: 'https://x.com/onedayonly', icon: 'twitter' },
  { platform: 'TikTok', url: 'https://www.tiktok.com/@onedayonly', icon: 'tiktok' },
  { platform: 'YouTube', url: 'https://www.youtube.com/@onedayonly', icon: 'youtube' },
];
