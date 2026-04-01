"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import ParallaxImage from "@/components/ui/ParallaxImage";
import MagneticButton from "@/components/ui/MagneticButton";

export default function EditorialSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background parallax image */}
      <div className="absolute inset-0 z-0">
        <ParallaxImage
          src="/images/editorial.jpg"
          alt="ÉLUA editorial"
          className="h-full w-full"
          speed={0.2}
          aspectRatio="auto"
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/30" />
        <div className="absolute inset-0 bg-brand-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 py-32 text-center max-w-5xl mx-auto">
        <RevealText
          as="h2"
          className="font-display text-brand-white text-4xl md:text-6xl lg:text-8xl tracking-[-0.03em] leading-[1.05] mb-8"
          delay={0.1}
        >
          Designed for Movement
        </RevealText>

        <FadeIn delay={0.5} direction="up" distance={30}>
          <p className="font-body text-base md:text-lg text-brand-silver max-w-xl mx-auto leading-relaxed mb-12">
            From the precision of pilates to the rhythm of everyday life. ÉLUA
            moves with you.
          </p>
        </FadeIn>

        <FadeIn delay={0.7} direction="up" distance={20}>
          <MagneticButton strength={0.2} className="inline-block">
            <Link href="/product/jacket" className="btn-primary">
              Shop the Collection
            </Link>
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  );
}
