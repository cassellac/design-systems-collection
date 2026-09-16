/**
 * ProductCard Props Interface — mirrors the live Supabase `products` row
 */
interface ProductCardProps {
  title: string;
  description?: string | null;
  price?: number | null;
  original_price?: number | null;
  condition?: string | null;
  location?: string | null;
  listed_label?: string | null;
  attributes?: Record<string, unknown>;
  image_url?: string | null;
  external_url: string;
  seller_name?: string | null;
  seller_rating?: string | null;
  className?: string;
}

export declare function ProductCard(props: ProductCardProps): JSX.Element;
