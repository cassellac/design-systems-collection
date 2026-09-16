# Atomic Finds ATX — Design System

**Atomic Finds ATX** is a South Austin, TX one-woman vintage-resale business run by Jennifer "Jenny / Bombo" Gomez. She sources 60s–70s rattan and bamboo furniture, restyles it, and resells it primarily through Instagram (**@atomicfindsatx**) and Facebook Marketplace (4.8/5, 88 reviews; "Highly Rated" badge — strong on communication, punctuality, item description, pricing). There is no app or marketing website today — the entire "product" is the Instagram feed, stories/highlights, and DM-to-shop flow, plus in-person showroom pickups.

Tagline: **"🛸 Tiny Time Machines for Your Home."** Secondary line: **"Far-out finds, down-to-earth prices."**

### Material philosophy & cultural story
Atomic Finds ATX frames restoration as **stewardship, not just decor**. Jenny (Mexican-American-owned business) grounds pieces in the *mimbre* (wicker) and *palma* (palm) weaving traditions behind them, not just their "boho-chic" surface look — every "Tiny Time Machine" carries the craftsmanship of the artisans who wove it. Copy can reach for this deeper layer, especially in "Behind the Find" story content:
- **Material glossary** (useful for accurate captions): *Rattan* — solid-core climbing palm vine, heavy/dense, bends into curved frames. *Bamboo* — hollow-core grass, rigid/straight, identifiable by smooth segmented nodes. *Wicker* — not a material, a weaving technique (rattan peel, cane, reed woven over a frame).
- **"Atomic Standard" quality markers** to call out when describing a find: the **weight test** (solid, heavy — light/hollow means a modern replica), **the bindings** (tight leather/cane/rattan-peel wraps at joints, not nailed/glued), **the patina** (warm honey-toned amber oxidation that can't be faked).
- **Why vintage, not new**: buying vintage breaks the wild-harvest extraction cycle, honors the original weaver's labor, and diverts quality pieces from landfills — rattan is a forest vine, so demand for it also gives standing rainforest canopy real economic value.
- **Tone guidance**: this context deepens the brand rather than replacing its playful voice — use it for "knowledgeable friend" moments (sourcing stories, material call-outs), not for every caption. Keep the emoji-forward, first-person voice; let the history surface as a sentence or two of texture, not a lecture.

## Sources provided
- 9 uploaded images: the circular logo badge, "SOLD" and "AVAILABLE" pop-art status stickers, a promo poster (QR + Instagram handle), and product/lifestyle photos (rattan bakers rack, folding rattan screen, hexagonal plant stand, storefront photo, an "About the owner" story-style bubble graphic).
- Written brand notes: Instagram bio copy, logo description, post voice/tone examples, color palette notes, hashtag strategy, story highlight structure.
- No Figma file, codebase, or existing style guide was attached — this system is built from brand materials and photography, not from code.

## What's in this folder
- `styles.css` — root stylesheet, imports every token file. Link this one file to get all tokens + fonts.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (CSS custom properties).
- `assets/` — logo badge, SOLD/AVAILABLE stickers, promo poster, product + lifestyle photography.
- `components/` — reusable React primitives: `forms/` (Button, IconButton, Input), `content/` (ProductCard, Tag, Avatar), `feedback/` (StatusBadge).
- `ui_kits/shop/` — a recreation of the Atomic Finds ATX Instagram-shop experience (profile header, story highlights, product grid, product detail/DM sheet).
- `guidelines/` — foundation specimen cards shown in the Design System tab.

## Content fundamentals
- **Voice:** playful, warm, first-person from Jenny. Bio says "I hunt down old, weird & beautiful things, give them a second life and find them new homes."
- **Naming pieces:** furniture gets a name and a little personality — "Meet Tropi," "Meet Flora," "Meet Atlas," "Meet Celeste." Treat each product like a character, not a SKU.
- **Casing:** ALL CAPS for status/urgency ("SOLD!!!!!", "NEW DROP", "AVAILABLE"). Sentence case everywhere else, including headlines mixed with caps for emphasis words only.
- **Emoji:** used often and specifically — 🔥 💚 ✨ ❤️ 🍸 💙 🍺 🛸 — never generic (no 👍/😀). One or two per caption max, placed at the start of a line or after a punchy phrase.
- **Punctuation for energy:** repeated exclamation points and caps do the emphasis work ("SOLD!!!!!"), not adjectives.
- **Phrases:** "Authentically Ritts," "Main character energy," "Freshly rescued from another decade," "Follow the next find."
- **POV:** first-person ("I hunt down…") in bio/story content; direct address ("you") when talking about the piece finding a home. Never corporate "we."
- **Hashtags:** consistent block at the end of posts — `#AtomicFindsATX #VintageRattan #VintageFurniture #BohoDecor #AustinVintage #70sStyle #RattanFurniture #RetroFurniture #AustinFinds`.
- **Structure:** Highlights are organized by content type — Behind the Find (sourcing story), Available (current inventory), Sold (archive/social proof), At Home (customer installs).

## Visual foundations
- **Color:** warm, sunny, retro-optimistic. Primary brand orange/red (sun-orange `#E8632F`, poppy red `#D6412B`) for headline type and CTAs; avocado/olive green (`#4F5E2A`) as the secondary brand color (seen in "AVAILABLE" and "FINDS" lettering); hot pink (`#EC5A93`) and flamingo pink (`#F2A9C4`) as high-energy accents (sticker backgrounds, "NEW DROP" callouts); marigold, chartreuse and turquoise as supporting accents. Cream/tan (`#F3E7C9`) is the dominant background — never stark white or black. Photography stays warm-toned (honey rattan, golden light); avoid cool/blue color grading.
- **Type:** four-part system, no single "clean corporate sans." Bungee (chunky poster display) for hero headlines like the promo poster's "ATOMIC FINDS"; Pacifico (script) for the logo wordmark and any signature-style callouts; Fredoka (rounded, bold) for status badges and subheads — matches the puffy lettering on the SOLD/AVAILABLE stickers; Caveat (handwriting) for personal captions/story bubbles, echoing the owner's marker-style story graphics; Nunito for body copy and UI text, since none of the source material uses a plain grotesk for reading text.
- **Backgrounds:** flat warm cream/tan fields, sometimes with a subtle vintage paper texture (see the promo poster) and tropical-leaf botanical corners — no gradients, no abstract SVG blobs. Full-bleed lifestyle photography is common (Instagram Reels/photos).
- **Imagery:** natural, bright, warm-lit product photography shot in a real room — plants and rattan side-by-side, wood floors, patterned tile. Not studio white-background product shots. Grain/texture is authentic (real photos), not applied as a filter.
- **Animation:** the brand has no motion system today (static Instagram posts). For UI, keep motion minimal, bouncy and quick — a soft overshoot ease (`--ease-bounce`) on stickers/badges appearing, plain fade/slide (`--ease-out`) elsewhere, 120–220ms.
- **Hover / press states:** buttons and cards darken slightly on hover (`--brand-primary-hover`, `--brand-secondary-hover`) and translate up 2px with a deeper shadow; press state removes the shadow and returns to resting position (a "sticker being pressed down" feel), never a scale-up.
- **Borders & shape:** thick, confident borders (2–4px) in espresso brown or the fill's own darker shade — visible outlines, not 1px hairlines. Corners are either fully round (pill buttons, circular badges/stickers) or a soft-rounded rectangle (`--radius-md`/`--radius-lg`, 14–22px) — never sharp corners, never a barely-rounded 4px corporate radius.
- **Shadows:** cards use a soft warm-brown ambient shadow (`--shadow-card`), not black. Stickers/badges use a small flat offset "sticker shadow" (`--shadow-sticker`) rather than a blurred drop shadow, matching the pop-art badge style.
- **Cards:** cream/white fill, thick soft-rounded border optional, warm soft shadow, generous padding, photography with rounded corners inset from the card edge. No left-border color-accent cards.
- **Transparency/blur:** used sparingly — only on the status-sticker treatment overlaid on a photo (badge sits on top of the image at an angle) and on modal/sheet scrims (dark translucent backdrop). No frosted-glass panels.
- **Iconography:** see below.

## Iconography
No custom icon font, sprite sheet, or SVG icon set exists in the source material — the brand communicates through emoji (🔥 💚 ✨ ❤️ 🍸 🛸) and its two illustrated pop-art status stickers (SOLD / AVAILABLE) rather than a UI icon system. For UI chrome that needs functional icons (chevrons, close buttons, a DM/heart/share icon on the shop UI kit), this system substitutes **Lucide** icons via CDN (`https://unpkg.com/lucide@latest`) — a similar rounded, friendly stroke style to the brand's soft lettering, flagged here as a substitution since the brand itself never defined a UI icon set. Emoji remain the primary "icon" for captions and status language; don't replace brand emoji with Lucide icons.

## Fonts — substitution note
No webfont files were provided. All four typefaces (Bungee, Pacifico, Fredoka, Caveat) plus Nunito are the closest free Google Fonts matches to the hand-lettered/vintage-sign look in the logo, stickers and poster — **not** the exact typefaces used by the brand's designer. If Jennifer has the original font files (or knows their names) for the logo script or the poster's "ATOMIC" display face, please share them and this system will be updated to use the real files.

## Components
Standard set, sized to this brand's needs (no source component library exists, so this is an authored "from-scratch" set per the brand's actual surfaces — no app screens, forms, tabs, or dialogs exist in the source material):
- `components/feedback/StatusBadge` — the SOLD / AVAILABLE / NEW DROP pop-art sticker.
- `components/content/ProductCard` — a listing card (photo, name, price, status).
- `components/content/Tag` — hashtag chip.
- `components/content/Avatar` — circular profile photo/logo mount.
- `components/forms/Button` — primary/secondary/ghost pill button.
- `components/forms/IconButton` — circular icon-only button (heart, share, DM).
- `components/forms/Input` — text input for a DM/contact form.

### Intentional additions
- `IconButton` and `Input` aren't literal Instagram UI, but are needed to build the "DM to shop" contact flow shown in the shop UI kit.

## UI kit
`ui_kits/shop/` recreates the Atomic Finds Instagram-shop experience: profile header with bio + highlights, a scrollable product grid (ProductCards with live SOLD/AVAILABLE state), and a product detail sheet with a "DM to shop" contact form. This is a cosmetic click-through recreation, not production code.

## Index
- `styles.css` — import this for all tokens/fonts.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`
- `assets/` — logo-badge.jpg, badge-sold.jpg, badge-available.jpg, photo-*.png
- `guidelines/` — specimen cards (Colors, Type, Spacing, Brand groups)
- `components/forms/{Button,IconButton,Input}.jsx`
- `components/content/{ProductCard,Tag,Avatar}.jsx`
- `components/feedback/StatusBadge.jsx`
- `ui_kits/shop/index.html`
- `SKILL.md` — Claude-Code-portable version of this system
