# Atomic Finds — Homepage featured products section: live data contract + CMS wiring

Use the current Atomic Finds design system in this project — this brief only supplies the **backend data contract** (now merged and live in the `da-platform` repo, PR #1) and the **CMS wiring rules**, so the homepage's featured products section can be designed against real data and drop into the engine without schema changes.

## 1. Database schema (Supabase / Postgres — live)

```sql
create table if not exists products (
  id            uuid primary key default gen_random_uuid(),
  client_id     uuid references clients(id) on delete cascade not null,
  title         text not null,
  description   text,
  price         numeric(10,2),
  original_price numeric(10,2),                -- nullable; set only when the item has a prior/list price
  condition     text,                           -- freeform, e.g. "Used - Good"
  location      text,                           -- freeform, e.g. "Austin, TX"
  listed_label  text,                           -- freeform recency/status, e.g. "3 days ago" or "In stock"
  attributes    jsonb not null default '{}'::jsonb, -- per-item specs, e.g. {"Number of Seats": 4}
  image_url     text,                           -- currently NULL on all seeded rows
  external_url  text not null,                  -- buy/inquire target (Facebook Marketplace listing today;
                                                 -- becomes a checkout link later — same field)
  seller_name   text,
  seller_rating text,
  display_order int default 0,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()       -- auto-refreshed by BEFORE UPDATE trigger
);
```

Public read via RLS. Canonical sort: `display_order` ascending (indexed with `client_id`).

## 2. TypeScript type (in the CMS engine, `src/lib/types.ts`)

```typescript
export interface Product {
  id: string
  client_id: string
  title: string
  description: string | null
  price: number | null
  original_price: number | null
  condition: string | null
  location: string | null
  listed_label: string | null
  attributes: Record<string, unknown>
  image_url: string | null
  external_url: string
  seller_name: string | null
  seller_rating: string | null
  display_order: number
  created_at: string
  updated_at: string
}
```

## 3. Data fetcher (in `src/lib/data.ts` — components receive its output as props, they never fetch)

```typescript
export async function getProducts(): Promise<Product[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('client_id', CLIENT_ID)
    .order('display_order', { ascending: true })
  return data ?? []
}
```

## 4. Real seeded rows — design fixtures (4 live products, not lorem ipsum)

```json
[
  {
    "title": "Vintage MCM Dining Set – Table + 4 Swivel Chairs",
    "description": "Vintage 1970s-style dining set with wood-grain laminate tabletop, chrome pedestal base, and four cream vinyl swivel chairs on rolling chrome caster bases. Light surface wear and one repaired edge chip on table. Pickup South Austin. Final sale.",
    "price": 550.00, "original_price": null,
    "condition": "Used - Good", "location": "Austin, TX", "listed_label": "3 days ago",
    "attributes": { "Number of Seats": 4, "Decor Style": "Mid-Century Modern" },
    "image_url": null,
    "external_url": "https://www.facebook.com/marketplace/item/2150548818844605/",
    "seller_name": "Jennyfer Gomez", "seller_rating": "81 ratings - Highly rated",
    "display_order": 1
  },
  {
    "title": "Vintage Wicker Waterfall Dresser | Boho Coastal Rattan Chest",
    "description": "Vintage wicker waterfall dresser with four drawers, handwoven details, warm honey finish. Beautiful vintage condition with age-appropriate wear. Pickup South Austin. Final sale.",
    "price": 285.00, "original_price": 365.00,
    "condition": "Used - Good", "location": "Austin, TX", "listed_label": "4 days ago",
    "attributes": { "Date Range": "1970-1979", "Dimensions": "38in W x 33in D x 19in H", "Drawers": 4 },
    "image_url": null,
    "external_url": "https://www.facebook.com/marketplace/item/3235493369971776/",
    "seller_name": "Jennyfer Gomez", "seller_rating": "81 ratings - Highly rated",
    "display_order": 2
  },
  {
    "title": "Nordic Scandinavian Side Table / Mesa Lateral Escandinava 16x16",
    "description": "Simple Nordic Scandinavian side table with clean minimalist wood design. Perfect condition. South Austin pickup. Final sale.",
    "price": 55.00, "original_price": null,
    "condition": "Used - like new", "location": "Austin, TX", "listed_label": "In stock",
    "attributes": { "Decor Style": "Scandinavian", "Dimensions": "16in x 16in, 16.5in tall" },
    "image_url": null,
    "external_url": "https://www.facebook.com/marketplace/item/1504095271020600/",
    "seller_name": "Jennyfer Gomez", "seller_rating": "81 ratings - Highly rated",
    "display_order": 3
  },
  {
    "title": "Vintage Bamboo & Wicker Bistro Set | Coastal Boho | 2 Chairs + Glass Table",
    "description": "Vintage bamboo/wicker bistro set with two sculptural fan-back chairs and a wicker pedestal glass-top table. Excellent vintage condition, no structural issues. Pickup South Austin. Final sale.",
    "price": 250.00, "original_price": null,
    "condition": "Used - Good", "location": "Austin, TX", "listed_label": "2 weeks ago",
    "attributes": { "Number of Pieces": 3, "Type": "Bistro Set" },
    "image_url": null,
    "external_url": "https://www.facebook.com/marketplace/item/1365991472086639/",
    "seller_name": "Jennyfer Gomez", "seller_rating": "81 ratings - Highly rated",
    "display_order": 4
  }
]
```

## 5. Required states & edge cases (all present in the live data)

- **`image_url` is NULL on every row** — the image-placeholder state is the *launch* state, not an edge case. Design a real fallback, not a broken-image box.
- **Sale price**: `original_price` set (row 2: $365 → $285) → strike-through original + current price. Absent → price alone.
- **`price: null`** possible → "Inquire" state.
- **Long titles** (see rows 1 & 4) → deliberate 1–2 line clamp treatment.
- **`attributes`** is free-form key/value (keys differ per product, values string or number) — render defensively; decide where it surfaces (hover, flip, detail) vs. hidden on the card.
- **`listed_label`** is freeform text ("3 days ago" / "In stock") — display as-is, never parse.
- **CTA** links to `external_url` (a Facebook Marketplace listing today) — label it "[ View Listing ]" or similar, not "Buy Now". Opens in new tab.
- `seller_name` / `seller_rating` available if the design wants a trust/curator line.

## 6. CMS wiring (how this integrates into the engine)

The site is Next.js App Router. Pages are block-based: `BlockRenderer.tsx` fetches collections in parallel at the top and switches on `block.type`. The products section gets wired as:

```tsx
case 'products':
  return (
    <div key={index} id="products">
      <ProductGrid
        title={block.data.title || 'Featured Finds'}
        products={products}   // getProducts() output, already sorted
      />
    </div>
  )
```

Deliverable rules for clean handoff:
1. **Components take data as props** (`products: Product[]`) — no fetching inside components.
2. Server-component-friendly TSX: no client hooks unless required for interaction; isolate any animation/interaction in a `'use client'` leaf component.
3. Include a short **wiring notes** comment block mapping each visual element → `products` column, so the section can be templated into the engine 1:1.
4. The homepage section heading should be a prop (`title`) with "Featured Finds" as the default — the CMS block supplies it.
