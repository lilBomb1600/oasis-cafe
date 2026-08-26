"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, BadgeCheck, Clock } from "lucide-react";
import { business } from "@/data/business";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const todayIndex = (new Date().getDay() + 6) % 7; // Monday = 0
  const todayHours = business.hours[todayIndex];
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-[94vh] min-h-[660px] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/aquifer-hero.png)", y: bgY, scale: bgScale }}
        role="img"
        aria-label="Illustrated topographic cross-section of a desert oasis: date palms above ground, layered sand strata and a glowing teal aquifer below"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sand-700/10 via-transparent to-aquifer-900/70" />

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto grid h-full max-w-6xl grid-cols-1 items-end gap-8 px-6 pb-20 sm:pb-28 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div className="flex flex-col items-start">
          <motion.h1
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-display)] text-[15vw] font-extrabold uppercase leading-[0.82] text-sand-50 sm:text-[9vw] lg:text-[6.5rem]"
          >
            Oasis Cafe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-lg font-[family-name:var(--font-body)] text-lg text-sand-100/90"
          >
            A halal oasis in the heart of Lafayette — real espresso, Egyptian-inspired
            specialty drinks, and cafe classics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#menu"
              className="rounded-sm bg-aquifer-300 px-6 py-3 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-aquifer-900 shadow-[0_0_24px_-2px_rgba(79,179,173,0.65)] transition-transform hover:scale-[1.03]"
            >
              View the Menu
            </a>
            <a
              href="#visit"
              className="rounded-sm border border-sand-100/50 px-6 py-3 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-sand-50 transition-colors hover:bg-sand-50/10"
            >
              Hours &amp; Directions
            </a>
          </motion.div>
        </div>

        {/* Floating field-reading card */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="ml-auto w-64 rounded-xl border border-sand-100/25 bg-aquifer-900/40 p-5 shadow-[0_20px_60px_-15px_rgba(7,37,48,0.8)] backdrop-blur-md"
          >
            <p className="font-[family-name:var(--font-data)] text-[10px] uppercase tracking-[0.25em] text-aquifer-300">
              Field Reading
            </p>
            <div className="mt-3 flex items-center gap-2 text-sand-50">
              <BadgeCheck size={18} className="text-aquifer-300" />
              <span className="font-[family-name:var(--font-display)] text-lg font-bold uppercase">
                100% Halal
              </span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sand-100/80">
              <Clock size={16} className="text-aquifer-300" />
              <span className="font-[family-name:var(--font-data)] text-sm">
                {todayHours.time === "Closed" ? "Closed Today" : `Open Today · ${todayHours.time}`}
              </span>
            </div>
            <p className="mt-3 font-[family-name:var(--font-data)] text-[11px] text-sand-100/50">
              {business.address.line1}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#halal"
        aria-label="Scroll down"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-sand-50/80"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
