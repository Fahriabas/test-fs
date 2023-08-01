
import { FaTachometerAlt, FaShoppingCart, FaTags, FaUsers, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {


  const forNavigate = useNavigate();
  const handleLogout = (event) => {
    event.preventDefault()
    localStorage.clear()
    forNavigate("/login")
    toast.success('you log out');
  };

  return (
    <div className="bg-[#4E73DF] h-screen px-[25px]">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
        <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer hover:text-indigo-600">
          Admin Panel
        </h1>
      </div>
      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <FaTachometerAlt color="white" />
        <Link to="/" className="text-[14px] leading-[20px] font-bold text-white hover:text-indigo-600">
          Dashboard
        </Link>
      </div>
      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <FaShoppingCart color="white" />
        <Link to="/products" className="text-[14px] leading-[20px] font-bold text-white hover:text-indigo-600">
          Product
        </Link>
      </div>
      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <FaTags color="white" />
        <Link to="/categories" className="text-[14px] leading-[20px] font-bold text-white hover:text-indigo-600">
          Category
        </Link>
      </div>
      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] hover:text-indigo-600">
        <FaUsers color="white" />
        <Link to="/registers" className="flex gap-x-4 items-start py-2 text-white hover:text-indigo-600">
          Users
        </Link>
      </div>
      <div
        className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] hover:text-indigo-600 cursor-pointer"
        onClick={handleLogout}
      >
        <FaSignOutAlt color="white" />
        <span className="text-[14px] leading-[20px] font-bold text-white">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
