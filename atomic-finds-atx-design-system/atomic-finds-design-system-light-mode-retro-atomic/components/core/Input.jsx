import React, { useState } from 'react';

/**
 * Text input with a heavy ink border that thickens + drops an offset shadow
 * on focus. Optional leading label / eyebrow.
 */
export function Input({
  label, placeholder, value, onChange, type = 'text', error = false, disabled = false, iconLeft = null, ...rest
}) {
  const [focus, setFocus] = useState(false);
  const wrap = { display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: 'var(--font-body)' };
  const labelStyle = {
    fontSize: '12px', fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--text-muted)',
  };
  const box = {
    display: 'flex', alignItems: 'center', gap: '8px',
    background: disabled ? 'var(--cream-100)' : 'var(--white)',
    border: `2px solid ${error ? 'var(--cherry-500)' : 'var(--ink-900)'}`,
    borderRadius: 'var(--radius-sm)',
    padding: '10px 12px',
    boxShadow: focus ? '3px 3px 0 var(--ink-900)' : '0 0 0 var(--ink-900)',
    transform: focus ? 'translate(-1px,-1px)' : 'none',
    transition: 'box-shadow var(--dur-fast) var(--ease-snap), transform var(--dur-fast) var(--ease-snap)',
    opacity: disabled ? 0.6 : 1,
  };
  const input = {
    flex: 1, border: 'none', outline: 'none', background: 'transparent',
    fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-body)', width: '100%',
  };
  return (
    <label style={wrap}>
      {label && <span style={labelStyle}>{label}</span>}
      <span style={box}>
        {iconLeft}
        <input
          style={input} type={type} placeholder={placeholder} value={value}
          onChange={onChange} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest}
        />
      </span>
    </label>
  );
}
