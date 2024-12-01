import { Box, Button, List, ListItem, Text } from "@chakra-ui/react";
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
    <Box height={"80%"} overflowY={"hidden"}>
      {error && <Error message={error} />}
      {isLoading && <Text color="gray.400">Loading...</Text>}
      <List height={"60vh"} overflowY={"auto"}>
        {!error && !isLoading && categories.map((category) => {
          return (
            <ListItem key={category.slug} paddingY={2}>
              <Button
                variant="link"
                whiteSpace={"normal"}
                textColor={"white"}
                onClick={() => selectCategory(category)}
                fontWeight={selectedCategory.slug === category.slug ? "bold" : "normal"}
              >
                {category.name}
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Categories;
