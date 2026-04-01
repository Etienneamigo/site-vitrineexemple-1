"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import type { Product } from "@/data/products";

interface ProductEditorialProps {
  product: Product;
}

const editorialCopy: Record<string, string> = {
  "la-veste-studio":
    "Engineered for the studio. Refined for the world. The silhouette that defines a new era of active elegance.",
  "le-pantalon-flow":
    "From first pose to final breath, these are the lines that move with intention. Precision, meet flow.",
};

export default function ProductEditorial({ product }: ProductEditorialProps) {
  const backgroundImage = product.colors[0]?.images[1] ?? product.colors[0]?.images[0];
  const editorial = editorialCopy[product.slug] ?? product.description;

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt={`${product.name} editorial`}
            fill
            className="object-cover"
            sizes="100vw"
          />
        )}
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-24 max-w-4xl mx-auto py-32">
        <RevealText
          as="p"
          className="text-display-lg font-display text-brand-light mb-8"
          delay={0.2}
        >
          {product.tagline}
        </RevealText>

        <FadeIn delay={0.5} direction="up" once>
          <p className="text-body-lg font-body text-brand-silver leading-relaxed max-w-2xl mx-auto">
            {editorial}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
