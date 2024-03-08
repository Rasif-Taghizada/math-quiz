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
  console.log("fecthExams", querySnapshot);
  const exams = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log("fecthExams", exams);
  console.log(exams);
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
        console.log("actionPayload", action.payload);
        state.examsArray.push(action.payload);
      })
      .addCase(fetchExams.fulfilled, (state, action) => {
        console.log("addcase isledi", action.payload);
        state.examsArray = action.payload;
      });
  },
});

export default examsSlice.reducer;
