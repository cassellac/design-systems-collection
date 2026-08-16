# Atomic Finds ATX — Homepage Spec (Figma Make Handoff)

Reference build: `ui_kits/website/index.html` in the Atomic Finds Design System. This doc is the brief to hand to Figma Make so the live site (af-atx.figma.site) matches the design system exactly.

## Owner & Voice

**Jennyfer** is the sole owner — sources, restores, and sells every piece herself. She is the only person credited anywhere on the site. **Remove all "Fran & Mabel" copy** currently in the Figma Make source (hero eyebrow, delivery copy, reviews, footer) — those are historically the names of a furniture set, not people, and should never read as founders/owners.

Primary positioning line (hero eyebrow): **Far-out finds, down-to-earth prices.** Logo-lockup catchphrase: **Restored. Vintage. Rattan. Bamboo.**

## Fonts (update these)

- **Display / H1 / H3:** Bagel Fat One
- **H2 / Script:** **Pacifico** — the site's existing Google Fonts `Tilda Script` reference should be **Tilda Script removed entirely**; the only available Tilda file is a watermarked trial build ("AVAILABLE IN FULL VERSION" baked into the glyphs). Pacifico is already loaded in the current build's `fonts.css` — keep using it, it resolves this cleanly.
- **Expressive (rare, optional):** Agbalumo
- **Body:** DM Sans

## Section-by-Section Spec

1. **Nav** — sticky, `rgba(52,40,24,0.94)` background (lightened from the previous near-black so the logo reads with contrast) + 12px blur. Logo: `primary-navigation-home-logo.png` at **56px height** (up from the previous wordmark-only nav), wrapped in a soft radial-glow plate behind it, with a `drop-shadow` glow filter that intensifies on hover. Links: Shop, How It Works, Reviews, Contact + solid "Shop Now" pill.

2. **Hero** — full-bleed starfield background (~90 twinkling dots, fixed, behind a warm weave-texture overlay). Eyebrow: "Far-out finds, down-to-earth prices." (no Fran & Mabel). H1 "Atomic Finds ATX", script line "Vintage, Written in the Stars", body copy "Explore authentic 1970s rattan and bamboo, restored in Austin for a new generation. Timeless design, built to last.", two CTAs (Shop the Collection / How It Works).

3. **The Curators** *(renamed from "Alien Characters")* — four mascot illustrations, each with a lane and voice: **Daisy** (The Laid-Back Tastemaker — lounge-worthy hero pieces), **Milo** (The Detail Nerd — craftsmanship-first finds), **Tatiana** (The Bold One — sculptural showstoppers), **Malibu** (The Host With the Most — entertaining & social pieces). Never implies they're owners.

4. **About Jennyfer** *(new section)* — portrait + bio establishing her as the real person behind sourcing and restoration. Two short paragraphs, one CTA ("Learn Our Story").

5. **Full-width "ATOMIC FINDS ATX" text band** *(new)* — full-bleed, all-caps, Bagel Fat One, celestial yellow with a strong multi-layer glow, subtle `translateY(-6px)` lift + glow boost on hover.

6. **The Collection (Shop)** — category tabs (All / Chairs / Lamps / Shelving), subhead "Curated rattan & bamboo for modern living. Every piece is hand-picked, restored, and ready to adopt.", product grid with real cutout photography, category tag + In Stock/Featured badge per card, Bagel Fat One title + Pacifico tagline + price + "View Details".

7. **In the Spotlight (Featured)** — three **Galaxy Card** components side by side (Peacock, Rattan Lounge, Rattan Bookshelf — every "Featured"-badged product): tilted 3D orbital ring, teal orbiting moon, nebula-wash background per card, detail dialog on click, plus a durability callout: "Vintage rattan that has already outlasted three generations of trends. Built for another 50 years." This is the signature component — do not simplify it to a flat card.

8. **How We Deliver (Process)** — 4-step timeline (Browse & Select → Restored with Care → Local Austin Delivery → You Love It) + a delivery-stats callout card (3–5 day / 100% / ATX).

9. **What Austin Is Saying (Reviews)** — review-card grid, initials-avatar, 5-star rows, italic quote, like count. No Fran & Mabel mentions — reviews should reference Jennyfer where a name is used.

10. **Find Us (Contact)** — 3 info cards (Based In / Hours / Social) + message form (Name, Email, Message) styled with the standard `af-field`/`af-input`/`af-btn` pattern.

11. **Footer** — logo lockup (`logo-dark-bg.png`) + script tagline + description, 3 link columns (Shop / About / Connect), bottom bar crediting Jennyfer only.

## Tokens to Match

Colors, spacing, radii, glow values, and motion timing are all defined in `styles.css` → `tokens/colors.css`, `tokens/spacing.css`, `tokens/typography.css` in the design system project. Pull hex values and CSS custom properties directly from there rather than re-deriving them — see the README there for the full palette table.

## What NOT to Change

- Don't touch the Galaxy Card's ring/moon mechanics — port it faithfully.
- Don't reintroduce Fran & Mabel as people anywhere in copy.
- Don't stack Pacifico with any other script/cursive face.
