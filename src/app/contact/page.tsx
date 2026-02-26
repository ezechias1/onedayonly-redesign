"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
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
  name: string;
  email: string;
  orderNumber: string;
  category: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const categories = [
  "General",
  "Order Issue",
  "Returns",
  "Shipping",
  "Payment",
  "Other",
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
// Helpers
// ---------------------------------------------------------------------------

const initialFormData: FormData = {
  name: "",
  email: "",
  orderNumber: "",
  category: "General",
  message: "",
};

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

// ---------------------------------------------------------------------------
// Input component (local)
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

export default function ContactPage() {
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
    // Clear field error on change
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

    // Simulate API call
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
        <Breadcrumb items={[{ label: "Contact Us" }]} />
      </div>

      {/* ── Header ───────────────────────────────────────────────── */}
      <section className="pt-8 pb-4 sm:pt-12 sm:pb-6 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-brand-grey dark:text-gray-400">
            Have a question or need help with your order? We would love to
            hear from you.
          </p>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────────────── */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
            {/* ── Form (left) ──────────────────────────────────── */}
            <div className="lg:col-span-3">
              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center rounded-card bg-gray-50 dark:bg-dark-surface p-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="mt-6 font-heading text-2xl font-bold text-gray-900 dark:text-white">
                    Thanks for reaching out!
                  </h2>
                  <p className="mt-3 text-brand-grey dark:text-gray-400 max-w-sm">
                    We&apos;ll get back to you within 24 hours. Keep an eye on
                    your inbox.
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
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5 rounded-card bg-gray-50 dark:bg-dark-surface p-6 sm:p-8"
                >
                  {/* Name & Email row */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="Name" error={errors.name} required>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={cn(
                          inputClasses,
                          errors.name && "border-brand-red"
                        )}
                      />
                    </FormField>

                    <FormField label="Email" error={errors.email} required>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={cn(
                          inputClasses,
                          errors.email && "border-brand-red"
                        )}
                      />
                    </FormField>
                  </div>

                  {/* Order Number & Category row */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="Order Number (optional)">
                      <input
                        type="text"
                        name="orderNumber"
                        value={formData.orderNumber}
                        onChange={handleChange}
                        placeholder="e.g. ODO-123456"
                        className={inputClasses}
                      />
                    </FormField>

                    <FormField label="Category">
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className={inputClasses}
                      >
                        {categories.map((cat, i) => (
                          <option key={`cat-${i}`} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  {/* Message */}
                  <FormField label="Message" error={errors.message} required>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className={cn(
                        inputClasses,
                        "resize-none",
                        errors.message && "border-brand-red"
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
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* ── Contact Info (right) ─────────────────────────── */}
            <div className="lg:col-span-2 space-y-6">
              {/* Email card */}
              <div className="rounded-card bg-gray-50 dark:bg-dark-surface p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-gray-900 dark:text-white">
                      Email Us
                    </h3>
                    <a
                      href="mailto:support@onedayonly.co.za"
                      className="mt-0.5 block text-sm text-brand-blue hover:underline"
                    >
                      support@onedayonly.co.za
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours card */}
              <div className="rounded-card bg-gray-50 dark:bg-dark-surface p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-gray-900 dark:text-white">
                      Support Hours
                    </h3>
                    <p className="mt-0.5 text-sm text-brand-grey dark:text-gray-400">
                      Mon &ndash; Fri, 8:00 AM &ndash; 5:00 PM SAST
                    </p>
                  </div>
                </div>
              </div>

              {/* Social card */}
              <div className="rounded-card bg-gray-50 dark:bg-dark-surface p-6">
                <h3 className="font-heading text-sm font-bold text-gray-900 dark:text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex items-center gap-3">
                  {socialLinks.map((s, i) => (
                    <Link
                      key={`social-${i}`}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-dark-border text-brand-grey hover:bg-brand-red hover:text-white dark:hover:bg-brand-red transition-colors"
                    >
                      <s.icon className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* FAQ prompt */}
              <div className="rounded-card border border-dashed border-gray-300 dark:border-dark-border p-6 text-center">
                <p className="text-sm text-brand-grey dark:text-gray-400">
                  Looking for quick answers?
                </p>
                <Link
                  href="/faq"
                  className="mt-2 inline-block text-sm font-semibold text-brand-red hover:underline"
                >
                  Check our FAQ &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
