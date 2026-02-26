"use client";

import { useEffect, useState } from "react";
import { getTimeUntilMidnight, padZero, cn } from "@/lib/utils";
import { Clock } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function TimeUnit({
  value,
  label,
  isUrgent,
}: {
  value: string;
  label: string;
  isUrgent: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "relative flex items-center justify-center",
          "w-14 h-16 sm:w-16 sm:h-[4.5rem] md:w-20 md:h-22",
          "rounded-lg",
          "bg-gray-900 dark:bg-dark-surface",
          "shadow-lg",
          "overflow-hidden",
          isUrgent && "animate-pulse-red"
        )}
      >
        {/* Flip line through the middle */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-black/30 z-10" />

        {/* Top half highlight */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-white/[0.06] rounded-t-lg" />

        <span
          className={cn(
            "font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tabular-nums",
            isUrgent ? "text-brand-red" : "text-white"
          )}
        >
          {value}
        </span>
      </div>
      <span className="mt-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
        {label}
      </span>
    </div>
  );
}

function Separator({ isUrgent }: { isUrgent: boolean }) {
  return (
    <span
      className={cn(
        "font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold self-start mt-3 sm:mt-4 md:mt-5",
        isUrgent ? "text-brand-red" : "text-gray-400 dark:text-gray-500"
      )}
    >
      :
    </span>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Countdown timer strip showing time until midnight SAST.
 *
 * Features:
 * - Updates every second
 * - Three flip-style digit boxes for HH : MM : SS
 * - Urgent state: pulsing red animation when less than 1 hour remains
 * - Brand-red accent on digits
 * - Responsive full-width centered strip
 */
export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeUntilMidnight());

    const interval = setInterval(() => {
      setTimeLeft(getTimeUntilMidnight());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isUrgent = mounted && timeLeft.hours < 1;

  // Avoid hydration mismatch — render zeroes until mounted
  const displayHours = mounted ? padZero(timeLeft.hours) : "00";
  const displayMinutes = mounted ? padZero(timeLeft.minutes) : "00";
  const displaySeconds = mounted ? padZero(timeLeft.seconds) : "00";

  return (
    <section
      className={cn(
        "w-full py-6 sm:py-8",
        "bg-gray-50 dark:bg-dark-bg",
        "border-y border-gray-100 dark:border-dark-border"
      )}
      aria-label="Deal countdown timer"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4 sm:gap-5">
        {/* Heading */}
        <div className="flex items-center gap-2">
          <Clock
            className={cn(
              "h-5 w-5 sm:h-6 sm:w-6",
              isUrgent ? "text-brand-red" : "text-gray-500 dark:text-gray-400"
            )}
          />
          <h2
            className={cn(
              "font-heading text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider",
              isUrgent
                ? "text-brand-red"
                : "text-gray-700 dark:text-gray-300"
            )}
          >
            Today&apos;s Deals End In
          </h2>
        </div>

        {/* Timer digits */}
        <div className="flex items-center gap-2 sm:gap-3">
          <TimeUnit value={displayHours} label="Hours" isUrgent={isUrgent} />
          <Separator isUrgent={isUrgent} />
          <TimeUnit value={displayMinutes} label="Minutes" isUrgent={isUrgent} />
          <Separator isUrgent={isUrgent} />
          <TimeUnit value={displaySeconds} label="Seconds" isUrgent={isUrgent} />
        </div>

        {/* Urgency message */}
        {isUrgent && (
          <p className="text-xs sm:text-sm font-semibold text-brand-red animate-pulse">
            Hurry! Deals are ending soon!
          </p>
        )}
      </div>
    </section>
  );
}

export default CountdownTimer;
