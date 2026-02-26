import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "OneDayOnly terms and conditions. Read our terms of use, order policies, delivery, returns, and intellectual property guidelines.",
};

// ---------------------------------------------------------------------------
// Section Component
// ---------------------------------------------------------------------------

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-baseline gap-3">
        <span className="text-brand-red font-bold">{number}.</span>
        {title}
      </h2>
      <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed space-y-3 pl-8">
        {children}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function TermsPage() {
  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "account-registration", label: "Account Registration" },
    { id: "orders-payment", label: "Orders & Payment" },
    { id: "delivery", label: "Delivery" },
    { id: "returns", label: "Returns & Refunds" },
    { id: "intellectual-property", label: "Intellectual Property" },
    { id: "limitation-liability", label: "Limitation of Liability" },
    { id: "changes-to-terms", label: "Changes to Terms" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Terms & Conditions" }]} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Terms & Conditions
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Last updated: 1 February 2026
        </p>
      </div>

      {/* Table of Contents */}
      <nav className="mb-10 rounded-xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6">
        <h2 className="font-heading text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
          Contents
        </h2>
        <ol className="grid gap-1.5 sm:grid-cols-2">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-red dark:hover:text-brand-red transition-colors"
              >
                <span className="text-brand-red font-medium">{i + 1}.</span>{" "}
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Sections */}
      <div className="space-y-10">
        <Section id="introduction" number="1" title="Introduction">
          <p>
            These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of
            the OneDayOnly website located at{" "}
            <strong>www.onedayonly.co.za</strong> (&ldquo;the Website&rdquo;)
            and any purchases made through it. By accessing or using the
            Website, you agree to be bound by these Terms.
          </p>
          <p>
            OneDayOnly (Pty) Ltd (&ldquo;OneDayOnly&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a company registered in
            the Republic of South Africa. These Terms are governed by the laws
            of South Africa, including the Electronic Communications and
            Transactions Act (ECTA) and the Consumer Protection Act (CPA).
          </p>
          <p>
            If you do not agree with any part of these Terms, please do not use
            our Website or services.
          </p>
        </Section>

        <Section id="account-registration" number="2" title="Account Registration">
          <p>
            To make purchases on OneDayOnly, you must create an account. When
            registering, you agree to:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your account information</li>
            <li>Keep your password confidential and secure</li>
            <li>Accept responsibility for all activity under your account</li>
            <li>Notify us immediately of any unauthorised use of your account</li>
          </ul>
          <p>
            You must be at least 18 years of age to create an account. We
            reserve the right to suspend or terminate accounts that violate
            these Terms or are used for fraudulent purposes.
          </p>
        </Section>

        <Section id="orders-payment" number="3" title="Orders & Payment">
          <p>
            All products listed on OneDayOnly are daily deals available for a
            limited time only. By placing an order, you make an offer to
            purchase the product(s) at the listed price. A binding agreement is
            formed only when we send you an order confirmation email.
          </p>
          <p><strong>Pricing:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>All prices are displayed in South African Rand (ZAR) and include VAT</li>
            <li>Prices are subject to change without notice until an order is confirmed</li>
            <li>We make every effort to ensure pricing accuracy, but errors may occur</li>
            <li>In the event of a pricing error, we reserve the right to cancel the order and issue a full refund</li>
          </ul>
          <p><strong>Payment methods accepted:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Visa and Mastercard (credit and debit)</li>
            <li>Instant EFT</li>
            <li>SnapScan and Zapper</li>
            <li>OneDayOnly store credit and gift vouchers</li>
          </ul>
          <p>
            All payments are processed securely through PCI-DSS compliant
            payment providers. OneDayOnly does not store your full card details.
          </p>
        </Section>

        <Section id="delivery" number="4" title="Delivery">
          <p>
            We deliver nationwide across South Africa. Standard delivery takes
            5&ndash;10 working days from the date of purchase.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>A flat delivery fee of R99 applies per order</li>
            <li>Orders over R500 qualify for free standard delivery</li>
            <li>Delivery timeframes are estimates and not guaranteed</li>
            <li>During peak periods, delivery times may be extended</li>
            <li>Risk of loss and title for items passes to you upon delivery</li>
          </ul>
          <p>
            For full details, please refer to our{" "}
            <a
              href="/info/shipping"
              className="text-brand-red hover:underline font-medium"
            >
              Shipping & Delivery
            </a>{" "}
            page.
          </p>
        </Section>

        <Section id="returns" number="5" title="Returns & Refunds">
          <p>
            We offer a 7-day return window from the date of delivery for most
            items, subject to our Returns Policy. Items must be unused, in
            original condition, and in their original packaging.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Refunds are processed within 5&ndash;7 business days of receiving the returned item</li>
            <li>Certain items are excluded from returns (see our Returns Policy for details)</li>
            <li>Damaged or defective items may be returned at any time within 6 months</li>
            <li>Return shipping costs are covered for damaged/defective items only</li>
          </ul>
          <p>
            For full details, please refer to our{" "}
            <a
              href="/info/returns"
              className="text-brand-red hover:underline font-medium"
            >
              Returns & Refunds
            </a>{" "}
            page.
          </p>
        </Section>

        <Section id="intellectual-property" number="6" title="Intellectual Property">
          <p>
            All content on the OneDayOnly website, including but not limited to
            text, graphics, logos, images, audio, video, software, and the
            compilation thereof, is the property of OneDayOnly or its content
            suppliers and is protected by South African and international
            copyright laws.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              The OneDayOnly name, logo, and all related names, logos, and
              slogans are trademarks of OneDayOnly (Pty) Ltd
            </li>
            <li>
              You may not reproduce, distribute, modify, or create derivative
              works from any content without prior written consent
            </li>
            <li>
              You are granted a limited, non-exclusive, non-transferable licence
              to access and use the Website for personal, non-commercial
              purposes only
            </li>
            <li>
              Any unauthorised use of our intellectual property may result in
              legal action
            </li>
          </ul>
        </Section>

        <Section id="limitation-liability" number="7" title="Limitation of Liability">
          <p>
            To the fullest extent permitted by South African law:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              OneDayOnly provides the Website and services on an &ldquo;as
              is&rdquo; and &ldquo;as available&rdquo; basis
            </li>
            <li>
              We do not warrant that the Website will be uninterrupted,
              error-free, or free from viruses or harmful components
            </li>
            <li>
              We shall not be liable for any indirect, incidental, special, or
              consequential damages arising from your use of the Website
            </li>
            <li>
              Our total liability for any claim shall not exceed the amount you
              paid for the product giving rise to the claim
            </li>
            <li>
              Nothing in these Terms excludes or limits liability that cannot be
              excluded by law, including liability under the Consumer Protection
              Act
            </li>
          </ul>
          <p>
            Product images are for illustrative purposes only and may differ
            slightly from the actual product. Product descriptions are provided
            by suppliers and, while we strive for accuracy, we do not guarantee
            their completeness.
          </p>
        </Section>

        <Section id="changes-to-terms" number="8" title="Changes to Terms">
          <p>
            We reserve the right to modify these Terms at any time. Changes will
            be effective immediately upon posting to the Website. We will
            indicate the date of the last update at the top of this page.
          </p>
          <p>
            Your continued use of the Website after changes are posted
            constitutes your acceptance of the modified Terms. We encourage you
            to review these Terms periodically.
          </p>
          <p>
            For material changes that significantly affect your rights, we will
            endeavour to notify you via email or a prominent notice on the
            Website.
          </p>
          <div className="mt-4 rounded-lg bg-gray-100 dark:bg-dark-bg border border-gray-200 dark:border-dark-border p-4">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              If you have any questions about these Terms & Conditions, please
              contact us at{" "}
              <a
                href="mailto:legal@onedayonly.co.za"
                className="text-brand-red hover:underline font-medium"
              >
                legal@onedayonly.co.za
              </a>{" "}
              or call us at 021 555 1234.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
