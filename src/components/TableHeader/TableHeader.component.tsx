import React from "react";
import { STableHead } from "./TableHeader.styles";

const TableHeader = () => {
  return (
    <STableHead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Is Featured</th>
        <th>Gallery Title</th>
        <th>Type of Exhibition</th>
      </tr>
    </STableHead>
  );
};

export default TableHeader;
