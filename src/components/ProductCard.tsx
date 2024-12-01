import { Product } from "../hooks/useProducts";
import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface Props {
  onViewProduct: (product: Product) => void;
  product: Product;
}

const ProductCard = ({ product, onViewProduct }: Props) => {
  const { id, title, price, rating, brand, thumbnail } = product;
  return (
    <Card maxW={"sm"}>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Image src={thumbnail} alt={title} w={150} h={100} alignSelf="center" />
          <Heading size="md">{title}</Heading>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
          <Text>Rating: {rating}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button onClick={() => onViewProduct(product)} variant="outline" colorScheme="blue" size="sm" w="100%">
          View Product
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
