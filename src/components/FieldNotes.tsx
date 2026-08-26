"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews, gallery } from "@/data/business";

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export function FieldNotes() {
  return (
    <section className="bg-aquifer-900 py-20 text-sand-50 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wide sm:text-4xl"
        >
          Field Specimens
        </motion.h2>

        {/* Photo gallery, styled like pinned field photographs */}
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {gallery.map((g, i) => (
            <motion.figure
              key={g.src}
              initial={{ opacity: 0, y: 40, scale: 0.7, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 180, damping: 16, delay: i * 0.1 }}
              className={`${rotations[i % rotations.length]} relative rounded-sm border-4 border-sand-50 bg-sand-50 p-1.5 shadow-lg transition-shadow hover:shadow-2xl`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.src}
                alt={g.alt}
                className="aspect-[4/5] w-full rounded-[2px] object-cover"
              />
              <figcaption className="mt-1.5 px-0.5 pb-0.5 font-[family-name:var(--font-data)] text-[10px] uppercase tracking-wider text-ink/70">
                {g.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 border-t border-sand-50/15 pt-10"
        >
          <div className="mb-8 flex flex-wrap items-baseline gap-3">
            <div className="flex items-center gap-1 text-aquifer-300">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={i < Math.round(reviews.rating) ? "currentColor" : "none"}
                />
              ))}
            </div>
            <p className="font-[family-name:var(--font-data)] text-sm text-sand-50/80">
              {reviews.rating} average — {reviews.count} {reviews.source} reviews
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {reviews.quotes.map((q) => (
              <blockquote key={q.author}>
                <p className="font-[family-name:var(--font-body)] text-base italic text-sand-50/90">
                  <span aria-hidden className="mr-1 font-[family-name:var(--font-display)] text-2xl not-italic text-aquifer-300">
                    &ldquo;
                  </span>
                  {q.text}
                </p>
                <cite className="mt-3 block font-[family-name:var(--font-data)] text-xs not-italic uppercase tracking-wider text-sand-50/50">
                  {q.author} · {q.location} · {q.date}
                </cite>
              </blockquote>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
