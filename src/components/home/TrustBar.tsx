import { Tag, Clock, Truck, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const trustItems = [
  {
    icon: Tag,
    text: "Up to 80% Off Daily",
  },
  {
    icon: Clock,
    text: "New Deals at Midnight",
  },
  {
    icon: Truck,
    text: "5-10 Day Delivery",
  },
  {
    icon: RotateCcw,
    text: "Easy Returns",
  },
] as const;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Trust indicators strip showing key value propositions.
 *
 * Features:
 * - Horizontal row of 4 items with icon + text
 * - Responsive grid: 2 cols on mobile, 4 cols on md+
 * - Light gray background, centered items
 */
export function TrustBar() {
  return (
    <section
      className={cn(
        "w-full py-6 sm:py-8",
        "bg-gray-50 dark:bg-dark-surface",
        "border-y border-gray-100 dark:border-dark-border"
      )}
      aria-label="Why shop with us"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`trust-${i}`}
                className="flex flex-col items-center text-center gap-2"
              >
                <div
                  className={cn(
                    "flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center",
                    "rounded-full",
                    "bg-brand-red/10 dark:bg-brand-red/20",
                    "text-brand-red"
                  )}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;
