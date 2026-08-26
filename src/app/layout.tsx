import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oasis Cafe | Halal Cafe in Lafayette, CA",
  description:
    "Oasis Cafe — a 100% halal cafe in Lafayette, CA. Real espresso, Egyptian-inspired specialty drinks (Sahara Sunset, Nile Cruiser, Nephertiti), soups, salads, and cafe sandwiches. Open Tue–Sun 9am–4pm.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-sand-50 text-ink">
        <div
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: A cafe site as a field-survey document, not a menu flyer — structure literalizes "oasis" as excavation, refusing the warm-photo-hero cafe default.
OWN-WORLD: Sand-gold strata (sand-50→700) sinking into deep aquifer teal (aquifer-300→900) on scroll; Big Shoulders Display headlines, Literata body, IBM Plex Mono data labels; depth-marker dividers (SURFACE → −10M → THE AQUIFER).
STORY: A visitor sees a real halal cafe's menu as descending survey strata, discovers the drinks are the "water" at the bottom, and leaves knowing hours, halal status, and how to get there.
FIRST VIEWPORT: Full-bleed illustrated oasis cross-section fills the frame; "OASIS CAFE" in massive condensed caps sits low over the sand band; tagline and two CTAs anchor the bottom.
FORM: Assigned direction #4 of 7 (The Aquifer / topographic oasis cross-section), seed key f00b4f50.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
-->`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
