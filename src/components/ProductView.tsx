import { Product } from "../hooks/useProducts";
import { Button, Heading } from "@chakra-ui/react";

interface Props {
  onCloseProductView: () => void;
  selectedProduct: Product;
}

const ProductView = ({ selectedProduct, onCloseProductView }: Props) => {
  return (
    <>
      <Heading as="h1" size="lg" noOfLines={1}>
        {selectedProduct.title}
      </Heading>
      <Button onClick={onCloseProductView}>Close</Button>
    </>
  );
};

export default ProductView;
