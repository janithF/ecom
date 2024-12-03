import { Divider, Flex, Grid, GridItem, Heading, HStack, Show } from "@chakra-ui/react";
import ProductGrid from "./components/ProductGrid";
import Navbar from "./components/Navbar";
import { Category, defaultCategory } from "./hooks/useCategories";
import { useState } from "react";
import SortMenu, { SortField } from "./components/SortMenu";
import OrderMenu, { OrderField } from "./components/OrderMenu";
import { Product } from "./hooks/useProducts";
import ProductView from "./components/ProductView";
import SidePanel from "./components/SidePanel";

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
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      height={"100vh"}
      templateColumns={{ base: "1fr", lg: "300px 1fr" }}
      gridTemplateRows={"50px 1fr"}
      padding={"5px"}
      bg="#FAF9F6"
    >
      <GridItem area={"nav"}>
        <Navbar onSearch={(searchText: string) => setProductQuery({ ...productQuery, searchText })} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"white"} p={"40px 5px 15px"} marginTop={"15px"} overflowY={"hidden"} borderRadius={"20px"} border='1px' borderColor='gray.200'>
          <SidePanel onSelectCategory={(category) => setSelectedCategory(category)} selectedCategory={selectedCategory} />
        </GridItem>
      </Show>
      <GridItem area={"main"} p={5} overflowY={"hidden"}>
        {selectedProduct ? (
          <ProductView selectedProduct={selectedProduct} onCloseProductView={() => setSelectedProduct(null)} />
        ) : (
          <>
            <Flex justifyContent={"space-between"} alignItems={"center"} height={"35px"} paddingBottom={"15px"}>
              <Heading as="h3" size="md" mb="0px">
                {selectedCategory.name}
              </Heading>
              <HStack>
                <SortMenu onSelectSort={(sortBy) => setProductQuery({ ...productQuery, sortBy })} sort={productQuery?.sortBy || null} />
                <OrderMenu onSelectOrder={(order) => setProductQuery({ ...productQuery, order })} order={productQuery?.order || null}></OrderMenu>
              </HStack>
            </Flex>
            <Divider mb="5px" />
            <ProductGrid category={selectedCategory.slug} productQuery={productQuery} onSelectProduct={(product) => setSelectedProduct(product)} />
          </>
        )}
      </GridItem>
    </Grid>
  );
}

export default App;
