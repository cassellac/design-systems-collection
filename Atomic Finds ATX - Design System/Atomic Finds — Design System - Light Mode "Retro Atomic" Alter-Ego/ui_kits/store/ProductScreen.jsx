// Atomic Finds store — Product detail (square photo + metadata split layout).
const { Button, Badge, Tag, PillLink, Icon } = window.AtomicFindsDesignSystem_6739d3;

function ProductScreen({ item, onBack, onAdd }) {
  const ProductMedia = window.ProductMedia;
  const meta = [
    ['Maker', item.maker], ['Collection', item.collection], ['Year', item.year],
    ['Condition', item.condition], ['Material', 'Bamboo & woven cane'], ['Find No.', '001 / 1'],
  ];
  return (
    <div style={{padding:'32px 48px 72px'}}>
      <button onClick={onBack} style={{display:'flex', alignItems:'center', gap:'8px', background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-body)', fontWeight:700, fontSize:'14px', color:'var(--ink-900)', marginBottom:'28px', padding:0}}>
        <Icon name="arrow-left" size={18} /> Back to the haul
      </button>

      <div style={{display:'grid', gridTemplateColumns:'minmax(280px, 440px) 1fr', gap:'48px', alignItems:'start'}}>
        {/* Square photo */}
        <div style={{aspectRatio:'1 / 1', border:'3px solid var(--ink-900)', boxShadow:'8px 8px 0 var(--ink-900)', overflow:'hidden'}}>
          <div style={{width:'100%', height:'100%'}}><ProductMedia item={item} size="52px" /></div>
        </div>

        {/* Metadata column */}
        <div>
          <div style={{display:'flex', gap:'8px', marginBottom:'14px'}}>
            {item.drop && <Badge tone="rust">Fresh Find</Badge>}
            {item.rooms.map(r=> <Badge key={r} variant="outline">{r}</Badge>)}
          </div>
          <h1 style={{fontFamily:'var(--font-display)', fontSize:'56px', lineHeight:0.92, letterSpacing:'-0.035em', color:'var(--ink-900)', margin:0}}>{item.title}</h1>
          <div style={{fontFamily:'var(--font-body)', fontSize:'18px', color:'var(--text-muted)', marginTop:'8px'}}>{item.maker}</div>

          <div style={{display:'flex', alignItems:'center', gap:'20px', margin:'26px 0'}}>
            <span style={{fontFamily:'var(--font-display)', fontSize:'44px', color:'var(--ink-900)', lineHeight:1}}>${item.price}</span>
            <Button size="lg" onClick={()=>onAdd(item)} iconLeft={<Icon name="shopping-bag" size={20} />}>Add to Haul</Button>
          </div>

          {/* Ordered metadata rows */}
          <div style={{border:'2px solid var(--ink-900)', borderRadius:'var(--radius-md)', overflow:'hidden', maxWidth:'520px'}}>
            {meta.map(([k,v],i)=>(
              <div key={k} style={{display:'flex', justifyContent:'space-between', padding:'11px 16px', background:i%2? 'var(--cream-100)':'var(--white)', borderBottom:i<meta.length-1?'1.5px solid var(--sand-400)':'none', fontFamily:'var(--font-body)', fontSize:'14px'}}>
                <span style={{textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:700, fontSize:'12px', color:'var(--text-muted)'}}>{k}</span>
                <span style={{fontWeight:500, color:'var(--ink-900)'}}>{v}</span>
              </div>
            ))}
          </div>

          <p style={{fontFamily:'var(--font-body)', fontSize:'15px', lineHeight:1.6, color:'var(--text-body)', maxWidth:'520px', marginTop:'22px'}}>
            Rated <strong>{item.condition}</strong> by hand — cleaned, tightened, and checked for weave breaks before it ships. Original patina kept intact, no refinishing.
          </p>
          <div style={{display:'flex', gap:'12px', marginTop:'22px'}}>
            <PillLink>Our Condition Scale</PillLink>
            <PillLink tone="rust">Shipping &amp; Returns</PillLink>
          </div>
        </div>
      </div>
    </div>
  );
}
window.ProductScreen = ProductScreen;
