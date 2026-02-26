"use client";

import { useState } from "react";
import { Gift, Mail, User, MessageSquare, CheckCircle, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const PRESET_AMOUNTS = [100, 250, 500, 1000] as const;
const MIN_AMOUNT = 50;
const MAX_AMOUNT = 5000;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function GiftVouchersPage() {
  const [selectedPreset, setSelectedPreset] = useState<number | "custom">(250);
  const [customAmount, setCustomAmount] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderName, setSenderName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sentTo, setSentTo] = useState("");

  // Computed amount
  const amount =
    selectedPreset === "custom"
      ? parseInt(customAmount, 10) || 0
      : selectedPreset;

  const isValidAmount =
    selectedPreset !== "custom" ||
    (amount >= MIN_AMOUNT && amount <= MAX_AMOUNT);

  const canSubmit =
    amount > 0 &&
    isValidAmount &&
    recipientEmail.trim().length > 0 &&
    recipientEmail.includes("@") &&
    senderName.trim().length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSentTo(recipientEmail.trim());
    setSuccess(true);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setSuccess(false);
    setSentTo("");
    setSelectedPreset(250);
    setCustomAmount("");
    setRecipientEmail("");
    setSenderName("");
    setMessage("");
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Gift Vouchers" }]} />

      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-red/10">
          <Gift className="h-8 w-8 text-brand-red" />
        </div>
        <h1 className="font-heading text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Gift Vouchers
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
          Give the gift of choice. Let them pick from thousands of daily deals
          on South Africa&apos;s favourite deals site.
        </p>
      </div>

      {/* Success State */}
      {success ? (
        <div className="mx-auto max-w-md text-center py-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Voucher Sent!
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-2">
            A <strong className="text-gray-900 dark:text-white">R{amount.toLocaleString("en-ZA")}</strong>{" "}
            OneDayOnly gift voucher has been sent to
          </p>
          <p className="text-brand-red font-semibold text-lg mb-8">{sentTo}</p>
          <Button onClick={handleReset} variant="primary" size="lg">
            Send Another Voucher
          </Button>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left: Form */}
          <div className="lg:col-span-3 space-y-8">
            {/* Amount Selection */}
            <div>
              <h2 className="font-heading text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Select Amount
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {PRESET_AMOUNTS.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setSelectedPreset(preset)}
                    className={cn(
                      "rounded-xl border-2 py-3 px-2 text-center font-heading font-bold transition-all",
                      selectedPreset === preset
                        ? "border-brand-red bg-brand-red/5 text-brand-red"
                        : "border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500"
                    )}
                  >
                    R{preset.toLocaleString("en-ZA")}
                  </button>
                ))}
                <button
                  onClick={() => setSelectedPreset("custom")}
                  className={cn(
                    "rounded-xl border-2 py-3 px-2 text-center font-heading font-semibold text-sm transition-all",
                    selectedPreset === "custom"
                      ? "border-brand-red bg-brand-red/5 text-brand-red"
                      : "border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500"
                  )}
                >
                  Custom
                </button>
              </div>

              {/* Custom amount input */}
              {selectedPreset === "custom" && (
                <div className="mt-4">
                  <label
                    htmlFor="custom-amount"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Enter amount (R{MIN_AMOUNT} &ndash; R{MAX_AMOUNT.toLocaleString("en-ZA")})
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">
                      R
                    </span>
                    <input
                      id="custom-amount"
                      type="number"
                      min={MIN_AMOUNT}
                      max={MAX_AMOUNT}
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder={`${MIN_AMOUNT}`}
                      className={cn(
                        "w-full rounded-xl border border-gray-200 dark:border-dark-border",
                        "bg-white dark:bg-dark-surface pl-8 pr-4 py-3 text-sm",
                        "text-gray-900 dark:text-white placeholder-gray-400",
                        "focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red",
                        "transition-colors",
                        !isValidAmount && customAmount
                          ? "border-red-400 focus:ring-red-400/50"
                          : ""
                      )}
                    />
                  </div>
                  {!isValidAmount && customAmount && (
                    <p className="mt-1.5 text-xs text-red-500">
                      Please enter an amount between R{MIN_AMOUNT} and R{MAX_AMOUNT.toLocaleString("en-ZA")}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Recipient Details */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="font-heading text-lg font-semibold text-gray-900 dark:text-white">
                Recipient Details
              </h2>

              {/* Recipient Email */}
              <div>
                <label
                  htmlFor="recipient-email"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  <Mail className="h-4 w-4" />
                  Recipient Email <span className="text-brand-red">*</span>
                </label>
                <input
                  id="recipient-email"
                  type="email"
                  required
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  placeholder="friend@email.com"
                  className={cn(
                    "w-full rounded-xl border border-gray-200 dark:border-dark-border",
                    "bg-white dark:bg-dark-surface px-4 py-3 text-sm",
                    "text-gray-900 dark:text-white placeholder-gray-400",
                    "focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red",
                    "transition-colors"
                  )}
                />
              </div>

              {/* Sender Name */}
              <div>
                <label
                  htmlFor="sender-name"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  <User className="h-4 w-4" />
                  Your Name <span className="text-brand-red">*</span>
                </label>
                <input
                  id="sender-name"
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Your name"
                  className={cn(
                    "w-full rounded-xl border border-gray-200 dark:border-dark-border",
                    "bg-white dark:bg-dark-surface px-4 py-3 text-sm",
                    "text-gray-900 dark:text-white placeholder-gray-400",
                    "focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red",
                    "transition-colors"
                  )}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="voucher-message"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  <MessageSquare className="h-4 w-4" />
                  Message{" "}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  id="voucher-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Happy birthday! Treat yourself to something special."
                  maxLength={200}
                  className={cn(
                    "w-full rounded-xl border border-gray-200 dark:border-dark-border",
                    "bg-white dark:bg-dark-surface px-4 py-3 text-sm",
                    "text-gray-900 dark:text-white placeholder-gray-400",
                    "focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red",
                    "transition-colors resize-none"
                  )}
                />
                <p className="mt-1 text-xs text-gray-400 text-right">
                  {message.length}/200
                </p>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                isLoading={isSubmitting}
                disabled={!canSubmit}
                leftIcon={<CreditCard className="h-5 w-5" />}
              >
                Purchase Voucher &mdash; R{amount > 0 ? amount.toLocaleString("en-ZA") : "0"}
              </Button>
            </form>
          </div>

          {/* Right: Preview Card */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <h2 className="font-heading text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Preview
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-dark-border">
                {/* Card top - gradient */}
                <div className="relative bg-gradient-to-br from-brand-red via-red-600 to-red-800 px-6 py-10 text-center text-white">
                  {/* Decorative circles */}
                  <div className="absolute top-4 left-4 h-20 w-20 rounded-full bg-white/5" />
                  <div className="absolute bottom-2 right-6 h-12 w-12 rounded-full bg-white/5" />
                  <div className="absolute top-12 right-4 h-6 w-6 rounded-full bg-white/10" />

                  <Gift className="mx-auto h-10 w-10 mb-3 opacity-90" />
                  <p className="font-heading text-sm font-semibold uppercase tracking-widest opacity-80">
                    OneDayOnly
                  </p>
                  <p className="font-heading text-lg font-bold mt-1">
                    Gift Voucher
                  </p>
                  <div className="mt-4">
                    <p className="font-heading text-5xl font-black tracking-tight">
                      R{amount > 0 ? amount.toLocaleString("en-ZA") : "0"}
                    </p>
                  </div>
                </div>

                {/* Card bottom - details */}
                <div className="bg-white dark:bg-dark-surface p-6 space-y-3">
                  {senderName && (
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-gray-400 shrink-0">From:</span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {senderName}
                      </span>
                    </div>
                  )}
                  {recipientEmail && (
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-gray-400 shrink-0">To:</span>
                      <span className="text-gray-900 dark:text-white font-medium truncate">
                        {recipientEmail}
                      </span>
                    </div>
                  )}
                  {message && (
                    <div className="border-t border-gray-100 dark:border-dark-border pt-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        &ldquo;{message}&rdquo;
                      </p>
                    </div>
                  )}
                  {!senderName && !recipientEmail && !message && (
                    <p className="text-xs text-gray-400 text-center py-2">
                      Fill in the form to preview your voucher
                    </p>
                  )}
                </div>
              </div>

              {/* Extra info */}
              <div className="mt-4 space-y-2">
                <p className="text-xs text-gray-400 flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 shrink-0 text-green-500 mt-0.5" />
                  Voucher is delivered instantly via email
                </p>
                <p className="text-xs text-gray-400 flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 shrink-0 text-green-500 mt-0.5" />
                  Valid for 3 years from date of purchase
                </p>
                <p className="text-xs text-gray-400 flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 shrink-0 text-green-500 mt-0.5" />
                  Redeemable on any OneDayOnly deal
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
