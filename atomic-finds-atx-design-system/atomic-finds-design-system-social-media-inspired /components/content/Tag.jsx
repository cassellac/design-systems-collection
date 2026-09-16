import React from 'react';

export function Tag({ children }) {
  return (
    <span style={{
      display: 'inline-flex', fontFamily: 'var(--font-body)', fontWeight: 700,
      fontSize: 13, color: 'var(--brand-secondary)', background: 'var(--bg-sunken)',
      padding: '5px 12px', borderRadius: 'var(--radius-pill)'
    }}>#{children}</span>
  );
}
