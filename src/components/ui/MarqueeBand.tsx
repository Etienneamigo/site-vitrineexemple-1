"use client";

interface MarqueeBandProps {
  text: string;
  speed?: number;
  className?: string;
  separator?: string;
}

export default function MarqueeBand({
  text,
  speed = 30,
  className = "",
  separator = "  \u00b7  ",
}: MarqueeBandProps) {
  // Repeat text enough times to fill wide screens
  const repeats = 12;
  const content = Array.from({ length: repeats })
    .map(() => text + separator)
    .join("");

  return (
    <div
      className={`relative overflow-hidden border-y border-brand-rose/20 bg-brand-black ${className}`}
    >
      <div className="flex whitespace-nowrap py-4">
        <div
          className="animate-marquee flex-shrink-0 font-body text-xs uppercase tracking-[0.25em] text-brand-rose-light/70"
          style={{ animationDuration: `${speed}s` }}
        >
          {content}
        </div>
        <div
          className="animate-marquee flex-shrink-0 font-body text-xs uppercase tracking-[0.25em] text-brand-rose-light/70"
          style={{ animationDuration: `${speed}s` }}
          aria-hidden
        >
          {content}
        </div>
      </div>
    </div>
  );
}
