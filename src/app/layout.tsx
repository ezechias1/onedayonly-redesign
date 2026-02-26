import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { Providers } from "@/store/providers";
import { Header } from "@/components/layout/Header";
import { CategoryNav } from "@/components/layout/CategoryNav";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { BackToTop } from "@/components/layout/BackToTop";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SearchModal } from "@/components/search/SearchModal";
import "./globals.css";

// ---------------------------------------------------------------------------
// Fonts
// ---------------------------------------------------------------------------

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: {
    default: "OneDayOnly | SA's Best Daily Deals",
    template: "%s | OneDayOnly",
  },
  description:
    "South Africa's leading daily deals site. Up to 80% off top brands — new deals every day at midnight. Shop electronics, fashion, beauty, homeware and more.",
  keywords: [
    "OneDayOnly",
    "daily deals",
    "South Africa",
    "online shopping",
    "discounts",
    "flash sales",
    "electronics",
    "fashion",
    "beauty",
    "homeware",
  ],
  authors: [{ name: "OneDayOnly" }],
  creator: "OneDayOnly",
  metadataBase: new URL("https://www.onedayonly.co.za"),
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.onedayonly.co.za",
    siteName: "OneDayOnly",
    title: "OneDayOnly | SA's Best Daily Deals",
    description:
      "Up to 80% off top brands — new deals every day at midnight.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OneDayOnly | SA's Best Daily Deals",
    description:
      "Up to 80% off top brands — new deals every day at midnight.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0F0F" },
  ],
};

// ---------------------------------------------------------------------------
// Root Layout
// ---------------------------------------------------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${openSans.variable}`}
    >
      <body className="font-body antialiased bg-white dark:bg-dark-bg text-brand-grey dark:text-gray-200">
        <Providers>
          <AnnouncementBar />
          <Header />
          <CategoryNav />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <BackToTop />
          <CartDrawer />
          <SearchModal />
        </Providers>
      </body>
    </html>
  );
}
