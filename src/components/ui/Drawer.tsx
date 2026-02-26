"use client";

import { forwardRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Re-exports
// ---------------------------------------------------------------------------

export const DrawerRoot = Dialog.Root;
export const DrawerTrigger = Dialog.Trigger;
export const DrawerClose = Dialog.Close;

// ---------------------------------------------------------------------------
// Overlay
// ---------------------------------------------------------------------------

const DrawerOverlayInner = forwardRef<
  HTMLDivElement,
  Dialog.DialogOverlayProps
>(function DrawerOverlayInner({ className, ...props }, ref) {
  return (
    <Dialog.Overlay ref={ref} asChild {...props}>
      <motion.div
        className={cn("fixed inset-0 z-50 bg-black/60 backdrop-blur-sm", className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
    </Dialog.Overlay>
  );
});

export const DrawerOverlay = DrawerOverlayInner;

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

export type DrawerSide = "left" | "right";

export interface DrawerContentProps extends Omit<Dialog.DialogContentProps, "children"> {
  /** Which edge the drawer slides in from. Defaults to "right". */
  side?: DrawerSide;
  /** Width Tailwind class. Defaults to "w-80". */
  width?: string;
  /** Show built-in close button. Defaults to true. */
  showClose?: boolean;
  children: React.ReactNode;
}

const slideVariants = {
  left: {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  },
  right: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  },
} as const;

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  function DrawerContent(
    {
      side = "right",
      width = "w-80",
      showClose = true,
      className,
      children,
      ...props
    },
    ref,
  ) {
    const variants = slideVariants[side];

    return (
      <Dialog.Portal forceMount>
        <AnimatePresence>
          <DrawerOverlay />
          <Dialog.Content ref={ref} asChild {...props}>
            <motion.div
              className={cn(
                "fixed top-0 z-50 h-full",
                side === "left" ? "left-0" : "right-0",
                width,
                "max-w-[90vw]",
                "bg-white dark:bg-dark-surface",
                "border-gray-200 dark:border-dark-border",
                side === "left" ? "border-r" : "border-l",
                "shadow-2xl",
                "flex flex-col",
                "focus:outline-none",
                className,
              )}
              initial={variants.initial}
              animate={variants.animate}
              exit={variants.exit}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Header with close button */}
              {showClose && (
                <div
                  className={cn(
                    "flex items-center justify-end p-4",
                    side === "left" && "flex-row-reverse",
                  )}
                >
                  <Dialog.Close
                    className={cn(
                      "inline-flex h-8 w-8 items-center justify-center rounded-full",
                      "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300",
                      "hover:bg-gray-100 dark:hover:bg-dark-border",
                      "transition-colors duration-150",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
                    )}
                    aria-label="Close drawer"
                  >
                    <X className="h-4 w-4" />
                  </Dialog.Close>
                </div>
              )}

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-4 pb-4">
                {children}
              </div>
            </motion.div>
          </Dialog.Content>
        </AnimatePresence>
      </Dialog.Portal>
    );
  },
);

// ---------------------------------------------------------------------------
// Title & Description (optional helpers)
// ---------------------------------------------------------------------------

export const DrawerTitle = forwardRef<
  HTMLHeadingElement,
  Dialog.DialogTitleProps
>(function DrawerTitle({ className, ...props }, ref) {
  return (
    <Dialog.Title
      ref={ref}
      className={cn(
        "font-heading text-lg font-bold text-gray-900 dark:text-gray-100",
        className,
      )}
      {...props}
    />
  );
});

export const DrawerDescription = forwardRef<
  HTMLParagraphElement,
  Dialog.DialogDescriptionProps
>(function DrawerDescription({ className, ...props }, ref) {
  return (
    <Dialog.Description
      ref={ref}
      className={cn(
        "mt-1 text-sm text-brand-grey dark:text-gray-400",
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
 * Slide-out drawer built on Radix UI Dialog + Framer Motion.
 *
 * Features:
 * - Slides in from left or right with spring animation
 * - Backdrop blur overlay with fade
 * - Built-in close button (X icon)
 * - Focus trapping and Escape key handling (via Radix)
 * - Title & Description helpers
 * - Dark mode support
 *
 * @example
 * ```tsx
 * <Drawer.Root>
 *   <Drawer.Trigger asChild>
 *     <Button>Menu</Button>
 *   </Drawer.Trigger>
 *   <Drawer.Content side="left">
 *     <Drawer.Title>Navigation</Drawer.Title>
 *     <nav>...</nav>
 *   </Drawer.Content>
 * </Drawer.Root>
 * ```
 */
export const Drawer = {
  Root: DrawerRoot,
  Trigger: DrawerTrigger,
  Close: DrawerClose,
  Content: DrawerContent,
  Overlay: DrawerOverlay,
  Title: DrawerTitle,
  Description: DrawerDescription,
};

export default Drawer;
