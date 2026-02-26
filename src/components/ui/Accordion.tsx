"use client";

import { forwardRef } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

export const AccordionRoot = AccordionPrimitive.Root;

// ---------------------------------------------------------------------------
// Item
// ---------------------------------------------------------------------------

export const AccordionItem = forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionItemProps
>(function AccordionItem({ className, ...props }, ref) {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(
        "border-b border-gray-200 dark:border-dark-border",
        className,
      )}
      {...props}
    />
  );
});

// ---------------------------------------------------------------------------
// Trigger (Header)
// ---------------------------------------------------------------------------

export interface AccordionTriggerProps
  extends AccordionPrimitive.AccordionTriggerProps {
  /** Hide the default chevron icon. Defaults to false. */
  hideChevron?: boolean;
}

export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(function AccordionTrigger({ className, children, hideChevron = false, ...props }, ref) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "group flex flex-1 items-center justify-between py-4",
          "font-heading text-sm font-semibold text-gray-900 dark:text-gray-100",
          "hover:text-brand-red dark:hover:text-brand-red",
          "transition-colors duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
          "dark:focus-visible:ring-offset-dark-bg",
          "[&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        {!hideChevron && (
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-brand-grey",
              "transition-transform duration-200 ease-in-out",
            )}
            aria-hidden="true"
          />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

export const AccordionContent = forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionContentProps
>(function AccordionContent({ className, children, ...props }, ref) {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden text-sm text-brand-grey dark:text-gray-400",
        // Radix handles open/close via data attributes; we use grid for smooth height animation.
        "data-[state=open]:animate-[accordion-down_0.2s_ease-out]",
        "data-[state=closed]:animate-[accordion-up_0.2s_ease-out]",
        className,
      )}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  );
});

// ---------------------------------------------------------------------------
// Compound export
// ---------------------------------------------------------------------------

/**
 * Accordion component built on Radix UI Accordion.
 *
 * Supports `type="single"` (one item open at a time) or `type="multiple"`
 * (many items open). The chevron icon rotates 180deg when open.
 *
 * Features:
 * - Smooth height animation
 * - Rotating chevron indicator
 * - Clean border styling
 * - Full keyboard navigation (via Radix)
 * - Dark mode support
 *
 * @example
 * ```tsx
 * <Accordion.Root type="single" collapsible>
 *   <Accordion.Item value="faq-1">
 *     <Accordion.Trigger>What is OneDayOnly?</Accordion.Trigger>
 *     <Accordion.Content>
 *       South Africa's leading daily deals site.
 *     </Accordion.Content>
 *   </Accordion.Item>
 * </Accordion.Root>
 * ```
 */
export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
};

export default Accordion;
