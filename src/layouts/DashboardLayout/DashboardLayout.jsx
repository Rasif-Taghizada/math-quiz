import { NavLink, Outlet } from "react-router-dom";

import { Header } from "../../components/Header";

export const DashboardLayout = () => {
  return (
    <div className="grid grid-rows-1 md:grid-cols-6 h-screen bg-[#fff] text-black">
      <div className="col-start-1 col-end-2 p-5 bg-[#fff] h-full w-full shadow-2xl overflow-y-auto border-r-2 border-zinc-500 border-opacity-50">
        <h1 className="text-3xl font-bold text-black mb-5  cursor-pointer transition duration-300 ease-in-out hover:text-[#FFD700] hover:scale-110 transform">
          MathQuiz
        </h1>
        <ul className="flex gap-4 text-black text-lg font-semibold flex-col mt-[30px]">
          <li className="bg-sky-800 text-white p-2 rounded-md text-black font-semibold">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="bg-sky-800 text-white p-2 rounded-md text-black font-semibold">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="bg-sky-800 text-white p-2 rounded-md text-black font-semibold">
            <NavLink to={"/exams"}>Exams</NavLink>
          </li>
          <li className="bg-sky-800 text-white p-2 rounded-md text-black font-semibold">
            <NavLink to={"/online-videos"}>Online Videos</NavLink>
          </li>
        </ul>
      </div>
      <div className=" col-start-2 col-end-7 bg-[#f5f5f5] h-full w-full overflow-y-auto shadow-md shadow[rgba(0, 0, 0, 0.15)]">
        <Header />
        <div className="p-5 h-full w-full overflow-y-auto shadow-md shadow[rgba(0, 0, 0, 0.15)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
