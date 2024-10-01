import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { InputContainer, SearchBar } from "./styles";

interface SearchbarProps {
  onSearch?: (e) => void;
}
export function Searchbar({ onSearch }: SearchbarProps) {
  return (
    <InputContainer>
      <MagnifyingGlass size={24} />
      <SearchBar
        type="text"
        placeholder="Busque por pratos ou ingredientes"
        onChange={onSearch}
      />
    </InputContainer>
  );
}
