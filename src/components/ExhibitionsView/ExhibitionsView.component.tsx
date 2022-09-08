import React from "react";
import { useExhibitions } from "../../api";
import Table from "../Table";

const ExhibitionsView = (): JSX.Element => {
  const { data, error, status } = useExhibitions();

  if (status !== "success") return <div>Loading</div>;

  return (
    <div>
      <Table rows={data.data} />
    </div>
  );
};

export default ExhibitionsView;
