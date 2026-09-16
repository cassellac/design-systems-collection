// Atomic Finds app — Product detail (mobile, full-bleed photo + sticky CTA).
const { Button, Badge, PillLink, Icon } = window.AtomicFindsDesignSystem_6739d3;

function ProductDetail({ item, onBack, onAdd }) {
  const ProductMedia = window.ProductMedia;
  const meta = [
    ['Maker', item.maker], ['Collection', item.collection], ['Year', item.year],
    ['Condition', item.condition], ['Material', 'Bamboo & woven cane'],
  ];
  return (
    <div style={{display:'flex', flexDirection:'column', minHeight:'100%'}}>
      <div style={{position:'relative', aspectRatio:'1 / 1', borderBottom:'3px solid var(--ink-900)'}}>
        <ProductMedia item={item} size="30px" />
        <button onClick={onBack} aria-label="Back" style={{
          position:'absolute', top:'14px', left:'14px', width:'36px', height:'36px', borderRadius:'999px',
          background:'var(--cream-50)', border:'2px solid var(--ink-900)', display:'flex', alignItems:'center',
          justifyContent:'center', cursor:'pointer',
        }}><Icon name="arrow-left" size={18} /></button>
      </div>

      <div style={{padding:'20px 18px 100px', flex:1}}>
        <div style={{display:'flex', gap:'6px', marginBottom:'10px', flexWrap:'wrap'}}>
          {item.drop && <Badge tone="rust">Fresh Find</Badge>}
          {item.rooms.map(r=> <Badge key={r} variant="outline">{r}</Badge>)}
        </div>
        <h1 style={{fontFamily:'var(--font-display)', fontSize:'32px', lineHeight:0.98, letterSpacing:'-0.03em', color:'var(--ink-900)', margin:0}}>{item.title}</h1>
        <div style={{fontFamily:'var(--font-body)', fontSize:'15px', color:'var(--text-muted)', marginTop:'4px'}}>{item.maker}</div>
        <div style={{fontFamily:'var(--font-display)', fontSize:'30px', color:'var(--ink-900)', marginTop:'14px'}}>${item.price}</div>

        <div style={{border:'2px solid var(--ink-900)', borderRadius:'var(--radius-md)', overflow:'hidden', marginTop:'20px'}}>
          {meta.map(([k,v],i)=>(
            <div key={k} style={{display:'flex', justifyContent:'space-between', padding:'10px 14px', background:i%2? 'var(--cream-100)':'var(--white)', borderBottom:i<meta.length-1?'1.5px solid var(--sand-400)':'none', fontFamily:'var(--font-body)', fontSize:'13px'}}>
              <span style={{textTransform:'uppercase', letterSpacing:'0.08em', fontWeight:700, fontSize:'11px', color:'var(--text-muted)'}}>{k}</span>
              <span style={{fontWeight:500, color:'var(--ink-900)'}}>{v}</span>
            </div>
          ))}
        </div>

        <p style={{fontFamily:'var(--font-body)', fontSize:'14px', lineHeight:1.6, color:'var(--text-body)', marginTop:'18px'}}>
          Rated <strong>{item.condition}</strong> by hand — cleaned, tightened, and checked for weave breaks before it ships. Original patina kept intact.
        </p>
        <div style={{marginTop:'18px'}}><PillLink>Our Condition Scale</PillLink></div>
      </div>

      <div style={{position:'fixed', left:0, right:0, bottom:0, maxWidth:'390px', margin:'0 auto', padding:'14px 18px calc(14px + env(safe-area-inset-bottom))', background:'var(--cream-50)', borderTop:'3px solid var(--ink-900)'}}>
        <Button variant="primary" size="lg" style={{width:'100%'}} onClick={()=>onAdd(item)}>Add to Haul · ${item.price}</Button>
      </div>
    </div>
  );
}
window.ProductDetail = ProductDetail;
