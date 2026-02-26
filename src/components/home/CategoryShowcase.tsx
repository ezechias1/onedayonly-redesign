"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { categories } from "@/data/categories";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Visual category grid for the homepage.
 *
 * Features:
 * - Section title "SHOP BY CATEGORY" with heading font
 * - Horizontal scrollable row of category cards
 * - Each card: rounded-card, emoji icon, name, deal count badge
 * - Hover: scale, shadow, subtle red tint
 * - Links to /category/[slug]
 */
export function CategoryShowcase() {
  return (
    <section className="w-full py-8 sm:py-12" aria-label="Shop by category">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide text-gray-900 dark:text-white mb-6">
          Shop by Category
        </h2>

        {/* Scrollable row */}
        <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className={cn(
                "group flex flex-col items-center flex-shrink-0",
                "w-28 sm:w-32 md:w-36",
                "rounded-card p-4 sm:p-5",
                "bg-white dark:bg-dark-surface",
                "border border-gray-100 dark:border-dark-border",
                "shadow-sm",
                "transition-all duration-300 ease-out",
                "hover:scale-105 hover:shadow-lg hover:bg-brand-red/5 dark:hover:bg-brand-red/10",
                "hover:border-brand-red/20",
                "snap-start"
              )}
            >
              {/* Emoji icon */}
              <span
                className="text-3xl sm:text-4xl mb-2 transition-transform duration-300 group-hover:scale-110"
                role="img"
                aria-hidden="true"
              >
                {category.icon}
              </span>

              {/* Category name */}
              <span className="text-xs sm:text-sm font-semibold text-center text-gray-800 dark:text-gray-200 leading-tight line-clamp-2">
                {category.name}
              </span>

              {/* Deal count */}
              <span
                className={cn(
                  "mt-2 inline-flex items-center justify-center",
                  "rounded-full px-2 py-0.5",
                  "text-[10px] font-bold",
                  "bg-brand-red/10 text-brand-red",
                  "group-hover:bg-brand-red group-hover:text-white",
                  "transition-colors duration-300"
                )}
              >
                {category.dealCount} deals
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryShowcase;
