import styled from "styled-components";
import { TABLE_COLUMNS, PADDING, PALLETE } from "../../styles/constants";
import { STableRowProps } from "./TableRow.types";

export const STableRow = styled("tr")<STableRowProps>`
  display: grid;
  grid-template-columns: ${TABLE_COLUMNS};
  grid-column-start: 1;
  grid-column-end: 6;
  height: 80px;

  td {
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    height: 80px;
    padding: ${PADDING.TABLE_CELL};
    border: 1px solid ${PALLETE.GREY};
    background-color: ${({ featured }) =>
      featured ? PALLETE.GREEN : PALLETE.RED};
  }

  td:nth-of-type(2) {
    text-align: justify;
  }
`;
