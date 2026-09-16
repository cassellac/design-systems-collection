export interface IconButtonProps {
icon: 'heart' | 'share-2' | 'message-circle' | 'x' | 'chevron-left' | 'chevron-right';
variant?: 'filled' | 'outline';
active?: boolean;
onClick?: () => void;
}
