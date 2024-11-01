import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="bg-stone-100 text-stone-800 min-h-screen">
      <Navbar />
      <div className="flex h-full">
        {isMenuOpen && <Sidebar />}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
