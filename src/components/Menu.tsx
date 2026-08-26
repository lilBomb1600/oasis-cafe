"use client";

import { motion } from "framer-motion";
import { menu } from "@/data/business";

const depthOrder = [
  { id: "bagels", label: "Surface", bg: "bg-sand-50", text: "text-ink", line: "border-ink/15" },
  { id: "soups-salads", label: "−2M", bg: "bg-sand-100", text: "text-ink", line: "border-ink/15" },
  { id: "cafe-sandwiches", label: "−4M", bg: "bg-sand-300", text: "text-ink", line: "border-ink/20" },
  { id: "hot-stuff", label: "−6M", bg: "bg-sand-500", text: "text-ink", line: "border-ink/20" },
  { id: "espresso", label: "−8M", bg: "bg-aquifer-300", text: "text-aquifer-900", line: "border-aquifer-900/20" },
  { id: "pharoccinos", label: "−10M", bg: "bg-aquifer-500", text: "text-sand-50", line: "border-sand-50/20" },
  { id: "oasis-originals", label: "The Aquifer", bg: "bg-aquifer-900", text: "text-sand-50", line: "border-sand-50/15" },
] as const;

export function Menu() {
  return (
    <section id="menu" aria-label="Menu">
      {depthOrder.map((depth, i) => {
        const section = menu.find((m) => m.id === depth.id);
        if (!section) return null;

        return (
          <div key={depth.id} className={`${depth.bg} ${depth.text} py-16 sm:py-20`}>
            <div className="mx-auto max-w-3xl px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-8 flex items-baseline justify-between gap-4">
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase tracking-wide sm:text-4xl">
                    {section.title}
                  </h2>
                  <span className="whitespace-nowrap font-[family-name:var(--font-data)] text-xs tracking-widest opacity-60">
                    {depth.label}
                  </span>
                </div>

                {section.note && (
                  <p className="mb-6 -mt-4 font-[family-name:var(--font-body)] text-sm italic opacity-70">
                    {section.note}
                  </p>
                )}

                <ul className="space-y-0">
                  {section.items.map((item) => (
                    <li
                      key={item.name}
                      className={`flex items-baseline justify-between gap-6 border-t py-3.5 first:border-t-0 ${depth.line}`}
                    >
                      <div>
                        <p className="font-[family-name:var(--font-body)] text-base font-medium sm:text-lg">
                          {item.name}
                        </p>
                        {item.description && (
                          <p className="mt-0.5 max-w-md font-[family-name:var(--font-body)] text-sm opacity-65">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <span className="whitespace-nowrap font-[family-name:var(--font-data)] text-sm tabular-nums opacity-90">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
