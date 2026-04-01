"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";

export default function ColorStorySection() {
  return (
    <section className="relative bg-brand-snow py-32 md:py-48 px-8 md:px-16 lg:px-24">
      <FadeIn delay={0} direction="up" distance={15}>
        <p className="text-xs tracking-[0.3em] uppercase text-brand-rose mb-6 font-body">
          04 — Color Story
        </p>
      </FadeIn>

      <RevealText
        as="h2"
        className="font-display text-4xl md:text-5xl text-brand-ink mb-16 md:mb-24"
        delay={0.1}
      >
        Two Shades. One Vision.
      </RevealText>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
        {/* Noir Absolu */}
        <FadeIn delay={0.2} direction="up" distance={40}>
          <div className="bg-brand-ink rounded-sm overflow-hidden">
            <div className="relative" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/images/outfits/outfit-black-front.png"
                alt="ÉLUA outfit in Noir Absolu"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="w-5 h-5 rounded-full bg-[#1A1715] border border-brand-stone/30 mb-4" />
              <h3 className="font-display text-2xl text-brand-pearl mb-3">
                Noir Absolu
              </h3>
              <p className="text-brand-warm text-sm leading-[1.7] font-body">
                The depth of certainty. The confidence of presence. Our
                signature black absorbs light and radiates quiet power.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Rose Poudré */}
        <FadeIn delay={0.35} direction="up" distance={40}>
          <div className="bg-brand-rose-pale rounded-sm overflow-hidden">
            <div className="relative" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/images/outfits/outfit-rose-front.png"
                alt="ÉLUA outfit in Rose Poudré"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="w-5 h-5 rounded-full bg-brand-blush mb-4" />
              <h3 className="font-display text-2xl text-brand-ink mb-3">
                Rose Poudré
              </h3>
              <p className="text-brand-stone text-sm leading-[1.7] font-body">
                The softness of dawn. The warmth of intention. A rose that
                speaks of strength wrapped in tenderness.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
