"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/atoms/Button";
import ScrollLink from "@/components/atoms/ScrollLink";
import { navLinks, footer } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // --- Variants d'animation ---
  const menuVariants = {
    closed: {
      y: "-100%",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <>
      {/* Header fixe au-dessus de tout */}
      <header className="absolute top-0 left-0 w-full z-50 py-4 px-6 md:px-12">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Section Gauche : Logo + Liens Desktop */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-3 relative z-50"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src="/images/logo-icon.png"
                alt={`${footer.brand} logo`}
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              <motion.span
                initial={false}
                animate={{ color: mobileOpen ? "#000000" : "#FFFFFF" }}
                transition={{ duration: 0.3 }}
                className="font-bold text-lg font-inter tracking-tight text-white"
              >
                {footer.brand}
              </motion.span>
            </Link>

            {/* Liens Desktop (cachés sur mobile) */}
            <div className="hidden md:flex items-center gap-6 border-l border-white/20 pl-8 h-6">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-bold uppercase text-white/70 hover:text-white transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px bg-white w-0 group-hover:w-full transition-all duration-300 origin-left" />
                </ScrollLink>
              ))}
            </div>
          </div>

          {/* Section Droite : CTA Desktop + Hamburger Mobile */}
          <div className="flex items-center">
            {/* Bouton Desktop */}
            <div className="hidden md:block">
              <Button href="/contact">Me contacter</Button>
            </div>

            {/* Bouton Hamburger Animé (Mobile) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{
                  rotate: mobileOpen ? 45 : 0,
                  y: mobileOpen ? 8 : 0,
                  backgroundColor: mobileOpen ? "#000000" : "#FFFFFF",
                }}
                className="block w-6 h-0.5 rounded-full transition-colors"
              />
              <motion.span
                animate={{
                  opacity: mobileOpen ? 0 : 1,
                  backgroundColor: mobileOpen ? "#000000" : "#FFFFFF",
                }}
                className="block w-6 h-0.5 rounded-full transition-colors"
              />
              <motion.span
                animate={{
                  rotate: mobileOpen ? -45 : 0,
                  y: mobileOpen ? -8 : 0,
                  backgroundColor: mobileOpen ? "#000000" : "#FFFFFF",
                }}
                className="block w-6 h-0.5 rounded-full transition-colors"
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay Menu Mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-8 mt-16">
              {navLinks.map((link) => (
                <motion.div key={link.label} variants={linkVariants}>
                  <ScrollLink
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-4xl font-bold text-black font-manrope hover:text-gray-600 transition-colors block"
                  >
                    {link.label}
                  </ScrollLink>
                </motion.div>
              ))}
              
              <motion.div variants={linkVariants} className="pt-8 border-t border-gray-200">
                  <Button href="/contact" variant="secondary" onClick={() => setMobileOpen(false)}>Me contacter</Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}