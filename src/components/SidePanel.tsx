import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Text } from "@chakra-ui/react";
import { FaFilter, FaLayerGroup } from "react-icons/fa6";
import Categories from "./Categories";
import { Category } from "../hooks/useCategories";

interface Props {
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category;
}

const SidePanel = ({ onSelectCategory, selectedCategory }: Props) => {
  return (
    <Accordion allowToggle defaultIndex={0}>
      {/* Categories */}
      <AccordionItem>
        <Text>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" color={"white"}>
              <HStack>
                <FaLayerGroup /> <Text>Categories</Text>
              </HStack>
            </Box>
            <AccordionIcon color={"white"} />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={4} padding={"5px 5px 5px 40px"}>
          <Categories onSelectCategory={onSelectCategory} selectedCategory={selectedCategory} />
        </AccordionPanel>
      </AccordionItem>
      {/* Filter */}
      <AccordionItem>
        <Text>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" color={"white"}>
              <HStack>
                <FaFilter /> <Text>Filter</Text>
              </HStack>
            </Box>
            <AccordionIcon color={"white"} />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={4}>
          <span>Filter goes here</span>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SidePanel;
