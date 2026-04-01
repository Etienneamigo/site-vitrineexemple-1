"use client";

import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";

const features = [
  {
    number: "01",
    title: "Second Skin",
    description:
      "Engineered fabrics that mold to your body, offering compression where you need it and freedom where you want it.",
  },
  {
    number: "02",
    title: "Sculpted Lines",
    description:
      "Architectural seaming that follows the natural contours of the body, creating a silhouette that flatters every shape.",
  },
  {
    number: "03",
    title: "Silent Performance",
    description:
      "Advanced moisture-wicking technology and four-way stretch that works invisibly, so you can focus on what matters.",
  },
  {
    number: "04",
    title: "Timeless Design",
    description:
      "Pieces that transcend trends. Designed to be as relevant tomorrow as they are today.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative bg-brand-black py-32 md:py-48 px-8 md:px-16 lg:px-24">
      {/* Section label */}
      <FadeIn delay={0} direction="up" distance={20}>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-brand-rose mb-16 md:mb-24">
          03 — Craftsmanship
        </p>
      </FadeIn>

      {/* Features grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
        {features.map((feature, i) => (
          <FadeIn
            key={feature.number}
            delay={0.1 + i * 0.15}
            direction="up"
            distance={30}
          >
            <div
              className={`relative ${
                i < features.length - 1
                  ? "lg:border-r lg:border-brand-rose/10"
                  : ""
              } lg:px-8 first:lg:pl-0 last:lg:pr-0`}
            >
              {/* Number */}
              <p className="font-display text-4xl md:text-5xl text-gradient-rose mb-6 tracking-[-0.02em]">
                {feature.number}
              </p>

              {/* Title */}
              <RevealText
                as="h3"
                className="font-display text-xl md:text-2xl text-brand-white mb-4"
                delay={0.2 + i * 0.15}
              >
                {feature.title}
              </RevealText>

              {/* Description */}
              <p className="font-body text-sm leading-relaxed text-brand-muted">
                {feature.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
