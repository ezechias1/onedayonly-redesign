import { cn } from "@/lib/utils";
import type { Category } from "@/types/product";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CategoryHeaderProps {
  category: Category;
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Category page hero header.
 *
 * Displays the category name, deal count, and a subtle gradient background
 * with the category emoji rendered as a large faded watermark.
 */
export function CategoryHeader({ category, className }: CategoryHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-card",
        "bg-gradient-to-br from-gray-50 via-white to-gray-100",
        "dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface",
        "px-6 py-10 sm:px-10 sm:py-14",
        className,
      )}
    >
      {/* Faded emoji watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -top-4 select-none text-[10rem] leading-none opacity-[0.07] sm:text-[14rem]"
      >
        {category.icon}
      </span>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="font-heading text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          {category.name}
        </h1>

        <p className="mt-2 text-base text-brand-grey dark:text-gray-400">
          {category.dealCount} deals available today
        </p>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-500 dark:text-gray-500">
          {category.description}
        </p>
      </div>
    </section>
  );
}

export default CategoryHeader;
