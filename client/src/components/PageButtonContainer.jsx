import { useLocation, useNavigate } from "react-router-dom";
import { useAllDataContext } from "../pages/HomeLayout";

const PageButtonContainer = () => {
  const { data } = useAllDataContext();
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  if (!data || data.numOfPages <= 1) {
    return null;
  }
  const { numOfPages, currentPage } = data;

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    pageButtons.push(
      <button
        key="prev-btn"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
    );

    pageButtons.push(
      <button
        key="next-btn"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === numOfPages}
      >
        Next
      </button>
    );

    return pageButtons;
  };

  return <div>{renderPageButtons()}</div>;
};

export default PageButtonContainer;
