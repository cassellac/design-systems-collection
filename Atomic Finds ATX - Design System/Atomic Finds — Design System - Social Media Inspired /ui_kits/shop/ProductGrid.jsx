function ProductGrid({ ProductCardC, products, onSelect }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
      padding: '4px 24px 32px', background: 'var(--bg-page)', justifyContent: 'center'
    }}>
      {products.map(p => (
        <div key={p.id} onClick={() => onSelect(p)} style={{ cursor: 'pointer' }}>
          <ProductCardC image={p.image} name={p.name} era={p.era} price={p.price} status={p.status} />
        </div>
      ))}
    </div>
  );
}
window.ProductGrid = ProductGrid;
