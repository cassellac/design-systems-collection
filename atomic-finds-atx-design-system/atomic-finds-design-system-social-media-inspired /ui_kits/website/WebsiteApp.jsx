const DS = window.AtomicFindsATXDesignSystem_d1aabf;
const { Avatar, Tag, Button, StatusBadge, IconButton } = DS;

function PlaceholderCard({ item }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'all var(--dur-normal) var(--ease-out)', overflow: 'hidden', fontFamily: 'var(--font-body)'
    }}>
      <div style={{ position: 'relative', aspectRatio: '1/1', background: 'var(--bg-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 64, opacity: 0.5 }}>{item.placeholder}</span>
        <div style={{ position: 'absolute', top: 10, right: 10, transform: 'rotate(-6deg)' }}>
          <StatusBadge status={item.status} size="sm" />
        </div>
      </div>
      <div style={{ padding: '14px 16px' }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 19, color: 'var(--ink)' }}>{item.name}</div>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>{item.era}</div>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 16, color: 'var(--brand-primary)', marginTop: 8 }}>{item.price}</div>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 48px', background: 'var(--bg-surface)', borderBottom: '2px solid var(--border-soft)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Avatar src="../../assets/logo-badge.jpg" size={44} ring />
        <span style={{ fontFamily: 'var(--font-script)', fontSize: 24, color: 'var(--ink)' }}>Atomic Finds ATX</span>
      </div>
      <div style={{ display: 'flex', gap: 32, fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15, color: 'var(--text-primary)' }}>
        <span>Shop</span><span>Behind the Find</span><span>At Home</span><span>About</span>
      </div>
      <Button variant="primary" size="sm">DM to shop</Button>
    </div>
  );
}

function Hero() {
  return (
    <div style={{ textAlign: 'center', padding: '80px 24px 60px', background: 'var(--sun-orange)', color: '#FFF8EA' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: 1.05 }}>TINY TIME MACHINES<br/>FOR YOUR HOME</div>
      <div style={{ fontFamily: 'var(--font-hand)', fontSize: 26, marginTop: 16, color: '#fff' }}>60s–70s rattan &amp; bamboo finds, freshly rescued from another decade ✨</div>
      <div style={{ marginTop: 28, display: 'flex', gap: 14, justifyContent: 'center' }}>
        <Button variant="secondary" size="lg">Shop the drop</Button>
        <Button variant="ghost" size="lg" onClick={() => {}}>Our story</Button>
      </div>
    </div>
  );
}

function StoryStrip() {
  const items = [
    { icon: 'search', label: 'Behind the Find', color: 'var(--sun-orange)' },
    { icon: 'sparkles', label: 'Available', color: 'var(--avocado-green)' },
    { icon: 'check', label: 'Sold', color: 'var(--poppy-red)' },
    { icon: 'home', label: 'At Home', color: 'var(--turquoise)' },
  ];
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 48, padding: '36px 24px', background: 'var(--bg-surface)' }}>
      {items.map(i => (
        <div key={i.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 60, height: 60, borderRadius: '50%', border: `3px solid ${i.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i data-lucide={i.icon} style={{ width: 22, height: 22, color: i.color }}></i>
          </div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: 'var(--text-secondary)' }}>{i.label}</span>
        </div>
      ))}
    </div>
  );
}

function FindsSection() {
  return (
    <div style={{ padding: '20px 48px 60px', background: 'var(--bg-page)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24 }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 30, color: 'var(--ink)' }}>Latest finds</div>
        <a href="#" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>View all →</a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
        {window.FINDS.map(f => <PlaceholderCard key={f.id} item={f} />)}
      </div>
      <div style={{ marginTop: 14, fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-secondary)' }}>
        Product photos are placeholders — swap in real listing photography.
      </div>
    </div>
  );
}

function AboutStrip() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 40, padding: '50px 48px', background: 'var(--bg-surface)' }}>
      <div style={{ aspectRatio: '4/3', background: 'var(--bg-sunken)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, opacity: 0.5 }}>📷</div>
      <div>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 26, color: 'var(--ink)' }}>Every piece has a past.</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-secondary)', marginTop: 12, lineHeight: 1.6, maxWidth: 460 }}>
          I hunt down old, weird &amp; beautiful things and give them a second life. Every find passes the Atomic Standard — solid weight, tight cane bindings, honest honey-toned patina — before it earns a name and a spot in the shop.
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 18, flexWrap: 'wrap' }}>
          <Tag>AtomicFindsATX</Tag><Tag>VintageRattan</Tag><Tag>AustinFinds</Tag>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div style={{ padding: '36px 48px', background: 'var(--avocado-green)', color: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ fontFamily: 'var(--font-script)', fontSize: 20 }}>Atomic Finds ATX — South Austin, TX</div>
      <div style={{ display: 'flex', gap: 10 }}>
        <IconButton icon="instagram" variant="filled" />
        <IconButton icon="facebook" variant="filled" />
      </div>
    </div>
  );
}

function WebsiteApp() {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); }, []);
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <StoryStrip />
      <FindsSection />
      <AboutStrip />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<WebsiteApp />);
