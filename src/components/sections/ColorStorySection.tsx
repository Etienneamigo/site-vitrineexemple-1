"use client";

import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import ParallaxImage from "@/components/ui/ParallaxImage";

const colors = [
  {
    name: "Noir Absolu",
    swatch: "#0A0A0A",
    description:
      "The depth of night. The confidence of certainty. Our signature black absorbs light and radiates presence.",
    bgClass: "bg-brand-dark",
    textClass: "text-brand-white",
    src: "/images/color-noir.jpg",
    alt: "Noir Absolu — ÉLUA signature black",
  },
  {
    name: "Rose Poudré",
    swatch: "#D4A0A0",
    description:
      "The softness of dawn. The warmth of intention. A rose that speaks of strength wrapped in tenderness.",
    bgClass: "bg-brand-rose-deep/10",
    textClass: "text-brand-white",
    src: "/images/color-rose.jpg",
    alt: "Rose Poudré — ÉLUA signature rose",
  },
];

export default function ColorStorySection() {
  return (
    <section className="relative bg-brand-black py-32 md:py-48 px-8 md:px-16 lg:px-24">
      {/* Section label */}
      <FadeIn delay={0} direction="up" distance={20}>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-brand-rose mb-6">
          04 — Color Story
        </p>
      </FadeIn>

      <RevealText
        as="h2"
        className="font-display text-brand-white text-3xl md:text-5xl lg:text-6xl tracking-[-0.02em] mb-16 md:mb-24"
        delay={0.1}
      >
        Two Shades. One Vision.
      </RevealText>

      {/* Color blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {colors.map((color, i) => (
          <FadeIn
            key={color.name}
            delay={0.2 + i * 0.2}
            direction="up"
            distance={40}
          >
            <div className={`relative rounded-sm overflow-hidden ${color.bgClass} p-8 md:p-10`}>
              {/* Color name and swatch */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-full border border-brand-rose/20 flex-shrink-0"
                  style={{ backgroundColor: color.swatch }}
                />
                <h3 className={`font-display text-xl md:text-2xl ${color.textClass}`}>
                  {color.name}
                </h3>
              </div>

              {/* Description */}
              <p className="font-body text-sm leading-relaxed text-brand-silver mb-8 max-w-sm">
                {color.description}
              </p>

              {/* Image */}
              <ParallaxImage
                src={color.src}
                alt={color.alt}
                className="w-full rounded-sm"
                speed={0.1}
                aspectRatio="4/5"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
