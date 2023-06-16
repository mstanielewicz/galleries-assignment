import styled from "styled-components";
import { TABLE_COLUMNS, PADDING, PALLETE } from "../../styles/constants";

export const STableHead = styled("thead")`
  tr {
    display: grid;
    grid-template-columns: ${TABLE_COLUMNS};
    grid-column-start: 1;
    grid-column-end: 6;
    background-color: ${PALLETE.GREY};
  }
`;

export const STableHeadCell = styled("th")`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: ${PADDING.TABLE_CELL};
  text-transform: bold;
  text-decoration: none;
`;
