// Atomic Finds store — top nav. Wordmark + search + haul (cart).
const { Icon, Badge } = window.AtomicFindsDesignSystem_6739d3;

function Header({ crateCount, onNav, onOpenCrate, query, onQuery }) {
  return (
    <header style={{
      display:'flex', alignItems:'center', gap:'20px',
      padding:'16px 28px', background:'var(--cream-50)',
      borderBottom:'3px solid var(--ink-900)', position:'sticky', top:0, zIndex:20,
    }}>
      <div onClick={()=>onNav('home')} style={{display:'flex', alignItems:'center', cursor:'pointer'}}>
        <img src="../../assets/logo.png" alt="Atomic Finds" style={{height:'34px', width:'auto', display:'block'}} />
      </div>

      <nav style={{display:'flex', gap:'22px', marginLeft:'8px'}}>
        {['Shop','New Finds','Makers','Journal'].map(l=>(
          <a key={l} href="#" onClick={e=>{e.preventDefault();onNav('home');}} style={{
            fontFamily:'var(--font-body)', fontWeight:700, fontSize:'14px',
            color:'var(--ink-900)', textDecoration:'none', letterSpacing:'0.01em',
          }}>{l}</a>
        ))}
      </nav>

      <div style={{flex:1, display:'flex', justifyContent:'flex-end'}}>
        <div style={{
          display:'flex', alignItems:'center', gap:'8px', width:'260px',
          background:'var(--white)', border:'2px solid var(--ink-900)',
          borderRadius:'var(--radius-pill)', padding:'8px 14px',
        }}>
          <Icon name="search" size={18} />
          <input value={query} onChange={e=>onQuery(e.target.value)} placeholder="Search the haul…" style={{
            border:'none', outline:'none', background:'transparent', flex:1,
            fontFamily:'var(--font-body)', fontSize:'14px', color:'var(--text-body)',
          }} />
        </div>
      </div>

      <button onClick={onOpenCrate} style={{
        position:'relative', display:'flex', alignItems:'center', gap:'8px',
        background:'var(--yellow-400)', border:'2.5px solid var(--ink-900)',
        borderRadius:'var(--radius-pill)', padding:'8px 16px', cursor:'pointer',
        fontFamily:'var(--font-body)', fontWeight:700, fontSize:'14px', color:'var(--ink-900)',
        boxShadow:'3px 3px 0 var(--ink-900)',
      }}>
        <Icon name="shopping-bag" size={18} />
        Haul
        {crateCount>0 && <span style={{
          minWidth:'20px', height:'20px', borderRadius:'999px', background:'var(--ink-900)',
          color:'var(--cream-50)', fontSize:'12px', display:'inline-flex', alignItems:'center',
          justifyContent:'center', padding:'0 5px',
        }}>{crateCount}</span>}
      </button>
    </header>
  );
}
window.Header = Header;
