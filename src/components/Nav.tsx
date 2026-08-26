"use client";

import { Phone } from "lucide-react";
import { Logo } from "./Logo";
import { business } from "@/data/business";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#halal", label: "Halal" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-sand-500/30 bg-sand-50/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <Logo className="h-12 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.2em] text-aquifer-900 transition-colors hover:text-aquifer-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${business.phone.replace(/[^0-9]/g, "")}`}
          className="flex items-center gap-2 rounded-full border border-aquifer-700 px-4 py-2 font-[family-name:var(--font-data)] text-xs font-medium text-aquifer-900 transition-colors hover:bg-aquifer-700 hover:text-sand-50"
        >
          <Phone size={14} />
          <span className="hidden sm:inline">{business.phone}</span>
        </a>
      </div>
    </header>
  );
}
