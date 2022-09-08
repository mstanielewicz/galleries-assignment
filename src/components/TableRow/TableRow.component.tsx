import React from "react";
import truncate from "lodash.truncate";
import { STableRow } from "./TableRow.styles";
import { ExhibitionData } from "../../api/api.types";

const TableRow = ({
  description,
  gallery_title,
  is_featured,
  title,
  type,
}: ExhibitionData) => {
  return (
    <STableRow featured={is_featured}>
      <td>{truncate(title || "-", { length: 80, separator: " " })}</td>
      <td>{truncate(description || "-", { length: 200, separator: " " })}</td>
      <td>{is_featured ? "Yes" : "No"}</td>
      <td>{gallery_title || "-"}</td>
      <td>{type || "-"}</td>
    </STableRow>
  );
};

export default TableRow;
