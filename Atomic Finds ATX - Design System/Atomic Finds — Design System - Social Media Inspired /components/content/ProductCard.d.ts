export interface ProductCardProps {
image: string;
name: string;
era?: string;
price: string;
status?: 'available' | 'sold' | 'new-drop';
}
