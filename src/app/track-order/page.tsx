"use client";

import { useState } from "react";
import { Package, Search, Truck, CheckCircle, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Demo tracking data
// ---------------------------------------------------------------------------

const demoSteps = [
  { label: "Order Placed", date: "20 Feb 2026, 09:15", done: true, icon: CheckCircle },
  { label: "Payment Confirmed", date: "20 Feb 2026, 09:16", done: true, icon: CheckCircle },
  { label: "Packed & Shipped", date: "21 Feb 2026, 14:30", done: true, icon: Package },
  { label: "In Transit", date: "23 Feb 2026, 08:00", done: true, icon: Truck },
  { label: "Out for Delivery", date: "25 Feb 2026", done: false, icon: MapPin },
  { label: "Delivered", date: "—", done: false, icon: CheckCircle },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [showTracking, setShowTracking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderNumber.trim()) {
      setShowTracking(true);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-dark-bg min-h-screen">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-2">
            Track Your Order
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Enter your order number to see the latest delivery status.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="e.g. ODO-78432"
                className={cn(
                  "w-full pl-11 pr-4 py-3 rounded-pill",
                  "bg-white dark:bg-dark-surface",
                  "border border-gray-200 dark:border-dark-border",
                  "text-sm text-gray-900 dark:text-white placeholder:text-gray-400",
                  "focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red",
                  "transition-all duration-200",
                )}
              />
            </div>
            <button
              type="submit"
              className={cn(
                "px-6 py-3 rounded-pill shrink-0",
                "bg-brand-red hover:bg-red-700 text-white font-semibold text-sm",
                "transition-colors",
              )}
            >
              Track
            </button>
          </form>

          {/* Tracking Result */}
          {showTracking && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-dark-surface rounded-card border border-gray-200 dark:border-dark-border p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-bold text-gray-900 dark:text-white">
                    Order {orderNumber || "ODO-78432"}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Estimated delivery: 25 – 27 Feb 2026
                  </p>
                </div>
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                  In Transit
                </span>
              </div>

              {/* Progress Steps */}
              <div className="relative ml-4">
                {demoSteps.map((step, i) => (
                  <div key={`step-${i}`} className="flex gap-4 pb-6 last:pb-0">
                    {/* Line + Dot */}
                    <div className="relative flex flex-col items-center">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10",
                          step.done
                            ? "bg-green-100 dark:bg-green-900/30"
                            : "bg-gray-100 dark:bg-dark-border",
                        )}
                      >
                        <step.icon
                          className={cn(
                            "w-4 h-4",
                            step.done
                              ? "text-green-600 dark:text-green-400"
                              : "text-gray-400",
                          )}
                        />
                      </div>
                      {i < demoSteps.length - 1 && (
                        <div
                          className={cn(
                            "absolute top-8 w-0.5 h-full",
                            step.done
                              ? "bg-green-300 dark:bg-green-700"
                              : "bg-gray-200 dark:bg-dark-border",
                          )}
                        />
                      )}
                    </div>

                    {/* Text */}
                    <div className="pt-1">
                      <p
                        className={cn(
                          "text-sm font-medium",
                          step.done
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-400 dark:text-gray-500",
                        )}
                      >
                        {step.label}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                        {step.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Demo Notice */}
              <div className="mt-6 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <p className="text-xs text-blue-600 dark:text-blue-400 text-center">
                  This is demo tracking data for {SITE_NAME} — no real orders are connected.
                </p>
              </div>
            </motion.div>
          )}

          {/* Help text */}
          {!showTracking && (
            <div className="text-center py-12">
              <Clock className="mx-auto w-12 h-12 text-gray-300 dark:text-gray-600 mb-4" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enter your order number above to get started.
                <br />
                You can find it in your order confirmation email.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
