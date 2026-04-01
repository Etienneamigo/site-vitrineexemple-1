"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { getProduct } from "@/data/products";
import ProductHero from "@/components/product/ProductHero";
import ProductGallery from "@/components/product/ProductGallery";
import ProductDetails from "@/components/product/ProductDetails";
import ProductEditorial from "@/components/product/ProductEditorial";
import RelatedProduct from "@/components/product/RelatedProduct";
import MarqueeBand from "@/components/ui/MarqueeBand";

export default function JacketPage() {
  const product = getProduct("jacket")!;
  const [selectedColorId, setSelectedColorId] = useState<string>(
    product.colors[0].id
  );

  const selectedColor = product.colors.find((c) => c.id === selectedColorId)!;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <ProductHero
        product={product}
        selectedColorId={selectedColorId}
        onColorChange={setSelectedColorId}
      />

      <MarqueeBand
        text="LA VESTE STUDIO · STRUCTURED ELEGANCE · DESIGNED FOR MOVEMENT · PREMIUM ACTIVEWEAR"
        speed={35}
      />

      <ProductGallery
        images={selectedColor.images}
        productName={product.name}
      />

      <ProductDetails product={product} />

      <ProductEditorial product={product} />

      <RelatedProduct relatedSlug={product.relatedProduct} />
    </motion.div>
  );
}
