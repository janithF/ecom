import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onsearch: (searchText: string) => void;
}

const SearchInput = ({ onsearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (searchRef.current) {
      onsearch(searchRef.current.value);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={BsSearch} color="white" />
        </InputLeftElement>
        <Input
          type="search"
          ref={searchRef}
          placeholder="Search Products..."
          borderRadius={20}
          variant={"outline"}
          color={"white"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
