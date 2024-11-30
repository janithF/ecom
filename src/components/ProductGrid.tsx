import useProducts, { Product } from "../hooks/useProducts";
import { Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import Error from "./Error";
import { ProductQuery } from "../App";

interface Props {
  onSelectProduct: (product: Product) => void;
  category: string;
  productQuery: ProductQuery | null;
}

const ProductGrid = ({ category, productQuery, onSelectProduct }: Props) => {
  const { products, error, isLoading } = useProducts(category, productQuery);

  if (isLoading) {
    return (
      <Flex h="90%" justifyContent="center" alignItems="center">
        <Spinner size="lg" mr="5" />{" "}
        <Text color="gray.600" fontSize="xl">
          Loading Products
        </Text>
      </Flex>
    );
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <>
      <SimpleGrid spacing={6} columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} onViewProduct={onSelectProduct} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
