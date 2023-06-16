import React from "react";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import Loading from "../Loading";
import { SContainer, SError, SFetching, STable } from "./Table.styles";
import { TableProps } from "./Table.types";
import { ExhibitionData } from "../../api/api.types";

const Table = ({ error, fetching, rows }: TableProps) => {
  return (
    <SContainer>
      {error ? <SError>Someting went wrong :( Please refresh...</SError> : null}
      {fetching ? (
        <SFetching>
          <Loading />
        </SFetching>
      ) : null}
      <STable>
        <TableHeader />
        <tbody>
          {rows.map((exhibition: ExhibitionData) => (
            <TableRow key={exhibition.id} {...exhibition} />
          ))}
        </tbody>
      </STable>
    </SContainer>
  );
};

export default Table;
