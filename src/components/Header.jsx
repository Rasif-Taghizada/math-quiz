import "./header.css";

import { HiCog, HiLogout, HiViewGrid } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

import { Dropdown } from "flowbite-react";
import useAuthentication from "../hooks/useAuthentication";

// import { useSelector } from "react-redux";

export const Header = () => {
  const navigate = useNavigate();
  // const user = useSelector((state) => state.user);
  // console.log(user);
  const { signOutCall } = useAuthentication();
  const signOut = async () => {
    await signOutCall();
    navigate("/auth/login");
  };

  return (
    <div className="flex justify-between items-center bg-gray-900 text-white p-3">
      <div className="bg-gray-800">
        <h1></h1>
      </div>
      <div className="mr-4">
        <Dropdown label="Profile Settings">
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              bonnie@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item icon={HiViewGrid}>
            <Link to="/">Dashboard</Link>
          </Dropdown.Item>
          <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon={HiLogout} onClick={signOut}>
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};
