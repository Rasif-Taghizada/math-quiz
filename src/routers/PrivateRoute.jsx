/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { DashboardLayout } from "../layouts";
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user from Private", user);
  return user ? <DashboardLayout /> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
