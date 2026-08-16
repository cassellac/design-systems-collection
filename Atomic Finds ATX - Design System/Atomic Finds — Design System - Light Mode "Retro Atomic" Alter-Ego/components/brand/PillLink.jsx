import React, { useState } from 'react';

/**
 * Thick pill-bordered anchor — anchors floating text links (nav, footers,
 * "read more"). 3px stroke, offset shadow on hover.
 */
export function PillLink({ children, href = '#', tone = 'ink', onClick, ...rest }) {
  const [hover, setHover] = useState(false);
  const tones = {
    ink: { border: 'var(--ink-900)', color: 'var(--ink-900)', bgHover: 'var(--yellow-400)' },
    yellow: { border: 'var(--ink-900)', color: 'var(--ink-900)', bgHover: 'var(--yellow-400)' },
    rust: { border: 'var(--rust-500)', color: 'var(--rust-500)', bgHover: 'var(--rust-500)' },
  };
  const t = tones[tone] || tones.ink;
  const hoverInk = tone === 'rust' && hover;
  const style = {
    display: 'inline-flex', alignItems: 'center', gap: '7px',
    fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px',
    letterSpacing: '0.02em', textDecoration: 'none',
    padding: '8px 18px', borderRadius: 'var(--radius-pill)',
    border: `3px solid ${t.border}`,
    color: hoverInk ? 'var(--cream-50)' : t.color,
    background: hover ? (tone === 'rust' ? 'var(--rust-500)' : 'var(--yellow-400)') : 'transparent',
    boxShadow: hover ? '3px 3px 0 var(--ink-900)' : '0 0 0 var(--ink-900)',
    transform: hover ? 'translate(-1px,-1px)' : 'none',
    transition: 'all var(--dur-fast) var(--ease-snap)',
  };
  return (
    <a href={href} style={style} onClick={onClick}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {children}
    </a>
  );
}
