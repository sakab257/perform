"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/atoms/SectionLabel";
import FadeIn from "@/components/atoms/FadeIn";
import FaqItem from "@/components/molecules/FaqItem";
import { faqItems } from "@/lib/data";

// Variantes pour l'apparition en cascade
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Délai entre l'apparition de chaque question
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function FaqSection() {
  return (
    <section className="relative z-10 py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        
        {/* En-tête de la section */}
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-manrope tracking-tight text-black mb-4">
              Tout ce que vous devez savoir
            </h2>
            {/* Si tu as un label "FAQ" au-dessus sur ta maquette, tu peux garder ton composant SectionLabel ici */}
            <SectionLabel>FAQ</SectionLabel>
          </div>
        </FadeIn>

        {/* Liste des questions animée au scroll */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Déclenche l'animation un peu avant que ça n'entre dans l'écran
          className="flex flex-col gap-4"
        >
          {faqItems.map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <FaqItem question={item.question} answer={item.answer} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}