import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import logoWhite from "../assets/logo-white.svg";
import SearchInput from "./SearchInput";
import { FaCartShopping } from "react-icons/fa6";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <Flex height={"100%"} alignItems={"center"} justifyContent={"space-between"} bg="brand.400" borderRadius={"5px"}>
      <Flex width={"300px"} justifyContent={"center"} alignItems={"center"}>
        <Image src={logoWhite} width={"130px"}></Image>
      </Flex>
      <Box w="35%" height={"100%"} p="4px 0">
        <SearchInput onsearch={onSearch} />
      </Box>
      <Flex p="5px 20px" w="300px" height={"100%"} justifyContent={"flex-end"} alignItems={"center"}>
          <IconButton aria-label='Search database' icon={<FaCartShopping />} variant="outline" size={"md"} marginRight={"10px"} borderRadius={"30px"} color={"White"} _hover={{bg:'white',color:'brand.400'}}/>
          <Text color={"white"}>0 Items</Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
