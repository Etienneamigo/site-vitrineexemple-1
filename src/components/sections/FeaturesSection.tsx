"use client";

import FadeIn from "@/components/ui/FadeIn";

const features = [
  {
    num: "01",
    title: "Second Skin",
    desc: "Engineered fabrics that mold to your body, offering compression where you need it and freedom where you crave it.",
  },
  {
    num: "02",
    title: "Sculpted Lines",
    desc: "Architectural seaming that follows the natural contours of the body, creating a silhouette that flatters and empowers.",
  },
  {
    num: "03",
    title: "Silent Performance",
    desc: "Advanced moisture-wicking technology and four-way stretch that works invisibly, so you can focus on what matters.",
  },
  {
    num: "04",
    title: "Timeless Design",
    desc: "Pieces that transcend seasons. Designed to be as relevant tomorrow as they are today.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative bg-brand-snow py-32 md:py-48 px-8 md:px-16 lg:px-24">
      <FadeIn delay={0} direction="up" distance={15}>
        <p className="text-xs tracking-[0.3em] uppercase text-brand-rose mb-16 font-body">
          03 — Craftsmanship
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
        {features.map((f, i) => (
          <FadeIn key={f.num} delay={0.1 + i * 0.12} direction="up" distance={35}>
            <div>
              <div className="h-px w-12 bg-brand-blush mb-8" />
              <span className="font-display text-5xl md:text-6xl text-gradient-warm block mb-6">
                {f.num}
              </span>
              <h3 className="font-display text-xl md:text-2xl text-brand-ink mb-4">
                {f.title}
              </h3>
              <p className="text-brand-stone text-sm leading-[1.7] font-body">
                {f.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
