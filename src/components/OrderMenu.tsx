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
        <MenuButton as={Button} variant={"outline"} borderRadius={"20px"} rightIcon={<FaChevronDown />} size={"sm"}>
          Order By {order?.title}
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
