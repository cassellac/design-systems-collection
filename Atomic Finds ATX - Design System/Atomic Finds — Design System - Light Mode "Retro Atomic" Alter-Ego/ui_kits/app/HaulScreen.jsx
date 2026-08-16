// Atomic Finds app — Haul (cart) screen, full-screen on mobile.
const { Button, Icon, StarburstCallout } = window.AtomicFindsDesignSystem_6739d3;

function HaulScreen({ items, onRemove, onCheckout }) {
  const ProductMedia = window.ProductMedia;
  const subtotal = items.reduce((s,i)=>s + i.price*i.qty, 0);
  const count = items.reduce((s,i)=>s + i.qty, 0);
  return (
    <div style={{display:'flex', flexDirection:'column', minHeight:'100%'}}>
      <div style={{padding:'18px 16px 8px'}}>
        <h1 style={{fontFamily:'var(--font-display)', fontSize:'30px', letterSpacing:'-0.03em', margin:0, color:'var(--ink-900)'}}>Your Haul</h1>
      </div>

      <div style={{flex:1, padding:'8px 16px', display:'flex', flexDirection:'column', gap:'14px'}}>
        {items.length===0 && (
          <div style={{textAlign:'center', padding:'64px 0', display:'flex', flexDirection:'column', alignItems:'center', gap:'18px'}}>
            <StarburstCallout size={130} color="var(--yellow-400)">EMPTY</StarburstCallout>
            <p style={{fontFamily:'var(--font-body)', color:'var(--text-muted)', fontSize:'14px'}}>Nothing picked yet. Go fill it.</p>
          </div>
        )}
        {items.map(item=>(
          <div key={item.id} style={{display:'flex', gap:'12px', alignItems:'center', border:'2px solid var(--ink-900)', borderRadius:'var(--radius-md)', padding:'10px', background:'var(--white)'}}>
            <div style={{width:'56px', height:'56px', flex:'none', border:'2px solid var(--ink-900)', overflow:'hidden'}}>
              <ProductMedia item={item} size="12px" />
            </div>
            <div style={{flex:1, minWidth:0}}>
              <div style={{fontFamily:'var(--font-display)', fontSize:'15px', letterSpacing:'-0.02em', color:'var(--ink-900)', lineHeight:1.1}}>{item.title}</div>
              <div style={{fontFamily:'var(--font-body)', fontSize:'12px', color:'var(--text-muted)'}}>Qty {item.qty}</div>
            </div>
            <div style={{fontFamily:'var(--font-display)', fontSize:'16px', color:'var(--ink-900)'}}>${item.price*item.qty}</div>
            <button onClick={()=>onRemove(item.id)} style={{background:'none', border:'none', cursor:'pointer', display:'flex'}}><Icon name="trash-2" size={17} color="var(--text-muted)" /></button>
          </div>
        ))}
      </div>

      {items.length>0 && (
        <div style={{padding:'16px 16px calc(16px + env(safe-area-inset-bottom))', borderTop:'3px solid var(--ink-900)', background:'var(--white)'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:'14px'}}>
            <span style={{fontFamily:'var(--font-body)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.08em', fontSize:'12px', color:'var(--text-muted)'}}>Subtotal · {count} items</span>
            <span style={{fontFamily:'var(--font-display)', fontSize:'28px', color:'var(--ink-900)'}}>${subtotal}</span>
          </div>
          <Button variant="primary" size="lg" onClick={onCheckout} style={{width:'100%'}}>Check Out</Button>
        </div>
      )}
    </div>
  );
}
window.HaulScreen = HaulScreen;
