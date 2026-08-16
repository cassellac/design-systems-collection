import React from 'react';

export function Avatar({ src, alt = '', size = 56, ring = false }) {
  return (
    <img src={src} alt={alt} style={{
      width: size, height: size, borderRadius: '50%', objectFit: 'cover',
      border: ring ? '3px solid var(--brand-primary)' : '2px solid var(--border-soft)',
      boxShadow: 'var(--shadow-card)'
    }} />
  );
}
