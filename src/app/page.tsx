"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import ManifestoSection from "@/components/sections/ManifestoSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ColorStorySection from "@/components/sections/ColorStorySection";
import EditorialSection from "@/components/sections/EditorialSection";
import ClosingSection from "@/components/sections/ClosingSection";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <HeroSection />
      <IntroSection />
      <ProductShowcase />
      <ManifestoSection />
      <FeaturesSection />
      <ColorStorySection />
      <EditorialSection />
      <ClosingSection />
    </motion.div>
  );
}
