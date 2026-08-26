"use client";

import { motion } from "framer-motion";
import {
  Truck,
  ShoppingBag,
  ChefHat,
  CreditCard,
  Sun,
  Armchair,
  VolumeX,
  Baby,
  UtensilsCrossed,
  Dog,
  ParkingCircle,
  Bike,
  XCircle,
  MapPin,
  Phone,
  Navigation,
} from "lucide-react";
import { business } from "@/data/business";

const amenityIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "Offers delivery": Truck,
  "Offers take-out": ShoppingBag,
  "Offers catering": ChefHat,
  "Accepts credit cards": CreditCard,
  "Outdoor seating": Sun,
  Casual: Armchair,
  Quiet: VolumeX,
  "Good for kids": Baby,
  "Good for lunch": UtensilsCrossed,
  "Dogs allowed": Dog,
  "Street parking": ParkingCircle,
  "Validated parking": ParkingCircle,
  "Bike parking": Bike,
};

export function HoursLocation() {
  const todayIndex = (new Date().getDay() + 6) % 7; // Monday = 0

  return (
    <section id="visit" className="bg-ink py-20 text-sand-50 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
        {/* Hours + Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide">
            Hours &amp; Visit
          </h2>

          <table className="mt-8 w-full border-collapse">
            <tbody>
              {business.hours.map((h, i) => (
                <tr
                  key={h.day}
                  className={`border-t border-sand-50/15 ${i === todayIndex ? "text-aquifer-300" : ""}`}
                >
                  <td className="py-2.5 font-[family-name:var(--font-body)] text-sm">
                    {h.day}
                    {i === todayIndex && (
                      <span className="ml-2 font-[family-name:var(--font-data)] text-[10px] uppercase tracking-wider">
                        Today
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 text-right font-[family-name:var(--font-data)] text-sm tabular-nums">
                    {h.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 space-y-3">
            <a
              href={`tel:${business.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-3 font-[family-name:var(--font-body)] text-base hover:text-aquifer-300"
            >
              <Phone size={18} className="text-aquifer-300" />
              {business.phone}
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address.mapsQuery)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 font-[family-name:var(--font-body)] text-base hover:text-aquifer-300"
            >
              <MapPin size={18} className="text-aquifer-300" />
              {business.address.line1}, {business.address.line2}
            </a>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(business.address.mapsQuery)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-sm bg-aquifer-300 px-5 py-2.5 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider text-aquifer-900"
            >
              <Navigation size={16} />
              Get Directions
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-sm border border-sand-50/15">
            <iframe
              title="Oasis Cafe map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(business.address.mapsQuery)}&output=embed`}
              className="h-56 w-full grayscale invert"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Amenities legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-wide">
            Amenities
          </h2>

          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {business.amenities.offered.map((a) => {
              const Icon = amenityIcons[a] ?? ChefHat;
              return (
                <li key={a} className="flex items-center gap-3 font-[family-name:var(--font-body)] text-sm">
                  <Icon size={18} className="shrink-0 text-aquifer-300" />
                  {a}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 border-t border-sand-50/15 pt-6">
            <p className="mb-3 font-[family-name:var(--font-data)] text-[11px] uppercase tracking-[0.3em] text-sand-50/40">
              Not Offered
            </p>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {business.amenities.notOffered.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-3 font-[family-name:var(--font-body)] text-sm text-sand-100/55"
                >
                  <XCircle size={16} className="shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
