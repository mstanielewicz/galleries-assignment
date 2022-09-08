import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApiProviderProps } from "./ApiProvider.types";

const queryClient = new QueryClient();

const ApiProvider = ({ children }: ApiProviderProps): JSX.Element => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default ApiProvider;
