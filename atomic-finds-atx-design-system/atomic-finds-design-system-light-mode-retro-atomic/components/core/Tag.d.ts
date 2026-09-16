import React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  /** Filled ink state for selected filters. @default false */
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

/** Quiet inline metadata / filter tag with a thin ink outline. */
export function Tag(props: TagProps): JSX.Element;
