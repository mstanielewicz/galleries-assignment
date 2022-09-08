import React from "react";
import { STableHead, STableHeadCell } from "./TableHeader.styles";
import { TableHeaderProps } from "./TableHeader.types";

const TableHeader = ({ onSortingBy, sortingBy }: TableHeaderProps) => {
  return (
    <STableHead>
      <tr>
        <STableHeadCell
          onClick={() => onSortingBy("title")}
          sortingByColumn={sortingBy === "title"}
        >
          Title
        </STableHeadCell>
        <STableHeadCell
          onClick={() => onSortingBy("description")}
          sortingByColumn={sortingBy === "description"}
        >
          Description
        </STableHeadCell>
        <STableHeadCell
          onClick={() => onSortingBy("is_featured")}
          sortingByColumn={sortingBy === "is_featured"}
        >
          Is Featured
        </STableHeadCell>
        <STableHeadCell
          onClick={() => onSortingBy("gallery_title")}
          sortingByColumn={sortingBy === "gallery_title"}
        >
          Gallery Title
        </STableHeadCell>
        <STableHeadCell
          onClick={() => onSortingBy("type")}
          sortingByColumn={sortingBy === "type"}
        >
          Type of Exhibition
        </STableHeadCell>
      </tr>
    </STableHead>
  );
};

export default TableHeader;
