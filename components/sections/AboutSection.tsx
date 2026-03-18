"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { aboutSection } from "@/lib/data";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="about" ref={containerRef} className="bg-black text-white py-24 md:py-40">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: text blocks */}
          <div className="flex flex-col gap-40 md:gap-112 md:py-40">
            {aboutSection.blocks.map((block, i) => (
              <AboutBlock key={i} block={block} index={i} />
            ))}
          </div>

          {/* Right: sticky image column */}
          <div className="hidden md:block">
            <StickyImageColumn scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBlock({
  block,
  index,
}: {
  block: (typeof aboutSection.blocks)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Mobile image */}
      <div className="md:hidden relative aspect-4/3 rounded-md overflow-hidden mb-6">
        <Image
          src={block.image.src}
          alt={block.image.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed">
        <strong className="font-bold text-white">{block.bold}</strong>
        <span className="text-white-50">{block.regular}</span>
      </p>
    </motion.div>
  );
}

function StickyImageColumn({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const imageIndex = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8], [0, 0, 1, 1, 2]);

  return (
    <div className="sticky top-28 h-[70vh] rounded-md overflow-hidden">
      {aboutSection.blocks.map((block, i) => (
        <ImageLayer key={i} block={block} index={i} imageIndex={imageIndex} />
      ))}
    </div>
  );
}

function ImageLayer({
  block,
  index,
  imageIndex,
}: {
  block: (typeof aboutSection.blocks)[number];
  index: number;
  imageIndex: MotionValue<number>;
}) {
  const opacity = useTransform(imageIndex, (latest: number) => {
    const diff = Math.abs(latest - index);
    return diff < 0.5 ? 1 : 0;
  });

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      <Image
        src={block.image.src}
        alt={block.image.alt}
        fill
        className="object-cover"
        sizes="50vw"
      />
    </motion.div>
  );
}
