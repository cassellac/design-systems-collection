const HIGHLIGHTS = [
  { label: 'Behind the Find', color: 'var(--sun-orange)' },
  { label: 'Available', color: 'var(--avocado-green)' },
  { label: 'Sold', color: 'var(--poppy-red)' },
  { label: 'At Home', color: 'var(--turquoise)' },
];

function StoryHighlights() {
  return (
    <div style={{ display: 'flex', gap: 18, justifyContent: 'center', padding: '4px 24px 22px', background: 'var(--bg-page)' }}>
      {HIGHLIGHTS.map(h => (
        <div key={h.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 76 }}>
          <div style={{
            width: 62, height: 62, borderRadius: '50%', border: `3px solid ${h.color}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-surface)'
          }}>
            <i data-lucide="sparkles" style={{ width: 22, height: 22, color: h.color }}></i>
          </div>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, color: 'var(--text-secondary)', textAlign: 'center' }}>{h.label}</span>
        </div>
      ))}
    </div>
  );
}
window.StoryHighlights = StoryHighlights;
