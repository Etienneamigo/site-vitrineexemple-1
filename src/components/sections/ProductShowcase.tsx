"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import ParallaxImage from "@/components/ui/ParallaxImage";
import RevealText from "@/components/ui/RevealText";

const products = [
  {
    name: "La Veste Studio",
    tagline: "Structured elegance for every pose",
    price: "€285",
    href: "/product/jacket",
    src: "/products/jacket/black/1.jpg",
    alt: "La Veste Studio — ÉLUA structured jacket",
  },
  {
    name: "Le Pantalon Flow",
    tagline: "Fluid precision from studio to street",
    price: "€195",
    href: "/product/pants",
    src: "/products/pants/black/1.jpg",
    alt: "Le Pantalon Flow — ÉLUA performance pants",
  },
];

export default function ProductShowcase() {
  return (
    <section className="relative bg-brand-black py-32 md:py-48 px-8 md:px-16 lg:px-24">
      {/* Section label */}
      <FadeIn delay={0} direction="up" distance={20}>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-brand-rose mb-6">
          02 — Collection
        </p>
      </FadeIn>

      <RevealText
        as="h2"
        className="font-display text-brand-white text-4xl md:text-6xl lg:text-7xl tracking-[-0.02em] mb-16 md:mb-24"
        delay={0.1}
      >
        The Essentials
      </RevealText>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {products.map((product, i) => (
          <FadeIn key={product.name} delay={0.2 + i * 0.2} direction="up" distance={40}>
            <Link href={product.href} className="group block">
              {/* Image container */}
              <motion.div
                className="relative overflow-hidden rounded-sm mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <ParallaxImage
                  src={product.src}
                  alt={product.alt}
                  className="w-full"
                  speed={0.1}
                  aspectRatio="3/4"
                />
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-brand-rose/0 group-hover:bg-brand-rose/5 transition-colors duration-700 pointer-events-none" />
              </motion.div>

              {/* Product info */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-brand-white mb-1 group-hover:text-brand-rose-light transition-colors duration-500">
                    {product.name}
                  </h3>
                  <p className="font-body text-sm text-brand-muted">
                    {product.tagline}
                  </p>
                </div>
                <p className="font-body text-sm text-brand-silver mt-1">
                  {product.price}
                </p>
              </div>

              {/* Discover link */}
              <div className="mt-4 flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-brand-rose group-hover:text-brand-rose-light transition-colors duration-500">
                <span>Discover</span>
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  &rarr;
                </motion.span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
