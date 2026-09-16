# Atomic Finds — Storefront UI Kit (Desktop)

An interactive, high-fidelity recreation of the Atomic Finds vintage bamboo &amp;
rattan furniture shop in the light-mode "Retro Atomic" identity. Composes the
design-system primitives (`Button`, `Badge`, `Tag`, `Card`, `StarburstCallout`,
`PillLink`, `Icon`) — it does not re-implement them.

## Screens
- **Header.jsx** — sticky top nav: real wordmark logo, pill search, yellow Haul
  button with count badge.
- **HomeScreen.jsx** — yellow hero with offset-shadow headline + starburst, then a
  filterable grid of piece cards. Includes the shared `ProductMedia` block.
- **ProductScreen.jsx** — split layout: square photo with hard offset shadow on
  the left, title hierarchy + ordered metadata rows + add-to-haul on the right.
- **CrateScreen.jsx** — slide-in "Haul" drawer with line items, subtotal, checkout.

## Flow (index.html)
Home → click a piece → Product → Add to Haul → Haul drawer opens → Check Out.
Room tags filter the grid; the search box filters by title/maker/collection.

See `ui_kits/app/` for the mobile-first version of this same flow.

## Placeholders / caveats
- **Product photography** is represented by solid swatch colors + title text
  (`ProductMedia` component). Swap for real photography when it arrives.
- Catalog data is fake (`data.js`); maker/collection names are illustrative of
  the vintage-rattan domain, not a real inventory.
