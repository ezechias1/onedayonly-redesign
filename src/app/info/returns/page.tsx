import type { Metadata } from "next";
import {
  RotateCcw,
  AlertCircle,
  CheckCircle,
  Clock,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Returns & Refunds",
  description:
    "OneDayOnly returns policy. Learn about our 7-day return window, refund processing, and how to initiate a return.",
};

// ---------------------------------------------------------------------------
// Info Box Component
// ---------------------------------------------------------------------------

function InfoBox({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-surface p-6 transition-colors">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Step Component
// ---------------------------------------------------------------------------

function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-red text-white text-xs font-bold">
        {number}
      </div>
      <div>
        <p className="font-medium text-gray-900 dark:text-white text-sm">
          {title}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">
          {description}
        </p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ReturnsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Returns" }]} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Returns & Refunds
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          We want you to love what you buy. If something isn&apos;t right,
          here&apos;s how we make it right.
        </p>
      </div>

      {/* Quick summary banner */}
      <div className="mb-8 rounded-xl bg-gradient-to-r from-brand-red to-red-600 p-6 text-white">
        <div className="grid gap-4 sm:grid-cols-3 text-center">
          <div>
            <p className="text-3xl font-bold font-heading">7</p>
            <p className="text-sm opacity-90">Day return window</p>
          </div>
          <div>
            <p className="text-3xl font-bold font-heading">5&ndash;7</p>
            <p className="text-sm opacity-90">Business days for refunds</p>
          </div>
          <div>
            <p className="text-3xl font-bold font-heading">100%</p>
            <p className="text-sm opacity-90">Hassle-free process</p>
          </div>
        </div>
      </div>

      {/* Info sections */}
      <div className="space-y-6">
        {/* Return Window */}
        <InfoBox icon={Clock} title="7-Day Return Window">
          <p>
            You may return most items within <strong>7 calendar days</strong> of
            receiving your order, provided the item is:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-1 mt-2">
            <li>Unused and in its original condition</li>
            <li>In its original packaging with all tags attached</li>
            <li>Accompanied by the original invoice or proof of purchase</li>
          </ul>
          <p className="mt-2">
            The 7-day period starts from the date you receive your delivery, not
            from the date of purchase.
          </p>
        </InfoBox>

        {/* How to Initiate */}
        <InfoBox icon={RotateCcw} title="How to Initiate a Return">
          <p className="mb-4">
            Follow these simple steps to start your return:
          </p>
          <div className="space-y-4">
            <Step
              number={1}
              title="Log into your account"
              description='Navigate to "My Orders" and select the order containing the item you wish to return.'
            />
            <Step
              number={2}
              title='Click "Request Return"'
              description="Select the item(s) you want to return and provide a reason for the return."
            />
            <Step
              number={3}
              title="Receive your return authorisation"
              description="We'll send you a return authorisation email with a prepaid shipping label and return instructions."
            />
            <Step
              number={4}
              title="Ship your item"
              description="Pack the item securely, attach the shipping label, and drop it off at your nearest courier collection point."
            />
            <Step
              number={5}
              title="Receive your refund"
              description="Once we've received and inspected your return, we'll process your refund within 5-7 business days."
            />
          </div>
        </InfoBox>

        {/* Refund Processing */}
        <InfoBox icon={CheckCircle} title="Refund Processing">
          <p>
            Once we receive and inspect your returned item, your refund will be
            processed within <strong>5&ndash;7 business days</strong>. Refunds
            are issued to the original payment method:
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg bg-white dark:bg-dark-bg border border-gray-200 dark:border-dark-border p-3">
              <p className="font-medium text-gray-900 dark:text-white text-sm">
                Credit/Debit Card
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                5&ndash;7 business days to reflect
              </p>
            </div>
            <div className="rounded-lg bg-white dark:bg-dark-bg border border-gray-200 dark:border-dark-border p-3">
              <p className="font-medium text-gray-900 dark:text-white text-sm">
                EFT / Instant EFT
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                3&ndash;5 business days to reflect
              </p>
            </div>
            <div className="rounded-lg bg-white dark:bg-dark-bg border border-gray-200 dark:border-dark-border p-3">
              <p className="font-medium text-gray-900 dark:text-white text-sm">
                Store Credit
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                Issued within 24 hours
              </p>
            </div>
            <div className="rounded-lg bg-white dark:bg-dark-bg border border-gray-200 dark:border-dark-border p-3">
              <p className="font-medium text-gray-900 dark:text-white text-sm">
                SnapScan / Zapper
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                3&ndash;5 business days to reflect
              </p>
            </div>
          </div>
        </InfoBox>

        {/* Not Eligible */}
        <InfoBox icon={AlertCircle} title="Items Not Eligible for Return">
          <p>
            The following items <strong>cannot</strong> be returned unless they
            are defective or damaged on arrival:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-1 mt-2">
            <li>Underwear, swimwear, and intimate apparel</li>
            <li>Pierced jewellery (earrings)</li>
            <li>Perishable goods (food, flowers, beverages)</li>
            <li>Personal care items (opened cosmetics, skincare, fragrances)</li>
            <li>Digital downloads and gift vouchers</li>
            <li>Customised or personalised items</li>
            <li>Items marked as &ldquo;non-returnable&rdquo; on the product page</li>
          </ul>
        </InfoBox>

        {/* Damaged / Defective */}
        <InfoBox icon={ShieldCheck} title="Damaged or Defective Items">
          <p>
            If you receive an item that is damaged, defective, or not what you
            ordered, we&apos;ll sort it out right away. In terms of the Consumer
            Protection Act (CPA), you are entitled to a replacement or full
            refund.
          </p>
          <p>To report a damaged or defective item:</p>
          <ul className="list-disc list-inside space-y-1 ml-1 mt-2">
            <li>
              Contact us within <strong>48 hours</strong> of receiving the item
            </li>
            <li>Provide your order number and photos of the damage/defect</li>
            <li>Do not discard the item or packaging</li>
          </ul>
          <div className="mt-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-3">
            <p className="text-green-800 dark:text-green-200 text-xs">
              For damaged or defective items, we cover the return shipping costs.
              Contact us at{" "}
              <a
                href="mailto:returns@onedayonly.co.za"
                className="font-medium underline"
              >
                returns@onedayonly.co.za
              </a>
            </p>
          </div>
        </InfoBox>

        {/* Contact */}
        <InfoBox icon={Mail} title="Need Help?">
          <p>
            If you have any questions about returns or refunds, our support team
            is here to help:
          </p>
          <ul className="mt-2 space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:returns@onedayonly.co.za"
                className="text-brand-red hover:underline font-medium"
              >
                returns@onedayonly.co.za
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+27215551234"
                className="text-brand-red hover:underline font-medium"
              >
                021 555 1234
              </a>{" "}
              (Mon&ndash;Fri, 08:00&ndash;17:00)
            </li>
          </ul>
        </InfoBox>
      </div>
    </div>
  );
}
