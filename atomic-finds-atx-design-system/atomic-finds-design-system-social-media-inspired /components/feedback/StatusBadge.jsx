import React from 'react';

const LABEL = { available: 'Available', sold: 'Sold', 'new-drop': 'New Drop' };
const BG_VAR = { available: 'var(--status-available-bg)', sold: 'var(--status-sold-bg)', 'new-drop': 'var(--status-new-bg)' };

export function StatusBadge({ status, size = 'md' }) {
  const pad = size === 'sm' ? '6px 14px' : '10px 22px';
  const fontSize = size === 'sm' ? 13 : 16;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-heading)',
      fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em',
      color: '#fff', background: BG_VAR[status], padding: pad, fontSize,
      borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-sticker)',
      border: '2px solid rgba(0,0,0,0.15)'
    }}>{LABEL[status]}</span>
  );
}
