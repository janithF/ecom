import { Divider, Flex, Grid, GridItem, Heading, HStack, Show } from "@chakra-ui/react";
import ProductGrid from "./components/ProductGrid";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import { Category, defaultCategory } from "./hooks/useCategories";
import { useEffect, useState } from "react";
import SortMenu, { SortField } from "./components/SortMenu";
import OrderMenu, { OrderField } from "./components/OrderMenu";
import SearchInput from "./components/SearchInput";
import { Product } from "./hooks/useProducts";
import ProductView from "./components/ProductView";

export interface ProductQuery {
  sortBy: SortField | null;
  order: OrderField | null;
  searchText: string | null;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(defaultCategory);
  const [productQuery, setProductQuery] = useState<ProductQuery>({} as ProductQuery);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <Grid templateAreas={{ base: `"nav" "main"`, lg: `"aside main"` }} templateColumns={{ base: "1fr", lg: "300px 1fr" }}>
      <Show below="lg">
        <GridItem area={"nav"} h={"5vh"} bg={"gray.100"} p={5}>
          <Navbar />
        </GridItem>
      </Show>
      <Show above="lg">
        <GridItem area={"aside"} bg={"gray.100"} p={5} overflowY={"auto"} h={"100vh"}>
          <Categories onSelectCategory={(category) => setSelectedCategory(category)} selectedCategory={selectedCategory} />
        </GridItem>
      </Show>
      <GridItem area={"main"} p={5} h={{ base: "95vh", lg: "100vh" }} overflowY={"auto"}>
        {selectedCategory == defaultCategory && <SearchInput onsearch={(searchText) => setProductQuery({ ...productQuery, searchText })} />}
        <Heading as="h3" size="lg" mb="3">
          {selectedCategory.name}
        </Heading>
        <HStack>
          <SortMenu onSelectSort={(sortBy) => setProductQuery({ ...productQuery, sortBy })} sort={productQuery?.sortBy || null} />
          <OrderMenu onSelectOrder={(order) => setProductQuery({ ...productQuery, order })} order={productQuery?.order || null}></OrderMenu>
        </HStack>
        <Divider mb="5" />
        {selectedProduct ? (
          <ProductView selectedProduct={selectedProduct} onCloseProductView={() => setSelectedProduct(null)} />
        ) : (
          <ProductGrid category={selectedCategory.slug} productQuery={productQuery} onSelectProduct={(product) => setSelectedProduct(product)} />
        )}
      </GridItem>
    </Grid>
  );
}

export default App;
