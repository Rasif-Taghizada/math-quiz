import { NavLink, Outlet } from "react-router-dom";

import { IoSettingsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import { TbMathSymbols } from "react-icons/tb";
import { fetchExams } from "../../redux/exams/examSlice";
import { fetchStudents } from "../../redux/students/studentSlice";
import { store } from "../../redux/store";
import { useEffect } from "react";

export const AdminLayout = () => {
  useEffect(() => {
    document.title = "MathQuiz - Admin";
    store.dispatch(fetchExams());
    store.dispatch(fetchStudents());
  }, []);

  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-56 h-screen bg-[#30333D] text-white">
        <div className="p-4 text-white text-center text-2xl sticky top-0 z-10 font-bold">
          <h1 className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-110">
            MathQuiz
          </h1>
        </div>
        <div className="w-full">
          <ul className="px-[20px]">
            <li className="my-2 w-full bg-[#3A3D4A] rounded-md">
              <NavLink
                className={({ isActive }) => {
                  if (isActive) {
                    return "block px-4 py-2 text-white bg-[#EBB44A] rounded-md w-full flex gap-2 items-center";
                  } else {
                    return "block px-4 py-2 text-white transition-all rounded-md flex gap-2 items-center duration-300 ease-in-out hover:bg-[#3A3D4A] hover:text-[#EBB44A]";
                  }
                }}
                to="/admin/dashboard"
              >
                <MdDashboard size={18} />
                Dashboard
              </NavLink>
            </li>
            <li className="my-2 w-full bg-[#3A3D4A] rounded-md">
              <NavLink
                className={({ isActive }) => {
                  if (isActive) {
                    return "block px-4 py-2 text-white bg-[#EBB44A] rounded-md w-full flex gap-2 items-center";
                  } else {
                    return "block px-4 py-2 text-white transition-all rounded-md flex gap-2 items-center duration-300 ease-in-out hover:bg-[#3A3D4A] hover:text-[#EBB44A]";
                  }
                }}
                to="/admin/users"
              >
                <PiUsersThreeFill size={18} />
                Users
              </NavLink>
            </li>
            <li className="my-2 w-full bg-[#3A3D4A] rounded-md">
              <NavLink
                className={({ isActive }) => {
                  if (isActive) {
                    return "block px-4 py-2 text-white bg-[#EBB44A] rounded-md w-full flex gap-2 items-center";
                  } else {
                    return "block px-4 py-2 text-white transition-all rounded-md flex gap-2 items-center duration-300 ease-in-out hover:bg-[#3A3D4A] hover:text-[#EBB44A]";
                  }
                }}
                to="/admin/exams"
              >
                <TbMathSymbols size={18} />
                Exams
              </NavLink>
            </li>
            <li className="my-2 w-full bg-[#3A3D4A] rounded-md ">
              <NavLink
                className={({ isActive }) => {
                  if (isActive) {
                    return "block px-4 py-2 text-white bg-[#EBB44A] rounded-md w-full flex gap-2 items-center";
                  } else {
                    return "block px-4 py-2 text-white transition-all rounded-md flex gap-2 items-center duration-300 ease-in-out hover:bg-[#3A3D4A] hover:text-[#EBB44A]";
                  }
                }}
                to="/admin/settings"
              >
                <IoSettingsSharp size={18} />
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 h-screen overflow-y-auto bg-[#D2D2D2]">
        <header className="bg-[#3A3D4A] p-4 text-white w-full flex justify-between items-center">
          <h1>Dashboard</h1>
        </header>
        <main className="p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
