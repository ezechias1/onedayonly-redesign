// ---------------------------------------------------------------------------
// Shared / site-wide types
// ---------------------------------------------------------------------------

/** Promotional banner displayed on the homepage or category pages */
export interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  backgroundColor?: string;
}

/** FAQ entry used on the help / support page */
export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

/** Global site configuration (loaded once at build / startup) */
export interface SiteConfig {
  companyName: string;
  tagline: string;
  socialLinks: { platform: string; url: string }[];
  contactEmail: string;
}
