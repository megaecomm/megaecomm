"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export default function AnimatedCounter({ value, className = "", duration = 1.6 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Check if value has digits that can be animated
    const match = value.match(/^([^0-9]*)([0-9.,]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1];
    const rawNumberStr = match[2].replace(/,/g, "");
    const suffix = match[3];
    const targetNum = parseFloat(rawNumberStr);
    const hasComma = match[2].includes(",");

    if (isNaN(targetNum)) {
      setDisplayValue(value);
      return;
    }

    const isDecimal = rawNumberStr.includes(".");
    const decimalPlaces = isDecimal ? rawNumberStr.split(".")[1].length : 0;

    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = (currentTime - startTime) / (duration * 1000);
      const progress = Math.min(elapsed, 1);
      // Easing: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = targetNum * easeProgress;

      let formattedNum = isDecimal ? current.toFixed(decimalPlaces) : Math.floor(current).toString();

      // If original had thousands separator, format it
      if (hasComma && !isDecimal) {
        formattedNum = new Intl.NumberFormat("en-IN").format(Math.floor(current));
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    }

    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
