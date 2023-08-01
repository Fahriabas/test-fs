import { useEffect, useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import TableRows from "./TableRow";
import { useDispatch, useSelector } from "react-redux";
import { fetchPaginatedProducts } from "../stores/actionCreator";

const ProductView = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);
  console.log(data, 'isi dari data line 11');
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);

  const [searchQuery, setSearchQuery] = useState("")

  const handleChange = (event) => {
    const {value} = event.target
    setSearchQuery(value)
  }

  useEffect(() => {
    dispatch(fetchPaginatedProducts(currentPage));
  }, [currentPage, dispatch, searchQuery]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(fetchPaginatedProducts(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(fetchPaginatedProducts(currentPage + 1));
    }
  };

  const handleSearchProducts = () => {
    // Fetch products based on the search query and reset to the first page
    console.log(searchQuery, 'isi dari search query');
    dispatch(fetchPaginatedProducts(1, searchQuery));
  };

  return (
    <div>
      <div className="flex items-center justify-between h-[70px] shadow-lg px-[25px]">
        <div className="flex items-center rounded-[5px] bg-white">
          <input
            type="text"
            className="h-[40px] outline-none px-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal"
            placeholder="Search for..."
            value={searchQuery}
            onChange={handleChange}
          />
          <div className="bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]" 
          onClick={handleSearchProducts}
          >
            <FaSearch color="white" />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between py-7 px-10">
          <div>
            <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">product</h1>
            <p className="text-sm font-medium text-gray-500">
              lets grow your product businesss! create and uplod here
            </p>
          </div>
          <Link
            to={"/add"}
            className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
          >
            <FaPlus className="w-6 h-6 fill-current" />
            <span className="text-sm font-semibold tracking-wide">Create Item</span>
          </Link>
        </div>
        <TableRows products={data}/>
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

export default ProductView;
