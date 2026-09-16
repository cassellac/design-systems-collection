import React from 'react';

export interface StarburstCalloutProps {
  children?: React.ReactNode;
  /** Square px size. @default 160 */
  size?: number;
  /** Fill color. @default "var(--yellow-400)" */
  color?: string;
  /** Outline color. @default "var(--ink-900)" */
  stroke?: string;
  /** Degrees of playful rotation. @default -8 */
  rotate?: number;
  /** Number of spikes. @default 12 */
  points?: number;
  style?: React.CSSProperties;
}

/**
 * Vector starburst promo badge with centered display text.
 * @startingPoint section="Brand" subtitle="Starburst promo / discount callout" viewport="700x260"
 */
export function StarburstCallout(props: StarburstCalloutProps): JSX.Element;
