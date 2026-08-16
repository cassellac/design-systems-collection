// Atomic Finds app — Home feed (mobile).
const { Button, Badge, Tag, Card, StarburstCallout, Icon } = window.AtomicFindsDesignSystem_6739d3;

function HomeFeed({ data, onOpen, onAdd }) {
  const [room, setRoom] = React.useState('All');
  const ProductMedia = window.ProductMedia;
  const list = data.pieces.filter(p => room==='All' || p.rooms.includes(room));
  return (
    <div>
      {/* Top bar */}
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'14px 16px 10px', position:'sticky', top:0, background:'var(--cream-50)', zIndex:10,
      }}>
        <img src="../../assets/logo.png" alt="Atomic Finds" style={{height:'26px', width:'auto'}} />
        <Icon name="search" size={22} />
      </div>

      {/* Hero */}
      <div style={{position:'relative', margin:'4px 16px 20px', background:'var(--yellow-400)', border:'3px solid var(--ink-900)', borderRadius:'var(--radius-lg)', boxShadow:'var(--shadow-hard)', padding:'22px 18px', overflow:'hidden'}}>
        <div style={{fontFamily:'var(--font-body)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.12em', fontSize:'11px', color:'var(--ink-900)', marginBottom:'8px'}}>New This Week</div>
        <h1 style={{fontFamily:'var(--font-display)', fontSize:'34px', lineHeight:0.95, letterSpacing:'-0.03em', color:'var(--ink-900)', margin:0, maxWidth:'220px'}}>Hand-Picked &amp; Ready to Live In</h1>
        <Button variant="invert" size="md" style={{marginTop:'16px'}}>Shop the Haul</Button>
        <div style={{position:'absolute', right:'-18px', bottom:'-18px'}}>
          <StarburstCallout size={92} color="var(--cream-50)" rotate={-8}>8 NEW!</StarburstCallout>
        </div>
      </div>

      {/* Room filter chips */}
      <div style={{display:'flex', gap:'8px', padding:'0 16px 16px', overflowX:'auto'}}>
        {data.rooms.map(r=> <Tag key={r} active={r===room} onClick={()=>setRoom(r)}>{r}</Tag>)}
      </div>

      {/* Grid */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(2, minmax(0, 1fr))', gap:'14px', padding:'0 16px 24px'}}>
        {list.map(item=>(
          <div key={item.id} style={{position:'relative', minWidth:0}}>
            {item.drop && <div style={{position:'absolute', top:'-8px', left:'-8px', zIndex:5}}><Badge tone="rust">New</Badge></div>}
            <Card onClick={()=>onOpen(item)} interactive padding="var(--space-3)" media={<ProductMedia item={item} size="16px" />}>
              <div style={{fontFamily:'var(--font-display)', fontSize:'15px', letterSpacing:'-0.02em', color:'var(--ink-900)', lineHeight:1.1, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{item.title}</div>
              <div style={{fontSize:'11px', color:'var(--text-muted)', margin:'2px 0 8px'}}>{item.maker}</div>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <span style={{fontFamily:'var(--font-display)', fontSize:'17px', color:'var(--ink-900)'}}>${item.price}</span>
                <button onClick={(e)=>{e.stopPropagation(); onAdd(item);}} aria-label="Add to haul" style={{
                  width:'32px', height:'32px', borderRadius:'999px', border:'2px solid var(--ink-900)',
                  background:'var(--yellow-400)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer',
                }}><Icon name="plus" size={16} /></button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
window.HomeFeed = HomeFeed;
