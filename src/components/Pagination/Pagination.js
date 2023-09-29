import React from "react";
import "./Pagination.scss";
import Pagination from "react-bootstrap/Pagination";

const PaginationTable = ({ activePage, totalPages, onPageChange }) => {
  const limit = 5;

  const generatePageNumbers = () => {
    const halfLimit = Math.floor(limit / 2);
    let start = activePage - halfLimit;
    let end = activePage + halfLimit;

    if (start < 1) {
      start = 1;
      end = limit;
    }

    if (end > totalPages) {
      end = totalPages;
      start = totalPages - limit + 1;
    }

    const pageNumbers = [];
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <section id="pagination">
      <Pagination>
        <Pagination.Prev
          onClick={() => onPageChange(activePage - 1)}
          disabled={activePage === 1}
        />

        {generatePageNumbers().map((pageNumber) => (
          <Pagination.Item
            key={pageNumber}
            active={pageNumber === activePage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Pagination.Item>
        ))}

        {activePage < totalPages && (
          <>
            {activePage < totalPages - limit + 1 && <Pagination.Ellipsis />}
            <Pagination.Item onClick={() => onPageChange(totalPages)}>
              {totalPages}
            </Pagination.Item>
          </>
        )}
        <Pagination.Next
          onClick={() => onPageChange(activePage + 1)}
          disabled={activePage === totalPages}
        />
      </Pagination>
    </section>
  );
};

export default PaginationTable;
