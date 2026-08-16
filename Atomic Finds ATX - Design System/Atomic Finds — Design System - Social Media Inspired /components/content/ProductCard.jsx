import React, { useState } from 'react';
import { StatusBadge } from '../feedback/StatusBadge.jsx';

export function ProductCard({ image, name, era, price, status }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)',
        boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all var(--dur-normal) var(--ease-out)',
        overflow: 'hidden', width: 260, fontFamily: 'var(--font-body)'
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '1/1' }}>
        <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {status && (
          <div style={{ position: 'absolute', top: 10, right: 10, transform: 'rotate(-6deg)' }}>
            <StatusBadge status={status} size="sm" />
          </div>
        )}
      </div>
      <div style={{ padding: '14px 16px' }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 19, color: 'var(--ink)' }}>{name}</div>
        {era && <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>{era}</div>}
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 16, color: 'var(--brand-primary)', marginTop: 8 }}>{price}</div>
      </div>
    </div>
  );
}
