const DS = window.AtomicFindsATXDesignSystem_d1aabf;

function App() {
  const [selected, setSelected] = React.useState(null);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); }, [selected]);
  return (
    <div style={{ maxWidth: 480, margin: '0 auto', background: 'var(--bg-page)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <window.ProfileHeader AvatarC={DS.Avatar} TagC={DS.Tag} />
      <window.StoryHighlights />
      <div style={{ height: 1, background: 'var(--border-soft)', margin: '0 24px' }} />
      <div style={{ padding: '20px 24px 4px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Latest finds</div>
      <window.ProductGrid ProductCardC={DS.ProductCard} products={window.PRODUCTS} onSelect={setSelected} />
      <window.ProductSheet
        product={selected}
        onClose={() => setSelected(null)}
        StatusBadgeC={DS.StatusBadge}
        ButtonC={DS.Button}
        IconButtonC={DS.IconButton}
        InputC={DS.Input}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
