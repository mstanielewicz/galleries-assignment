import styled from "styled-components";
import { PALLETE } from "../../styles/constants";

export const SSearch = styled("input")`
  display: inline-block;
  height: 50px;
  width: 50%;
  margin: 2rem 0;
  padding: 0 2rem;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 0.25rem;
  border: 1px solid ${PALLETE.TEXT};
`;
