One-line: the workhorse container — white surface, thick ink border, hard offset shadow, optional square media wrapper for product photography.

```jsx
<Card media={<img src="chair.jpg" alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>} interactive>
  <h3>Papasan Lounge Chair</h3>
  <p>Ficks Reed · 1968</p>
</Card>
```

Set `interactive` for hover lift. `media` renders a 1:1 wrapper on top with an ink divider. Never use a soft blurred shadow or a colored left-border accent — that breaks the brand.
