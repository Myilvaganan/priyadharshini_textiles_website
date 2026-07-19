import { useContent } from "../context/ContentContext";
import { products as baseProducts } from "../data/products";

export function useProducts() {
  const { content } = useContent();
  return baseProducts.map((p) => {
    const override = content.products.find((c) => c.slug === p.slug);
    return override ? { ...p, ...override } : p;
  });
}

export function useProduct(slug) {
  const products = useProducts();
  return products.find((p) => p.slug === slug);
}
