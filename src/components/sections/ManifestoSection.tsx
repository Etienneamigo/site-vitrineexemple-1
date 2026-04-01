"use client";

import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import MarqueeBand from "@/components/ui/MarqueeBand";

export default function ManifestoSection() {
  return (
    <section className="relative bg-brand-ink overflow-hidden">
      <MarqueeBand
        text="GRACE · PRECISION · MOVEMENT · ELEGANCE · STRENGTH · FLOW"
        speed={45}
        className="border-brand-carbon text-brand-stone"
      />

      <div className="relative py-40 md:py-56 px-8 md:px-16 lg:px-24 flex flex-col items-center text-center">
        <div className="halo halo-rose absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20" />

        <div className="relative z-10 max-w-5xl">
          <RevealText
            as="h2"
            className="font-display text-brand-pearl leading-[1]"
            delay={0.1}
          >
            Grace is not given.
          </RevealText>
          <RevealText
            as="div"
            className="font-display text-brand-pearl leading-[1] mt-2"
            delay={0.3}
          >
            It is crafted.
          </RevealText>
          <style jsx>{`
            h2, h2 + div {
              font-size: clamp(2.5rem, 6vw, 6.5rem);
            }
          `}</style>

          <FadeIn delay={0.6} direction="up" distance={25}>
            <p className="text-brand-warm text-lg max-w-2xl mx-auto mt-12 leading-relaxed font-body">
              Every piece in the ÉLUA collection is an ode to the discipline of
              movement and the elegance of the human form.
            </p>
          </FadeIn>
        </div>
      </div>

      <MarqueeBand
        text="SILHOUETTE · BALANCE · CONFIDENCE · PRESENCE · BREATH · INTENTION"
        speed={45}
        className="border-brand-carbon text-brand-stone"
      />
    </section>
  );
}
