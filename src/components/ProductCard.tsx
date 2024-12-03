import { Product } from "../hooks/useProducts";
import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text, Tooltip } from "@chakra-ui/react";
import getCroppedWord from "../services/word-crop";
import Rating from "./Rating";

interface Props {
  onViewProduct: (product: Product) => void;
  product: Product;
}

const ProductCard = ({ product, onViewProduct }: Props) => {
  const { id, title, price, rating, brand, thumbnail } = product;
  return (
    <Card maxW={"sm"}>
      <CardBody padding={"10px"}>
        <Stack mt="2" spacing="1">
          <Image src={thumbnail} alt={title} w={150} h={100} alignSelf="center" />
          <Tooltip label={title} placement="top-start">
            <Heading size="sm">{title.length > 25 ? `${getCroppedWord(title, 20)}...` : title}</Heading>
          </Tooltip>
          <Rating rating={rating}></Rating>
          <Text color="brand.200" fontSize="xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter padding={"3px 10px 10px"}>
        <Button onClick={() => onViewProduct(product)} variant="outline" _hover={{bg:'brand.200',color:'white'}} borderRadius="16px" size="sm" w="100%">
          View Product
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
