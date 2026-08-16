import React from 'react';

export interface PillLinkProps {
  children?: React.ReactNode;
  href?: string;
  /** @default "ink" */
  tone?: 'ink' | 'yellow' | 'rust';
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

/** Thick pill-bordered anchor for floating text links (nav, footer, read-more). */
export function PillLink(props: PillLinkProps): JSX.Element;
