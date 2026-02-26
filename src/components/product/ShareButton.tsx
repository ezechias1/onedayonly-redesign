"use client";

import { useState, useRef, useEffect } from "react";
import { Share2, MessageCircle, Link as LinkIcon, X } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ShareButtonProps {
  url: string;
  title: string;
  className?: string;
}

// ---------------------------------------------------------------------------
// Social share icons (inline SVGs for Facebook and X/Twitter since
// lucide-react doesn't have branded icons)
// ---------------------------------------------------------------------------

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XTwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Share button with dropdown for social sharing.
 *
 * Options: WhatsApp (first -- this is South Africa!), Facebook, X/Twitter, Copy Link.
 */
export function ShareButton({ url, title, className }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareOptions = [
    {
      label: "WhatsApp",
      icon: <MessageCircle className="h-4 w-4" />,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: "text-green-600",
    },
    {
      label: "Facebook",
      icon: <FacebookIcon className="h-4 w-4" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "text-blue-600",
    },
    {
      label: "X / Twitter",
      icon: <XTwitterIcon className="h-4 w-4" />,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "text-gray-800 dark:text-gray-200",
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    } catch {
      toast.error("Failed to copy link");
    }
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={cn("relative inline-block", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-pill border border-gray-200 px-3 py-2 text-sm font-medium",
          "text-gray-600 transition-colors hover:bg-gray-50",
          "dark:border-dark-border dark:text-gray-400 dark:hover:bg-dark-surface",
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Share2 className="h-4 w-4" />
        Share
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className={cn(
            "absolute right-0 top-full z-30 mt-1 w-48 overflow-hidden rounded-card",
            "border border-gray-100 bg-white shadow-lg",
            "dark:border-dark-border dark:bg-dark-surface",
            "animate-fade-in",
          )}
        >
          {/* Close button */}
          <div className="flex justify-end px-2 pt-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="Close share menu"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="py-1">
            {shareOptions.map((opt) => (
              <a
                key={opt.label}
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-2.5 px-4 py-2 text-sm transition-colors hover:bg-gray-50 dark:hover:bg-dark-border",
                  opt.color,
                )}
              >
                {opt.icon}
                {opt.label}
              </a>
            ))}

            <button
              type="button"
              onClick={handleCopyLink}
              className="flex w-full items-center gap-2.5 px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-dark-border"
            >
              <LinkIcon className="h-4 w-4" />
              Copy Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShareButton;
