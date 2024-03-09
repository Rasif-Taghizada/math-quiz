import { NavLink, Outlet } from "react-router-dom";

import { BsCollectionPlayFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiGraduateCap } from "react-icons/gi";
import { Header } from "../../components/Header";
import { IoHome } from "react-icons/io5";
import { LuBarChart3 } from "react-icons/lu";
import { MdOutlineContactPage } from "react-icons/md";

export const DashboardLayout = () => {
  return (
    <div className="grid grid-rows-1 md:grid-cols-6 h-screen bg-[#fff]">
      <div className="col-start-1 col-end-2 p-5 bg-[#fff] h-full w-full shadow-2xl overflow-y-auto border-r-2 border-zinc-500 border-opacity-50">
        <h1 className="text-3xl font-bold mb-5 cursor-pointer transition duration-300 text-[#675AF0] ease-in-out hover:scale-110 transform">
          MathQuiz
        </h1>
        <ul className="flex gap-2 text-black text-lg font-semibold flex-col mt-[30px]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                if (isActive) {
                  return "flex items-center gap-2 text-white hover:text-white transition duration-300 ease-in-out hover:scale-105 transform hover:bg-[#675AF0] p-2 rounded-md bg-[#675AF0]";
                } else {
                  return "flex items-center gap-2 text-black hover:text-white transition duration-300 ease-in-out hover:scale-105 transform hover:bg-[#675AF0] p-2 rounded-md";
                }
              }}
            >
              <IoHome size={20} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/online-videos"
              className={({ isActive }) => {
                if (isActive) {
                  return "flex items-center gap-2 text-white hover:text-white transition duration-300 ease-in-out hover:scale-105 transform hover:bg-[#675AF0] p-2 rounded-md bg-[#675AF0]";
                } else {
                  return "flex items-center gap-2 text-black hover:text-white transition duration-300 ease-in-out hover:scale-105 transform hover:bg-[#675AF0] p-2 rounded-md";
                }
              }}
            >
              <BsCollectionPlayFill size={20} />
              Online Videos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/scoreboard"
              className={({ isActive }) => {
                if (isActive) {
                  return "flex items-center gap-2 text-white hover:text-white transition duration-300 ease-in-out hover:scale-105 transform hover:bg-[#675AF0] p-2 rounded-md bg-[#675AF0]";
                } else {
                  return "flex items-center gap-2 text-black hover:text-white transition duration-300 ease-in-out hover:scale-105 transform hover:bg-[#675AF0] p-2 rounded-md";
                }
              }}
            >
              <LuBarChart3 size={20} />
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => {
                if (isActive) {
                  return "flex items-center gap-2 text-white hover:text-white transition duration-300 ease-in-out hover:scale-105 transform hover:bg-[#675AF0] p-2 rounded-md bg-[#675AF0]";
                } else {
                  return "flex items-center gap-2 text-black hover:text-white transition duration-300 ease-in-out hover:scale-105 transform hover:bg-[#675AF0] p-2 rounded-md";
                }
              }}
            >
              <CgProfile size={20} />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/exams"
              className={({ isActive }) => {
                if (isActive) {
                  return "flex items-center gap-2 text-white hover:text-white transition duration-300 ease-in-out hover:scale-105 transform hover:bg-[#675AF0] p-2 rounded-md bg-[#675AF0]";
                } else {
                  return "flex items-center gap-2 text-black hover:text-white transition duration-300 ease-in-out hover:scale-105 transform hover:bg-[#675AF0] p-2 rounded-md";
                }
              }}
            >
              <GiGraduateCap size={20} />
              Exams
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                if (isActive) {
                  return "flex items-center gap-2 text-white hover:text-white transition duration-300 ease-in-out hover:scale-105 transform hover:bg-[#675AF0] p-2 rounded-md bg-[#675AF0]";
                } else {
                  return "flex items-center gap-2 text-black hover:text-white transition duration-300 ease-in-out hover:scale-105 transform hover:bg-[#675AF0] p-2 rounded-md";
                }
              }}
            >
              <MdOutlineContactPage size={20} />
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className=" col-start-2 col-end-7 bg-[#f5f5f5] shadow-md shadow[rgba(0, 0, 0, 0.15)]">
        <Header />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
