// Atomic Finds store — Home / browse.
const { Button, Badge, Tag, Card, StarburstCallout, PillLink } = window.AtomicFindsDesignSystem_6739d3;

// Shared media block (placeholder for product photography).
function ProductMedia({ item, size }) {
  return (
    <div style={{
      width:'100%', height:'100%', background:item.swatch, color:item.ink,
      display:'flex', flexDirection:'column', justifyContent:'space-between',
      padding:'12px 14px', fontFamily:'var(--font-display)', letterSpacing:'-0.02em', minWidth:0, overflow:'hidden',
    }}>
      <div style={{fontSize:'11px', fontFamily:'var(--font-body)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.12em', opacity:0.85, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{item.collection}</div>
      <div style={{fontSize:size||'26px', lineHeight:0.95, overflowWrap:'break-word'}}>{item.title}</div>
    </div>
  );
}
window.ProductMedia = ProductMedia;

function HomeScreen({ data, query, onOpen, onAdd }) {
  const [room, setRoom] = React.useState('All');
  const list = data.pieces.filter(p =>
    (room==='All' || p.rooms.includes(room)) &&
    (!query || (p.title+p.maker+p.collection).toLowerCase().includes(query.toLowerCase()))
  );
  return (
    <div>
      {/* Hero */}
      <section style={{position:'relative', background:'var(--yellow-400)', borderBottom:'3px solid var(--ink-900)', padding:'56px 48px 64px', overflow:'hidden'}}>
        <div style={{maxWidth:'680px'}}>
          <div style={{fontFamily:'var(--font-body)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.14em', fontSize:'14px', color:'var(--ink-900)', marginBottom:'14px'}}>New This Week</div>
          <h1 style={{fontFamily:'var(--font-display)', fontSize:'84px', lineHeight:0.9, letterSpacing:'-0.035em', color:'var(--ink-900)', margin:0, textShadow:'4px 4px 0 var(--yellow-500)'}}>Hand-Picked<br/>&amp; Ready to Live In</h1>
          <p style={{fontFamily:'var(--font-body)', fontSize:'18px', lineHeight:1.5, color:'var(--ink-800)', maxWidth:'480px', marginTop:'20px'}}>Every piece is sourced, cleaned, and shot in natural light before it hits the floor. Vintage bamboo &amp; rattan, no reproductions.</p>
          <div style={{display:'flex', gap:'14px', marginTop:'26px'}}>
            <Button variant="invert" size="lg">Shop the Haul</Button>
            <Button variant="secondary" size="lg">How We Source</Button>
          </div>
        </div>
        <div style={{position:'absolute', right:'56px', top:'50%', transform:'translateY(-50%)'}}>
          <StarburstCallout size={190} color="var(--cream-50)" rotate={-10}>8 FRESH FINDS!</StarburstCallout>
        </div>
      </section>

      {/* Browse */}
      <section style={{padding:'40px 48px 72px'}}>
        <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', flexWrap:'wrap', gap:'16px', marginBottom:'24px'}}>
          <h2 style={{fontFamily:'var(--font-display)', fontSize:'40px', letterSpacing:'-0.03em', color:'var(--ink-900)', margin:0}}>The Haul</h2>
          <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
            {data.rooms.map(r=> <Tag key={r} active={r===room} onClick={()=>setRoom(r)}>{r}</Tag>)}
          </div>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:'26px'}}>
          {list.map(item=>(
            <div key={item.id} style={{position:'relative'}}>
              {item.drop && <div style={{position:'absolute', top:'-10px', left:'-10px', zIndex:5}}><Badge tone="rust">Fresh Find</Badge></div>}
              <Card interactive style={{cursor:'pointer'}} media={<div onClick={()=>onOpen(item)} style={{width:'100%',height:'100%'}}><ProductMedia item={item} /></div>}>
                <div style={{display:'flex', justifyContent:'space-between', gap:'8px'}}>
                  <div style={{minWidth:0}}>
                    <div onClick={()=>onOpen(item)} style={{fontFamily:'var(--font-display)', fontSize:'19px', letterSpacing:'-0.02em', color:'var(--ink-900)', lineHeight:1.05, cursor:'pointer', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{item.title}</div>
                    <div style={{fontSize:'13px', color:'var(--text-muted)', marginTop:'2px'}}>{item.maker} · {item.year}</div>
                  </div>
                  <Badge variant="outline" shape="rounded">{item.condition}</Badge>
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'14px'}}>
                  <span style={{fontFamily:'var(--font-display)', fontSize:'22px', color:'var(--ink-900)'}}>${item.price}</span>
                  <Button size="sm" onClick={()=>onAdd(item)}>Add to Haul</Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
window.HomeScreen = HomeScreen;
