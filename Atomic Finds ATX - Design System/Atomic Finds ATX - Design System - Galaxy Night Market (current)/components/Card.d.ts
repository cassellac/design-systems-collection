/**
 * Card Props Interface
 */
interface CardProps {
  /**
   * Card content
   */
  children: React.ReactNode;

  /**
   * CSS class name
   */
  className?: string;
}

export declare function Card(props: CardProps): JSX.Element;
