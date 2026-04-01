"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ClosingSection() {
  return (
    <section className="relative bg-brand-black py-40 md:py-56 px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Rose glow */}
      <div className="glow-rose absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Main text */}
        <RevealText
          as="h2"
          className="font-display text-brand-white text-4xl md:text-6xl lg:text-7xl tracking-[-0.02em] leading-[1.1] mb-6"
          delay={0.1}
        >
          Your Movement. Your Story.
        </RevealText>

        <FadeIn delay={0.5} direction="up" distance={20}>
          <p className="font-body text-base md:text-lg text-brand-muted mb-12">
            Begin your ÉLUA journey
          </p>
        </FadeIn>

        {/* CTA buttons */}
        <FadeIn delay={0.7} direction="up" distance={20}>
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton strength={0.2}>
              <Link href="/product/jacket" className="btn-primary">
                La Veste Studio
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link href="/product/pants" className="btn-secondary">
                Le Pantalon Flow
              </Link>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
