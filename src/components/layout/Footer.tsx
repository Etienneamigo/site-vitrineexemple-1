"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "La Veste Studio", href: "/product/jacket" },
  { label: "Le Pantalon Flow", href: "/product/pants" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
];

export default function Footer() {
  return (
    <FadeIn direction="up" distance={30} duration={1}>
      <footer className="bg-brand-ink text-brand-warm">
        {/* Rose Divider */}
        <div className="divider-rose w-full" />

        {/* Main Content */}
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
            {/* Brand Column */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl text-brand-pearl tracking-[0.2em] uppercase">
                ÉLUA
              </h2>
              <p className="font-body text-sm tracking-[0.15em] uppercase text-brand-stone">
                Movement Redefined
              </p>
              <p className="font-body text-sm text-brand-stone leading-relaxed max-w-xs">
                Where precision tailoring meets fluid movement. Each piece is
                crafted to transcend the ordinary, designed for those who refuse
                to compromise between elegance and freedom.
              </p>
            </div>

            {/* Navigation Column */}
            <div className="space-y-6">
              <h3 className="font-body text-xs uppercase tracking-[0.2em] text-brand-stone">
                Navigation
              </h3>
              <nav className="flex flex-col gap-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-body text-sm text-brand-warm hover:text-brand-rose-light transition-colors duration-500 w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Column */}
            <div className="space-y-6">
              <h3 className="font-body text-xs uppercase tracking-[0.2em] text-brand-stone">
                Contact
              </h3>
              <a
                href="mailto:hello@elua.com"
                className="block font-body text-sm text-brand-warm hover:text-brand-rose-light transition-colors duration-500"
              >
                hello@elua.com
              </a>

              <div className="pt-4 space-y-4">
                <h3 className="font-body text-xs uppercase tracking-[0.2em] text-brand-stone">
                  Social
                </h3>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-brand-warm hover:text-brand-rose-light transition-colors duration-500 w-fit"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-carbon">
          <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs uppercase tracking-[0.1em] text-brand-stone">
              &copy; 2024 &Eacute;LUA. All rights reserved.
            </p>
            <p className="font-body text-xs uppercase tracking-[0.1em] text-brand-stone">
              Designed with precision
            </p>
          </div>
        </div>
      </footer>
    </FadeIn>
  );
}
