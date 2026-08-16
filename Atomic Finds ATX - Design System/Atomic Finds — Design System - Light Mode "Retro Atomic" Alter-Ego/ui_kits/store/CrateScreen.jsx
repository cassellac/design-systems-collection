// Atomic Finds store — Haul (cart) drawer contents.
const { Button, Badge, Icon, StarburstCallout } = window.AtomicFindsDesignSystem_6739d3;

function CrateScreen({ items, onClose, onRemove, onCheckout }) {
  const ProductMedia = window.ProductMedia;
  const subtotal = items.reduce((s,i)=>s + i.price*i.qty, 0);
  const count = items.reduce((s,i)=>s + i.qty, 0);
  return (
    <div style={{position:'fixed', inset:0, zIndex:60, display:'flex', justifyContent:'flex-end'}}>
      <div onClick={onClose} style={{position:'absolute', inset:0, background:'rgba(23,20,18,0.4)'}} />
      <aside style={{position:'relative', width:'420px', maxWidth:'92vw', height:'100%', background:'var(--cream-50)', borderLeft:'3px solid var(--ink-900)', display:'flex', flexDirection:'column'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'22px 24px', borderBottom:'3px solid var(--ink-900)'}}>
          <h2 style={{fontFamily:'var(--font-display)', fontSize:'30px', letterSpacing:'-0.03em', margin:0, color:'var(--ink-900)'}}>Your Haul</h2>
          <button onClick={onClose} style={{background:'none', border:'none', cursor:'pointer', display:'flex'}}><Icon name="x" size={26} /></button>
        </div>

        <div style={{flex:1, overflowY:'auto', padding:'18px 24px', display:'flex', flexDirection:'column', gap:'16px'}}>
          {items.length===0 && (
            <div style={{textAlign:'center', padding:'56px 0', display:'flex', flexDirection:'column', alignItems:'center', gap:'20px'}}>
              <StarburstCallout size={150} color="var(--yellow-400)">HAUL EMPTY</StarburstCallout>
              <p style={{fontFamily:'var(--font-body)', color:'var(--text-muted)', fontSize:'15px'}}>Nothing picked yet. Go fill it.</p>
            </div>
          )}
          {items.map(item=>(
            <div key={item.id} style={{display:'flex', gap:'14px', alignItems:'center'}}>
              <div style={{width:'64px', height:'64px', flex:'none', border:'2px solid var(--ink-900)', overflow:'hidden'}}>
                <div style={{width:'100%', height:'100%'}}><ProductMedia item={item} size="14px" /></div>
              </div>
              <div style={{flex:1, minWidth:0}}>
                <div style={{fontFamily:'var(--font-display)', fontSize:'17px', letterSpacing:'-0.02em', color:'var(--ink-900)', lineHeight:1.05}}>{item.title}</div>
                <div style={{fontFamily:'var(--font-body)', fontSize:'13px', color:'var(--text-muted)'}}>{item.maker} · Qty {item.qty}</div>
              </div>
              <div style={{fontFamily:'var(--font-display)', fontSize:'18px', color:'var(--ink-900)'}}>${item.price*item.qty}</div>
              <button onClick={()=>onRemove(item.id)} style={{background:'none', border:'none', cursor:'pointer', display:'flex'}}><Icon name="trash-2" size={18} color="var(--text-muted)" /></button>
            </div>
          ))}
        </div>

        {items.length>0 && (
          <div style={{padding:'20px 24px', borderTop:'3px solid var(--ink-900)', background:'var(--white)'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:'16px'}}>
              <span style={{fontFamily:'var(--font-body)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', fontSize:'13px', color:'var(--text-muted)'}}>Subtotal · {count} items</span>
              <span style={{fontFamily:'var(--font-display)', fontSize:'34px', color:'var(--ink-900)'}}>${subtotal}</span>
            </div>
            <Button variant="primary" size="lg" onClick={onCheckout} style={{width:'100%'}}>Check Out</Button>
          </div>
        )}
      </aside>
    </div>
  );
}
window.CrateScreen = CrateScreen;
