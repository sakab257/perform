"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import StarRating from "@/components/atoms/StarRating";
import FadeIn from "@/components/atoms/FadeIn";
import { testimonials, testimonialAvatars } from "@/lib/data";

export default function TestimonialSection() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section id="reviews" className="bg-black text-white py-20 md:py-28">
      <div className="container-site flex flex-col items-center text-center">
        <FadeIn>
          <StarRating />
        </FadeIn>

        <div className="mt-8 mb-8 min-h-40 md:min-h-30 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-xl md:text-2xl lg:text-3xl font-medium font-inter leading-snug"
            >
              &ldquo;{current.quote}&rdquo;
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-white-50 mb-8"
          >
            {current.author}
          </motion.p>
        </AnimatePresence>

        {/* Avatar buttons */}
        <div className="flex gap-2">
          {testimonialAvatars.map((avatar, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`cursor-pointer relative w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${
                i === active
                  ? "border-white scale-110"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={avatar.src}
                alt={avatar.alt}
                fill
                className="object-cover"
                sizes="40px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
