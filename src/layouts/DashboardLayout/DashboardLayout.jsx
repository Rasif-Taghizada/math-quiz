import { NavLink, Outlet } from "react-router-dom";

import { BsCollectionPlayFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiGraduateCap } from "react-icons/gi";
import { Header } from "../../components";
import { IoHome } from "react-icons/io5";
import { LuBarChart3 } from "react-icons/lu";
import { MdOutlineContactPage } from "react-icons/md";
import { fetchExams } from "../../redux/exams/examSlice";
import { fetchStudents } from "../../redux/students/studentSlice";
import { store } from "../../redux/store";
import { useEffect } from "react";

export const DashboardLayout = () => {
  useEffect(() => {
    document.title = "MathQuiz - Dashboard";
    store.dispatch(fetchExams());
    store.dispatch(fetchStudents());
  }, []);

  return (
    <div className="flex min-h-screen">
      <div className="p-3 w-[210px] fixed max-w-[210px] h-full bg-white z-10 shadow-lg">
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
          <li className="whitespace-nowrap">
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
      <div className="bg-[#f5f5f5] w-full ml-[210px]">
        <Header />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
