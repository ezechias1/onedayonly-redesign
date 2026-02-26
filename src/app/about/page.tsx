import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  Tag,
  Truck,
  Sparkles,
  RefreshCcw,
  ShoppingBag,
  Headphones,
  Users,
  CalendarDays,
  Percent,
  LayoutGrid,
  Zap,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about OneDayOnly — South Africa's leading daily deals site. Discover how we bring you deals up to 80% off on top brands every single day.",
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const howItWorks = [
  {
    icon: Clock,
    title: "New Deals at Midnight",
    description:
      "Every night at 00:00 we wipe the slate clean and feature a whole new set of deals.",
  },
  {
    icon: Tag,
    title: "Shop Up to 80% Off",
    description:
      "You've got 24 hours to take advantage of crazy discounts on top brands.",
  },
  {
    icon: Truck,
    title: "Delivered to Your Door",
    description:
      "Your order will be delivered in 5-10 working days.",
  },
];

const benefits = [
  {
    icon: Sparkles,
    text: "Crazy deals and discounts — up to 80% off",
  },
  {
    icon: RefreshCcw,
    text: "New deals every single day",
  },
  {
    icon: ShoppingBag,
    text: "Huge variety of products",
  },
  {
    icon: Headphones,
    text: "Excellent customer service",
  },
];

const stats = [
  { icon: Users, value: "500K+", label: "Happy Customers" },
  { icon: CalendarDays, value: "10+", label: "Years" },
  { icon: Percent, value: "80%", label: "Off Daily" },
  { icon: LayoutGrid, value: "16", label: "Categories" },
];

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/OneDayOnly",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/OneDayOnly",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/onedayonly",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-dark-bg">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "About Us" }]} />
      </div>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            What is <span className="text-brand-red">OneDayOnly</span> all
            about?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-gray-300 leading-relaxed">
            We get our hands on everything from gadgets to groceries, slash
            their prices and then offer them to you for{" "}
            <span className="font-semibold text-white">one day only</span>.
          </p>
          <div className="mt-10">
            <Button as="a" href="/" size="lg">
              Shop Today&apos;s Deals
            </Button>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-brand-grey dark:text-gray-400">
            Three simple steps to score unbeatable deals.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {howItWorks.map((step, i) => (
              <div
                key={step.title}
                className="group relative rounded-card bg-gray-50 dark:bg-dark-surface p-8 text-center transition-shadow hover:shadow-lg"
              >
                {/* Step number */}
                <span className="absolute top-4 right-4 font-heading text-5xl font-black text-gray-200 dark:text-dark-border select-none">
                  {i + 1}
                </span>

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-heading text-lg font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-brand-grey dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's In It For You ──────────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-dark-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white">
            What&apos;s in it for you?
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.text}
                className="flex items-start gap-4 rounded-card bg-white dark:bg-dark-bg p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <b.icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white leading-relaxed pt-2.5">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────── */}
      <section className="bg-gray-900 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="mx-auto h-7 w-7 text-brand-red" />
                <p className="mt-3 font-heading text-3xl sm:text-4xl font-black text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AnotherDayOnly ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
              <CalendarDays className="h-8 w-8" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              AnotherDayOnly
            </h2>
            <p className="mt-4 text-brand-grey dark:text-gray-400 leading-relaxed">
              Once a month, we extend our daily-deal magic into a multi-day
              shopping event packed with even bigger savings. During{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                AnotherDayOnly
              </span>
              , you will find exclusive bundles, deeper discounts, and limited-edition
              deals that you will not find on any ordinary day. Keep an eye on
              your inbox and our social channels for the next event date.
            </p>
          </div>
        </div>
      </section>

      {/* ── Lunchtime Deals ───────────────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-dark-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
              <Zap className="h-8 w-8" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Lunchtime Deals
            </h2>
            <p className="mt-4 text-brand-grey dark:text-gray-400 leading-relaxed">
              Every day at{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                1:00 PM
              </span>{" "}
              we drop a fresh batch of flash deals on top of our midnight lineup.
              These lunchtime specials sell out fast, so set a reminder, check
              in during your break, and grab something great before it is gone.
              Same unbeatable pricing, same easy checkout, just a bonus round
              of savings to brighten your afternoon.
            </p>
          </div>
        </div>
      </section>

      {/* ── Social Links ──────────────────────────────────────────── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white">
            Follow Us
          </h2>
          <p className="mt-2 text-sm text-brand-grey dark:text-gray-400">
            Stay in the loop for the latest deals and updates.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-dark-surface text-brand-grey hover:bg-brand-red hover:text-white dark:hover:bg-brand-red transition-colors"
              >
                <s.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
