"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const ease = [0.16, 1, 0.3, 1] as const;

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

function GalleryImage({
  src,
  alt,
  aspectRatio,
  index,
}: {
  src: string;
  alt: string;
  aspectRatio: string;
  index: number;
}) {
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <ImagePlaceholder
        className="w-full rounded-sm"
        aspectRatio={aspectRatio}
        label={alt}
      />
    );
  }

  return (
    <FadeIn delay={index * 0.12} direction="up" once>
      <motion.div
        className="overflow-hidden rounded-sm bg-brand-pearl"
        style={{ aspectRatio }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={handleError}
          />
        </div>
      </motion.div>
    </FadeIn>
  );
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  if (!images || images.length === 0) return null;

  const [firstImage, ...restImages] = images;

  return (
    <section className="py-16 md:py-24 px-8 md:px-16 lg:px-24 bg-brand-snow">
      <FadeIn direction="up" once>
        <p className="text-xs uppercase tracking-[0.3em] text-brand-taupe mb-10">
          Gallery
        </p>
      </FadeIn>

      <AnimatePresence mode="wait">
        <motion.div
          key={firstImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease }}
        >
          {/* First image — full width hero */}
          <GalleryImage
            src={firstImage}
            alt={`${productName} — Image 1`}
            aspectRatio="16/9"
            index={0}
          />

          {/* Remaining images — 2-column grid */}
          {restImages.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
              {restImages.map((src, index) => (
                <GalleryImage
                  key={src}
                  src={src}
                  alt={`${productName} — Image ${index + 2}`}
                  aspectRatio="3/4"
                  index={index + 1}
                />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
