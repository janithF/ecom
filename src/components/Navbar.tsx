import { Box, Flex, HStack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <Flex height={"100%"} alignItems={"center"} justifyContent={"space-between"}>
      <Box p="3" w="300px" height={"100%"}>
        Vendoora
      </Box>
      <Box w="35%" height={"100%"} p="4px 0">
        <SearchInput onsearch={onSearch} />
      </Box>
      <Box p="3" w="300px" height={"100%"}>
        Cart
      </Box>
    </Flex>
  );
};

export default Navbar;
