import React, { useState } from 'react';

/**
 * Structural content card. White surface, thick ink border, hard offset
 * shadow, optional square media wrapper for product photography.
 */
export function Card({
  children, media = null, interactive = false, padding = 'var(--space-5)', ...rest
}) {
  const [hover, setHover] = useState(false);
  const base = 5;
  const shadow = interactive && hover ? base + 3 : base;
  const lift = interactive && hover ? -3 : 0;
  const style = {
    display: 'flex', flexDirection: 'column', minWidth: 0,
    background: 'var(--surface-card)',
    border: '2.5px solid var(--ink-900)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: `${shadow}px ${shadow}px 0 var(--ink-900)`,
    transform: `translate(${lift}px, ${lift}px)`,
    transition: 'transform var(--dur-base) var(--ease-snap), box-shadow var(--dur-base) var(--ease-snap)',
    overflow: 'hidden',
    cursor: interactive ? 'pointer' : 'default',
    ...rest.style,
  };
  const { style: _s, ...restProps } = rest;
  return (
    <div
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...restProps}
    >
      {media && (
        <div style={{ aspectRatio: '1 / 1', borderBottom: '2.5px solid var(--ink-900)', overflow: 'hidden', background: 'var(--cream-200)' }}>
          {media}
        </div>
      )}
      <div style={{ padding }}>{children}</div>
    </div>
  );
}
