function ProfileHeader({ AvatarC, TagC }) {
  return (
    <div style={{ padding: '28px 24px 20px', textAlign: 'center', background: 'var(--bg-page)' }}>
      <AvatarC src="../../assets/logo-badge.jpg" ring size={92} />
      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, marginTop: 12, color: 'var(--ink)' }}>atomicfindsatx</div>
      <div style={{ fontFamily: 'var(--font-script)', fontSize: 26, color: 'var(--brand-primary)', marginTop: 2 }}>Tiny Time Machines for Your Home</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)', maxWidth: 420, margin: '10px auto 0', lineHeight: 1.5 }}>
        60s–70s rattan + bamboo finds · Austin TX · I hunt down old, weird &amp; beautiful things and give them a second life ✨ DM to shop
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 22, marginTop: 16, fontFamily: 'var(--font-heading)', fontSize: 14, color: 'var(--text-secondary)' }}>
        <div><b style={{ color: 'var(--ink)' }}>212</b> finds</div>
        <div><b style={{ color: 'var(--ink)' }}>4.8★</b> rating</div>
        <div><b style={{ color: 'var(--ink)' }}>88</b> reviews</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 14, flexWrap: 'wrap' }}>
        {['AtomicFindsATX', 'VintageRattan', 'BohoDecor', 'AustinFinds'].map(t => <TagC key={t}>{t}</TagC>)}
      </div>
    </div>
  );
}
window.ProfileHeader = ProfileHeader;
