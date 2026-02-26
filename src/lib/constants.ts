/* ============================================================
 * OneDayOnly Redesign - Application Constants
 * ============================================================ */

/** Site identity */
export const SITE_NAME = "OneDayOnly" as const;
export const SITE_DESCRIPTION =
  "South Africa's original daily deals site. New deals every day at up to 80% off." as const;
export const SITE_URL = "https://www.onedayonly.co.za" as const;

/** Product categories with metadata */
export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  dealCount: number;
}

export const CATEGORIES: Category[] = [
  {
    id: "cat-electronics",
    name: "Electronics",
    slug: "electronics",
    icon: "\u{1F4F1}",
    dealCount: 42,
  },
  {
    id: "cat-fashion",
    name: "Fashion",
    slug: "fashion",
    icon: "\u{1F45A}",
    dealCount: 67,
  },
  {
    id: "cat-home",
    name: "Home & Living",
    slug: "home-living",
    icon: "\u{1F3E0}",
    dealCount: 35,
  },
  {
    id: "cat-beauty",
    name: "Beauty & Health",
    slug: "beauty-health",
    icon: "\u{2728}",
    dealCount: 28,
  },
  {
    id: "cat-kids",
    name: "Kids & Baby",
    slug: "kids-baby",
    icon: "\u{1F9F8}",
    dealCount: 19,
  },
  {
    id: "cat-sports",
    name: "Sports & Outdoors",
    slug: "sports-outdoors",
    icon: "\u{26BD}",
    dealCount: 23,
  },
  {
    id: "cat-kitchen",
    name: "Kitchen & Appliances",
    slug: "kitchen-appliances",
    icon: "\u{1F373}",
    dealCount: 31,
  },
  {
    id: "cat-automotive",
    name: "Automotive",
    slug: "automotive",
    icon: "\u{1F697}",
    dealCount: 12,
  },
  {
    id: "cat-gaming",
    name: "Gaming",
    slug: "gaming",
    icon: "\u{1F3AE}",
    dealCount: 15,
  },
  {
    id: "cat-groceries",
    name: "Groceries & Household",
    slug: "groceries-household",
    icon: "\u{1F6D2}",
    dealCount: 24,
  },
] as const;

/** Social media links */
export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "facebook",
    url: "https://www.facebook.com/onedayonly",
    label: "Follow us on Facebook",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/onedayonly",
    label: "Follow us on Instagram",
  },
  {
    name: "twitter",
    url: "https://twitter.com/onedayonly",
    label: "Follow us on X (Twitter)",
  },
  {
    name: "tiktok",
    url: "https://www.tiktok.com/@onedayonly",
    label: "Follow us on TikTok",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/onedayonly",
    label: "Subscribe on YouTube",
  },
] as const;

/** Delivery & service constants */
export const DELIVERY_ESTIMATE = "3-7 business days" as const;
export const DELIVERY_FEE_CENTS = 9900 as const; // R99
export const FREE_DELIVERY_THRESHOLD_CENTS = 50000 as const; // R500
export const RETURN_DAYS = 30 as const;

/** Ratings & trust signals */
export const GOOGLE_RATING = 4.1 as const;
export const GOOGLE_REVIEW_COUNT = 12_400 as const;
export const TRUSTPILOT_RATING = 3.8 as const;

/** Deal timer */
export const DEAL_TIMEZONE = "Africa/Johannesburg" as const;
export const DEAL_RESET_HOUR = 0 as const; // Midnight SAST

/** Pagination defaults */
export const DEALS_PER_PAGE = 24 as const;
export const MAX_RECENTLY_VIEWED = 10 as const;

/** Navigation links */
export interface NavLink {
  name: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: "Today's Deals", href: "/" },
  { name: "All Deals", href: "/deals" },
  { name: "Categories", href: "/categories" },
  { name: "How It Works", href: "/how-it-works" },
] as const;

/** Footer link groups */
export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: "Shop",
    links: [
      { name: "Today's Deals", href: "/" },
      { name: "All Deals", href: "/deals" },
      { name: "Categories", href: "/categories" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "How It Works", href: "/how-it-works" },
      { name: "Delivery Info", href: "/delivery" },
      { name: "Returns & Refunds", href: "/returns" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
] as const;
