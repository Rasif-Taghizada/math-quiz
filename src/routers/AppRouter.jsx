import {
  About,
  ExamAbout,
  Exams,
  ForgotPassword,
  Home,
  LoginPage,
  OnlineVideos,
  Profile,
  Register,
} from "../pages";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { DashboardLayout } from "../layouts";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const user = useSelector((state) => state.user);
  return (
    <Router>
      <Routes>
        {user.email ? (
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/exams/:id" element={<ExamAbout />} />
            <Route path="/online-videos" element={<OnlineVideos />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        ) : (
          <Route path="/" element={<LoginPage />} />
        )}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Link to="/login">404 Not Found</Link>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
