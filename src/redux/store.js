import authSlice from "./auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import examsSlice from "./exams/examSlice";
import studentSlice from "./students/studentSlice";

export const store = configureStore({
  reducer: {
    user: authSlice,
    exams: examsSlice,
    students: studentSlice,
  },
});
