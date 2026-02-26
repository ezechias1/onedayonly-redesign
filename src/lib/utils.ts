import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using clsx and tailwind-merge.
 * Handles conditional classes, arrays, and resolves
 * Tailwind conflicts (e.g. `p-4` + `p-2` = `p-2`).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a price in cents to South African Rand (ZAR).
 * Uses "R" prefix with thousand separators and no decimals.
 *
 * @param cents - Price in cents (e.g. 123400 = R1,234)
 * @returns Formatted price string like "R1,234"
 *
 * @example
 * formatPrice(99900)  // "R999"
 * formatPrice(123456) // "R1,234"
 * formatPrice(0)      // "R0"
 */
export function formatPrice(cents: number): string {
  const rands = Math.round(cents / 100);
  return `R${rands.toLocaleString("en-ZA")}`;
}

/**
 * Formats a discount percentage for display.
 * Always returns a negative percentage string.
 *
 * @param discount - Discount as a whole number (e.g. 81 for 81%)
 * @returns Formatted discount string like "-81%"
 *
 * @example
 * formatDiscount(81)  // "-81%"
 * formatDiscount(5)   // "-5%"
 * formatDiscount(100) // "-100%"
 */
export function formatDiscount(discount: number): string {
  return `-${Math.round(Math.abs(discount))}%`;
}

/**
 * Calculates the time remaining until midnight (South African time, UTC+2).
 * Used for the deal countdown timer.
 *
 * @returns Object with hours, minutes, and seconds until midnight SAST
 *
 * @example
 * const { hours, minutes, seconds } = getTimeUntilMidnight();
 * // { hours: 5, minutes: 23, seconds: 41 }
 */
export function getTimeUntilMidnight(): {
  hours: number;
  minutes: number;
  seconds: number;
} {
  // Get current time in SAST (UTC+2)
  const now = new Date();
  const saTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Africa/Johannesburg" })
  );

  const midnight = new Date(saTime);
  midnight.setHours(24, 0, 0, 0);

  const diffMs = midnight.getTime() - saTime.getTime();

  // Guard against negative values (edge case around midnight)
  if (diffMs <= 0) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { hours, minutes, seconds };
}

/**
 * Generates a simple random ID string.
 * Suitable for UI keys and temporary identifiers.
 * NOT suitable for cryptographic purposes.
 *
 * @param length - Length of the ID (default: 12)
 * @returns Random alphanumeric string
 *
 * @example
 * generateId()   // "a3f8k2m9x1b4"
 * generateId(8)  // "k9m2x1b4"
 */
export function generateId(length: number = 12): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Calculates the discount percentage between original and sale price.
 *
 * @param originalCents - Original price in cents
 * @param saleCents - Sale price in cents
 * @returns Discount percentage as a whole number
 *
 * @example
 * calculateDiscount(100000, 19000) // 81
 */
export function calculateDiscount(
  originalCents: number,
  saleCents: number
): number {
  if (originalCents <= 0) return 0;
  return Math.round(((originalCents - saleCents) / originalCents) * 100);
}

/**
 * Pads a number with a leading zero if it is a single digit.
 * Useful for formatting countdown timer values.
 *
 * @param num - Number to pad
 * @returns Zero-padded string
 *
 * @example
 * padZero(5)  // "05"
 * padZero(12) // "12"
 */
export function padZero(num: number): string {
  return num.toString().padStart(2, "0");
}
