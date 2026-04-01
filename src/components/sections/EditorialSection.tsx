"use client";

import Image from "next/image";
import Link from "next/link";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";
import MagneticButton from "@/components/ui/MagneticButton";

export default function EditorialSection() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/outfits/outfit-rose-back.png"
          alt="ÉLUA activewear — rose outfit, movement"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay — luminous */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-snow via-brand-snow/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-8 md:px-16 py-24 max-w-3xl">
        <RevealText
          as="h2"
          className="font-display text-brand-ink leading-[1.05]"
          delay={0.1}
        >
          Designed
        </RevealText>
        <RevealText
          as="div"
          className="font-display text-brand-ink leading-[1.05]"
          delay={0.3}
        >
          for Movement
        </RevealText>
        <style jsx>{`
          h2, h2 + div {
            font-size: clamp(3rem, 6vw, 6rem);
          }
        `}</style>

        <FadeIn delay={0.6} direction="up" distance={20}>
          <p className="text-brand-stone text-lg max-w-xl mx-auto mt-8 leading-relaxed font-body">
            From the precision of pilates to the rhythm of everyday life. ÉLUA
            moves with you.
          </p>
        </FadeIn>

        <FadeIn delay={0.8} direction="up" distance={15}>
          <div className="mt-10">
            <MagneticButton strength={0.2}>
              <Link href="/product/jacket" className="btn-primary">
                <span>Shop the Collection</span>
              </Link>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
