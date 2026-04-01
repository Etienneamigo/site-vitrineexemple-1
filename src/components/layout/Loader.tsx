"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  isLoading: boolean;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-100%", transition: { duration: 0.8, delay: 0.1, ease } }}
          className="fixed inset-0 z-[100] bg-brand-snow flex flex-col items-center justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-display text-4xl md:text-5xl tracking-[0.4em] uppercase text-brand-ink"
          >
            ÉLUA
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease }}
            className="mt-6 h-px w-24 bg-brand-blush origin-center"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
