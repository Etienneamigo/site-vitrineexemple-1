"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frameId = requestAnimationFrame(raf);

    const html = document.documentElement;
    html.classList.add("lenis", "lenis-smooth");

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      html.classList.remove("lenis", "lenis-smooth");
    };
  }, []);

  return <>{children}</>;
}
