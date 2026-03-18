"use client";

import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  y = 8,
  className = "",
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0.001, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.12, 0.23, 0.5, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
