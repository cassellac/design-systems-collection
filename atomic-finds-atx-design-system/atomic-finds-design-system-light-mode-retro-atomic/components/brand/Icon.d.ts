import React from 'react';

export interface IconProps {
  /** Lucide icon name, e.g. "search", "disc-3", "arrow-right". */
  name: string;
  /** Pixel size (square). @default 20 */
  size?: number;
  /** Any CSS color; defaults to inherited currentColor. */
  color?: string;
  style?: React.CSSProperties;
}

/**
 * Icon glyph (substituted Lucide set) tinted via CSS mask.
 * NOTE: substitution — replace with the brand's own glyphs when supplied.
 */
export function Icon(props: IconProps): JSX.Element;
