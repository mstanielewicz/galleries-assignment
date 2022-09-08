import styled from "styled-components";
import { PALLETE } from "../../styles/constants";
import { SButtonProps } from "./Button.types";

export const SButton = styled("button")<SButtonProps>`
  display: inline-block;
  min-height: 35px;
  min-width: 40px;
  padding: 0.5rem 1rem 0.5rem;
  margin: 0 0.25rem 0 0;
  background: ${({ selected }) => (selected ? PALLETE.GREY : "transparent")};
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 0.25rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border: 1px solid ${PALLETE.TEXT};
  text-align: center;
  width: ${({ width }) => width};
`;
