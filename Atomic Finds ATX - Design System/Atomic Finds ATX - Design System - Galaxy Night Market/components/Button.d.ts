/**
 * Button Props Interface
 */
interface ButtonProps {
  /**
   * Visual variant
   * @default 'primary'
   */
  variant?: 'solid' | 'primary' | 'amber';

  /**
   * Size preset
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Button text or children
   */
  children: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
