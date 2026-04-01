"use client";

import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";

export default function IntroSection() {
  return (
    <section className="relative bg-brand-black py-32 md:py-48 px-8 md:px-16 lg:px-24">
      {/* Section label */}
      <FadeIn delay={0} direction="up" distance={20}>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-brand-rose mb-12">
          01 — Philosophy
        </p>
      </FadeIn>

      {/* Large editorial text */}
      <div className="max-w-4xl mb-20 md:mb-28">
        <RevealText
          as="p"
          className="font-display text-brand-white text-2xl md:text-4xl lg:text-5xl leading-[1.2] tracking-[-0.01em]"
          delay={0.1}
        >
          We believe in the power of movement. In the grace of a perfectly balanced silhouette. In clothing that moves with you, not against you.
        </RevealText>
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl">
        <FadeIn delay={0.3} direction="up" distance={30}>
          <p className="font-body text-sm md:text-base leading-relaxed text-brand-silver">
            Born from the fusion of haute couture precision and athletic
            performance, ÉLUA redefines what activewear can be.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} direction="up" distance={30}>
          <p className="font-body text-sm md:text-base leading-relaxed text-brand-silver">
            Every stitch, every seam, every curve is designed to enhance your
            natural movement. This is not just clothing — it is an extension of
            your body.
          </p>
        </FadeIn>
      </div>

      {/* Divider */}
      <FadeIn delay={0.7} direction="none" duration={1.2}>
        <div className="mt-24 md:mt-32 h-px w-full bg-gradient-to-r from-transparent via-brand-rose/30 to-transparent" />
      </FadeIn>
    </section>
  );
}
