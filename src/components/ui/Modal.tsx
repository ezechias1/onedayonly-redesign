"use client";

import { forwardRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Root (re-export for convenience)
// ---------------------------------------------------------------------------

export const ModalRoot = Dialog.Root;
export const ModalTrigger = Dialog.Trigger;
export const ModalPortal = Dialog.Portal;
export const ModalClose = Dialog.Close;

// ---------------------------------------------------------------------------
// Overlay
// ---------------------------------------------------------------------------

export const ModalOverlay = forwardRef<
  HTMLDivElement,
  Dialog.DialogOverlayProps
>(function ModalOverlay({ className, ...props }, ref) {
  return (
    <Dialog.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
        // Animation
        "data-[state=open]:animate-fade-in",
        "data-[state=closed]:animate-[fade-in_0.2s_ease-out_reverse]",
        className,
      )}
      {...props}
    />
  );
});

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

export interface ModalContentProps extends Dialog.DialogContentProps {
  /** Show the built-in close button (top-right X). Defaults to true. */
  showClose?: boolean;
  /** Max-width Tailwind class. Defaults to `max-w-lg`. */
  maxWidth?: string;
}

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  function ModalContent(
    { className, children, showClose = true, maxWidth = "max-w-lg", ...props },
    ref,
  ) {
    return (
      <Dialog.Portal>
        <ModalOverlay />
        <Dialog.Content
          ref={ref}
          className={cn(
            // Positioning
            "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
            // Sizing
            "w-[calc(100%-2rem)]",
            maxWidth,
            // Appearance
            "rounded-card bg-white dark:bg-dark-surface",
            "border border-gray-200 dark:border-dark-border",
            "shadow-xl",
            "p-6",
            // Animation
            "data-[state=open]:animate-slide-up",
            "data-[state=closed]:animate-[slide-up_0.2s_ease-out_reverse]",
            // Focus
            "focus:outline-none",
            className,
          )}
          {...props}
        >
          {children}
          {showClose && (
            <Dialog.Close
              className={cn(
                "absolute right-4 top-4",
                "inline-flex h-8 w-8 items-center justify-center rounded-full",
                "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300",
                "hover:bg-gray-100 dark:hover:bg-dark-border",
                "transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
              )}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Dialog.Close>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    );
  },
);

// ---------------------------------------------------------------------------
// Title
// ---------------------------------------------------------------------------

export const ModalTitle = forwardRef<
  HTMLHeadingElement,
  Dialog.DialogTitleProps
>(function ModalTitle({ className, ...props }, ref) {
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

// ---------------------------------------------------------------------------
// Description
// ---------------------------------------------------------------------------

export const ModalDescription = forwardRef<
  HTMLParagraphElement,
  Dialog.DialogDescriptionProps
>(function ModalDescription({ className, ...props }, ref) {
  return (
    <Dialog.Description
      ref={ref}
      className={cn(
        "mt-2 text-sm text-brand-grey dark:text-gray-400",
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
 * Modal dialog built on top of Radix UI Dialog.
 *
 * Features:
 * - Backdrop blur overlay with fade animation
 * - Content with slide-up animation
 * - Built-in close button (X icon via lucide-react)
 * - Title and Description slots
 * - Proper focus trapping and Escape key handling (via Radix)
 * - Dark mode support
 *
 * @example
 * ```tsx
 * <Modal.Root>
 *   <Modal.Trigger asChild>
 *     <Button>Open</Button>
 *   </Modal.Trigger>
 *   <Modal.Content>
 *     <Modal.Title>Heading</Modal.Title>
 *     <Modal.Description>Body text</Modal.Description>
 *   </Modal.Content>
 * </Modal.Root>
 * ```
 */
export const Modal = {
  Root: ModalRoot,
  Trigger: ModalTrigger,
  Portal: ModalPortal,
  Close: ModalClose,
  Overlay: ModalOverlay,
  Content: ModalContent,
  Title: ModalTitle,
  Description: ModalDescription,
};

export default Modal;
