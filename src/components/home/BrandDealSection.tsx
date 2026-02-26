"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductCard } from "@/components/product/ProductCard";
import type { Product, Brand } from "@/types/product";

// ---------------------------------------------------------------------------
// BrandDealSection — a single brand section with featured image + product grid
// ---------------------------------------------------------------------------

interface BrandDealSectionProps {
  brand: Brand;
  products: Product[];
  /** Whether to flip the layout (image on right instead of left) */
  reversed?: boolean;
}

export function BrandDealSection({ brand, products, reversed = false }: BrandDealSectionProps) {
  const displayProducts = products.slice(0, 6);
  const remainingCount = products.length - displayProducts.length;
  const featuredImage = brand.featuredImage ?? `https://picsum.photos/seed/${brand.slug}/600/400`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
      aria-label={`${brand.name} deals`}
    >
      {/* Brand header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading text-lg sm:text-xl font-extrabold uppercase tracking-wide text-gray-900 dark:text-white">
          {brand.name}
        </h2>
        {remainingCount > 0 && (
          <Link
            href={`/brand/${brand.slug}`}
            className="flex items-center gap-1 text-sm font-medium text-brand-red hover:underline"
          >
            Shop {remainingCount} more deal{remainingCount !== 1 ? "s" : ""}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>

      {/* Layout: featured image + product grid */}
      <div
        className={cn(
          "grid gap-4",
          "grid-cols-1 md:grid-cols-3",
          reversed && "md:[direction:rtl]"
        )}
      >
        {/* Featured brand image */}
        <div className={cn("md:col-span-1", reversed && "md:[direction:ltr]")}>
          <div className="relative w-full aspect-[3/2] md:aspect-auto md:h-full min-h-[200px] rounded-card overflow-hidden">
            <Image
              src={featuredImage}
              alt={`${brand.name} featured`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="font-heading text-xl font-bold text-white drop-shadow-lg">
                {brand.name}
              </span>
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className={cn("md:col-span-2", reversed && "md:[direction:ltr]")}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default BrandDealSection;
