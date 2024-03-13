import "./header.css";

import { HiCog, HiLogout, HiViewGrid } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

import { Dropdown } from "flowbite-react";
import { auth } from "../../config/firebase";
import { useAuth } from "../../hooks/useAuth";

export const Header = () => {
  const navigate = useNavigate();
  const { signOutCall } = useAuth();

  const user = auth?.currentUser;
  const handleSignOut = async () => {
    await signOutCall();
    navigate("/auth/login");
    localStorage.removeItem("role");
  };

  return (
    <div className="flex justify-between items-center bg-gray-900 text-white p-3 sticky top-0 right-0 z-10">
      <div className="bg-gray-800">
        <h1></h1>
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
          <Dropdown.Item icon={HiViewGrid}>
            <Link className="w-full inline-block text-left" to="/">
              Dashboard
            </Link>
          </Dropdown.Item>
          <Dropdown.Item icon={HiCog}>
            <Link className="w-full inline-block text-left" to={"/profile"}>
              Settings
            </Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon={HiLogout} onClick={() => handleSignOut()}>
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};
