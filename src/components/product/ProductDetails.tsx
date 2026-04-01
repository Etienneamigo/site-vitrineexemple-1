"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import type { Product } from "@/data/products";

const ease = [0.16, 1, 0.3, 1] as const;

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-brand-ivory">
      <div className="max-w-5xl mx-auto">
        {/* The Story */}
        <div>
          <RevealText
            as="h2"
            className="font-display text-3xl md:text-4xl text-brand-ink mb-8"
          >
            The Story
          </RevealText>
          <FadeIn delay={0.2} direction="up" once>
            <p className="text-brand-stone text-base leading-[1.8] max-w-3xl">
              {product.longDescription}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} direction="none" once>
          <div className="divider my-20" />
        </FadeIn>

        {/* Features */}
        <div className="mt-20">
          <RevealText
            as="h2"
            className="font-display text-3xl text-brand-ink mb-10"
          >
            Features
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            {product.features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.08} direction="up" once>
                <div className="flex items-start gap-4">
                  <span className="font-display text-sm text-brand-rose leading-none min-w-[2.5rem]">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <p className="text-brand-stone text-sm">{feature}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.1} direction="none" once>
          <div className="divider my-20" />
        </FadeIn>

        {/* Materials & Care */}
        <div className="mt-20">
          <RevealText
            as="h2"
            className="font-display text-3xl text-brand-ink mb-10"
          >
            Materials &amp; Care
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn delay={0.1} direction="up" once>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-brand-taupe mb-3">
                  Materials
                </h3>
                <p className="text-brand-stone text-sm leading-[1.8]">
                  {product.materials}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" once>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-brand-taupe mb-3">
                  Care Instructions
                </h3>
                <p className="text-brand-stone text-sm leading-[1.8]">
                  {product.care}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
