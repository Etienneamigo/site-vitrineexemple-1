"use client";

import { motion } from "framer-motion";

interface ColorOption {
  id: string;
  name: string;
  hex: string;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColor: string;
  onColorChange: (colorId: string) => void;
}

export default function ColorSelector({
  colors,
  selectedColor,
  onColorChange,
}: ColorSelectorProps) {
  return (
    <div role="radiogroup" aria-label="Select color" className="flex gap-6">
      {colors.map((color) => {
        const isActive = color.id === selectedColor;
        return (
          <button
            key={color.id}
            role="radio"
            aria-checked={isActive}
            aria-label={color.name}
            onClick={() => onColorChange(color.id)}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="relative">
              <motion.div
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: color.hex }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              />
              {isActive && (
                <motion.div
                  layoutId="color-ring"
                  className="absolute -inset-1.5 rounded-full ring-2 ring-brand-rose ring-offset-2 ring-offset-brand-black"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </div>
            <span
              className={`text-caption font-body transition-colors duration-300 ${
                isActive ? "text-brand-rose" : "text-brand-muted"
              }`}
            >
              {color.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
