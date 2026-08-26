"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/aquifer-hero.png)" }}
        role="img"
        aria-label="Illustrated topographic cross-section of a desert oasis: date palms above ground, layered sand strata and a glowing teal aquifer below"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sand-700/10 via-transparent to-aquifer-900/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-20 sm:pb-28">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-[15vw] font-extrabold uppercase leading-[0.82] text-sand-50 sm:text-[9vw] lg:text-[7.5rem]"
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
            className="rounded-sm bg-aquifer-300 px-6 py-3 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-aquifer-900 transition-transform hover:scale-[1.03]"
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
