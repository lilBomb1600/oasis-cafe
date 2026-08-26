"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";

const readings = [
  { at: 0, label: "SURFACE" },
  { at: 0.35, label: "−4M" },
  { at: 0.55, label: "−8M" },
  { at: 0.72, label: "−10M" },
  { at: 0.88, label: "AQUIFER" },
];

export function DepthGauge() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.3 });
  const dotTop = useTransform(smooth, [0, 1], ["0%", "100%"]);
  const glowOpacity = useTransform(smooth, [0, 0.05, 0.95, 1], [0.4, 1, 1, 0.4]);

  return (
    <div className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
      <span className="font-[family-name:var(--font-data)] text-[10px] uppercase tracking-[0.2em] text-aquifer-900/50">
        Depth
      </span>
      <div className="relative h-56 w-px bg-ink/15">
        <motion.div
          style={{ top: dotTop, opacity: glowOpacity }}
          className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aquifer-500 shadow-[0_0_10px_3px_rgba(31,122,130,0.55)]"
        />
      </div>
      <ReadingLabel progress={smooth} />
    </div>
  );
}

function ReadingLabel({ progress }: { progress: ReturnType<typeof useSpring> }) {
  const [label, setLabel] = useState(readings[0].label);

  useMotionValueEvent(progress, "change", (v) => {
    let current = readings[0].label;
    for (const r of readings) {
      if (v >= r.at) current = r.label;
    }
    setLabel(current);
  });

  return (
    <span className="min-w-[4.5rem] text-center font-[family-name:var(--font-data)] text-[11px] font-medium tracking-wider text-aquifer-900/70">
      {label}
    </span>
  );
}
