"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import MagneticButton from "@/components/ui/MagneticButton";
import { getProduct } from "@/data/products";

const ease = [0.16, 1, 0.3, 1] as const;

interface RelatedProductProps {
  relatedSlug: string;
}

export default function RelatedProduct({ relatedSlug }: RelatedProductProps) {
  const related = getProduct(relatedSlug);

  if (!related) return null;

  const image = related.colors[0]?.images[0];

  return (
    <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-brand-snow">
      <FadeIn direction="up" once>
        <p className="text-xs uppercase tracking-[0.3em] text-brand-rose mb-12">
          Complete the Look
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <FadeIn delay={0.1} direction="left" once>
          <Link href={`/product/${related.slug}`} className="block group">
            <motion.div
              className="overflow-hidden rounded-sm bg-brand-pearl"
              style={{ aspectRatio: "3/4" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="relative w-full h-full">
                {image && (
                  <Image
                    src={image}
                    alt={related.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                )}
              </div>
            </motion.div>
          </Link>
        </FadeIn>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <FadeIn delay={0.2} direction="up" once>
            <h3 className="font-display text-3xl md:text-4xl text-brand-ink mb-4">
              {related.name}
            </h3>
          </FadeIn>

          <FadeIn delay={0.3} direction="up" once>
            <p className="text-brand-stone text-lg mb-6">{related.tagline}</p>
          </FadeIn>

          <FadeIn delay={0.4} direction="up" once>
            <p className="font-display text-xl text-brand-ink mb-10">
              {related.price}
            </p>
          </FadeIn>

          <FadeIn delay={0.5} direction="up" once>
            <MagneticButton strength={0.3}>
              <Link
                href={`/product/${related.slug}`}
                className="btn-secondary inline-block"
              >
                Discover
              </Link>
            </MagneticButton>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
