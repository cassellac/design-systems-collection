import React from 'react';

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
}

/** Text input with heavy ink border that grows an offset shadow on focus. */
export function Input(props: InputProps): JSX.Element;
