"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  X,
  ShoppingBag,
  Truck,
  RotateCcw,
  CreditCard,
  UserCircle,
  MessageCircle,
} from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Category icons
// ---------------------------------------------------------------------------

const categoryIcons: Record<string, React.ElementType> = {
  Orders: ShoppingBag,
  "Shipping & Delivery": Truck,
  Returns: RotateCcw,
  Payments: CreditCard,
  Account: UserCircle,
};

// Category display order
const categoryOrder = [
  "Orders",
  "Shipping & Delivery",
  "Returns",
  "Payments",
  "Account",
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function FAQPage() {
  const [query, setQuery] = useState("");

  // Filter FAQs by search query
  const filteredFAQs = useMemo(() => {
    if (!query.trim()) return faqItems;
    const lower = query.toLowerCase();
    return faqItems.filter(
      (item) =>
        item.question.toLowerCase().includes(lower) ||
        item.answer.toLowerCase().includes(lower)
    );
  }, [query]);

  // Group filtered FAQs by category (preserving order)
  const groupedFAQs = useMemo(() => {
    const groups: Record<string, typeof faqItems> = {};
    for (const cat of categoryOrder) {
      const items = filteredFAQs.filter((item) => item.category === cat);
      if (items.length > 0) {
        groups[cat] = items;
      }
    }
    return groups;
  }, [filteredFAQs]);

  const hasResults = Object.keys(groupedFAQs).length > 0;

  return (
    <div className="bg-white dark:bg-dark-bg">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "FAQ" }]} />
      </div>

      {/* ── Header ───────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-brand-grey dark:text-gray-400">
            Find quick answers to common questions about orders, shipping,
            returns, payments, and your account.
          </p>

          {/* Search */}
          <div className="relative mx-auto mt-8 max-w-lg">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={cn(
                "w-full rounded-pill border border-gray-300 dark:border-dark-border",
                "bg-white dark:bg-dark-surface",
                "py-3 pl-12 pr-12 text-sm text-gray-900 dark:text-white",
                "placeholder:text-gray-400",
                "focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20",
                "transition-colors"
              )}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Clear search"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ Groups ───────────────────────────────────────────── */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {hasResults ? (
            <div className="space-y-12">
              {Object.entries(groupedFAQs).map(([category, items]) => {
                const Icon = categoryIcons[category] || ShoppingBag;
                return (
                  <div key={category}>
                    {/* Category heading */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                        {category}
                      </h2>
                    </div>

                    {/* Accordion */}
                    <Accordion.Root type="single" collapsible>
                      {items.map((item) => (
                        <Accordion.Item key={item.id} value={item.id}>
                          <Accordion.Trigger>{item.question}</Accordion.Trigger>
                          <Accordion.Content>
                            {item.answer}
                          </Accordion.Content>
                        </Accordion.Item>
                      ))}
                    </Accordion.Root>
                  </div>
                );
              })}
            </div>
          ) : (
            /* No results */
            <div className="py-16 text-center">
              <Search className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600" />
              <p className="mt-4 font-heading text-lg font-semibold text-gray-900 dark:text-white">
                No matching questions found
              </p>
              <p className="mt-2 text-sm text-brand-grey dark:text-gray-400">
                Try a different search term or browse all categories.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-6"
                onClick={() => setQuery("")}
              >
                Clear Search
              </Button>
            </div>
          )}

          {/* ── Still Need Help ─────────────────────────────────── */}
          <div className="mt-16 rounded-card bg-gray-50 dark:bg-dark-surface p-8 sm:p-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
              <MessageCircle className="h-7 w-7" />
            </div>
            <h3 className="mt-4 font-heading text-xl font-bold text-gray-900 dark:text-white">
              Can&apos;t find your answer?
            </h3>
            <p className="mt-2 text-sm text-brand-grey dark:text-gray-400">
              Our support team is happy to help. Reach out and we will get
              back to you within 24 hours.
            </p>
            <Link href="/contact" className="mt-6 inline-block">
              <Button size="md">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
