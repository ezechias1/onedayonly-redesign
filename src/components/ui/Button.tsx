"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Variant & Size Maps
// ---------------------------------------------------------------------------

const variantStyles = {
  primary:
    "bg-brand-red text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-brand-red/50",
  secondary:
    "bg-brand-dark-grey text-white hover:bg-gray-700 active:bg-gray-800 focus-visible:ring-brand-dark-grey/50",
  outline:
    "border border-brand-grey text-brand-grey bg-transparent hover:bg-brand-grey/10 active:bg-brand-grey/20 focus-visible:ring-brand-grey/50",
  ghost:
    "bg-transparent text-brand-grey hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-dark-surface dark:active:bg-dark-border focus-visible:ring-brand-grey/50",
} as const;

const sizeStyles = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-base gap-2",
  lg: "h-[50px] px-8 text-lg gap-2.5",
} as const;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ButtonVariant = keyof typeof variantStyles;
export type ButtonSize = keyof typeof sizeStyles;

type ButtonBaseProps = {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Show a loading spinner and disable interaction */
  isLoading?: boolean;
  /** Content rendered before children */
  leftIcon?: React.ReactNode;
  /** Content rendered after children */
  rightIcon?: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: "button";
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: "a";
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

// ---------------------------------------------------------------------------
// Loading Spinner
// ---------------------------------------------------------------------------

function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn("animate-spin", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Polymorphic button component supporting `as="button"` (default) or `as="a"`.
 *
 * Features:
 * - Four visual variants: primary, secondary, outline, ghost
 * - Three sizes: sm, md, lg
 * - Loading state with spinner
 * - Left / right icon slots
 * - Pill shape (50px border-radius)
 * - Full keyboard and screen-reader accessibility
 */
export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    as = "button",
    variant = "primary",
    size = "md",
    isLoading = false,
    leftIcon,
    rightIcon,
    className,
    children,
    ...rest
  } = props;

  const sharedClasses = cn(
    // Base
    "inline-flex items-center justify-center font-semibold rounded-pill",
    "whitespace-nowrap select-none",
    // Transitions
    "transition-colors duration-200 ease-in-out",
    // Focus
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "dark:focus-visible:ring-offset-dark-bg",
    // Disabled / Loading
    "disabled:opacity-50 disabled:pointer-events-none",
    isLoading && "pointer-events-none opacity-70",
    // Variant & size
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (as === "a") {
    const { href, ...anchorRest } =
      rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={sharedClasses}
        {...anchorRest}
      >
        {isLoading ? <Spinner className="mr-2" /> : leftIcon}
        {children}
        {!isLoading && rightIcon}
      </a>
    );
  }

  const { type = "button", disabled, ...buttonRest } =
    rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled || isLoading}
      className={sharedClasses}
      aria-busy={isLoading || undefined}
      {...buttonRest}
    >
      {isLoading ? <Spinner className="mr-2" /> : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
