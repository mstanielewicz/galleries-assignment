import React from "react";
import { useExhibitions } from "../../api";
import Pagination from "../Pagination";
import Table from "../Table";
import { SContainer } from "./ExhibitionsView.styles";

const ExhibitionsView = (): JSX.Element => {
  const [page, setPage] = React.useState(1);

  const { data, error, status } = useExhibitions({ page });

  if (status !== "success") return <div>Loading</div>;

  return (
    <SContainer>
      <Table rows={data.data} />
      <Pagination
        onPageChange={setPage}
        page={page}
        totalPages={data.pagination.total_pages}
      />
    </SContainer>
  );
};

export default ExhibitionsView;
