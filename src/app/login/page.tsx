"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Chrome } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Login Page
// ---------------------------------------------------------------------------

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      if (!email || !password) {
        toast.error("Please fill in all fields");
        return;
      }
      toast.success("Welcome back! Redirecting...");
      setTimeout(() => router.push("/account"), 1000);
    } else {
      if (!name || !email || !password) {
        toast.error("Please fill in all fields");
        return;
      }
      toast.success("Account created! Redirecting...");
      setTimeout(() => router.push("/account"), 1000);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-gray-50 dark:bg-dark-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        {/* Logo / Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <span className="font-heading font-bold text-3xl">
              <span className="text-black dark:text-white">one</span>
              <span className="text-brand-red">day</span>
              <span className="text-black dark:text-white">only</span>
            </span>
          </Link>
          <h1 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
            {isLogin ? "Welcome back!" : "Create your account"}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {isLogin
              ? "Sign in to access your deals and orders."
              : "Join thousands of deal hunters across South Africa."}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-dark-surface rounded-card shadow-lg border border-gray-200 dark:border-dark-border p-6 sm:p-8">
          {/* Tab Toggle */}
          <div className="flex rounded-pill bg-gray-100 dark:bg-dark-border p-1 mb-6">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={cn(
                "flex-1 py-2.5 text-sm font-semibold rounded-pill transition-all duration-200",
                isLogin
                  ? "bg-white dark:bg-dark-surface text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
              )}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={cn(
                "flex-1 py-2.5 text-sm font-semibold rounded-pill transition-all duration-200",
                !isLogin
                  ? "bg-white dark:bg-dark-surface text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
              )}
            >
              Register
            </button>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button
              type="button"
              className={cn(
                "flex items-center justify-center gap-3 w-full py-3 rounded-pill",
                "border border-gray-200 dark:border-dark-border",
                "text-sm font-medium text-gray-700 dark:text-gray-200",
                "hover:bg-gray-50 dark:hover:bg-dark-border transition-colors",
              )}
            >
              <Chrome className="w-5 h-5" />
              Continue with Google
            </button>
            <button
              type="button"
              className={cn(
                "flex items-center justify-center gap-3 w-full py-3 rounded-pill",
                "bg-[#1877F2] hover:bg-[#166FE5] text-white",
                "text-sm font-medium transition-colors",
              )}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Continue with Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-dark-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-dark-surface px-3 text-gray-400">
                or continue with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name (register only) */}
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className={cn(
                    "w-full px-4 py-3 rounded-input",
                    "bg-gray-50 dark:bg-dark-border",
                    "border border-gray-200 dark:border-dark-border",
                    "text-sm text-gray-900 dark:text-white placeholder:text-gray-400",
                    "focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red",
                    "transition-all duration-200",
                  )}
                />
              </motion.div>
            )}

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-input",
                    "bg-gray-50 dark:bg-dark-border",
                    "border border-gray-200 dark:border-dark-border",
                    "text-sm text-gray-900 dark:text-white placeholder:text-gray-400",
                    "focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red",
                    "transition-all duration-200",
                  )}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                {isLogin && (
                  <Link
                    href="#"
                    className="text-xs text-brand-red hover:text-red-700 transition-colors"
                  >
                    Forgot password?
                  </Link>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className={cn(
                    "w-full pl-10 pr-12 py-3 rounded-input",
                    "bg-gray-50 dark:bg-dark-border",
                    "border border-gray-200 dark:border-dark-border",
                    "text-sm text-gray-900 dark:text-white placeholder:text-gray-400",
                    "focus:outline-none focus:ring-2 focus:ring-brand-red/50 focus:border-brand-red",
                    "transition-all duration-200",
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me (login only) */}
            {isLogin && (
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-brand-red focus:ring-brand-red"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Remember me
                </label>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className={cn(
                "flex items-center justify-center gap-2 w-full py-3 rounded-pill",
                "bg-brand-red hover:bg-red-700 active:bg-red-800",
                "text-white font-semibold text-sm",
                "transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2",
              )}
            >
              {isLogin ? "Sign In" : "Create Account"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Terms (register only) */}
          {!isLogin && (
            <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-4">
              By creating an account, you agree to our{" "}
              <Link href="/info/terms" className="text-brand-red hover:underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/info/privacy" className="text-brand-red hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          )}
        </div>

        {/* Bottom link */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          {isLogin ? (
            <>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-brand-red font-semibold hover:underline"
              >
                Register now
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-brand-red font-semibold hover:underline"
              >
                Sign in
              </button>
            </>
          )}
        </p>

        {/* Demo notice */}
        <div className="mt-6 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-xs text-blue-600 dark:text-blue-400 text-center">
            This is a demo — no real authentication is connected. This page
            showcases the redesigned login/register UI for {SITE_NAME}.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
