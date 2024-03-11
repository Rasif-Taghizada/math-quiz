import {
  About,
  ExamAbout,
  ExamStart,
  Exams,
  ForgotPassword,
  Home,
  LoginPage,
  OnlineVideos,
  Profile,
  Register,
  ScoreBoard,
} from "../pages";
import { AuthLayout, DashboardLayout, ExamLayout } from "../layouts";
import { Navigate, createBrowserRouter } from "react-router-dom";

import { ErrorBoundry } from "../components";
import ProtectedRoutes from "../guard/ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "auth",
    element: (
      <ProtectedRoutes expectedRole={null} redirectPath="/">
        <AuthLayout />
      </ProtectedRoutes>
    ),
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "*", element: <Navigate to="/auth/login" /> },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoutes expectedRole="user" redirectPath="/auth/login">
        <DashboardLayout />
      </ProtectedRoutes>
    ),
    errorElement: <ErrorBoundry />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "exams", element: <Exams /> },
      { path: "exams/:id", element: <ExamAbout /> },
      { path: "exams/:id/start", element: <h1>Exam start</h1> },
      { path: "scoreboard", element: <ScoreBoard /> },
      { path: "online-videos", element: <OnlineVideos /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  {
    path: "admin",
    element: (
      <ProtectedRoutes expectedRole="admin" redirectPath="/auth/login">
        <h1>Admin Layout</h1>
      </ProtectedRoutes>
    ),
  },
  {
    path: "preview",
    element: <ExamLayout />,
    children: [
      {
        path: ":id",
        element: <ExamStart />,
      },
      {
        path: ":id/start",
        element: <h1>Exam start</h1>,
      },
    ],
  },
]);
