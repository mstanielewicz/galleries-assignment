import React from "react";
import { ApiProvider } from "../../api";
import ExhibitionsView from "../ExhibitionsView";

const Application = (): JSX.Element => (
  <ApiProvider>
    <ExhibitionsView />
  </ApiProvider>
);

export default Application;
