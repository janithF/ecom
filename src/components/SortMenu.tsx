import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

export interface SortField {
  title: string;
  slug: string;
}

interface Props {
  onSelectSort: (sortby: SortField) => void;
  sort: SortField | null;
}

const SortMenu = ({ onSelectSort, sort }: Props) => {
  const sortFields: SortField[] = [
    { title: "Title", slug: "title" },
    { title: "Price", slug: "price" },
    { title: "Rating", slug: "rating" },
  ];

  return (
    <Box my="5">
      <Menu>
        <MenuButton as={Button} variant={"outline"} borderRadius={"20px"} rightIcon={<FaChevronDown />} size={"sm"}>
          Sort By {sort?.title}
        </MenuButton>
        <MenuList>
          {sortFields.map((itm) => (
            <MenuItem key={itm.slug} onClick={() => onSelectSort(itm)}>
              {itm.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortMenu;
