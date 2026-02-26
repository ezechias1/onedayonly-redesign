"use client";

import { useState, useCallback } from "react";
import { ShoppingCart, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import type { Product, Variant } from "@/types/product";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface AddToCartButtonProps {
  product: Product;
  variant?: Variant;
  quantity: number;
  className?: string;
}

type ButtonState = "idle" | "loading" | "success";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Animated add-to-cart CTA button.
 *
 * Text: "I want one!" (OneDayOnly's signature CTA).
 * States: idle -> loading (spinner) -> success (checkmark + "Added!").
 * After success, reverts to idle after 2 seconds.
 */
export function AddToCartButton({
  product,
  variant,
  quantity,
  className,
}: AddToCartButtonProps) {
  const [state, setState] = useState<ButtonState>("idle");
  const addItem = useCartStore((s) => s.addItem);
  const openDrawer = useCartStore((s) => s.openDrawer);

  const handleClick = useCallback(() => {
    if (state !== "idle") return;
    if (product.isSoldOut) return;

    setState("loading");

    // Simulate brief network delay for animation
    setTimeout(() => {
      addItem(product, variant, quantity);
      setState("success");
      openDrawer();
      toast.success("Added to cart!", {
        description: `${product.shortName} x${quantity}`,
      });

      // Revert to idle after 2 seconds
      setTimeout(() => {
        setState("idle");
      }, 2000);
    }, 600);
  }, [state, product, variant, quantity, addItem, openDrawer]);

  const isDisabled = product.isSoldOut;

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isDisabled || state !== "idle"}
      className={cn(
        "relative w-full rounded-pill py-4 text-lg font-bold text-white transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50 focus-visible:ring-offset-2",
        state === "idle" && !isDisabled && "bg-brand-red hover:bg-red-700 active:bg-red-800",
        state === "loading" && "bg-brand-red/80 cursor-wait",
        state === "success" && "bg-green-500",
        isDisabled && "cursor-not-allowed bg-gray-300 text-gray-500",
        className,
      )}
      aria-busy={state === "loading"}
    >
      <span className="inline-flex items-center gap-2">
        {state === "idle" && (
          <>
            <ShoppingCart className="h-5 w-5" />
            {isDisabled ? "Sold Out" : "I want one!"}
          </>
        )}
        {state === "loading" && (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Adding...
          </>
        )}
        {state === "success" && (
          <>
            <Check className="h-5 w-5" />
            Added!
          </>
        )}
      </span>
    </button>
  );
}

export default AddToCartButton;
