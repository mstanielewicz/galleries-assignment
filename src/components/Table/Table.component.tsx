import React from "react";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import { STable } from "./Table.styles";

const Table = ({ rows = [] }: any) => {
  return (
    <STable>
      <TableHeader />
      <tbody>
        {rows.map((row: any) => (
          <TableRow key={row.id} data={row} />
        ))}
      </tbody>
    </STable>
  );
};

export default Table;
