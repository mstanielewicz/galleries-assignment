import React from "react";

const TableRow = ({ data }: any) => {
  return (
    <tr>
      <td>{data.description}</td>
      <td>{data.gallery_title}</td>
      <td>{data.is_featured}</td>
      <td>{data.title}</td>
      <td>{data.type}</td>
    </tr>
  );
};

export default TableRow;
