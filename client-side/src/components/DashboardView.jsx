import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "../stores/actionCreator";


const DashboardView = () => {



  const dispatch = useDispatch()

  const data = useSelector((state) => state.dashboard)

  console.log(data, 'line 15 di dashboard view');

  useEffect(() => {
    dispatch(fetchDashboard())
  }, [dispatch])


    return (
      <div className="pt-[25px] px-[25px] bg-[#F8F9FC]">
        <div className="flex items-center justify-between">
          <h1 className="text-[5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer">Dashboard</h1>
          {/* <button className="bg-[#2E59D9] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer">Click me</button> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[25px] pb-[15px]">
          {/* Total Product */}
          <div className="h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]">
            <div>
              <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold ">Total Product</h2>
              <h1 className="text-[-20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">{data?.product}</h1>
            </div>
          </div>
          {/* Total Category */}
          <div className="h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]">
            <div>
              <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold ">Total Category</h2>
              <h1 className="text-[-20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">{data?.category}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default DashboardView