import "../../components/Header/header.css";

import { Link, Outlet } from "react-router-dom";

import { Dropdown } from "flowbite-react";
import { FaArrowLeft } from "react-icons/fa";
import { auth } from "../../config/firebase";

export const ExamLayout = () => {
  const user = auth?.currentUser;
  return (
    <>
      <div className="flex justify-between items-center bg-gray-900 text-white px-7 py-3 sticky top-0 right-0 z-10">
        <div className="flex items-center gap-3">
          <Link to="/exams">
            <FaArrowLeft size={25} />
          </Link>
          <h1 className="text-2xl">İmtahan</h1>
        </div>
        <div className="mr-4">
          <Dropdown
            label={user?.displayName ? user?.displayName : "Profile Settings"}
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
          </Dropdown>
        </div>
      </div>
      <main className="bg-[#E2E2E2] p-[30px]">
        <Outlet />
      </main>
    </>
  );
};
