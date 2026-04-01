"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import MagneticButton from "@/components/ui/MagneticButton";
import ColorSelector from "./ColorSelector";
import type { Product } from "@/data/products";

interface ProductHeroProps {
  product: Product;
  selectedColorId?: string;
  onColorChange?: (colorId: string) => void;
}

export default function ProductHero({ product, selectedColorId, onColorChange }: ProductHeroProps) {
  const [internalColor, setInternalColor] = useState<string>(product.colors[0].id);
  const selectedColor = selectedColorId ?? internalColor;
  const setSelectedColor = onColorChange ?? setInternalColor;

  const activeColor = product.colors.find((c) => c.id === selectedColor) ?? product.colors[0];
  const mainImage = activeColor.images[0];

  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Image Side */}
      <div className="relative w-full lg:w-1/2 aspect-[3/4] lg:aspect-auto lg:min-h-screen overflow-hidden bg-brand-dark">
        <AnimatePresence mode="wait">
          <motion.div
            key={mainImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={mainImage}
              alt={`${product.name} — ${activeColor.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Info Side */}
      <div className="w-full lg:w-1/2 flex items-center">
        <div className="w-full px-6 py-16 md:px-12 lg:px-16 xl:px-24 max-w-2xl mx-auto lg:mx-0">
          {/* Breadcrumb */}
          <FadeIn delay={0.1} direction="up" once>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-caption font-body text-brand-muted">
                <li>
                  <Link href="/" className="hover:text-brand-rose transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="#" className="hover:text-brand-rose transition-colors">
                    Collection
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-brand-light">{product.name}</li>
              </ol>
            </nav>
          </FadeIn>

          {/* Product Name */}
          <FadeIn delay={0.2} direction="up" once>
            <h1 className="text-display-lg font-display text-brand-light mb-4">
              {product.name}
            </h1>
          </FadeIn>

          {/* Tagline */}
          <FadeIn delay={0.3} direction="up" once>
            <p className="text-body-lg font-body text-brand-muted mb-6">
              {product.tagline}
            </p>
          </FadeIn>

          {/* Price */}
          <FadeIn delay={0.4} direction="up" once>
            <p className="text-display-sm font-display text-brand-light mb-10">
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
              <p className="text-caption font-body text-brand-muted uppercase tracking-widest mb-4">
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
              <button className="btn-primary w-full md:w-auto px-16 py-4 text-body font-body uppercase tracking-widest">
                Add to Cart
              </button>
            </MagneticButton>
          </FadeIn>

          {/* Free Shipping */}
          <FadeIn delay={0.7} direction="up" once>
            <p className="mt-6 text-caption font-body text-brand-muted">
              Free shipping worldwide
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
