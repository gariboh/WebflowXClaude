"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/**
 * A number that counts up once, when it scrolls into view. The server renders
 * the final value, so the page reads correctly without script and for search
 * engines. With reduced motion the number simply stands still.
 */
export function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.3,
  className,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(to);
  const [armed, setArmed] = useState(false);

  // Start from zero only after mount, and only if it has not been seen yet.
  useEffect(() => {
    if (reduce) return;
    setValue(0);
    setArmed(true);
  }, [reduce]);

  useEffect(() => {
    if (!armed || !inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [armed, inView, to, duration]);

  const text = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}
