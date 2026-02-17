'use client';

const Pagination = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
  setCurrentPage,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className='row mt-5'>
      <div className='col-12'>
        <div className='basic-pagination'>
          <ul className='d-flex align-items-center'>
            <li>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className={`prev ${
                  currentPage === 0 ? 'disabled' : ''
                }`}
              >
                <i className='fa-regular fa-arrow-left'></i>
              </button>
            </li>

            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className={currentPage === index ? 'active' : ''}>
                <button onClick={() => setCurrentPage(index)}>
                  {index + 1}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={handleNextPage}
                disabled={currentPage >= totalPages - 1}
                className={`next ${
                  currentPage >= totalPages - 1 ? 'disabled' : ''
                }`}
              >
                <i className='fa-regular fa-arrow-right'></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
