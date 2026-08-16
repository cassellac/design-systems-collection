# Atomic Finds — Mobile App UI Kit

Mobile-first recreation of the storefront flow, in a phone frame (390×844).
Composes the same design-system primitives as `ui_kits/store/` (`Button`,
`Badge`, `Tag`, `Card`, `StarburstCallout`, `PillLink`, `Icon`) plus this kit's
own `TabBar`. Reuses `ui_kits/store/data.js` and `HomeScreen.jsx`'s
`ProductMedia` placeholder so catalog + swatches stay in sync with the desktop
kit.

## Screens
- **HomeFeed.jsx** — sticky top bar (logo + search), compact hero with
  starburst, horizontal room-filter chips, 2-column product grid with inline
  "+" add-to-haul buttons.
- **ProductDetail.jsx** — full-bleed square photo, back button overlay,
  metadata table, sticky bottom "Add to Haul" bar (safe-area aware).
- **HaulScreen.jsx** — full-screen cart list + sticky checkout bar.
- **TabBar.jsx** — bottom tab bar (Shop / Search / Haul / Account) with a
  badge count on Haul. Search and Account are placeholder ("Coming soon") —
  no source defined those flows.

## Flow (index.html)
Shop tab → tap a piece → Product detail → Add to Haul → jumps to Haul tab →
Check Out.

## Placeholders / caveats
- Search and Account tabs are stubs; only Shop and Haul are wired up.
- Product photography is the same solid-swatch placeholder as the desktop kit.
