"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import ParallaxImage from "@/components/ui/ParallaxImage";
import MagneticButton from "@/components/ui/MagneticButton";
import { getProduct } from "@/data/products";

interface RelatedProductProps {
  relatedSlug: string;
}

export default function RelatedProduct({ relatedSlug }: RelatedProductProps) {
  const related = getProduct(relatedSlug);

  if (!related) return null;

  const image = related.colors[0]?.images[0];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="up" once>
          <p className="text-caption font-body text-brand-muted uppercase tracking-widest mb-12">
            Complete the Look
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <FadeIn delay={0.1} direction="left" once>
            <Link href={`/product/${related.slug}`} className="block group">
              <div className="overflow-hidden rounded-sm">
                <ParallaxImage
                  src={image}
                  alt={related.name}
                  aspectRatio="3/4"
                  speed={0.15}
                />
              </div>
            </Link>
          </FadeIn>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <FadeIn delay={0.2} direction="up" once>
              <h3 className="text-display-sm font-display text-brand-light mb-4">
                {related.name}
              </h3>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" once>
              <p className="text-body-lg font-body text-brand-muted mb-6">
                {related.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up" once>
              <p className="text-display-sm font-display text-brand-light mb-10">
                {related.price}
              </p>
            </FadeIn>

            <FadeIn delay={0.5} direction="up" once>
              <MagneticButton strength={0.3}>
                <Link
                  href={`/product/${related.slug}`}
                  className="btn-secondary inline-block px-12 py-4 text-body font-body uppercase tracking-widest text-center"
                >
                  Discover
                </Link>
              </MagneticButton>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
