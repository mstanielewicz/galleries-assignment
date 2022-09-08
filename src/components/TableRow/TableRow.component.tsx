import React from "react";
import truncate from "lodash.truncate";
import { STableRow } from "./TableRow.styles";

const TableRow = ({ data }: any) => {
  return (
    <STableRow featured={data.is_featured}>
      <td>{truncate(data.title, { length: 80, separator: " " })}</td>
      <td>{truncate(data.description, { length: 200, separator: " " })}</td>
      <td>{data.is_featured ? "Yes" : "No"}</td>
      <td>{data.gallery_title}</td>
      <td>{data.type}</td>
    </STableRow>
  );
};

export default TableRow;
