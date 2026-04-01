"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

interface ImagePlaceholderProps {
  className?: string;
  aspectRatio?: string;
  label?: string;
}

export default function ImagePlaceholder({
  className = "",
  aspectRatio = "3/4",
  label,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`img-placeholder relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {/* Luminous light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-pearl via-brand-ivory to-brand-champagne" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-sand/20 via-transparent to-brand-white/60" />

      {/* Animated shimmer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)",
        }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease,
        }}
      />

      {/* Centered watermark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-3xl tracking-[0.3em] text-brand-sand/60 select-none uppercase">
          ÉLUA
        </span>
      </div>

      {/* Optional label */}
      {label && (
        <div className="absolute bottom-0 inset-x-0 p-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-brand-taupe/50 text-center">
            {label}
          </p>
        </div>
      )}
    </div>
  );
}
