import authSlice from "./auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import examsSlice from "./exams/examSlice";

export const store = configureStore({
  reducer: {
    user: authSlice,
    exams: examsSlice,
  },
});
