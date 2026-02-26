"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Banner } from "@/types/common";

// ---------------------------------------------------------------------------
// PromoBanner — full-width promotional image block between brand sections
// ---------------------------------------------------------------------------

interface PromoBannerProps {
  banner: Banner;
}

export function PromoBanner({ banner }: PromoBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Link
        href={banner.ctaLink}
        className="group block relative w-full rounded-card overflow-hidden aspect-[16/5] sm:aspect-[16/4]"
      >
        <Image
          src={banner.image}
          alt={banner.title}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
          <h3 className="font-heading text-lg sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg max-w-lg">
            {banner.title}
          </h3>
          {banner.subtitle && (
            <p className="mt-1 text-xs sm:text-sm text-white/80 max-w-md line-clamp-2">
              {banner.subtitle}
            </p>
          )}
          <span className="mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white bg-brand-red px-4 py-2 rounded-pill w-fit group-hover:bg-red-700 transition-colors">
            {banner.ctaText}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default PromoBanner;
