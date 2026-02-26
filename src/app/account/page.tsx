"use client";

import Link from "next/link";
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Bell,
  LogOut,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const menuItems = [
  {
    icon: Package,
    label: "My Orders",
    description: "Track and manage your orders",
    href: "/account",
    badge: "3",
  },
  {
    icon: Heart,
    label: "Wishlist",
    description: "Your saved deals",
    href: "/wishlist",
  },
  {
    icon: MapPin,
    label: "Addresses",
    description: "Manage delivery addresses",
    href: "/account",
  },
  {
    icon: CreditCard,
    label: "Payment Methods",
    description: "Saved cards and payment options",
    href: "/account",
  },
  {
    icon: Bell,
    label: "Notifications",
    description: "Deal alerts and order updates",
    href: "/account",
    badge: "5",
  },
  {
    icon: User,
    label: "Profile Settings",
    description: "Update your personal info",
    href: "/account",
  },
];

const recentOrders = [
  {
    id: "ODO-78432",
    date: "22 Feb 2026",
    total: 1299,
    status: "Delivered",
    statusColor: "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20",
    items: 2,
  },
  {
    id: "ODO-77891",
    date: "18 Feb 2026",
    total: 3499,
    status: "In Transit",
    statusColor: "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20",
    items: 1,
  },
  {
    id: "ODO-76220",
    date: "10 Feb 2026",
    total: 649,
    status: "Delivered",
    statusColor: "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20",
    items: 3,
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function AccountPage() {
  return (
    <div className="bg-gray-50 dark:bg-dark-bg min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-white">
            My Account
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your orders, profile, and preferences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column — Profile Card + Menu */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="bg-white dark:bg-dark-surface rounded-card border border-gray-200 dark:border-dark-border p-6 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-brand-red" />
              </div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Deal Hunter
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                deals@example.com
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                Member since Feb 2026
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-dark-border flex items-center justify-center gap-6">
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900 dark:text-white">12</p>
                  <p className="text-xs text-gray-500">Orders</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900 dark:text-white">8</p>
                  <p className="text-xs text-gray-500">Wishlist</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-brand-red">R4,200</p>
                  <p className="text-xs text-gray-500">Saved</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Menu */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-dark-surface rounded-card border border-gray-200 dark:border-dark-border overflow-hidden"
            >
              {menuItems.map((item, i) => (
                <Link
                  key={`menu-${i}`}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-5 py-4 transition-colors",
                    "hover:bg-gray-50 dark:hover:bg-dark-border",
                    i < menuItems.length - 1 &&
                      "border-b border-gray-100 dark:border-dark-border",
                  )}
                >
                  <item.icon className="w-5 h-5 text-gray-400 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 truncate">
                      {item.description}
                    </p>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs font-bold bg-brand-red text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-gray-300 shrink-0" />
                </Link>
              ))}

              {/* Sign out */}
              <Link
                href="/login"
                className="flex items-center gap-3 px-5 py-4 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
              >
                <LogOut className="w-5 h-5 text-brand-red shrink-0" />
                <span className="text-sm font-medium text-brand-red">
                  Sign Out
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column — Recent Orders */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-white dark:bg-dark-surface rounded-card border border-gray-200 dark:border-dark-border"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-dark-border">
                <h3 className="font-heading font-bold text-gray-900 dark:text-white">
                  Recent Orders
                </h3>
                <Link
                  href="/account"
                  className="text-sm text-brand-red hover:underline font-medium"
                >
                  View all
                </Link>
              </div>

              <div className="divide-y divide-gray-100 dark:divide-dark-border">
                {recentOrders.map((order, i) => (
                  <div
                    key={`order-${i}`}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-dark-border/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-dark-border flex items-center justify-center shrink-0">
                      <ShoppingBag className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {order.id}
                        </p>
                        <span
                          className={cn(
                            "px-2 py-0.5 text-xs font-semibold rounded-full",
                            order.statusColor,
                          )}
                        >
                          {order.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                        {order.date} &middot; {order.items}{" "}
                        {order.items === 1 ? "item" : "items"}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white shrink-0">
                      R{order.total.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <Link
                href="/"
                className={cn(
                  "flex items-center gap-4 p-5 rounded-card",
                  "bg-gradient-to-br from-brand-red to-red-700",
                  "text-white hover:shadow-lg transition-shadow",
                )}
              >
                <ShoppingBag className="w-8 h-8 opacity-80" />
                <div>
                  <p className="font-bold">Browse Today&apos;s Deals</p>
                  <p className="text-sm opacity-80">New deals every midnight</p>
                </div>
              </Link>
              <Link
                href="/wishlist"
                className={cn(
                  "flex items-center gap-4 p-5 rounded-card",
                  "bg-gradient-to-br from-brand-blue to-blue-700",
                  "text-white hover:shadow-lg transition-shadow",
                )}
              >
                <Heart className="w-8 h-8 opacity-80" />
                <div>
                  <p className="font-bold">Your Wishlist</p>
                  <p className="text-sm opacity-80">Don&apos;t miss your saved deals</p>
                </div>
              </Link>
            </motion.div>

            {/* Demo Notice */}
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <p className="text-xs text-blue-600 dark:text-blue-400 text-center">
                This is a demo account page — no real data is connected. This
                showcases the redesigned account UI for {SITE_NAME}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
