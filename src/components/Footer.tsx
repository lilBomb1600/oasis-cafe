import { Logo } from "./Logo";
import { business } from "@/data/business";

export function Footer() {
  return (
    <footer className="bg-aquifer-900 py-10 text-sand-50/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <Logo variant="light" className="h-10 w-auto opacity-80" />
        <p className="font-[family-name:var(--font-data)] text-xs">
          {business.address.line1}, {business.address.line2} · {business.phone}
        </p>
        <p className="font-[family-name:var(--font-data)] text-xs">
          © {new Date().getFullYear()} Oasis Cafe
        </p>
      </div>
    </footer>
  );
}
