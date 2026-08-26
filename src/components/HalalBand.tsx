"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

export function HalalBand() {
  return (
    <section
      id="halal"
      className="relative border-y-2 border-aquifer-900/20 bg-sand-100 py-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <BadgeCheck size={44} className="text-palm-700" />
        </motion.div>
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase tracking-wide text-aquifer-900 sm:text-3xl">
            100% Halal Menu
          </p>
          <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-aquifer-900/70">
            Every dish on our menu is halal — dine in, take out, or have it delivered.
          </p>
        </div>
      </div>
    </section>
  );
}
