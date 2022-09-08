import styled from "styled-components";
import { PALLETE } from "../../styles/constants";

export const SContainer = styled("div")`
  position: relative;
`;

export const STable = styled("table")`
  border-spacing: 0;
  border: 0;
`;

export const SError = styled("div")`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${PALLETE.RED};
  opacity: 0.5;
`;

export const SFetching = styled("div")`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${PALLETE.GREY};
  opacity: 0.5;
`;
