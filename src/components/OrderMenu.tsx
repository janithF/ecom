import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

export interface OrderField {
  title: string;
  slug: string;
}

interface Props {
  onSelectOrder: (orderby: OrderField) => void;
  order: OrderField | null;
}

const OrderMenu = ({ onSelectOrder, order }: Props) => {
  const sortFields: OrderField[] = [
    { title: "Ascending", slug: "asc" },
    { title: "Descending", slug: "desc" },
  ];

  return (
    <Box my="5">
      <Menu>
        <MenuButton as={Button} colorScheme="blue" rightIcon={<FaChevronDown />} size={"sm"}>
          {order?.title || "Order By"}
        </MenuButton>
        <MenuList>
          {sortFields.map((itm) => (
            <MenuItem key={itm.slug} onClick={() => onSelectOrder(itm)}>
              {itm.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
export default OrderMenu;
