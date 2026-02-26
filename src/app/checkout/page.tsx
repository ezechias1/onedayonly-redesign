"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Lock,
  Truck,
  CreditCard,
  ChevronLeft,
  ShieldCheck,
  RotateCcw,
  Check,
  AlertTriangle,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import {
  useCartStore,
  selectTotalItems,
  selectSubtotal,
  selectTotalSavings,
} from "@/store/cart-store";
import { SITE_NAME } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const FREE_SHIPPING_THRESHOLD = 50000;
const SHIPPING_COST = 9900;

const breadcrumbItems = [
  { label: "Cart", href: "/cart" },
  { label: "Checkout" },
];

// ---------------------------------------------------------------------------
// Checkout Page
// ---------------------------------------------------------------------------

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const totalItems = useCartStore(selectTotalItems);
  const subtotal = useCartStore(selectSubtotal);
  const totalSavings = useCartStore(selectTotalSavings);

  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shipping = isFreeShipping ? 0 : SHIPPING_COST;
  const orderTotal = subtotal + shipping;

  const isEmpty = items.length === 0;

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    province: "gauteng",
    postalCode: "",
    phone: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    cardName: "",
  });

  const [step, setStep] = useState<"details" | "payment">("details");
  const [showDemoModal, setShowDemoModal] = useState(false);

  function updateField(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handlePlaceOrder(e: React.FormEvent) {
    e.preventDefault();
    setShowDemoModal(true);
  }

  if (isEmpty) {
    return (
      <div className="container mx-auto px-4 pb-16">
        <Breadcrumb items={breadcrumbItems} />
        <div className="py-20 text-center max-w-md mx-auto">
          <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-dark-surface flex items-center justify-center mx-auto mb-6">
            <CreditCard className="h-12 w-12 text-gray-300 dark:text-gray-600" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Nothing to Checkout
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Add some deals to your cart first!
          </p>
          <Link href="/">
            <Button variant="primary" size="lg">
              Browse Deals
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const inputCn = cn(
    "w-full px-4 py-3 rounded-input text-sm",
    "bg-gray-50 dark:bg-dark-border",
    "border border-gray-200 dark:border-dark-border",
    "text-gray-900 dark:text-white placeholder:text-gray-400",
    "focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red",
    "transition-all duration-200"
  );

  return (
    <div className="bg-gray-50 dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4 pb-16">
        <Breadcrumb items={breadcrumbItems} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/cart"
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Cart
            </Link>
          </div>

          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Checkout
          </h1>

          {/* Step indicator */}
          <div className="flex items-center gap-4 mb-8">
            <button
              type="button"
              onClick={() => setStep("details")}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                step === "details"
                  ? "text-brand-red"
                  : "text-gray-400 dark:text-gray-500"
              )}
            >
              <span
                className={cn(
                  "flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold",
                  step === "details"
                    ? "bg-brand-red text-white"
                    : step === "payment"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 dark:bg-dark-border text-gray-500"
                )}
              >
                {step === "payment" ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  "1"
                )}
              </span>
              Delivery Details
            </button>
            <div className="flex-1 h-px bg-gray-200 dark:bg-dark-border" />
            <button
              type="button"
              onClick={() => setStep("payment")}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                step === "payment"
                  ? "text-brand-red"
                  : "text-gray-400 dark:text-gray-500"
              )}
            >
              <span
                className={cn(
                  "flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold",
                  step === "payment"
                    ? "bg-brand-red text-white"
                    : "bg-gray-200 dark:bg-dark-border text-gray-500"
                )}
              >
                2
              </span>
              Payment
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
            {/* Left: Form */}
            <form onSubmit={handlePlaceOrder}>
              {step === "details" && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white dark:bg-dark-surface rounded-card border border-gray-200 dark:border-dark-border p-6"
                >
                  <h2 className="font-heading text-lg font-bold text-gray-900 dark:text-white mb-5">
                    Delivery Details
                  </h2>

                  {/* Contact */}
                  <div className="space-y-4 mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Contact Information
                    </h3>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className={inputCn}
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className={inputCn}
                      required
                    />
                  </div>

                  {/* Shipping address */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Shipping Address
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) =>
                          updateField("firstName", e.target.value)
                        }
                        className={inputCn}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) =>
                          updateField("lastName", e.target.value)
                        }
                        className={inputCn}
                        required
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Street address"
                      value={formData.address}
                      onChange={(e) => updateField("address", e.target.value)}
                      className={inputCn}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Apartment, suite, etc. (optional)"
                      value={formData.apartment}
                      onChange={(e) => updateField("apartment", e.target.value)}
                      className={inputCn}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => updateField("city", e.target.value)}
                        className={inputCn}
                        required
                      />
                      <select
                        value={formData.province}
                        onChange={(e) =>
                          updateField("province", e.target.value)
                        }
                        className={inputCn}
                      >
                        <option value="gauteng">Gauteng</option>
                        <option value="western-cape">Western Cape</option>
                        <option value="kwazulu-natal">KwaZulu-Natal</option>
                        <option value="eastern-cape">Eastern Cape</option>
                        <option value="free-state">Free State</option>
                        <option value="limpopo">Limpopo</option>
                        <option value="mpumalanga">Mpumalanga</option>
                        <option value="north-west">North West</option>
                        <option value="northern-cape">Northern Cape</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      placeholder="Postal code"
                      value={formData.postalCode}
                      onChange={(e) =>
                        updateField("postalCode", e.target.value)
                      }
                      className={inputCn}
                      required
                    />
                  </div>

                  {/* Delivery note */}
                  <div className="flex items-center gap-2 mt-6 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                    <Truck className="h-4 w-4 text-blue-500 shrink-0" />
                    <p className="text-xs text-blue-600 dark:text-blue-400">
                      Estimated delivery: 5-10 working days anywhere in South
                      Africa
                    </p>
                  </div>

                  <Button
                    type="button"
                    variant="primary"
                    size="lg"
                    className="w-full mt-6"
                    onClick={() => setStep("payment")}
                  >
                    Continue to Payment
                  </Button>
                </motion.div>
              )}

              {step === "payment" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white dark:bg-dark-surface rounded-card border border-gray-200 dark:border-dark-border p-6"
                >
                  <h2 className="font-heading text-lg font-bold text-gray-900 dark:text-white mb-5">
                    Payment
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Name on card
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.cardName}
                        onChange={(e) =>
                          updateField("cardName", e.target.value)
                        }
                        className={inputCn}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Card number
                      </label>
                      <div className="relative">
                        <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) =>
                            updateField("cardNumber", e.target.value)
                          }
                          className={cn(inputCn, "pl-10")}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Expiry date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={formData.cardExpiry}
                          onChange={(e) =>
                            updateField("cardExpiry", e.target.value)
                          }
                          className={inputCn}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          CVC
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          value={formData.cardCvc}
                          onChange={(e) =>
                            updateField("cardCvc", e.target.value)
                          }
                          className={inputCn}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Security badges */}
                  <div className="flex items-center gap-4 mt-6 mb-6">
                    <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
                      <Lock className="h-4 w-4" />
                      <span className="text-xs">SSL Encrypted</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
                      <ShieldCheck className="h-4 w-4" />
                      <span className="text-xs">PCI Compliant</span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Pay {formatPrice(orderTotal)}
                  </Button>

                  <button
                    type="button"
                    onClick={() => setStep("details")}
                    className="w-full text-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mt-3 transition-colors"
                  >
                    Back to Delivery Details
                  </button>
                </motion.div>
              )}
            </form>

            {/* Right: Order Summary */}
            <div className="lg:sticky lg:top-24 self-start">
              <div className="bg-white dark:bg-dark-surface rounded-card border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Order Summary ({totalItems}{" "}
                  {totalItems === 1 ? "item" : "items"})
                </h2>

                {/* Items preview */}
                <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-dark-border shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                        <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-[9px] font-bold text-white bg-gray-600 rounded-full">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {item.variantId ?? ""}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 shrink-0">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 dark:border-dark-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      Subtotal
                    </span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      Shipping
                    </span>
                    {isFreeShipping ? (
                      <span className="font-semibold text-green-600 dark:text-green-400">
                        FREE
                      </span>
                    ) : (
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        {formatPrice(shipping)}
                      </span>
                    )}
                  </div>
                  {totalSavings > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600 dark:text-green-400">
                        You save
                      </span>
                      <span className="font-semibold text-green-600 dark:text-green-400">
                        -{formatPrice(totalSavings)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center pt-4 mt-4 border-t border-gray-100 dark:border-dark-border">
                  <span className="text-base font-bold text-gray-900 dark:text-gray-100">
                    Total
                  </span>
                  <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {formatPrice(orderTotal)}
                  </span>
                </div>

                {/* Trust badges */}
                <div className="mt-5 flex items-center justify-center gap-4">
                  <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
                    <Lock className="h-3.5 w-3.5" />
                    <span className="text-[10px]">Secure</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span className="text-[10px]">Easy Returns</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
                    <Truck className="h-3.5 w-3.5" />
                    <span className="text-[10px]">SA Delivery</span>
                  </div>
                </div>
              </div>

              {/* Demo notice */}
              <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <p className="text-xs text-blue-600 dark:text-blue-400 text-center">
                  This is a demo checkout — no real payments are processed. This
                  showcases the redesigned checkout UI for {SITE_NAME}.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Demo Site Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowDemoModal(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative z-10 w-full max-w-md bg-white dark:bg-dark-surface rounded-card border border-gray-200 dark:border-dark-border shadow-2xl p-8 text-center"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setShowDemoModal(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-border transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-full bg-amber-100 dark:bg-amber-900/30">
              <AlertTriangle className="w-8 h-8 text-amber-500" />
            </div>

            {/* Title */}
            <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-3">
              This is just a demo site
            </h2>

            {/* Message */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              No real transactions can be processed on this site. This is a redesign showcase for OneDayOnly.co.za. No payment details are collected or stored.
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <Link href="/">
                <Button variant="primary" size="lg" className="w-full">
                  Back to Home
                </Button>
              </Link>
              <button
                type="button"
                onClick={() => setShowDemoModal(false)}
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                Continue browsing checkout
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
