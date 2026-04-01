"use client";

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
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-black to-brand-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-rose-deep/10 via-transparent to-brand-rose/5" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(212,160,160,0.5) 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }} />

      {/* Centered watermark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-2xl tracking-[0.3em] text-brand-rose/20 select-none uppercase">
          ELUA
        </span>
      </div>

      {/* Optional label */}
      {label && (
        <div className="absolute bottom-0 inset-x-0 p-4">
          <p className="font-body text-xs tracking-widest uppercase text-brand-muted/60 text-center">
            {label}
          </p>
        </div>
      )}
    </div>
  );
}
