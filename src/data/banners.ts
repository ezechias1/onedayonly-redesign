// ---------------------------------------------------------------------------
// Hero banner mock data for homepage and category pages
// ---------------------------------------------------------------------------

import { Banner } from '@/types/common';

export const banners: Banner[] = [
  {
    id: 'banner-another-day',
    title: 'AnotherDayOnly',
    subtitle: 'So nice, we had to deal it twice. Top deals brought back by popular demand.',
    ctaText: 'Shop Extra Time Deals',
    ctaLink: '/category/extra-time-deals',
    image: 'https://placehold.co/1440x520/1a1a2e/e94560/png?text=AnotherDayOnly%0ABack+by+Popular+Demand&font=montserrat',
    backgroundColor: '#1a1a2e',
  },
  {
    id: 'banner-flash-sale',
    title: 'Flash Sale — Up to 80% Off Electronics',
    subtitle: 'Bose, JBL, Samsung and more at prices that won\'t last. Today only.',
    ctaText: 'Shop Electronics',
    ctaLink: '/category/electronics',
    image: 'https://placehold.co/1440x520/e63946/ffffff/png?text=Flash+Sale%0AUp+to+80%25+Off+Electronics&font=montserrat',
    backgroundColor: '#e63946',
  },
  {
    id: 'banner-new-arrivals',
    title: 'New Arrivals — Fresh Deals Every Day',
    subtitle: 'Discover today\'s hand-picked deals across fashion, tech, home, and more.',
    ctaText: 'See What\'s New',
    ctaLink: '/',
    image: 'https://placehold.co/1440x520/457b9d/ffffff/png?text=New+Arrivals%0AFresh+Deals+Every+Day&font=montserrat',
    backgroundColor: '#457b9d',
  },
  {
    id: 'banner-free-delivery',
    title: 'Free Delivery on Orders Over R500',
    subtitle: 'Stock up and save — free standard shipping anywhere in South Africa.',
    ctaText: 'Start Shopping',
    ctaLink: '/',
    image: 'https://placehold.co/1440x520/2a9d8f/ffffff/png?text=Free+Delivery%0AOn+Orders+Over+R500&font=montserrat',
    backgroundColor: '#2a9d8f',
  },
];
