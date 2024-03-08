/* eslint-disable react/prop-types */

import {
  About,
  Exams,
  ForgotPassword,
  Home,
  LoginPage,
  OnlineVideos,
  Profile,
  Register,
} from "../pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { DashboardLayout } from "../layouts";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const user = useSelector((state) => state.user);
  console.log("AppRouter", user);
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/online-videos" element={<OnlineVideos />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
