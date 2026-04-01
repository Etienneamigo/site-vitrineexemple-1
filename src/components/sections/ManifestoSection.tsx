"use client";

import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import MarqueeBand from "@/components/ui/MarqueeBand";

const marqueeText =
  "GRACE · PRECISION · MOVEMENT · ELEGANCE · STRENGTH · FLOW · BALANCE · SILHOUETTE";

export default function ManifestoSection() {
  return (
    <section className="relative bg-brand-charcoal overflow-hidden">
      {/* Top marquee */}
      <MarqueeBand text={marqueeText} speed={40} />

      <div className="py-40 md:py-56 px-8 md:px-16 lg:px-24">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal via-brand-dark to-brand-charcoal pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Large manifesto statement */}
          <RevealText
            as="h2"
            className="font-display text-brand-white text-4xl md:text-6xl lg:text-8xl xl:text-9xl tracking-[-0.03em] leading-[1.05] max-w-6xl"
            delay={0.1}
          >
            Grace is not given. It is crafted.
          </RevealText>

          {/* Supporting text */}
          <FadeIn delay={0.6} direction="up" distance={30}>
            <p className="mt-12 md:mt-16 font-body text-base md:text-lg text-brand-silver max-w-2xl leading-relaxed">
              Every piece in the ÉLUA collection is an ode to the discipline of
              movement and the elegance of the human form.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Bottom marquee */}
      <MarqueeBand text={marqueeText} speed={40} />
    </section>
  );
}
