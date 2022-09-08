import React from "react";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";

const Table = ({ rows = [] }: any) => {
  console.log(rows.slice(0, 30));
  return (
    <table>
      <TableHeader />
      <tbody>
        {rows.slice(0, 30).map((row: any) => (
          <TableRow key={row.id} data={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
