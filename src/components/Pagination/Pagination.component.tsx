import React from "react";
import Button from "../Button";
import { SContainer } from "./Pagination.styles";
import { PaginationProps } from "./Pagination.types";
import { createPagesArray } from "./Pagination.utils";

const Pagination = ({ onPageChange, page, totalPages }: PaginationProps) => {
  const [currentPage, setCurrentPage] = React.useState<number>(page);
  const [pagesNumbers, setPagesNumbers] = React.useState<number[]>(
    createPagesArray({
      length: totalPages,
      include: page,
    })
  );

  React.useEffect(() => {
    setCurrentPage(1);

    if (totalPages) {
      setPagesNumbers(
        createPagesArray({
          max: totalPages,
          include: 1,
        })
      );
    }
  }, [totalPages]);

  React.useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage]);

  const handleNext = () => {
    if (!pagesNumbers.includes(currentPage + 1)) {
      setPagesNumbers(
        createPagesArray({ max: totalPages, include: currentPage + 1 })
      );
    }

    setCurrentPage((current) => current + 1);
  };

  const handlePrevious = () => {
    if (!pagesNumbers.includes(currentPage - 1)) {
      setPagesNumbers(
        createPagesArray({ max: totalPages, include: currentPage - 1 })
      );
    }

    setCurrentPage((current) => current - 1);
  };

  const handleNextScroll = () => {
    setPagesNumbers((current) =>
      createPagesArray({
        include: current[current.length - 1] + 1,
        max: totalPages,
      })
    );
  };

  const handlePreviousScroll = () => {
    setPagesNumbers((current) =>
      createPagesArray({ include: current[0] - 1, max: totalPages })
    );
  };

  const nextDisabled =
    currentPage === totalPages || !totalPages || totalPages === 1;
  const previousDisabled = currentPage === 1 || !totalPages || totalPages === 1;

  const nextScrollDisabled =
    pagesNumbers[pagesNumbers.length - 1] === totalPages ||
    !totalPages ||
    totalPages === 1;
  const previousScrollDisabled =
    pagesNumbers[0] === 1 || !totalPages || totalPages === 1;

  return (
    <SContainer>
      <div>
        <Button
          disabled={previousScrollDisabled}
          label="<"
          onClick={handlePreviousScroll}
        />
        {pagesNumbers.map((num: number) => (
          <Button
            disabled={!totalPages}
            key={num}
            label={String(num)}
            selected={num === currentPage}
            onClick={() => setCurrentPage(num)}
          />
        ))}
        <Button
          disabled={nextScrollDisabled}
          label=">"
          onClick={handleNextScroll}
        />
      </div>
      <div>
        <Button
          disabled={previousDisabled}
          onClick={handlePrevious}
          label="Previous page"
          width="160px"
        />
        <Button
          disabled={nextDisabled}
          onClick={handleNext}
          label="Next page"
          width="160px"
        />
      </div>
    </SContainer>
  );
};

export default Pagination;
