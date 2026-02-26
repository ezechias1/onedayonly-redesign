"use client";

import { useState, type FormEvent } from "react";
import {
  Users,
  BadgeDollarSign,
  Megaphone,
  Banknote,
  ClipboardList,
  Handshake,
  Rocket,
  PackageCheck,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FormData {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  productCategory: string;
  website: string;
  description: string;
}

interface FormErrors {
  businessName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  description?: string;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const benefits = [
  {
    icon: Users,
    title: "500K+ Active Shoppers",
    description:
      "Tap into our massive, engaged audience of deal-hungry South Africans who visit every single day.",
  },
  {
    icon: BadgeDollarSign,
    title: "Zero Listing Fees",
    description:
      "No upfront costs to get started. We only earn when you earn, keeping your risk at zero.",
  },
  {
    icon: Megaphone,
    title: "Marketing Included",
    description:
      "Your products get featured across our email, social, and on-site campaigns at no extra charge.",
  },
  {
    icon: Banknote,
    title: "Fast Payouts",
    description:
      "We process supplier payments quickly so you can reinvest in stock and keep the deals coming.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Apply",
    description:
      "Fill out the form below with your business and product details. Our team reviews every application.",
  },
  {
    icon: Handshake,
    title: "Get Approved",
    description:
      "If you are a good fit, we will reach out to discuss terms, pricing, and logistics.",
  },
  {
    icon: Rocket,
    title: "Go Live",
    description:
      "Your deal goes live at midnight. Sit back and watch the orders roll in.",
  },
  {
    icon: PackageCheck,
    title: "Fulfill & Get Paid",
    description:
      "Ship the orders and receive your payout. Simple, transparent, and reliable.",
  },
];

const productCategories = [
  "Electronics & Gadgets",
  "Fashion & Apparel",
  "Beauty & Personal Care",
  "Home & Garden",
  "Kitchen & Appliances",
  "Health & Fitness",
  "Toys & Baby",
  "Automotive & DIY",
  "Food & Beverages",
  "Other",
];

const initialFormData: FormData = {
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  productCategory: "Electronics & Gadgets",
  website: "",
  description: "",
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.businessName.trim()) {
    errors.businessName = "Business name is required.";
  }
  if (!data.contactName.trim()) {
    errors.contactName = "Contact name is required.";
  }
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  }
  if (!data.description.trim()) {
    errors.description = "Please tell us about your products.";
  }

  return errors;
}

// ---------------------------------------------------------------------------
// FormField (local)
// ---------------------------------------------------------------------------

function FormField({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
        {label}
        {required && <span className="text-brand-red ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-brand-red">{error}</p>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function SellWithUsPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  }

  const inputClasses = cn(
    "w-full rounded-input border border-gray-300 dark:border-dark-border",
    "bg-white dark:bg-dark-surface",
    "px-4 py-2.5 text-sm text-gray-900 dark:text-white",
    "placeholder:text-gray-400",
    "focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20",
    "transition-colors"
  );

  return (
    <div className="bg-white dark:bg-dark-bg">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Sell With Us" }]} />
      </div>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Sell With{" "}
            <span className="text-brand-red">OneDayOnly</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-gray-300 leading-relaxed">
            Reach millions of deal-hungry shoppers and move stock faster than
            ever. Zero upfront costs, marketing included, and fast payouts.
          </p>
          <div className="mt-10">
            <Button
              as="a"
              href="#apply"
              size="lg"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white">
            Why Partner With Us?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-brand-grey dark:text-gray-400">
            Everything you need to sell faster and smarter.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <div
                key={`benefit-${i}`}
                className="rounded-card bg-gray-50 dark:bg-dark-surface p-6 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <b.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-heading text-base font-bold text-gray-900 dark:text-white">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-brand-grey dark:text-gray-400 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Become a Supplier ─────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-dark-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white">
            How to Become a Supplier
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-brand-grey dark:text-gray-400">
            Four simple steps from application to your first sale.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={`step-${i}`}
                className="relative rounded-card bg-white dark:bg-dark-bg p-6 text-center shadow-sm"
              >
                {/* Step number */}
                <span className="absolute top-3 right-4 font-heading text-4xl font-black text-gray-100 dark:text-dark-border select-none">
                  {i + 1}
                </span>

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-gray-900 dark:text-white">
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

      {/* ── Application Form ─────────────────────────────────────── */}
      <section id="apply" className="py-16 sm:py-20 scroll-mt-8">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white">
            Supplier Application
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-brand-grey dark:text-gray-400">
            Tell us about your business and products. Our partnerships team
            will be in touch.
          </p>

          <div className="mt-10">
            {submitted ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center rounded-card bg-gray-50 dark:bg-dark-surface p-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-bold text-gray-900 dark:text-white">
                  Application Received!
                </h3>
                <p className="mt-3 text-brand-grey dark:text-gray-400 max-w-sm">
                  Thank you for your interest in partnering with OneDayOnly.
                  Our team will review your application and get back to you
                  within 5 business days.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-8"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(initialFormData);
                    setErrors({});
                  }}
                >
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 rounded-card bg-gray-50 dark:bg-dark-surface p-6 sm:p-8"
              >
                {/* Business Name & Contact Name */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Business Name"
                    error={errors.businessName}
                    required
                  >
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Your Company (Pty) Ltd"
                      className={cn(
                        inputClasses,
                        errors.businessName && "border-brand-red"
                      )}
                    />
                  </FormField>

                  <FormField
                    label="Contact Name"
                    error={errors.contactName}
                    required
                  >
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={cn(
                        inputClasses,
                        errors.contactName && "border-brand-red"
                      )}
                    />
                  </FormField>
                </div>

                {/* Email & Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Email" error={errors.email} required>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.co.za"
                      className={cn(
                        inputClasses,
                        errors.email && "border-brand-red"
                      )}
                    />
                  </FormField>

                  <FormField label="Phone" error={errors.phone} required>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="012 345 6789"
                      className={cn(
                        inputClasses,
                        errors.phone && "border-brand-red"
                      )}
                    />
                  </FormField>
                </div>

                {/* Product Category & Website */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Product Category">
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      {productCategories.map((cat, i) => (
                        <option key={`cat-${i}`} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Website (optional)">
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yoursite.co.za"
                      className={inputClasses}
                    />
                  </FormField>
                </div>

                {/* Description */}
                <FormField
                  label="Tell us about your products"
                  error={errors.description}
                  required
                >
                  <textarea
                    name="description"
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="What types of products do you sell? What brands do you carry? What quantities can you supply?"
                    className={cn(
                      inputClasses,
                      "resize-none",
                      errors.description && "border-brand-red"
                    )}
                  />
                </FormField>

                {/* Submit */}
                <Button
                  type="submit"
                  size="md"
                  isLoading={isSubmitting}
                  rightIcon={<Send className="h-4 w-4" />}
                >
                  Submit Application
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
