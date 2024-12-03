import useProducts, { Product } from "../hooks/useProducts";
import { Box, Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
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
    <Box overflowY={"auto"} height={"calc(100vh - 123px)"} padding={"0 10px 2px 0"}>
      <Text marginBottom={"10px"}>Showing <Text fontWeight={"bold"} as={"span"}>{products.length}</Text> products</Text>
      <SimpleGrid spacing={6} columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }} gap={"10px"}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} onViewProduct={onSelectProduct} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ProductGrid;
