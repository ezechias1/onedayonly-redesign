"use client";

import { forwardRef } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

export const TabsRoot = TabsPrimitive.Root;

// ---------------------------------------------------------------------------
// List (tab bar)
// ---------------------------------------------------------------------------

export const TabsList = forwardRef<
  HTMLDivElement,
  TabsPrimitive.TabsListProps
>(function TabsList({ className, ...props }, ref) {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1",
        "border-b border-gray-200 dark:border-dark-border",
        "w-full",
        className,
      )}
      {...props}
    />
  );
});

// ---------------------------------------------------------------------------
// Trigger (individual tab)
// ---------------------------------------------------------------------------

export const TabsTrigger = forwardRef<
  HTMLButtonElement,
  TabsPrimitive.TabsTriggerProps
>(function TabsTrigger({ className, ...props }, ref) {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        // Base
        "relative inline-flex items-center justify-center",
        "px-4 py-2.5",
        "font-heading text-sm font-semibold",
        "whitespace-nowrap",
        // Colors
        "text-brand-grey dark:text-gray-400",
        "hover:text-gray-900 dark:hover:text-gray-200",
        // Active state
        "data-[state=active]:text-brand-red dark:data-[state=active]:text-brand-red",
        // Active indicator (underline)
        "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5",
        "after:scale-x-0 after:bg-brand-red after:transition-transform after:duration-200 after:ease-out",
        "data-[state=active]:after:scale-x-100",
        // Transitions
        "transition-colors duration-150",
        // Focus
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-inset",
        // Disabled
        "disabled:opacity-50 disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
});

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

export const TabsContent = forwardRef<
  HTMLDivElement,
  TabsPrimitive.TabsContentProps
>(function TabsContent({ className, ...props }, ref) {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        "mt-4",
        // Animation
        "data-[state=active]:animate-fade-in",
        // Focus
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
        "dark:focus-visible:ring-offset-dark-bg",
        className,
      )}
      {...props}
    />
  );
});

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

/**
 * Tabs component built on Radix UI Tabs.
 *
 * Features:
 * - Brand-red underline active indicator with scale animation
 * - Smooth content fade-in transition
 * - Full keyboard navigation (arrow keys, Home, End via Radix)
 * - Clean typography with Montserrat headings
 * - Dark mode support
 *
 * @example
 * ```tsx
 * <Tabs.Root defaultValue="deals">
 *   <Tabs.List>
 *     <Tabs.Trigger value="deals">Today's Deals</Tabs.Trigger>
 *     <Tabs.Trigger value="upcoming">Upcoming</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="deals">
 *     Deal cards here...
 *   </Tabs.Content>
 *   <Tabs.Content value="upcoming">
 *     Upcoming deals here...
 *   </Tabs.Content>
 * </Tabs.Root>
 * ```
 */
export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
};

export default Tabs;
