"use client";

import { useRef, useState, useEffect, type RefObject } from "react";

export function useScrollProgress<T extends HTMLElement = HTMLDivElement>(): [
  RefObject<T | null>,
  number,
] {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Element enters viewport at bottom (progress 0)
      // Element leaves viewport at top (progress 1)
      const start = windowHeight;
      const end = -rect.height;
      const current = rect.top;

      const rawProgress = (start - current) / (start - end);
      const clampedProgress = Math.min(1, Math.max(0, rawProgress));

      setProgress(clampedProgress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return [ref, progress];
}
