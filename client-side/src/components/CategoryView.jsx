import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import TableCategory from "./TableCategory"; // Assuming this component renders the table rows for categories
import { useDispatch, useSelector } from "react-redux";
import { fetchPaginatedCategories } from "../stores/actionCreator";

const CategoryView = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.categoryCurrentPage);
  const totalPages = useSelector((state) => state.categoryTotalPages);

  useEffect(() => {
    dispatch(fetchPaginatedCategories(currentPage));
  }, [currentPage, dispatch]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(fetchPaginatedCategories(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(fetchPaginatedCategories(currentPage + 1));
    }
  };

  return (
    <div>
      {/* Search Input */}
      <div className="flex items-center justify-between h-[70px] shadow-lg px-[25px]">
        <div className="flex items-center rounded-[5px] bg-white">
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between py-7 px-10">
          <div>
            <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
              Category
            </h1>
            <p className="text-sm font-medium text-gray-500">
              To create a new Category, click create item
            </p>
          </div>
          <Link
            to={"/addCategories"}
            className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
          >
            <FaPlus className="w-6 h-6 fill-current" />
            <span className="text-sm font-semibold tracking-wide">
              Create Item
            </span>
          </Link>
        </div>

        {/* Table for Categories */}
        <TableCategory />

        {/* Pagination */}
        <div className="flex items-center justify-center my-4">
          <button
            className={`mr-2 bg-indigo-600 text-white py-2 px-4 rounded focus:outline-none ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"
            }`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className={`ml-2 bg-indigo-600 text-white py-2 px-4 rounded focus:outline-none`}
          >
            {currentPage}
          </button>

          <button
            className={`ml-2 bg-indigo-600 text-white py-2 px-4 rounded focus:outline-none ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"
            }`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryView;
