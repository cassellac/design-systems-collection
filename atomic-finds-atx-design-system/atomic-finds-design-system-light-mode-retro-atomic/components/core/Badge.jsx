import React from 'react';

/**
 * Pill / rounded badge for statuses, editions, counts. Thick ink stroke.
 */
export function Badge({ children, variant = 'solid', tone = 'yellow', shape = 'pill', ...rest }) {
  const tones = {
    yellow: { bg: 'var(--yellow-400)', color: 'var(--ink-900)' },
    ink: { bg: 'var(--ink-900)', color: 'var(--cream-50)' },
    rust: { bg: 'var(--rust-500)', color: 'var(--cream-50)' },
    teal: { bg: 'var(--teal-500)', color: 'var(--cream-50)' },
    cream: { bg: 'var(--cream-100)', color: 'var(--ink-900)' },
  };
  const t = tones[tone] || tones.yellow;
  const solid = variant === 'solid';
  const style = {
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '12px',
    textTransform: 'uppercase', letterSpacing: '0.08em',
    padding: '4px 12px', lineHeight: 1.2,
    borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-sm)',
    border: '2px solid var(--ink-900)',
    background: solid ? t.bg : 'transparent',
    color: solid ? t.color : 'var(--ink-900)',
  };
  return <span style={style} {...rest}>{children}</span>;
}
