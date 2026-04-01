"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "La Veste", href: "/product/jacket" },
  { label: "Le Pantalon", href: "/product/pants" },
];

const mobileLinks = [
  { label: "Accueil", href: "/" },
  ...navLinks,
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease }}
        className={`fixed top-0 left-0 w-full z-50 h-20 flex items-center transition-all duration-700 ${
          scrolled
            ? "glass border-b border-brand-sand/30"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl md:text-2xl tracking-[0.3em] uppercase text-brand-ink transition-colors duration-500"
          >
            ÉLUA
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative font-body text-xs uppercase tracking-widest text-brand-stone hover:text-brand-rose transition-colors duration-500"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-rose transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-[110] w-8 h-8 flex flex-col items-center justify-center gap-[6px]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 8, backgroundColor: "#1A1715" }
                  : { rotate: 0, y: 0, backgroundColor: "#1A1715" }
              }
              transition={{ duration: 0.4, ease }}
              className="block w-6 h-px bg-brand-ink origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3, ease }}
              className="block w-6 h-px bg-brand-ink"
            />
            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -8, backgroundColor: "#1A1715" }
                  : { rotate: 0, y: 0, backgroundColor: "#1A1715" }
              }
              transition={{ duration: 0.4, ease }}
              className="block w-6 h-px bg-brand-ink origin-center"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, ease } }}
            exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.2, ease } }}
            className="fixed inset-0 z-[100] bg-brand-snow flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {mobileLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.15 + i * 0.1, duration: 0.7, ease },
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    transition: { delay: i * 0.05, duration: 0.3, ease },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-4xl md:text-5xl text-brand-ink hover:text-brand-rose transition-colors duration-500"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.8, ease } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="absolute bottom-16 font-body text-sm tracking-[0.2em] uppercase text-brand-taupe"
            >
              Movement Redefined
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
