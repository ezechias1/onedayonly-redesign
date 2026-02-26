"use client";

import { CheckCircle, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs } from "@/components/ui/Tabs";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ProductTabsProps {
  description: string;
  features: string[];
  whatsInTheBox: string[];
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Product information tabs: About, Features, and What's in the Box.
 *
 * Uses the Radix-based Tabs UI component with brand-red active indicator.
 */
export function ProductTabs({
  description,
  features,
  whatsInTheBox,
  className,
}: ProductTabsProps) {
  return (
    <Tabs.Root defaultValue="about" className={cn("w-full", className)}>
      <Tabs.List>
        <Tabs.Trigger value="about">About</Tabs.Trigger>
        <Tabs.Trigger value="features">Features</Tabs.Trigger>
        <Tabs.Trigger value="box">What&apos;s in the Box</Tabs.Trigger>
      </Tabs.List>

      {/* About */}
      <Tabs.Content value="about">
        <div className="prose prose-sm max-w-none text-gray-600 dark:text-gray-400">
          {description.split("\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Tabs.Content>

      {/* Features */}
      <Tabs.Content value="features">
        {features.length > 0 ? (
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400">No features listed.</p>
        )}
      </Tabs.Content>

      {/* What's in the Box */}
      <Tabs.Content value="box">
        {whatsInTheBox.length > 0 ? (
          <ul className="space-y-2">
            {whatsInTheBox.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Package className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400">No contents listed.</p>
        )}
      </Tabs.Content>
    </Tabs.Root>
  );
}

export default ProductTabs;
