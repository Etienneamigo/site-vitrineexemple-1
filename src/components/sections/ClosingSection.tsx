"use client";

import Link from "next/link";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ClosingSection() {
  return (
    <section className="relative bg-brand-ivory py-40 md:py-56 px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="halo halo-champagne absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <RevealText
          as="h2"
          className="font-display text-brand-ink leading-[1.05]"
          delay={0.1}
        >
          Your Movement.
        </RevealText>
        <RevealText
          as="div"
          className="font-display text-brand-ink leading-[1.05] mt-1"
          delay={0.25}
        >
          Your Story.
        </RevealText>
        <style jsx>{`
          h2, h2 + div {
            font-size: clamp(2.5rem, 5vw, 5rem);
          }
        `}</style>

        <FadeIn delay={0.5} direction="up" distance={20}>
          <p className="text-brand-stone text-lg mt-8 font-body">
            Begin your ÉLUA journey.
          </p>
        </FadeIn>

        <FadeIn delay={0.65} direction="up" distance={15}>
          <div className="flex gap-6 justify-center mt-12 flex-col sm:flex-row">
            <MagneticButton strength={0.2}>
              <Link href="/product/jacket" className="btn-primary">
                <span>La Veste Studio</span>
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
