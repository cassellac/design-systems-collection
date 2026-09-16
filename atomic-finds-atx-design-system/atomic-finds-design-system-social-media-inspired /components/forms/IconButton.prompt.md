# IconButton
Circular icon-only button for actions like heart, share, DM, close. Uses Lucide icons (CDN substitution — no brand icon set exists).

```jsx
<IconButton icon="heart" active />
<IconButton icon="share-2" variant="outline" />
```

Requires `lucide.createIcons()` to be called after mount (see the shop UI kit for the wiring). Variants: `filled` | `outline`.
