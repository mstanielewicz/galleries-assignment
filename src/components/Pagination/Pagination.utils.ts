import { CreatePagesArrayParams } from "./Pagination.types";

export const createPagesArray = ({
  from,
  include,
  length = 9,
  max,
  to,
}: CreatePagesArrayParams) => {
  if (include) {
    const fromWhenInclude =
      include / length < 1 ? 1 : Math.floor(include / length) * length;

    if (fromWhenInclude + length > max) {
      return Array.from(
        { length: length - (fromWhenInclude + length - max) + 1 },
        (_, index) => index + fromWhenInclude
      );
    }

    return Array.from({ length }, (_, index) => index + fromWhenInclude);
  }

  if (from && from + length > max) {
    return Array.from(
      { length: length - (from + length - max) + 1 },
      (_, index) => index + from
    );
  }

  if (from) {
    return Array.from({ length }, (_, index) => index + from);
  }

  return Array.from({ length }, (_, index) => index + to! - length + 1);
};
