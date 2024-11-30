import { ProductQuery } from "../App";
import { defaultCategory } from "./useCategories";
import useData from "./useData";

export interface Product {
  id: number;
  title: string;
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  images: string[];
  thumbnail: string;
  price: number;
  rating: number;
  reviews: ProductReview[];
  tags: string[];
}

interface ProductReview {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}

const useProducts = (category: string, productQuery?: ProductQuery | null) => {
  let endpoint: string = "/products";
  if (category !== defaultCategory.slug) {
    endpoint = `/products/category/${category}`;
  }

  if (category == defaultCategory.slug && productQuery?.searchText?.length) {
    endpoint = "/products/search";
  }

  const {
    data: products,
    error,
    isLoading,
  } = useData<Product>(
    endpoint,
    (data) => data.products,
    { params: { sortBy: productQuery?.sortBy?.slug, order: productQuery?.order?.slug, q: productQuery?.searchText } },
    [category, productQuery]
  );

  return { products, error, isLoading };
};

export default useProducts;
