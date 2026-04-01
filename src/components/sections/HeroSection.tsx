"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import MagneticButton from "@/components/ui/MagneticButton";

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-brand-snow overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left — Typography */}
        <div className="relative lg:w-1/2 flex items-center px-8 md:px-16 lg:px-24 py-32 lg:py-0">
          {/* Halo behind text */}
          <div className="halo halo-champagne absolute left-[-100px] top-[30%] w-[500px] h-[500px]" />

          <div className="relative z-10">
            <FadeIn delay={0.1} direction="up" distance={15}>
              <p className="text-xs tracking-[0.3em] uppercase text-brand-taupe mb-8 font-body">
                ÉLUA Collection 2024
              </p>
            </FadeIn>

            <div className="mb-8">
              <RevealText
                as="h1"
                className="font-display text-brand-ink leading-[0.9] tracking-[-0.02em]"
                delay={0.3}
              >
                Movement
              </RevealText>
              <RevealText
                as="div"
                className="font-display text-brand-ink leading-[0.9] tracking-[-0.02em]"
                delay={0.5}
              >
                Redefined
              </RevealText>
              <style jsx>{`
                h1,
                h1 + div {
                  font-size: clamp(3.5rem, 7vw, 7rem);
                }
              `}</style>
            </div>

            <FadeIn delay={0.8} direction="up" distance={25}>
              <p className="text-brand-stone text-lg max-w-md leading-relaxed font-body">
                Where precision meets grace. Activewear designed for the modern
                silhouette.
              </p>
            </FadeIn>

            <FadeIn delay={1.0} direction="up" distance={20}>
              <div className="flex gap-4 flex-col sm:flex-row mt-10">
                <MagneticButton strength={0.2}>
                  <Link href="/product/jacket" className="btn-primary">
                    <span>Discover La Veste</span>
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
        </div>

        {/* Right — Hero Image */}
        <div className="relative lg:w-1/2">
          {/* Halo behind image */}
          <div className="halo halo-rose absolute right-[-80px] top-[20%] w-[500px] h-[500px] opacity-20 z-0" />

          <div className="relative aspect-[3/4] lg:aspect-auto lg:absolute lg:inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              style={{ y: imageY, scale: imageScale }}
            >
              <Image
                src="/images/outfits/outfit-black-front.png"
                alt="ÉLUA activewear — black outfit, front view"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <motion.span
          className="font-body text-[10px] uppercase tracking-[0.3em] text-brand-taupe"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8, ease }}
        >
          Scroll
        </motion.span>
        <motion.div
          className="w-px h-12 bg-brand-sand/60 origin-top overflow-hidden"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 2, duration: 1, ease }}
        >
          <motion.div
            className="w-px h-full bg-brand-rose"
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
