import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { db } from "../../config/firebase";
import { toast } from "react-toastify";

// update exam in firestore
export const updateExamInFirestore = createAsyncThunk(
  "exams/updateExamInFirestore",
  async (exam) => {
    const examRef = doc(db, "exams", exam.id);
    await updateDoc(examRef, exam);
    return exam;
  }
);

// delete exam from firestore
export const deleteExamFromFirestore = createAsyncThunk(
  "exams/deleteExamFromFirestore",
  async (examId) => {
    await deleteDoc(doc(db, "exams", examId));
    return examId;
  }
);

// add exams to firestore
export const addExamToFirestore = createAsyncThunk(
  "exams/addExamToFirestore",
  async (exam) => {
    const docRef = await addDoc(collection(db, "exams"), exam);
    return { id: docRef.id, ...exam };
  }
);

// fetch exams from firestore
export const fetchExams = createAsyncThunk("exams/fetchExams", async () => {
  const querySnapshot = await getDocs(collection(db, "exams"));
  const exams = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return exams;
});

const examsSlice = createSlice({
  name: "exams",
  initialState: {
    examsArray: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addExamToFirestore.fulfilled, (state, action) => {
        state.examsArray.push(action.payload);
        toast.success("Exam added successfully");
      })
      .addCase(fetchExams.fulfilled, (state, action) => {
        state.examsArray = action.payload;
      })
      .addCase(deleteExamFromFirestore.fulfilled, (state, action) => {
        state.examsArray = state.examsArray.filter(
          (exam) => exam.id !== action.payload
        );
        toast.success("Exam deleted successfully");
      })
      .addCase(updateExamInFirestore.fulfilled, (state, action) => {
        state.examsArray = state.examsArray.map((exam) =>
          exam.id === action.payload.id ? action.payload : exam
        );
        toast.success("Exam updated successfully");
      });
  },
});

export default examsSlice.reducer;
