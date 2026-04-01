"use client";

import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import type { Product } from "@/data/products";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        {/* The Story */}
        <div className="mb-20">
          <RevealText as="h2" className="text-display-md font-display text-brand-light mb-8">
            The Story
          </RevealText>
          <FadeIn delay={0.2} direction="up" once>
            <p className="text-body-lg font-body text-brand-muted leading-relaxed max-w-3xl">
              {product.longDescription}
            </p>
          </FadeIn>
        </div>

        <FadeIn direction="none" once>
          <div className="divider mb-20" />
        </FadeIn>

        {/* Features */}
        <div className="mb-20">
          <RevealText as="h2" className="text-display-md font-display text-brand-light mb-12">
            Features
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {product.features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.08} direction="up" once>
                <div className="flex items-start gap-4">
                  <span className="text-display-sm font-display text-brand-rose opacity-60 leading-none min-w-[2rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-body font-body text-brand-silver pt-1">
                    {feature}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn direction="none" once>
          <div className="divider mb-20" />
        </FadeIn>

        {/* Materials & Care */}
        <div>
          <RevealText as="h2" className="text-display-md font-display text-brand-light mb-12">
            Materials &amp; Care
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn delay={0.1} direction="up" once>
              <div>
                <h3 className="text-caption font-body text-brand-rose uppercase tracking-widest mb-4">
                  Materials
                </h3>
                <p className="text-body font-body text-brand-muted leading-relaxed">
                  {product.materials}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" once>
              <div>
                <h3 className="text-caption font-body text-brand-rose uppercase tracking-widest mb-4">
                  Care Instructions
                </h3>
                <p className="text-body font-body text-brand-muted leading-relaxed">
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
