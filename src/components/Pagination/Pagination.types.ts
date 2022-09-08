export type PaginationProps = {
  fetching: boolean;
  onPageChange: (p: number) => void;
  page: number;
  totalPages?: number;
};

export type CreatePagesArrayParams = {
  from?: number;
  include?: number;
  length?: number;
  max: number;
  to?: number;
};
