import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearchsubmit: (searchValue: string) => void;
}

const SearchInput = ({ onSearchsubmit }: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
      <Input
        onKeyUp={(e) => {
          if (e.key === "Enter" || e.keyCode === 13) {
            if (nameRef.current !== null) onSearchsubmit(nameRef.current.value);
          }
        }}
        ref={nameRef}
        type="text"
        variant="filled"
        placeholder="Search games.."
        borderRadius="20px"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
