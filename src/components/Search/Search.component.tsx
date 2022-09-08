import React from "react";
import { SSearch } from "./Search.styles";
import { SearchProps } from "./Search.types";

const Search = ({ onChange }: SearchProps) => {
  return <SSearch placeholder="Search..." onChange={onChange} />;
};

export default Search;
