import React, { useState } from 'react';

export function IconButton({ icon, variant = 'outline', active = false, onClick }) {
  const [hover, setHover] = useState(false);
  const filled = variant === 'filled';
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={icon}
      style={{
        width: 40, height: 40, borderRadius: '50%', display: 'flex',
        alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        border: filled ? '2px solid rgba(0,0,0,0.15)' : '2px solid var(--border-strong)',
        background: filled ? 'var(--brand-primary)' : (hover ? 'var(--bg-sunken)' : 'var(--bg-surface)'),
        color: active ? 'var(--poppy-red)' : (filled ? '#fff' : 'var(--ink)'),
        transition: 'all var(--dur-fast) var(--ease-out)'
      }}
    ><i data-lucide={icon} style={{ width: 18, height: 18 }}></i></button>
  );
}
