import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { formatPrice, formatDiscount } from "@/lib/utils";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ProductTabs } from "@/components/product/ProductTabs";
import { ProductDetailClient } from "./ProductDetailClient";

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
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
    const product = products.find((p) => p.slug === slug);
    if (!product) return { title: "Product Not Found" };

    const defaultImage = product.images.find((img) => img.isDefault);

    return {
      title: product.name,
      description: product.description.slice(0, 160),
      openGraph: {
        title: product.name,
        description: product.description.slice(0, 160),
        images: defaultImage ? [{ url: defaultImage.url }] : [],
      },
    };
  });
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const category = categories.find((c) => c.id === product.categoryId);

  // Related products: same category, exclude current, limit 8
  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 8);

  // Build breadcrumb
  const breadcrumbItems = [];
  if (category) {
    breadcrumbItems.push({
      label: category.name,
      href: `/category/${category.slug}`,
    });
  }
  breadcrumbItems.push({ label: product.shortName });

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Main content: gallery + info */}
      <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[55%_1fr]">
        {/* Left: Gallery (client component) + Right: Info (client component) */}
        <ProductDetailClient
          product={product}
          relatedProducts={relatedProducts}
        />
      </div>

      {/* Product Tabs */}
      <div className="mt-10 border-t border-gray-100 pt-8 dark:border-dark-border">
        <ProductTabs
          description={product.description}
          features={product.features}
          whatsInTheBox={product.whatsInTheBox}
        />
      </div>
    </div>
  );
}
