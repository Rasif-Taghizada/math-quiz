import { addDoc, collection, getDocs } from "firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { db } from "../../config/firebase";

export const addExamToFirestore = createAsyncThunk(
  "exams/addExamToFirestore",
  async (exam) => {
    console.log("exam", exam);
    const addExamRef = await addDoc(collection(db, "exams"), exam);
    const newExam = { id: addExamRef.id, ...exam };
    console.log("newExam", newExam);
    return newExam;
  }
);

// fetch exams

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
      })
      .addCase(fetchExams.fulfilled, (state, action) => {
        state.examsArray = action.payload;
      });
  },
});

export default examsSlice.reducer;
