"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import MagneticButton from "@/components/ui/MagneticButton";
import ColorSelector from "./ColorSelector";
import type { Product } from "@/data/products";

const ease = [0.16, 1, 0.3, 1] as const;

interface ProductHeroProps {
  product: Product;
  selectedColorId?: string;
  onColorChange?: (id: string) => void;
}

const imageVariants = {
  initial: { opacity: 0, scale: 1.04 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.4, ease } },
};

export default function ProductHero({
  product,
  selectedColorId,
  onColorChange,
}: ProductHeroProps) {
  const [internalColor, setInternalColor] = useState<string>(
    product.colors[0].id
  );
  const selectedColor = selectedColorId ?? internalColor;
  const setSelectedColor = onColorChange ?? setInternalColor;

  const activeColor =
    product.colors.find((c) => c.id === selectedColor) ?? product.colors[0];
  const mainImage = activeColor.images[0];

  return (
    <section className="min-h-screen bg-brand-snow flex flex-col lg:flex-row">
      {/* Image Side */}
      <div className="relative w-full lg:w-[55%] aspect-[3/4] lg:aspect-auto lg:min-h-screen overflow-hidden bg-brand-pearl">
        <AnimatePresence mode="wait">
          <motion.div
            key={mainImage}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={mainImage}
              alt={`${product.name} — ${activeColor.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Info Side */}
      <div className="w-full lg:w-[45%] flex items-center px-8 md:px-16 lg:px-20">
        <div className="w-full py-16 lg:py-0 max-w-xl">
          {/* Breadcrumb */}
          <FadeIn delay={0.1} direction="up" once>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-brand-taupe">
                <li>
                  <Link
                    href="/"
                    className="hover:text-brand-rose transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-brand-rose transition-colors"
                  >
                    Collection
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-brand-ink">{product.name}</li>
              </ol>
            </nav>
          </FadeIn>

          {/* Product Name */}
          <FadeIn delay={0.2} direction="up" once>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-brand-ink mb-4 leading-[1]">
              {product.name}
            </h1>
          </FadeIn>

          {/* Tagline */}
          <FadeIn delay={0.3} direction="up" once>
            <p className="text-brand-stone text-lg mb-8">{product.tagline}</p>
          </FadeIn>

          {/* Price */}
          <FadeIn delay={0.4} direction="up" once>
            <p className="font-display text-2xl text-brand-ink mb-10">
              {product.price}
            </p>
          </FadeIn>

          {/* Divider */}
          <FadeIn delay={0.45} direction="none" once>
            <div className="divider mb-10" />
          </FadeIn>

          {/* Color Selector */}
          <FadeIn delay={0.5} direction="up" once>
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-taupe mb-4">
                Color
              </p>
              <ColorSelector
                colors={product.colors}
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
              />
            </div>
          </FadeIn>

          {/* Add to Cart */}
          <FadeIn delay={0.6} direction="up" once>
            <MagneticButton strength={0.3}>
              <button className="btn-primary w-full md:w-auto mt-10">
                <span>Add to Cart</span>
              </button>
            </MagneticButton>
          </FadeIn>

          {/* Free Shipping */}
          <FadeIn delay={0.7} direction="up" once>
            <p className="text-xs text-brand-taupe mt-4">
              Free worldwide shipping
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
