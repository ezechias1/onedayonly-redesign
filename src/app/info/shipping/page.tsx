import type { Metadata } from "next";
import { Truck, MapPin, Clock, Package, CreditCard, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Shipping & Delivery",
  description:
    "Find out about OneDayOnly delivery timeframes, costs, areas, and tracking. We deliver nationwide across South Africa.",
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
// Page
// ---------------------------------------------------------------------------

export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Shipping & Delivery" }]} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Shipping & Delivery
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Everything you need to know about getting your deals delivered to your
          door.
        </p>
      </div>

      {/* Info sections */}
      <div className="space-y-6">
        {/* Delivery Timeframes */}
        <InfoBox icon={Clock} title="Delivery Timeframes">
          <p>
            Standard delivery takes <strong>5&ndash;10 working days</strong>{" "}
            from the date of purchase. Please note that delivery timeframes
            exclude weekends and public holidays.
          </p>
          <p>
            Orders placed before <strong>10:00 AM</strong> are typically
            dispatched within 1&ndash;2 business days. Large or bulky items may
            require an additional 2&ndash;3 working days.
          </p>
          <div className="mt-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-3">
            <p className="text-amber-800 dark:text-amber-200 text-xs">
              <strong>Peak periods:</strong> During sales events, Black Friday,
              and holiday periods, delivery times may be extended by 3&ndash;5
              additional working days.
            </p>
          </div>
        </InfoBox>

        {/* Delivery Costs */}
        <InfoBox icon={CreditCard} title="Delivery Costs">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-white dark:bg-dark-bg border border-gray-200 dark:border-dark-border p-4 text-center">
              <p className="text-2xl font-bold text-gray-900 dark:text-white font-heading">
                R99
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Standard delivery fee
              </p>
            </div>
            <div className="rounded-lg bg-brand-red/5 border border-brand-red/20 p-4 text-center">
              <p className="text-2xl font-bold text-brand-red font-heading">
                FREE
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                On orders over R500
              </p>
            </div>
          </div>
          <p className="mt-2">
            A flat delivery fee of <strong>R99</strong> is charged per order.
            Orders totalling <strong>R500 or more</strong> qualify for{" "}
            <strong>free standard delivery</strong> nationwide.
          </p>
        </InfoBox>

        {/* Delivery Areas */}
        <InfoBox icon={MapPin} title="Delivery Areas">
          <p>
            We deliver <strong>nationwide across South Africa</strong>, reaching
            all major cities, towns, and rural areas. Our delivery network
            covers:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-1 mt-2">
            <li>Gauteng (Johannesburg, Pretoria, Centurion)</li>
            <li>Western Cape (Cape Town, Stellenbosch, Paarl)</li>
            <li>KwaZulu-Natal (Durban, Pietermaritzburg)</li>
            <li>Eastern Cape (Port Elizabeth, East London)</li>
            <li>Free State, Mpumalanga, Limpopo, North West, Northern Cape</li>
          </ul>
          <p className="mt-2">
            Remote areas may experience slightly longer delivery times. We
            currently do not ship internationally.
          </p>
        </InfoBox>

        {/* Tracking */}
        <InfoBox icon={Truck} title="Tracking Your Order">
          <p>
            Once your order has been dispatched, you will receive a{" "}
            <strong>tracking number via email and SMS</strong>. You can use this
            number to track your parcel on our delivery partner&apos;s website.
          </p>
          <p>To track your order:</p>
          <ol className="list-decimal list-inside space-y-1 ml-1 mt-1">
            <li>Log in to your OneDayOnly account</li>
            <li>Navigate to &ldquo;My Orders&rdquo;</li>
            <li>Click on the relevant order to view tracking details</li>
            <li>Use the tracking link provided to follow your parcel</li>
          </ol>
          <p className="mt-2">
            Please allow 24&ndash;48 hours after dispatch for tracking
            information to become available.
          </p>
        </InfoBox>

        {/* Failed Deliveries */}
        <InfoBox icon={Package} title="Failed Deliveries">
          <p>
            If a delivery attempt is unsuccessful, our courier partner will
            attempt delivery up to <strong>3 times</strong>. After the third
            failed attempt, your parcel will be returned to our warehouse.
          </p>
          <p>Common reasons for failed deliveries include:</p>
          <ul className="list-disc list-inside space-y-1 ml-1 mt-1">
            <li>Incorrect or incomplete delivery address</li>
            <li>No one available to receive the parcel</li>
            <li>Restricted access to the delivery location</li>
            <li>Incorrect contact number</li>
          </ul>
          <div className="mt-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-3">
            <p className="text-blue-800 dark:text-blue-200 text-xs">
              <strong>Tip:</strong> Ensure your delivery address and contact
              details are up to date in your account settings to avoid delivery
              issues.
            </p>
          </div>
        </InfoBox>

        {/* Damaged or Missing Items */}
        <InfoBox icon={AlertTriangle} title="Damaged or Missing Items">
          <p>
            If your order arrives damaged or items are missing, please contact
            our support team within <strong>48 hours</strong> of receiving your
            delivery. Be sure to include:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-1 mt-1">
            <li>Your order number</li>
            <li>Photos of the damaged item(s) and packaging</li>
            <li>A description of the issue</li>
          </ul>
          <p className="mt-2">
            We will arrange a replacement or refund as quickly as possible.
            Contact us at{" "}
            <a
              href="mailto:support@onedayonly.co.za"
              className="text-brand-red hover:underline font-medium"
            >
              support@onedayonly.co.za
            </a>
          </p>
        </InfoBox>
      </div>
    </div>
  );
}
