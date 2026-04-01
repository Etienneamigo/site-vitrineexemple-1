"use client";

import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";

export default function IntroSection() {
  return (
    <section className="relative bg-brand-snow py-32 md:py-48 px-8 md:px-16 lg:px-24">
      <FadeIn delay={0} direction="up" distance={15}>
        <p className="text-xs tracking-[0.3em] uppercase text-brand-rose mb-10 font-body">
          01 — Philosophy
        </p>
      </FadeIn>

      <RevealText
        as="h2"
        className="font-display text-3xl md:text-5xl lg:text-6xl text-brand-ink max-w-5xl leading-[1.1]"
        delay={0.1}
      >
        We believe in the poetry of movement. In clothing that traces the body like light traces a silhouette.
      </RevealText>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 md:mt-24 max-w-5xl">
        <FadeIn delay={0.2} direction="up" distance={30}>
          <p className="text-brand-stone text-base leading-[1.8] font-body">
            Born from the fusion of haute couture precision and athletic
            performance, ÉLUA redefines what activewear can be. Each piece is a
            dialogue between art and engineering — where the discipline of
            construction meets the freedom of motion.
          </p>
        </FadeIn>

        <FadeIn delay={0.35} direction="up" distance={30}>
          <p className="text-brand-stone text-base leading-[1.8] font-body">
            Every stitch, every seam, every curve has been considered, refined,
            and reconsidered. This is not just clothing — it is an extension of
            your body&apos;s natural grace. A second skin that understands the
            language of movement.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.5} direction="none">
        <div className="divider mt-20" />
      </FadeIn>
    </section>
  );
}
