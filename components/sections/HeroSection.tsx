"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import StarRating from "@/components/atoms/StarRating";
import SplitText from "@/components/atoms/SplitText";
import { hero } from "@/lib/data";

// Définition des animations (Variants)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1, // Léger délai avant de commencer
      staggerChildren: 0.15, // Délai entre chaque élément
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const, // Courbe très fluide type Framer
    },
  },
};

export default function HeroSection() {
  return (
    <section className="sticky top-0 z-0 h-screen min-h-150 flex items-end overflow-hidden">
      {/* Background image with subtle zoom-in and fade */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <Image
          src={hero.backgroundImage.src}
          alt={hero.backgroundImage.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-1 bg-linear-to-t from-black/80 via-black/40 to-black/30" />

      {/* Content orchestré par le parent */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl absolute top-1/2 left-1/2 -translate-1/2 z-10 pb-16 md:pb-20 w-full px-6"
      >
        {/* Preheading */}
        <motion.p
          variants={itemVariants}
          className="flex items-center gap-3 text-white/70 text-sm mb-4"
        >
          <span className="block w-8 h-px bg-white/70" />
          {hero.preheading}
        </motion.p>

        {/* Heading */}
        <motion.div variants={itemVariants} className="mb-6 max-w-2xl">
          <SplitText
            text={hero.heading[0]}
            tag="h1"
            className="text-white text-5xl md:text-6xl lg:text-7xl font-bold font-manrope leading-[1.1]"
            delay={0.035}
            duration={0.9}
          />
          <br />
          <SplitText
            text={hero.heading[1]}
            tag="span"
            className="text-white text-5xl md:text-6xl lg:text-7xl font-bold font-manrope leading-[1.1]"
            delay={0.035}
            duration={0.9}
          />
        </motion.div>

        {/* Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-white/80 text-base md:text-lg max-w-lg mb-10 leading-relaxed font-inter"
        >
          {hero.paragraph}
        </motion.p>

        {/* Bouton et Avis */}
        <motion.div variants={itemVariants} className="flex flex-col gap-5">
          <div>
            <Button href="/contact">{hero.cta}</Button>
          </div>

          <div className="flex flex-col gap-3 border-l border-white pl-4 mt-2">
            <StarRating />
            <span className="text-white/80 text-sm font-medium">
              {hero.reviewsText}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}