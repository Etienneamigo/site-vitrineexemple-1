"use client";

import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import ParallaxImage from "@/components/ui/ParallaxImage";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <FadeIn direction="up" once>
        <p className="text-caption font-body text-brand-muted uppercase tracking-widest mb-10">
          Gallery
        </p>
      </FadeIn>

      <AnimatePresence mode="wait">
        <motion.div
          key={images[0]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {images.map((src, index) => (
            <FadeIn key={src} delay={index * 0.1} direction="up" once>
              <motion.div
                className="overflow-hidden rounded-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ParallaxImage
                  src={src}
                  alt={`${productName} — Image ${index + 1}`}
                  aspectRatio="3/4"
                  speed={0.15}
                />
              </motion.div>
            </FadeIn>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
