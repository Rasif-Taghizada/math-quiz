/* eslint-disable react/prop-types */

import {
  About,
  Exams,
  ForgotPassword,
  Home,
  LoginPage,
  OnlineVideos,
  Register,
} from "../pages";
import { Route, Routes } from "react-router-dom";

import { AuthLayout } from "../layouts";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/online-videos" element={<OnlineVideos />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
