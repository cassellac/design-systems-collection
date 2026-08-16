import React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  /** Square media area rendered above the body (product-photo style). */
  media?: React.ReactNode;
  /** Lift + grow the offset shadow on hover. @default false */
  interactive?: boolean;
  /** Body padding. @default "var(--space-5)" */
  padding?: string;
  style?: React.CSSProperties;
}

/**
 * Structural card: white surface, thick ink border, hard offset shadow, square media wrapper.
 * @startingPoint section="Core" subtitle="Product card, hard offset shadow" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
