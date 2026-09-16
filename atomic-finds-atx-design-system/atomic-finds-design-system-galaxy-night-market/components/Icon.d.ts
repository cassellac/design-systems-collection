/**
 * Icon component — displays custom Atomic Finds PNG icons
 * 
 * Usage:
 * ```jsx
 * <Icon name="leaf" size={48} />
 * <Icon name="star" size={32} />
 * <Icon name="heart" size={24} />
 * ```
 */

export interface IconProps {
  /** Icon name without .png extension (e.g., 'leaf', 'star', 'heart') */
  name?: string;
  /** Icon size in pixels (default: 48) */
  size?: number;
  /** Optional CSS class name */
  className?: string;
  /** Optional inline styles */
  style?: React.CSSProperties;
}

export function Icon(props: IconProps): JSX.Element;
