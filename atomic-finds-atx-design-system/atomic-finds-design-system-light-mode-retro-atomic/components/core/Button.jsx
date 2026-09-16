import React, { useState } from 'react';

/**
 * Atomic Finds primary action. Tactile: sits on a hard offset shadow,
 * lifts up-left on hover, stamps down-right on press.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = 'button',
  style: styleProp,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);

  const sizes = {
    sm: { padding: '8px 14px', font: '13px', radius: '10px', shadow: 3 },
    md: { padding: '11px 20px', font: '15px', radius: '12px', shadow: 4 },
    lg: { padding: '15px 28px', font: '18px', radius: '14px', shadow: 5 },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: { bg: 'var(--yellow-400)', color: 'var(--ink-900)', border: 'var(--ink-900)' },
    secondary: { bg: 'var(--white)', color: 'var(--ink-900)', border: 'var(--ink-900)' },
    invert: { bg: 'var(--ink-900)', color: 'var(--cream-50)', border: 'var(--ink-900)' },
    ghost: { bg: 'transparent', color: 'var(--ink-900)', border: 'transparent' },
    danger: { bg: 'var(--cherry-500)', color: 'var(--cream-50)', border: 'var(--ink-900)' },
  };
  const v = variants[variant] || variants.primary;

  const restShadow = variant === 'ghost' ? 0 : s.shadow;
  const shadowSize = down ? Math.max(0, restShadow - 3) : hover ? restShadow + 2 : restShadow;
  const lift = down ? restShadow : hover ? -2 : 0;

  const style = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
    fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: s.font,
    letterSpacing: '0.01em', lineHeight: 1,
    padding: s.padding, borderRadius: s.radius,
    background: v.bg, color: v.color,
    border: `${variant === 'ghost' ? 0 : 2.5}px solid ${v.border}`,
    boxShadow: restShadow ? `${shadowSize}px ${shadowSize}px 0 var(--ink-900)` : 'none',
    transform: `translate(${lift}px, ${lift}px)`,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--ease-snap), box-shadow var(--dur-fast) var(--ease-snap)',
    WebkitTapHighlightColor: 'transparent', userSelect: 'none',
    ...styleProp,
  };

  return (
    <button
      type={type} style={style} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setDown(false); }}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
