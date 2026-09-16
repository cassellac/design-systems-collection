import React from 'react';

/**
 * Multi-point vector starburst with centered content — the brand's promo /
 * discount graphic ("2 FONT STYLES!"). Static, breaks the grid.
 */
export function StarburstCallout({
  children, size = 160, color = 'var(--yellow-400)', stroke = 'var(--ink-900)', rotate = -8, points = 12, style, ...rest
}) {
  const cx = 50, cy = 50, outer = 50, inner = 38;
  const pts = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI / points) * i - Math.PI / 2;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
  }
  return (
    <div style={{ position: 'relative', width: size, height: size, transform: `rotate(${rotate}deg)`, ...style }} {...rest}>
      <svg viewBox="0 0 100 100" width={size} height={size} style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
        <polygon points={pts.join(' ')} fill={color} stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '22%', transform: `rotate(${-rotate}deg)`,
        fontFamily: 'var(--font-display)', color: 'var(--ink-900)', letterSpacing: '-0.02em',
        lineHeight: 0.95, fontSize: size * 0.14,
      }}>
        {children}
      </div>
    </div>
  );
}
