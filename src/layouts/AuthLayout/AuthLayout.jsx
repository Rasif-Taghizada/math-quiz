import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4 ">AuthLayout</h1>
      <Outlet />
    </div>
  );
};
