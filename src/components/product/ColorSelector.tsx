"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

interface ColorOption {
  id: string;
  name: string;
  hex: string;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColor: string;
  onColorChange: (id: string) => void;
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
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="relative">
              <motion.div
                className={`w-12 h-12 rounded-full ${
                  !isActive ? "border border-brand-sand" : ""
                }`}
                style={{ backgroundColor: color.hex }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease }}
              />
              {isActive && (
                <motion.div
                  layoutId="color-ring-indicator"
                  className="absolute -inset-2 rounded-full ring-2 ring-brand-rose ring-offset-4 ring-offset-brand-snow"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </div>
            <span className="text-xs text-brand-stone uppercase tracking-wider mt-2 text-center transition-colors duration-300">
              {color.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
