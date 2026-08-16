function ProductSheet({ product, onClose, StatusBadgeC, ButtonC, IconButtonC, InputC }) {
  const [sent, setSent] = React.useState(false);
  if (!product) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(43,32,22,0.55)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 10
    }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', width: 420,
        maxHeight: '85vh', overflowY: 'auto', boxShadow: 'var(--shadow-card-hover)'
      }}>
        <div style={{ position: 'relative' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0' }} />
          <div style={{ position: 'absolute', top: 12, right: 12 }}><IconButtonC icon="x" onClick={onClose} /></div>
          <div style={{ position: 'absolute', top: 12, left: 12, transform: 'rotate(-6deg)' }}><StatusBadgeC status={product.status} /></div>
        </div>
        <div style={{ padding: 20 }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24, color: 'var(--ink)' }}>{product.name}</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)', marginTop: 2 }}>{product.era}</div>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, color: 'var(--brand-primary)', marginTop: 10 }}>{product.price}</div>
          <div style={{ fontFamily: 'var(--font-hand)', fontSize: 20, color: 'var(--poppy-red)', marginTop: 12 }}>
            freshly rescued from another decade ✨ solid rattan, honey patina, tight cane bindings — passes the Atomic Standard.
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 16, marginBottom: 18 }}>
            <IconButtonC icon="heart" />
            <IconButtonC icon="share-2" />
          </div>
          {sent ? (
            <div style={{ fontFamily: 'var(--font-heading)', color: 'var(--brand-secondary)', fontWeight: 600 }}>Sent! Jenny will DM you back 🛸</div>
          ) : (
            <React.Fragment>
              <InputC label="Your name" placeholder="Jenny" />
              <div style={{ height: 10 }} />
              <InputC label="Message" placeholder={`Is ${product.name.replace('Meet ', '')} still available?`} multiline />
              <div style={{ height: 14 }} />
              <ButtonC variant="primary" onClick={() => setSent(true)}>DM to shop</ButtonC>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
window.ProductSheet = ProductSheet;
