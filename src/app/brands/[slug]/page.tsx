import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

import { brands } from "@/data/brands";
import { products } from "@/data/products";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductGrid } from "@/components/product/ProductGrid";

// ---------------------------------------------------------------------------
// Static Params
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Metadata | Promise<Metadata> {
  return params.then(({ slug }) => {
    const brand = brands.find((b) => b.slug === slug);
    if (!brand) return { title: "Brand Not Found" };

    const dealCount = products.filter((p) => p.brand.slug === slug).length;
    return {
      title: `${brand.name} Deals`,
      description: `Shop ${dealCount} ${brand.name} deal${dealCount !== 1 ? "s" : ""} at up to 80% off on OneDayOnly. New deals daily.`,
    };
  });
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);

  if (!brand) {
    notFound();
  }

  const brandProducts = products.filter((p) => p.brand.slug === brand.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Brands", href: "/brands" },
          { label: brand.name },
        ]}
      />

      {/* Brand Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Brand logo */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gray-100 dark:bg-dark-surface border border-gray-200 dark:border-dark-border overflow-hidden">
          {brand.logo ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <ShoppingBag className="h-7 w-7 text-gray-400" />
          )}
        </div>
        <div>
          <h1 className="font-heading text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {brand.name}
          </h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {brandProducts.length}{" "}
            {brandProducts.length === 1 ? "deal" : "deals"} available today
          </p>
        </div>
      </div>

      {/* Products */}
      {brandProducts.length > 0 ? (
        <ProductGrid>
          {brandProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      ) : (
        <div className="text-center py-20">
          <ShoppingBag className="mx-auto h-16 w-16 text-gray-300 dark:text-gray-600 mb-4" />
          <h2 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No deals available
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
            There are no deals available for {brand.name} right now. Check back
            tomorrow &mdash; new deals drop every day at midnight!
          </p>
          <Link
            href="/brands"
            className="inline-flex items-center gap-2 rounded-pill bg-brand-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
          >
            Browse All Brands
          </Link>
        </div>
      )}
    </div>
  );
}
