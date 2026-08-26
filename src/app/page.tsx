import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HalalBand } from "@/components/HalalBand";
import { Menu } from "@/components/Menu";
import { FieldNotes } from "@/components/FieldNotes";
import { HoursLocation } from "@/components/HoursLocation";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <HalalBand />
        <Menu />
        <FieldNotes />
        <HoursLocation />
      </main>
      <Footer />
    </>
  );
}
