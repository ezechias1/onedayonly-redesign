import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { categories } from "@/data/categories";
import { dealSections } from "@/data/deals";
import { products } from "@/data/products";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CategoryHeader } from "@/components/category/CategoryHeader";
import { CategoryPageClient } from "./CategoryPageClient";

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
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
    const category = categories.find((c) => c.slug === slug);
    if (!category) return { title: "Category Not Found" };

    return {
      title: `${category.name} Deals`,
      description: category.description,
    };
  });
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Gather deal sections for this category
  const categorySections = dealSections
    .filter((ds) => ds.categoryId === category.id)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  // Gather all products in this category
  const categoryProducts = products.filter(
    (p) => p.categoryId === category.id,
  );

  // Build a map of dealSection => products
  const sectionProducts = categorySections.map((section) => ({
    section,
    products: section.productIds
      .map((pid) => categoryProducts.find((p) => p.id === pid))
      .filter(Boolean) as typeof categoryProducts,
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: category.name }]}
      />

      {/* Category header */}
      <CategoryHeader category={category} className="mb-6" />

      {/* Client-side filtering / sorting wrapper */}
      <CategoryPageClient
        category={category}
        sectionProducts={sectionProducts}
        allProducts={categoryProducts}
      />
    </div>
  );
}
