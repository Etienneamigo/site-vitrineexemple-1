"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";

const ease = [0.16, 1, 0.3, 1] as const;

const showcaseProducts = [
  {
    name: "La Veste Studio",
    tagline: "Structured elegance for every pose",
    price: "€285",
    href: "/product/jacket",
    src: "/images/products/jacket/jacket-black-front.avif",
    alt: "La Veste Studio — ÉLUA structured jacket in Noir Absolu",
  },
  {
    name: "Le Pantalon Flow",
    tagline: "Fluid precision from studio to street",
    price: "€195",
    href: "/product/pants",
    src: "/images/outfits/outfit-rose-front.png",
    alt: "Le Pantalon Flow — ÉLUA performance pants in Rose Poudré",
  },
];

export default function ProductShowcase() {
  return (
    <section className="relative bg-brand-ivory py-24 md:py-40 px-8 md:px-16 lg:px-24">
      <FadeIn delay={0} direction="up" distance={15}>
        <p className="text-xs tracking-[0.3em] uppercase text-brand-rose mb-6 font-body">
          02 — The Collection
        </p>
      </FadeIn>

      <RevealText
        as="h2"
        className="font-display text-4xl md:text-6xl text-brand-ink mb-16 md:mb-24"
        delay={0.1}
      >
        The Essentials
      </RevealText>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {showcaseProducts.map((product, i) => (
          <FadeIn key={product.name} delay={0.2 + i * 0.2} direction="up" distance={40}>
            <Link href={product.href} className="group block">
              <motion.div
                className="relative overflow-hidden rounded-sm bg-brand-pearl"
                style={{ aspectRatio: "3/4" }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.7, ease }}
              >
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-brand-rose/0 group-hover:bg-brand-rose/[0.03] transition-colors duration-700 pointer-events-none" />
              </motion.div>

              <div className="flex items-start justify-between gap-4 mt-6">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-brand-ink mb-1 group-hover:text-brand-rose transition-colors duration-500">
                    {product.name}
                  </h3>
                  <p className="text-brand-stone text-sm font-body">
                    {product.tagline}
                  </p>
                </div>
                <p className="font-display text-lg text-brand-ink mt-1">
                  {product.price}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-rose font-body group-hover:text-brand-rose-deep transition-colors duration-500">
                <span>Discover</span>
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                  &rarr;
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
