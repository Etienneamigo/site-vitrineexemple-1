"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import type { Product } from "@/data/products";

const ease = [0.16, 1, 0.3, 1] as const;

interface ProductEditorialProps {
  product: Product;
}

const editorialCopy: Record<string, string> = {
  jacket:
    "Engineered for the studio. Refined for the world. A silhouette that defines a new era of active elegance.",
  pants:
    "From first pose to final breath. Precision meets flow in every line, every seam, every movement.",
};

export default function ProductEditorial({ product }: ProductEditorialProps) {
  const backgroundImage =
    product.colors[0]?.images[1] ?? product.colors[0]?.images[0];
  const editorial = editorialCopy[product.slug] ?? product.description;

  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.6, ease }}
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

      {/* Gradient Overlay — light from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-snow/90 via-brand-snow/40 to-transparent" />

      {/* Content — bottom-left */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-2xl">
        <RevealText
          as="p"
          className="font-display text-3xl md:text-5xl text-brand-ink leading-[1.1] mb-6"
          delay={0.2}
        >
          {product.tagline}
        </RevealText>

        <FadeIn delay={0.5} direction="up" once>
          <p className="text-brand-stone text-base">{editorial}</p>
        </FadeIn>
      </div>
    </section>
  );
}
