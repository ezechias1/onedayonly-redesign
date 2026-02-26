"use client";

import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  ArrowRight,
  Smartphone,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { footerSections, socialLinks } from '@/data/navigation';
import { SITE_NAME } from '@/lib/constants';

// ---------------------------------------------------------------------------
// Social Icon Map
// ---------------------------------------------------------------------------

const socialIconMap: Record<string, React.ReactNode> = {
  facebook: <Facebook className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  tiktok: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z" />
    </svg>
  ),
  youtube: <Youtube className="w-5 h-5" />,
};

// ---------------------------------------------------------------------------
// Payment Badges
// ---------------------------------------------------------------------------

const paymentMethods = [
  { name: 'Visa', label: 'Visa' },
  { name: 'Mastercard', label: 'Mastercard' },
  { name: 'EFT', label: 'EFT' },
  { name: 'SnapScan', label: 'SnapScan' },
  { name: 'Ozow', label: 'Ozow' },
];

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export function Footer() {
  return (
    <footer
      className="bg-gray-900 dark:bg-black text-gray-400"
      role="contentinfo"
    >
      {/* ── Newsletter ── */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-white font-heading font-bold text-lg">
                Never miss a deal
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Subscribe for daily deal alerts and exclusive offers.
              </p>
            </div>
            <form
              className="flex w-full md:w-auto gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex-1 md:w-72">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
                  aria-hidden="true"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address for newsletter"
                  className={cn(
                    'w-full pl-10 pr-4 py-3',
                    'bg-gray-800 border border-gray-700 rounded-pill',
                    'text-white text-sm placeholder-gray-500',
                    'focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue',
                    'transition-colors duration-200',
                  )}
                />
              </div>
              <button
                type="submit"
                className={cn(
                  'flex items-center gap-2 px-6 py-3',
                  'bg-brand-red hover:bg-red-700 active:bg-red-800',
                  'text-white font-semibold text-sm rounded-pill',
                  'transition-colors duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900',
                  'shrink-0',
                )}
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Link Columns ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link, linkIndex) => (
                  <li key={`${section.title}-${linkIndex}-${link.href}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Social + Payment + App Download ── */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Social links */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 mr-2">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.platform}`}
                  className={cn(
                    'flex items-center justify-center w-10 h-10',
                    'rounded-full bg-gray-800 text-gray-400',
                    'hover:bg-brand-red hover:text-white',
                    'transition-all duration-200',
                  )}
                >
                  {socialIconMap[social.icon] ?? (
                    <span className="text-xs font-bold">{social.platform[0]}</span>
                  )}
                </a>
              ))}
            </div>

            {/* Payment methods */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="text-sm text-gray-500 mr-2">We accept:</span>
              {paymentMethods.map((method) => (
                <span
                  key={method.name}
                  className="px-3 py-1.5 text-xs font-semibold text-gray-300 bg-gray-800 rounded-md border border-gray-700"
                >
                  {method.label}
                </span>
              ))}
            </div>

            {/* App download */}
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-gray-500" aria-hidden="true" />
              <div className="flex gap-2">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold text-gray-300 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 transition-colors"
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold text-gray-300 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 transition-colors"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link href="/info/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/info/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/info/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
              <Link href="/info/popia" className="hover:text-white transition-colors">
                POPIA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
