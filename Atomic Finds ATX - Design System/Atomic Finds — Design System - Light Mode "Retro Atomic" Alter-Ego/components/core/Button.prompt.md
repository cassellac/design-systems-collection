One-line: the primary Atomic Finds action — a heavy, screen-printed button that lifts on hover and stamps down on press.

```jsx
<Button variant="primary" size="lg" onClick={buy}>Add to Crate</Button>
<Button variant="secondary">Details</Button>
<Button variant="invert" iconRight={<Icon name="arrow-right" />}>Browse</Button>
```

Variants: `primary` (yellow), `secondary` (white), `invert` (ink), `ghost` (no border/shadow), `danger` (cherry). Sizes: `sm` / `md` / `lg`. All non-ghost variants render the hard ink offset shadow; hover grows it and lifts the button up-left, press shrinks it and stamps down-right.
