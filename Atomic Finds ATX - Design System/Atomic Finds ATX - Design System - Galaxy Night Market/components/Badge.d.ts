/**
 * Badge Props Interface
 */
interface BadgeProps {
  /**
   * Visual variant
   * @default 'instock'
   */
  variant?: 'instock' | 'featured' | 'out' | 'eco';

  /**
   * Badge label text
   */
  children: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
