/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import { getRole } from "../utils/getRole";

export default function ProtectedRoutes({
  expectedRole,
  children,
  redirectPath,
}) {
  const currentRole = getRole();

  if (currentRole === expectedRole) {
    return children;
  }

  switch (currentRole) {
    case "user":
      return <Navigate to="/" />;
    case "admin":
      return <Navigate to="/admin" />;
    case null:
      return <Navigate to="/auth/login" />;
    default:
      return <Navigate to={redirectPath} />;
  }
}
