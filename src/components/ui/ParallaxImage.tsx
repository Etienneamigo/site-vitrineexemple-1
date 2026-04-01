"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

const ease = [0.16, 1, 0.3, 1] as const;

interface ParallaxImageProps {
  src?: string;
  alt?: string;
  className?: string;
  speed?: number;
  aspectRatio?: string;
}

export default function ParallaxImage({
  src,
  alt = "",
  className = "",
  speed = 0.15,
  aspectRatio = "3/4",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${speed * 100}%`, `${speed * 100}%`]
  );

  const showImage = src && !imgError;

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-sm ${className}`}
      style={{ aspectRatio }}
    >
      {showImage ? (
        <motion.div
          className="absolute inset-0"
          style={{ y, scale: 1.15 }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      ) : (
        <ImagePlaceholder aspectRatio={aspectRatio} label={alt || undefined} />
      )}
    </div>
  );
}
