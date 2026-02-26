"use client";

import { useState, FormEvent } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type FormState = "idle" | "submitting" | "success";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Newsletter email signup section.
 *
 * Features:
 * - Full-width section with gradient background (brand-red to dark)
 * - Heading, subtext, email input + subscribe button (pill shaped)
 * - Form states: idle -> submitting -> success message
 * - White text on gradient background
 */
export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || state === "submitting") return;

    setState("submitting");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setState("success");
    setEmail("");
  }

  return (
    <section
      className={cn(
        "w-full py-12 sm:py-16",
        "bg-gradient-to-br from-brand-red via-red-700 to-gray-900"
      )}
      aria-label="Newsletter signup"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
          <Mail className="h-7 w-7 text-white" />
        </div>

        {/* Heading */}
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
          Don&apos;t Miss a Deal!
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-white/80 max-w-md mb-8">
          Get daily deal alerts straight to your inbox. Be the first to know
          when the hottest deals drop.
        </p>

        {/* Form / Success */}
        {state === "success" ? (
          <div className="flex items-center gap-2 animate-fade-in">
            <CheckCircle className="h-5 w-5 text-green-300" />
            <span className="text-base sm:text-lg font-semibold text-white">
              You&apos;re in! Check your inbox
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md gap-2 sm:gap-0"
          >
            {/* Email input */}
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className={cn(
                  "w-full h-11 sm:h-12 px-4 sm:px-5",
                  "rounded-pill sm:rounded-r-none",
                  "bg-white/15 backdrop-blur-sm",
                  "border border-white/20",
                  "text-white placeholder:text-white/50",
                  "text-sm sm:text-base",
                  "outline-none focus:ring-2 focus:ring-white/40",
                  "transition-all duration-200"
                )}
                disabled={state === "submitting"}
              />
            </div>

            {/* Subscribe button */}
            <button
              type="submit"
              disabled={state === "submitting"}
              className={cn(
                "flex items-center justify-center gap-2",
                "h-11 sm:h-12 px-5 sm:px-7",
                "rounded-pill sm:rounded-l-none",
                "bg-white text-brand-red font-bold text-sm sm:text-base",
                "hover:bg-gray-100 active:bg-gray-200",
                "transition-all duration-200",
                "disabled:opacity-70 disabled:cursor-not-allowed",
                "whitespace-nowrap"
              )}
            >
              {state === "submitting" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-brand-red border-t-transparent" />
                  <span className="hidden sm:inline">Subscribing...</span>
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="h-4 w-4 hidden sm:block" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Fine print */}
        <p className="mt-4 text-[10px] sm:text-xs text-white/40">
          No spam. Unsubscribe anytime. We respect your inbox.
        </p>
      </div>
    </section>
  );
}

export default NewsletterSignup;
