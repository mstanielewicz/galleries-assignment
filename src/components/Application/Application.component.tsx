import React from "react";
import { ApiProvider } from "../../api";
import ExhibitionsView from "../ExhibitionsView";
import { SContainer } from "./Application.styles";

const Application = (): JSX.Element => (
  <ApiProvider>
    <SContainer>
      <ExhibitionsView />
    </SContainer>
  </ApiProvider>
);

export default Application;
