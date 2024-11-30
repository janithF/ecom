import useData from "./useData";

export interface Category {
  name: string;
  slug: string;
  url: string;
}

export const defaultCategory: Category = {
  name: "All Products",
  slug: "all",
  url: "/products",
};

const useCategories = () => {
  let { data: categories, error, isLoading } = useData<Category>("/products/categories");
  categories = [defaultCategory, ...categories];
  return { categories, error, isLoading };
};

export default useCategories;
