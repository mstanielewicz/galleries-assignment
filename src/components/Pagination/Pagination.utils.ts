import findIndex from "lodash.findindex";
import { CreatePagesArrayParams } from "./Pagination.types";

export const createPagesArray = ({
  include,
  length = 9,
  max = 1,
}: CreatePagesArrayParams) => {
  if (max === 1 || length === 1) return [1];

  const pagesGroups = Array.from(
    { length: Math.ceil(max / length) },
    (_, index) => {
      const startPage = index * length + 1;
      return Array.from({ length }, (_, index) =>
        index + startPage > max ? 0 : index + startPage
      ).filter((page) => page !== 0);
    }
  );

  return pagesGroups[
    findIndex(pagesGroups, (pages: number[]) => pages.includes(include))
  ];
};
