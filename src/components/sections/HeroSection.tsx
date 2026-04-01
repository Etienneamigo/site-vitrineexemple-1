"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import ParallaxImage from "@/components/ui/ParallaxImage";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-black">
      {/* Background parallax image */}
      <div className="absolute inset-0 z-0">
        <ParallaxImage
          src="/images/hero.jpg"
          alt="ÉLUA hero"
          className="h-full w-full"
          speed={0.15}
          aspectRatio="auto"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40" />
      </div>

      {/* Radial rose glow behind text */}
      <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-brand-rose-deep/8 rounded-full blur-[120px] pointer-events-none z-[1]" />

      {/* Main content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 pt-32 pb-24">
        {/* Large title */}
        <div className="mb-8">
          <RevealText
            as="h1"
            className="font-display text-brand-white leading-[0.95] tracking-[-0.02em]"
            delay={0.2}
          >
            MOVEMENT
          </RevealText>
          <div className="md:ml-[15vw]">
            <RevealText
              as="h1"
              className="font-display text-brand-white leading-[0.95] tracking-[-0.02em]"
              delay={0.5}
            >
              REDEFINED
            </RevealText>
          </div>
          <style jsx>{`
            h1 {
              font-size: clamp(4rem, 10vw, 12rem);
            }
          `}</style>
        </div>

        {/* Subtitle */}
        <FadeIn delay={0.9} direction="up" distance={30}>
          <p className="font-body text-brand-silver text-base md:text-lg max-w-lg leading-relaxed mb-10">
            Where precision meets grace. Activewear designed for the modern
            silhouette.
          </p>
        </FadeIn>

        {/* CTA buttons */}
        <FadeIn delay={1.2} direction="up" distance={20}>
          <div className="flex flex-wrap gap-4">
            <MagneticButton strength={0.2}>
              <Link href="/product/jacket" className="btn-primary">
                Discover La Veste
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link href="/product/pants" className="btn-secondary">
                Explore Le Pantalon
              </Link>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <motion.span
          className="font-body text-[10px] uppercase tracking-[0.3em] text-brand-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          Scroll
        </motion.span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-brand-rose/60 to-transparent origin-top"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 2, duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="w-px h-full bg-brand-rose-light"
            animate={{ y: ["-100%", "100%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
