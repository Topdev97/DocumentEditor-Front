import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, handlePage }: any) => {

  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    const maxDisplayPages = 3;
    let startPage = Math.max(currentPage - 1, 1);
    let endPage = Math.min(currentPage + 1, totalPages);

    if (endPage - startPage + 1 < maxDisplayPages) {
      if (startPage === 1) {
        endPage = Math.min(startPage + maxDisplayPages - 1, totalPages);
      } else if (endPage === totalPages) {
        startPage = Math.max(endPage - maxDisplayPages + 1, 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (startPage > 1) {
      pageNumbers.unshift(1);
      if (startPage > 2) {
        pageNumbers.splice(1, 0, "..."); // Add ellipsis before the start page
      }
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push("..."); // Add ellipsis after the end page
      }
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePage(currentPage - 1);
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePage(currentPage + 1);
    }
  }

  return (
    <div className="bg-white py-10 text-custom-black-title">
      <ul className="flex items-center justify-between gap-1">
        <li>
          <button
            className={`inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 py-2 text-base font-medium ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-dark hover:bg-gray-2'
              }`}
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            <span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.325 14.825C11.175 14.825 11.025 14.775 10.925 14.65L5.27495 8.90002C5.04995 8.67502 5.04995 8.32503 5.27495 8.10002L10.925 2.35002C11.15 2.12502 11.5 2.12502 11.725 2.35002C11.95 2.57502 11.95 2.92502 11.725 3.15002L6.47495 8.50003L11.75 13.85C11.975 14.075 11.975 14.425 11.75 14.65C11.6 14.75 11.475 14.825 11.325 14.825Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="max-sm:hidden"> Previous </span>
          </button>
        </li>

        <div className="flex items-center justify-between gap-1">
          {getPageNumbers().map((number, index) => (
            <li key={index}>
              <button
                className={`flex h-10 min-w-10 items-center justify-center rounded-lg px-2 ${number === currentPage ? 'bg-[#f1efef] shadow-md' : 'hover:bg-gray-2'
                  } text-dark`}
                onClick={() => typeof number === 'number' && handlePage(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </div>

        <li>
          <button
            className={`inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 py-2 text-base font-medium ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-dark hover:bg-gray-2'
              }`}
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <span className="max-sm:hidden"> Next </span>
            <span>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.67495 14.825C5.52495 14.825 5.39995 14.775 5.27495 14.675C5.04995 14.45 5.04995 14.1 5.27495 13.875L10.525 8.50003L5.27495 3.15002C5.04995 2.92502 5.04995 2.57502 5.27495 2.35002C5.49995 2.12502 5.84995 2.12502 6.07495 2.35002L11.725 8.10002C11.95 8.32503 11.95 8.67502 11.725 8.90002L6.07495 14.65C5.97495 14.75 5.82495 14.825 5.67495 14.825Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;