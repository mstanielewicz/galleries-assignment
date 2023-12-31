import styled from "styled-components";
import { PALLETE } from "../../styles/constants";

const Loading = styled("div")`
  border: 16px solid ${PALLETE.WHITE};
  border-top: 16px solid ${PALLETE.BLUE};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
