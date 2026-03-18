"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  duration = 1.5,
  suffix = "+",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const durationMs = duration * 1000;

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  const formatted =
    display >= 10000
      ? `${(display / 1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} 000`
      : display.toLocaleString("en-US").replace(/,/g, " ");

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}
