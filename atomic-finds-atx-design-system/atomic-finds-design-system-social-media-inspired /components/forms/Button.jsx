import React, { useState } from 'react';

const BG = { primary: 'var(--brand-primary)', secondary: 'var(--brand-secondary)', ghost: 'transparent' };
const BG_HOVER = { primary: 'var(--brand-primary-hover)', secondary: 'var(--brand-secondary-hover)', ghost: 'var(--bg-sunken)' };
const FG = { primary: '#fff', secondary: '#fff', ghost: 'var(--ink)' };
const PAD = { sm: '8px 16px', md: '11px 22px', lg: '14px 30px' };
const FS = { sm: 14, md: 16, lg: 18 };

export function Button({ variant = 'primary', size = 'md', disabled = false, children, onClick }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: FS[size],
        padding: PAD[size], borderRadius: 'var(--radius-pill)',
        border: variant === 'ghost' ? '2px solid var(--border-strong)' : '2px solid rgba(0,0,0,0.15)',
        background: hover && !disabled ? BG_HOVER[variant] : BG[variant],
        color: FG[variant], cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        boxShadow: active ? 'none' : 'var(--shadow-sticker)',
        transform: active ? 'translateY(2px)' : 'translateY(0)',
        transition: `all var(--dur-fast) var(--ease-out)`,
        whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
      }}
    >{children}</button>
  );
}
