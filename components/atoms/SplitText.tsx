"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export default function SplitText({
  text,
  className = "",
  delay = 0.03,
  duration = 0.8,
  tag = "p",
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  const Tag = tag as React.ElementType;

  const chars = text.split("");

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ display: "inline-block" }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", willChange: "transform, opacity" }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration,
            delay: i * delay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Tag>
  );
}
