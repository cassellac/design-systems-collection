import React from 'react';

/**
 * Inline metadata tag — smaller and quieter than Badge. Used for genres,
 * facets, filters. Thin ink outline, cream fill.
 */
export function Tag({ children, active = false, onClick, ...rest }) {
  const clickable = typeof onClick === 'function';
  const style = {
    display: 'inline-flex', alignItems: 'center', gap: '5px',
    fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '13px',
    padding: '4px 10px', borderRadius: 'var(--radius-pill)',
    border: '1.5px solid var(--ink-900)',
    background: active ? 'var(--ink-900)' : 'var(--cream-100)',
    color: active ? 'var(--cream-50)' : 'var(--ink-800)',
    cursor: clickable ? 'pointer' : 'default',
    transition: 'background var(--dur-fast) var(--ease-out)',
  };
  return <span style={style} onClick={onClick} {...rest}>{children}</span>;
}
