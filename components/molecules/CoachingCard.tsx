"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import type { CoachingPlan } from "@/lib/data";

interface CoachingCardProps {
  plan: CoachingPlan;
  index: number;
}

export default function CoachingCard({ plan, index }: CoachingCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 0.4,
        delay: index * 0.1,
      }}
      className="sticky top-8 bg-white rounded-lg border border-gray-border overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative aspect-4/3 md:aspect-auto overflow-hidden rounded-lg m-3">
          <Image
            src={plan.image.src}
            alt={plan.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-baseline justify-between md:block mb-4 md:mb-6">
            <h3 className="text-2xl font-bold font-inter">
              {plan.name}
            </h3>
            <span className="text-xs uppercase tracking-widest text-gray md:mt-0">
              {plan.price}
            </span>
          </div>

          <ul className="flex flex-col gap-3 mb-8">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray">
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button href="/contact">Me contacter</Button>
        </div>
      </div>
    </motion.div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0 mt-0.5"
    >
      <path
        d="M13.3334 4L6.00002 11.3333L2.66669 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
