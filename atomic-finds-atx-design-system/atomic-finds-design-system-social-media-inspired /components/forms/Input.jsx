import React, { useState } from 'react';

export function Input({ label, placeholder, multiline = false, value, onChange }) {
  const [focus, setFocus] = useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <label style={{ display: 'block', fontFamily: 'var(--font-body)' }}>
      {label && <span style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>{label}</span>}
      <Tag
        value={value}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => onChange && onChange(e.target.value)}
        rows={multiline ? 3 : undefined}
        style={{
          width: '100%', fontFamily: 'var(--font-body)', fontSize: 15,
          padding: '10px 14px', borderRadius: 'var(--radius-md)',
          border: `2px solid ${focus ? 'var(--focus-ring)' : 'var(--border-soft)'}`,
          background: 'var(--bg-surface)', color: 'var(--text-primary)',
          outline: 'none', boxSizing: 'border-box', resize: multiline ? 'vertical' : 'none',
          transition: 'border-color var(--dur-fast) var(--ease-out)'
        }}
      />
    </label>
  );
}
