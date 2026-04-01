"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

interface MarqueeBandProps {
  text: string;
  speed?: number;
  className?: string;
  separator?: string;
}

export default function MarqueeBand({
  text,
  speed = 40,
  className = "",
  separator = " · ",
}: MarqueeBandProps) {
  const repeats = 12;
  const content = Array.from({ length: repeats })
    .map(() => text + separator)
    .join("");

  return (
    <div
      className={`relative overflow-hidden border-y border-brand-sand/40 bg-brand-ivory/50 ${className}`}
    >
      <div className="flex whitespace-nowrap py-4">
        <div
          className="animate-marquee flex-shrink-0 font-body text-sm uppercase tracking-[0.25em] text-brand-taupe"
          style={{ animationDuration: `${speed}s` }}
        >
          {content}
        </div>
        <div
          className="animate-marquee flex-shrink-0 font-body text-sm uppercase tracking-[0.25em] text-brand-taupe"
          style={{ animationDuration: `${speed}s` }}
          aria-hidden
        >
          {content}
        </div>
      </div>
    </div>
  );
}
