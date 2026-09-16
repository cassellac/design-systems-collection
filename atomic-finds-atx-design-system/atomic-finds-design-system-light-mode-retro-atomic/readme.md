# Atomic Finds — Design System (Light Mode "Retro Atomic" Alter-Ego)

A structured, tactile **light-mode** identity for **Atomic Finds**, the vintage
bamboo & rattan furniture brand — the grounded counterpart to the brand's dark,
deep-space galaxy look. Where dark mode is infinite space, this system is
*material*: sun-worn cane, screen-printed signage, mid-century editorial print.
High contrast, heavy display type, hard offset shadows, thick ink borders.

This is a **second, furniture-driven direction** for the client, distinct from
the brand's other design system — same retro-atomic style and voice, aimed at
Atomic Finds' actual product: hand-sourced vintage bamboo and rattan furniture
(chairs, tables, daybeds — living/dining/lounge/outdoor).

---

## Sources & provenance
This system was built from a **written brand-direction brief** (the "Retro Atomic
Counter-Concept") plus client-supplied assets:

- **Display typeface:** *Mamba* by **W Type Foundry** — a heavy retro flare-serif
  in the Cooper Black lineage. **The real font file was supplied** by the client
  (`Mamba Ice Cream 1.otf`) and is embedded at `assets/fonts/Mamba.otf` /
  `tokens/fonts.css`. No substitution in use.
- **Logo:** a real wordmark was supplied (yellow "ATOMIC FINDS" lockup on black) —
  embedded at `assets/logo.png` and used in both UI kits' headers.
- **Reference imagery:** font specimen sheets ("Turbio Chela", Mamba type
  sheets) informed layout/type decisions only; no pixels from those sheets were
  copied into any component or asset.
- **No furniture product photography was supplied.** Product cards use a solid
  color-swatch placeholder (`ProductMedia`) — swap for real photography when it
  arrives.

---

## CONTENT FUNDAMENTALS
How Atomic Finds writes.

- **Voice:** confident, punchy, collector-culture. Talks like a knowledgeable
  vintage-furniture dealer — enthusiastic but never gushing. Short declaratives.
- **Person:** second person for the reader ("your finds", "build your haul"),
  first-person-plural for the brand ("we source", "we clean up"). Avoid corporate "I".
- **Casing:** display headlines in **ALL CAPS** or Title Case, always tightly
  tracked. Eyebrows/labels are **UPPERCASE** with wide tracking. Body copy is
  sentence case.
- **Tone words:** *find, haul, source, patina, weave, cane, hand-picked, original.*
  Leans into physical-artifact language — the object's history, not just its style.
- **Punctuation:** em-dashes for rhythm; exclamation used sparingly for
  promo/starburst callouts only ("8 FRESH FINDS!").
- **Numbers/stats:** framed as collectible facts ("Find No. 001", "Est. 1968"
  vibe, condition ratings), not dashboards of vanity metrics.
- **Emoji:** **not used.** The brand expresses energy through type weight,
  starbursts, and color — not emoji.
- **Examples:**
  - Eyebrow: `NEW THIS WEEK`
  - Headline: `Hand-Picked & Ready to Live In`
  - Body: `Every piece is sourced, cleaned, and shot in natural light before it
    hits the floor.`
  - Promo: `8 FRESH FINDS!`

---

## VISUAL FOUNDATIONS

**Color.** Warm cream ground (`#FFFDF0`), athletic yellow (`#FACC15`) as the
signature surface/accent, warm charcoal near-black (`#171412`) for ink and heavy
type. A darker yellow (`#EAB308`) is the canonical drop-shadow color. Supporting
mid-century accents: burnt rust, muted teal, screen-print cherry — evoke
sun-bleached wood and dyed reed, used sparingly, one accent per composition.
**Max 1–2 background colors per layout** (cream + one yellow block). Everything
is warm; no cool greys.

**Type.** Two families only: heavy retro display serif (Mamba → Alfa Slab One)
and a clean Helvetica sans for body/UI. Display is set BIG and TIGHT
(`letter-spacing: -0.03em`) so heavy letterforms pack together. Body uses normal
tracking, 1.5 line-height. Uppercase wide-tracked eyebrows label sections.

**Spacing.** 4px base grid. Generous outer margins; content packs tight
*within* cards (record-sleeve density). Section rhythm is roomy (80–128px).

**Backgrounds.** Flat solid color fields — cream page, occasional full-bleed
yellow block. No gradients, no photographic hero washes, no blur. Optional
subtle paper-grain/halftone texture is on-brand but must stay faint. Starbursts
and pill badges break the grid as graphic punctuation.

**Borders.** Thick, confident, solid **ink** strokes — 2px default, **3px** for
hero containers and pill badges. Borders are structural, not decorative.

**Shadows.** **Hard offset shadows with zero blur** (`5px 5px 0 #171412`) — the
signature "printed layer" look, like registration-offset screen printing. A
yellow-shadow variant (`5px 5px 0 #EAB308`) for playful accents. Exactly one
soft ambient shadow exists (`0 10px 30px rgba(...)`) reserved for floating
overlays (dialogs, menus) — never on inline cards.

**Corner radii.** Soft but not squishy: 12–16px on structural containers, 6px on
inputs, full pill (`9999px`) on badges. Square (0 radius) on product-photo
wrappers — reads as a printed catalog card, not a soft app tile.

**Cards.** White surface, 2–3px ink border, hard offset shadow, 16px radius,
square image wrapper on top or left. No soft drop-shadow, no colored left-border
accent trope.

**Motion.** Snappy and slightly springy — `120–180ms`, `ease-snap`
(`cubic-bezier(0.34,1.56,0.64,1)`). No long fades, no parallax.

**Hover states.** Buttons/cards translate up-left and the hard shadow grows
(the object "lifts off the page"); or the offset shadow nudges to imply a press.
Links shift to the hover color and can gain an offset text-shadow.

**Press/active states.** Element translates **toward** its shadow (down-right)
and the shadow shrinks to ~1px — a physical "stamp down". No color inversion.

**Transparency & blur.** Essentially none. Solid fills only. (Overlay scrims may
use a translucent ink wash, but no backdrop-blur glass.)

**Imagery vibe.** Warm, natural-light product photography; square crops; can
carry subtle film grain. No cool/desaturated or neon treatments.

---

## ICONOGRAPHY
- No icon font or SVG icon set was provided with the brief.
- **Substitution (flagged):** the system uses **Lucide** (via CDN) — a clean,
  consistent 2px-stroke open-source set that pairs well with the Helvetica body
  and the heavy display type. This is a substitution; if Atomic Finds has its own
  glyph set, drop the SVGs into `assets/icons/` and update the `Icon` component.
- **Starbursts** (multi-point sharp vector bursts) are a brand *graphic*, not an
  icon — used behind promo callouts and discount badges. Rendered as inline SVG
  in the `StarburstCallout` component.
- **Emoji / unicode glyphs are not used** as icons anywhere.
- Stroke weight target: 2px, round caps, to sit comfortably beside 2–3px UI
  borders.

---

## INDEX / MANIFEST
Root files:
- `styles.css` — global entry (import-only). Consumers link this.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`,
  `fonts.css`.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skill wrapper for downloadable use.
- `readme.md` — this file.

Foundation cards: `guidelines/` (Colors, Type, Spacing, Brand groups).

Components (`components/`): see each `*.prompt.md`.
- `core/Button`, `core/Badge`, `core/Card`, `core/Input`, `core/Tag`
- `brand/StarburstCallout`, `brand/PillLink`, `brand/Icon`

UI kits (`ui_kits/`):
- `store/` — desktop storefront (browse, product, haul/cart drawer).
- `app/` — mobile-first version of the same flow, in a phone frame (390×844)
  with a bottom tab bar (Shop / Search / Haul / Account — Search & Account are
  stubs, no source defined those flows).

### Intentional additions
- **`Icon`** — thin wrapper over the substituted Lucide set so kits/slides don't
  hand-roll SVGs. Reason: no glyph set was supplied; centralizes the substitution.
- **`StarburstCallout` / `PillLink`** — encode the brief's explicit graphic
  motifs (starburst promos, thick pill badges) as reusable primitives.
