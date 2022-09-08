import React from "react";
import Button from "../Button";
import { SContainer } from "./Pagination.styles";
import { PaginationProps } from "./Pagination.types";
import { createPagesArray } from "./Pagination.utils";

const Pagination = ({ onPageChange, page, totalPages }: PaginationProps) => {
  const [currentPage, setCurrentPage] = React.useState<number>(page);
  const [pagesNumbers, setPagesNumbers] = React.useState<number[]>(
    createPagesArray({
      length: totalPages && totalPages < 9 ? totalPages : 9,
      include: page,
    })
  );

  React.useEffect(() => {
    setCurrentPage(1);
    createPagesArray({
      length: totalPages && totalPages < 9 ? totalPages : 9,
      include: 1,
    });
  }, [totalPages]);

  React.useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage]);

  const handleNext = () => {
    if (!pagesNumbers.includes(currentPage + 1)) {
      setPagesNumbers(createPagesArray({ include: currentPage + 1 }));
    }

    setCurrentPage((current) => current + 1);
  };

  const handlePrevious = () => {
    if (!pagesNumbers.includes(currentPage - 1)) {
      setPagesNumbers(createPagesArray({ include: currentPage - 1 }));
    }

    setCurrentPage((current) => current - 1);
  };

  const handleNextScroll = () => {
    setPagesNumbers((current) =>
      createPagesArray({
        from: current[current.length - 1],
        max: totalPages,
      })
    );
  };

  const handlePreviousScroll = () => {
    setPagesNumbers((current) =>
      createPagesArray({ to: current[0], max: totalPages })
    );
  };

  const nextDisabled = currentPage === totalPages || !totalPages;
  const previousDisabled = currentPage === 1 || !totalPages;

  const nextScrollDisabled =
    pagesNumbers[pagesNumbers.length - 1] === totalPages || !totalPages;
  const previousScrollDisabled = pagesNumbers[0] === 1 || !totalPages;

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
