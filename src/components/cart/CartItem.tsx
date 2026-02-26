"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { CartItem as CartItemType } from "@/types/cart";

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface CartItemProps {
  item: CartItemType;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function CartItem({ item }: CartItemProps) {
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  const lineTotal = item.price * item.quantity;

  const handleRemove = () => {
    removeItem(item.id);
    toast.success("Removed from cart", {
      description: item.name,
    });
  };

  const handleDecrement = () => {
    if (item.quantity <= 1) {
      handleRemove();
    } else {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  // Split name into product name and variant
  const nameParts = item.name.split(" - ");
  const productName = nameParts[0];
  const variantName = nameParts.length > 1 ? nameParts.slice(1).join(" - ") : null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0 }}
      transition={{ duration: 0.2 }}
      className="flex gap-3 py-4 border-b border-gray-100 dark:border-dark-border last:border-b-0"
    >
      {/* Thumbnail */}
      <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-dark-surface">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <p className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-wider">
          {item.brand}
        </p>
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate leading-tight mt-0.5">
          {productName}
        </p>
        {variantName && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {variantName}
          </p>
        )}

        {/* Quantity + Price Row */}
        <div className="flex items-center justify-between mt-2">
          {/* Quantity Stepper */}
          <div className="inline-flex items-center border border-gray-200 dark:border-dark-border rounded-pill overflow-hidden">
            <button
              onClick={handleDecrement}
              className={cn(
                "h-7 w-7 flex items-center justify-center",
                "text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-border",
                "transition-colors",
              )}
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-8 text-center text-sm font-medium text-gray-900 dark:text-gray-100">
              {item.quantity}
            </span>
            <button
              onClick={handleIncrement}
              className={cn(
                "h-7 w-7 flex items-center justify-center",
                "text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-border",
                "transition-colors",
              )}
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>

          {/* Line Total */}
          <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
            {formatPrice(lineTotal)}
          </span>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className={cn(
          "self-start shrink-0 p-1.5 rounded-full",
          "text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20",
          "transition-colors",
        )}
        aria-label={`Remove ${item.name} from cart`}
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </motion.div>
  );
}

export default CartItem;
