import React from "react";
import { STableHead, STableHeadCell } from "./TableHeader.styles";

const TableHeader = () => {
  return (
    <STableHead>
      <tr>
        <STableHeadCell>Title</STableHeadCell>
        <STableHeadCell>Description</STableHeadCell>
        <STableHeadCell>Is Featured</STableHeadCell>
        <STableHeadCell>Gallery Title</STableHeadCell>
        <STableHeadCell>Type of Exhibition</STableHeadCell>
      </tr>
    </STableHead>
  );
};

export default TableHeader;
