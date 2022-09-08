import styled from "styled-components";
import { CONTAINER_WIDTH, PALLETE } from "../../styles/constants";

export const SContainer = styled("div")`
  max-width: ${CONTAINER_WIDTH};
  margin-right: auto;
  margin-left: auto;
  background-color: ${PALLETE.BG};
  color: ${PALLETE.TEXT};
`;
