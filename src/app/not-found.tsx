import Link from "next/link";
import { ShoppingBag, Search, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Custom 404 Page
// ---------------------------------------------------------------------------

export default function NotFound() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center min-h-[70vh] py-20 text-center">
        {/* Shopping bag icon */}
        <div
          className={cn(
            "relative w-28 h-28 rounded-full flex items-center justify-center mb-8",
            "bg-red-50 dark:bg-red-950/30",
          )}
        >
          <ShoppingBag className="h-14 w-14 text-brand-red/60" />
          {/* Small "X" decoration */}
          <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-brand-red flex items-center justify-center">
            <span className="text-white text-xs font-bold">X</span>
          </div>
        </div>

        {/* 404 Number */}
        <h1
          className={cn(
            "font-heading text-8xl sm:text-9xl font-black tracking-tight",
            "text-brand-red",
            "leading-none mb-4",
          )}
        >
          404
        </h1>

        {/* Heading */}
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Aggenee! This page has expired
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 dark:text-gray-400 max-w-md mb-10 text-lg">
          Looks like this deal is gone, but there are plenty more to explore.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/">
            <Button
              variant="primary"
              size="lg"
              leftIcon={<ArrowLeft className="h-5 w-5" />}
            >
              Back to Today&apos;s Deals
            </Button>
          </Link>

          <Link
            href="/search"
            className={cn(
              "inline-flex items-center gap-2 text-gray-500 dark:text-gray-400",
              "hover:text-brand-red dark:hover:text-brand-red",
              "transition-colors duration-200 font-medium",
            )}
          >
            <Search className="h-4 w-4" />
            Search for deals
          </Link>
        </div>
      </div>
    </div>
  );
}
