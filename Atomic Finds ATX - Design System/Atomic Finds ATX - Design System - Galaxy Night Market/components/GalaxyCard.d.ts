/**
 * Galaxy Card — Signature featured product card
 *
 * A rounded product card wrapped by a tilted 3D Saturn-style ring that spins
 * continuously, with a glowing teal moon orbiting along the ring path (in front
 * at the bottom, behind at the top) and three static glowing stars. Behind the
 * card sits a galaxy nebula wash (via `bg`). Hovering scales the whole scene;
 * clicking opens a product detail dialog (image + specs + Add to Cart).
 *
 * Rebuilt on Atomic Finds tokens — celestial-yellow ring/accents, amber script,
 * display + script fonts. No external dependencies.
 *
 * Usage:
 * ```jsx
 * <GalaxyCard
 *   title="Peacock"
 *   script="vintage find"
 *   desc="1970s rattan peacock chair, restored cane back."
 *   price={1450}
 *   image="/assets/products/peacock-chair.png"
 *   bg="/assets/patterns/nebula-ochre.webp"
 *   dimensions='H 42" x W 30" x D 28"'
 *   origin="United States"
 *   era="1970s"
 * />
 * ```
 */

export interface GalaxyCardProps {
  /** Product title (display font, celestial yellow) */
  title?: string;
  /** Cursive script tagline shown under the title */
  script?: string;
  /** Product description (clamped to 3 lines on the card, full in the dialog) */
  desc?: string;
  /** Price — number (formatted with thousands separators) or a preformatted string. Rendered with a leading "$". */
  price?: number | string;
  /** Product image URL. Displayed object-contain over the colored well; a striped placeholder shows if omitted. */
  image?: string;
  /** Solid background color of the image well & dialog image panel (CSS color or token). Default: #2D2D2D (matches the dark backdrop baked into product photos). */
  imageBg?: string;
  /** Galaxy nebula/pattern image URL washed behind the card body (under a dark scrim). Falls back to a cosmic radial gradient if omitted. */
  bg?: string;
  /** Optional dimensions line shown in the detail dialog, e.g. 'H 42" x W 30" x D 28"' */
  dimensions?: string;
  /** Optional origin line shown in the detail dialog, e.g. "United States" */
  origin?: string;
  /** Optional era line shown in the detail dialog, e.g. "1970s" */
  era?: string;
}

export function GalaxyCard(props: GalaxyCardProps): JSX.Element;
