import { Button, Heading, List, ListItem, Text } from "@chakra-ui/react";
import useCategories, { Category } from "../hooks/useCategories";
import Error from "./Error";

interface Props {
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category;
}

const Categories = ({ onSelectCategory, selectedCategory }: Props) => {
  const { categories, error, isLoading } = useCategories();

  const selectCategory = (category: Category) => {
    if (category) {
      onSelectCategory(category);
    }
  };

  return (
    <>
      <Heading size="md" my="3">
        Categories
      </Heading>
      {error && <Error message={error} />}
      {isLoading && <Text color="gray.400">Loading...</Text>}
      <List>
        {!error && !isLoading && categories.map((category) => {
          return (
            <ListItem key={category.slug} paddingY={2}>
              <Button
                variant="link"
                whiteSpace={"normal"}
                onClick={() => selectCategory(category)}
                fontWeight={selectedCategory.slug === category.slug ? "bold" : "normal"}
              >
                {category.name}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default Categories;
