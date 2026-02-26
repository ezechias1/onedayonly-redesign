"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

// ---------------------------------------------------------------------------
// Providers
// ---------------------------------------------------------------------------

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Client-side providers wrapper.
 *
 * Includes:
 * - `ThemeProvider` from next-themes for dark/light mode
 * - `Toaster` from sonner for toast notifications
 *
 * Zustand stores do **not** need a provider -- they are consumed directly
 * via their hooks.
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster
        position="bottom-right"
        richColors
        closeButton
        toastOptions={{
          duration: 3000,
          classNames: {
            toast: "font-sans",
          },
        }}
      />
    </ThemeProvider>
  );
}
