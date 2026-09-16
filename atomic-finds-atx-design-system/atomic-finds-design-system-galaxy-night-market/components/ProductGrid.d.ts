/**
 * ProductGrid Props Interface
 */
interface ProductGridProps {
  /**
   * Section heading — CMS block supplies this; defaults to "Featured Finds"
   */
  title?: string;

  /**
   * Product rows, shaped exactly like the Supabase `products` table (getProducts() output)
   */
  products: Array<{
    id: string;
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
  }>;

  className?: string;
}

export declare function ProductGrid(props: ProductGridProps): JSX.Element;
