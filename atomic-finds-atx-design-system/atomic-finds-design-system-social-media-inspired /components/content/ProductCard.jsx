import React from 'react';
import { StatusBadge } from '../feedback/StatusBadge.jsx';

export function ProductCard({ image, name, era, price, status }) {
  return (
    <div className="product-card">
      <div style={{ position: 'relative', aspectRatio: '1/1' }}>
        <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {status && (
          <div style={{ position: 'absolute', top: 10, right: 10, transform: 'rotate(-6deg)' }}>
            <StatusBadge status={status} size="sm" />
          </div>
        )}
      </div>
      <div className="product-card-footer">
        <div className="product-card-title">{name}</div>
        {era && <div className="product-card-era">{era}</div>}
        <div className="product-card-price">{price}</div>
      </div>
    </div>
  );
}

