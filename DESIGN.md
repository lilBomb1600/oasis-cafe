# Design

<!-- impeccable:design-schema 1 -->

## World

"The Aquifer" — the site is built as a field-survey document of the oasis the cafe is named for, not a photo-hero cafe site. Scrolling down the page is scrolling down through the earth: the palette and section order sink from sun-bleached sand at the top to a glowing teal aquifer at the bottom, with the menu itself organized as descending depth strata (bagels at the "surface" down to the specialty drinks — literally the "water" — at "The Aquifer"). Real photography and reviews are framed as "Field Specimens": pinned field photographs and log-entry quotes, keeping the survey-document conceit intact rather than switching into a generic Instagram-gallery register.

Seed key: `f00b4f50` (assigned direction #4 of 7, `concept-seed.mjs --scope direction --mode persuade`).

## Palette

Full palette, 9 named stops across two families, used as literal section backgrounds (not accents):

- **Sand** (above ground): `sand-50` #fbf3df → `sand-100` #f4e3b8 → `sand-300` #e0bd75 → `sand-500` #c99b46 → `sand-700` #8f6a2c
- **Aquifer** (below ground): `aquifer-300` #4fb3ad → `aquifer-500` #1f7a82 → `aquifer-700` #0f4a56 → `aquifer-900` #072530
- **Palm** (brand accent, from the real logo): `palm-500` #3f6b3f, `palm-700` #2a4a2a
- **Ink** #0a1a1f — the darkest neutral, used for the Hours/Visit section and as body text on light sand grounds

Text color always follows contrast, not a light/dark rule: dark `ink` text sits on `sand-50` through `sand-500` and on `aquifer-300`; `sand-50` text sits on `aquifer-500` through `aquifer-900` and on `ink`. `sand-500` was originally paired with light text and failed 4.5:1 — verify contrast numerically when adding a new section, don't eyeball it.

## Type

- **Display** — Big Shoulders Display (600/700/800): condensed civic-signage character for headlines and CTAs, evokes stenciled survey-marker lettering. Always uppercase.
- **Body** — Literata: warm literary serif for running copy and menu item names.
- **Data** — IBM Plex Mono: reserved for actual data/measurement — prices, hours, depth-marker labels (`−2M`, `THE AQUIFER`), review metadata. Not used as generic "technical" decoration elsewhere.

## Components & conventions

- **Depth markers** (`Menu.tsx`'s `depthOrder`): each menu section declares its own background, text color, and divider color as one unit — never split these across separate props, since the whole point is bg/text staying a matched, contrast-checked pair.
- **No eyebrows/kickers.** Headings carry their own weight — do not add a small label above an `<h2>`/`<h1>`. This was corrected once already (hero badge, "Site Survey", "Map Legend" labels were all removed at finish).
- **Field Specimens photos** (`FieldNotes.tsx`): real photography renders as small rotated "pinned" cards with a mono-font `Fig. N — Caption` label, never as a plain full-bleed gallery — that framing is what keeps real photos from clashing with the illustrated hero.
- Blockquotes/callouts never use a colored `border-left`/`border-right`; the review quotes use a large display-font quotation glyph inline instead.
- Motion: Framer Motion `whileInView`/`animate` fades of 16–24px + opacity, `ease: [0.16, 1, 0.3, 1]`, staggered by ~0.08–0.15s per group. One hero entrance sequence, not scattered per-element effects; the only looping animation is the hero's scroll-cue chevron.
- Logo is a hand-built inline SVG (`Logo.tsx`), not a raster export — the real logo was only ever seen pasted in chat, never saved as a file this session.

## Content provenance

- Menu, hours, address, phone, and amenities: from the business's real Yelp listing and in-store menu photos the user supplied directly (see `PRODUCT.md` → Evidence on Hand).
- Reviews and the 4.3★/95-review aggregate, plus four photos (storefront, pastry case, iced latte, outdoor seating): pulled live from `yelp.com/biz/oasis-cafe-lafayette`. Personal/solo-customer photos were skipped in favor of place and food shots.
- Hero and gallery-adjacent illustration (`/images/aquifer-hero.png`): AI-generated (OpenArt, `gpt-image-2`) as the approved decision comp for this direction — not a real photograph, and should stay labeled/treated as illustration if reused elsewhere.

## Known process deviations from the impeccable reference (disclosed)

- The direction decision used `AskUserQuestion` + two generated comp images instead of the full `serve-question.mjs` decision-page/local-server flow — that flow needs local server + browser plumbing this harness couldn't run reliably (the underlying `concept-seed.mjs` process itself crashed on exit with a Windows libuv assertion after printing its result). The dice/assignment step (`concept-seed.mjs`) itself ran normally and produced the assigned direction used here.
- The finish review and this document were produced in-thread rather than by the shipped `impeccable-finish-reviewer` / `impeccable-documenter` subagents, which are not registered as agent types in this harness.
