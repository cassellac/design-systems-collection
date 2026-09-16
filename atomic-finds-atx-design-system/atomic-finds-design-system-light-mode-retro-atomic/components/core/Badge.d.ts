import React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "solid" */
  variant?: 'solid' | 'outline';
  /** @default "yellow" */
  tone?: 'yellow' | 'ink' | 'rust' | 'teal' | 'cream';
  /** @default "pill" */
  shape?: 'pill' | 'rounded';
}

/** Small uppercase pill badge with a thick ink stroke — statuses, editions, tags. */
export function Badge(props: BadgeProps): JSX.Element;
