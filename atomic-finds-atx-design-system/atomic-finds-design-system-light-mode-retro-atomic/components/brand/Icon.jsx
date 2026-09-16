import React from 'react';

/**
 * Icon wrapper over the substituted Lucide set (see readme ICONOGRAPHY).
 * Renders the glyph via CSS mask so it inherits `color` / currentColor and
 * sits at any size. Swap the base URL for a local sprite when a real Atomic
 * Finds glyph set is supplied.
 */
export function Icon({ name, size = 20, color = 'currentColor', style, ...rest }) {
  const url = `https://unpkg.com/lucide-static@latest/icons/${name}.svg`;
  const s = {
    display: 'inline-block', width: size, height: size, flex: 'none',
    background: color,
    WebkitMaskImage: `url(${url})`, maskImage: `url(${url})`,
    WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
    WebkitMaskSize: 'contain', maskSize: 'contain',
    WebkitMaskPosition: 'center', maskPosition: 'center',
    ...style,
  };
  return <span role="img" aria-label={name} style={s} {...rest} />;
}
