/* eslint-disable react/prop-types */

import { AuthLayout } from "../layouts";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ user, children }) => {
  console.log("PublicRoute", user);
  return user ? <Navigate to="/" /> : <AuthLayout>{children}</AuthLayout>;
};

export default PublicRoute;
