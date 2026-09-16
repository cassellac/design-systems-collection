---
name: atomic-finds-design
description: Use this skill to generate well-branded interfaces and assets for Atomic Finds ATX, the vintage rattan furniture curator. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping both marketing and admin interfaces.
user-invocable: true
---

# Atomic Finds Design System Skill

Welcome! This skill gives you access to the complete Atomic Finds Design System — a dark-mode celestial 70s aesthetic blending vintage rattan craftsmanship with golden-glow neon accents.

## What's Included

**README.md** — Complete design system overview, color palette, typography, spacing, brand voice, and visual foundations.

**Tokens:**
- `tokens/colors.css` — 6-core palette + semantic colors
- `tokens/typography.css` — Bagel Fat One, Pacifico, Agbalumo, DM Sans + type scale
- `tokens/spacing.css` — 4px base scale, radius, borders, glow effects, animations

**Components:**
- Button (solid, primary, amber variants)
- Badge (in-stock, featured, out, eco)
- Card (with hover lift & glow)

**UI Kit:**
- `ui_kits/website/` — Complete homepage with hero, features, gallery, CTA, footer

**Foundation Cards:**
- Color palettes (primary & support)
- Typography scale
- Spacing system
- Border radius system
- Glow effects
- Brand voice & tone
- Alien character mascots

## Quick Start

### For Visual Design
1. Open `README.md` to understand the brand, voice, and visual foundations
2. Browse the **Design System** tab to see all foundation cards (colors, type, spacing, effects, brand guidelines)
3. Reference the **Components** tab for Button, Badge, and Card examples
4. Check the **Website** tab for a complete homepage template

### For Building
1. Link `styles.css` to load all tokens and semantic styles
2. Use CSS custom properties: `var(--celestial-yellow)`, `var(--glow-md)`, `var(--radius-pill)`, etc.
3. Import React components from the compiled bundle (Button, Badge, Card)
4. All components respect `prefers-reduced-motion` and are fully accessible

## Design Principles

**Dark Mode Celestial 70s:** Deep charcoal backgrounds, golden-glow neon accents, warm rattan texture overlays

**Glow Over Shadow:** Text glows and golden halos replace traditional drop-shadows

**Soft Corners:** All radius values are rounded (6, 12, 18, 24px, pill) — never square

**Warm Color Grading:** Amber, gold, and warm brown tones throughout

**Motion & Easing:** Bouncy organic easing (`cubic-bezier(0.16, 1, 0.3, 1)`) with 300ms standard duration

## Key Colors

| Color | Hex | Role |
|-------|-----|------|
| Deep Charcoal | #1E1E1E | Primary background |
| Celestial Yellow | #F5C842 | Primary accent & glow |
| Amber Orange | #D4822A | Secondary accent & script |
| Bone White | #F0E8D8 | Body text |
| Rattan Black | #2A2017 | Card surfaces |
| Woven Moss | #556B4A | Eco tags |

## Brand Voice

**Warm, authentic, expert-but-approachable.** Sounds like two friends who know their stuff and genuinely love what they do.

**Core Values:**
- Handcrafted heritage (celebrate story & craftsmanship)
- Sustainable by nature (frame vintage as the eco-choice)
- Jennyfer's personality (honor the real owner, her taste, her expertise) — she is the only person credited as owner/curator; "Fran & Mabel" are historic furniture-set names, not people

**Copywriting:**
- ✅ "Handpicked," "Restored," "1970s," "Mid-century"
- ❌ "Pre-owned," "Refurbished," "Authentic authenticity"
- Use square brackets for CTAs: "[ Explore Collection ]"
- No emoji in marketing; let the aliens do the visual work

## Using This Skill

When the user asks you to create a design, visual mock, prototype, or asset for Atomic Finds ATX:

1. **Reference this README** for brand guidelines
2. **Copy tokens** (`styles.css`) into your project to get colors, type, spacing
3. **Compose UIs** using the provided components and the homepage template as a reference
4. **Use component cards** as inspiration for layout, hierarchy, and interaction patterns
5. **Follow the visual foundations** — glow system, spacing, color palette, typography hierarchy

For production code, import tokens and components; for throwaway prototypes and mocks, build simple HTML using inline styles following the documented patterns.

## Examples

### Using Colors
```css
/* In your stylesheet, after linking styles.css */
h1 { color: var(--celestial-yellow); text-shadow: var(--glow-md); }
button { background: var(--celestial-yellow); box-shadow: var(--glow-sm); }
.card { border: 1px solid var(--border); }
```

### Building a Simple Layout
Follow the homepage template structure:
1. Sticky nav with logo + links
2. Hero section with headline + CTA
3. Feature grid (4 cards)
4. Gallery grid (product cards)
5. CTA section
6. Multi-column footer

### Typography Hierarchy
- **Display (88px):** Bone white, glowing
- **H1/H2 (48–64px):** Celestial yellow, medium glow
- **H3 (22px):** Celestial yellow, small glow
- **Script (38px):** Amber orange, amber glow
- **Body (16px):** Bone white, no glow
- **Small/Labels (12–14px):** Muted text

## Need Help?

Refer to `README.md` for:
- Complete color palette with roles
- Typography scale and line heights
- Spacing system and layout rules
- Border radius, glow effects, and motion timing
- Brand voice, tone, and copywriting guidelines
- Accessibility standards (WCAG AA)
- Photography & imagery style guide
- Alien character usage

---

**Atomic Finds ATX — Restored. Vintage. Rattan. Bamboo. Curated with love by Jennyfer.**
