// Atomic Finds app — bottom tab bar (mobile nav).
const { Icon } = window.AtomicFindsDesignSystem_6739d3;

function TabBar({ active, onChange, haulCount }) {
  const tabs = [
    { id:'shop', label:'Shop', icon:'home' },
    { id:'search', label:'Search', icon:'search' },
    { id:'haul', label:'Haul', icon:'shopping-bag', badge:haulCount },
    { id:'account', label:'Account', icon:'user' },
  ];
  return (
    <nav style={{
      position:'sticky', bottom:0, left:0, right:0, zIndex:30,
      display:'flex', background:'var(--cream-50)', borderTop:'3px solid var(--ink-900)',
      padding:'8px 6px calc(8px + env(safe-area-inset-bottom))',
    }}>
      {tabs.map(t=>(
        <button key={t.id} onClick={()=>onChange(t.id)} style={{
          flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:'4px',
          background:'none', border:'none', cursor:'pointer', padding:'6px 0', position:'relative',
          color: active===t.id ? 'var(--ink-900)' : 'var(--text-muted)',
        }}>
          <span style={{position:'relative'}}>
            <Icon name={t.icon} size={22} color={active===t.id ? 'var(--ink-900)' : 'var(--text-muted)'} />
            {!!t.badge && <span style={{
              position:'absolute', top:'-6px', right:'-9px', minWidth:'16px', height:'16px',
              borderRadius:'999px', background:'var(--rust-500)', color:'var(--cream-50)',
              fontSize:'10px', fontWeight:700, display:'inline-flex', alignItems:'center',
              justifyContent:'center', padding:'0 4px', border:'1.5px solid var(--cream-50)',
            }}>{t.badge}</span>}
          </span>
          <span style={{fontFamily:'var(--font-body)', fontSize:'11px', fontWeight:700}}>{t.label}</span>
        </button>
      ))}
    </nav>
  );
}
window.TabBar = TabBar;
