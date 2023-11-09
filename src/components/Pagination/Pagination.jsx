import React from 'react';

function Pagination({ todosPerPage, totalTodos, currentPage, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxPagesToShow = 5; // Cantidad máxima de páginas para mostrar

  let firstPageToShow = currentPage - Math.floor(maxPagesToShow / 2);
  if (firstPageToShow < 1) {
    firstPageToShow = 1;
  }

  let lastPageToShow = firstPageToShow + maxPagesToShow - 1;
  if (lastPageToShow > pageNumbers.length) {
    lastPageToShow = pageNumbers.length;
    firstPageToShow = Math.max(1, lastPageToShow - maxPagesToShow + 1);
  }

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-gray-600">Mostrar:</span>
        <select
          className="border border-gray-300 rounded px-2 py-1"
          value={todosPerPage}
          onChange={(e) => onPageChange(1, +e.target.value)}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        <span className="text-sm font-medium text-gray-600">elementos por página</span>
      </div>
      <ul className="flex">
        {currentPage > 1 && (
          <li className="text-blue-500 hover:bg-blue-200 hover:text-white px-4 py-2 rounded">
            <button onClick={() => onPageChange(currentPage - 1, todosPerPage)}>&laquo;</button>
          </li>
        )}
        {pageNumbers.slice(firstPageToShow - 1, lastPageToShow).map((number) => (
        <li
            key={number}
            className={
            number === currentPage
                ? 'bg-blue-500 text-white px-4 py-2 rounded'
                : 'text-blue-500 hover:bg-blue-200 hover:text-white px-4 py-2 rounded'
            }
        >
            <button onClick={() => onPageChange(number, todosPerPage)}>{number}</button>
        </li>
        ))}
        {currentPage < pageNumbers.length && (
            <li className="text-blue-500 hover:bg-blue-200 hover:text-white px-4 py-2 rounded">
              <button onClick={() => onPageChange(currentPage + 1, todosPerPage)}>&raquo;</button>
            </li>
          )}
          
      </ul>
    </div>
  );
}

export default Pagination;
