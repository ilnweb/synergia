
const Pagination = ({ currentPage, handlePrevPage, totalPages, handleNextPage, setCurrentPage,}) => {
    return (
        <div className="row t-center mt-55">
            <div className="col-xl-12">
                <div className="theme__pagination">
                    <ul>
                        <li className={`${currentPage === 0 ? "d-none" : ""}`}>
                            <span                                
                                onClick={handlePrevPage}
                            ><i className="fa-regular fa-angle-left"></i></span>
                        </li>
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <li key={index}>
                                <span
                                className={`${currentPage === index ? "active" : ""}`}
                                onClick={() => setCurrentPage(index)}
                                >{index + 1}</span>
                            </li>
                        ))}
                        <li className={`${currentPage === totalPages - 1 ? "d-none" : ""}`}>
                            <span                                
                                onClick={handleNextPage}
                            ><i className="fa-regular fa-angle-right"></i></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
