import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh] border">
        <Sidebar />
      </div>
      <div className="basis-[88%] border">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
