import React from "react";
import debounce from "lodash.debounce";
import { useExhibitions } from "../../api";
import Pagination from "../Pagination";
import Search from "../Search";
import Table from "../Table";
import { SContainer } from "./ExhibitionsView.styles";

const ExhibitionsView = (): JSX.Element => {
  const [page, setPage] = React.useState<number>(1);
  const [search, setSearch] = React.useState<string>("");

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearch(event.target.value);
  };

  const debouncedSearchChangeHandler = React.useMemo(
    () => debounce(handleSearchChange, 500),
    []
  );

  React.useEffect(() => {
    return () => {
      debouncedSearchChangeHandler.cancel();
    };
  }, []);

  const { isError, data, isFetching } = useExhibitions({
    page,
    search,
  });

  return (
    <SContainer>
      <Search onChange={debouncedSearchChangeHandler} />
      <Table error={isError} fetching={isFetching} rows={data.rows} />
      <Pagination
        fetching={isFetching}
        onPageChange={setPage}
        page={page}
        totalPages={data.totalPages}
      />
    </SContainer>
  );
};

export default ExhibitionsView;
