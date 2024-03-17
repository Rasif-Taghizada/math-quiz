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

// add students to firestore
export const addStudentToFirestore = createAsyncThunk(
  "students/addStudentToFirestore",
  async (student) => {
    const docRef = await addDoc(collection(db, "students"), student);
    return { id: docRef.id, ...student };
  }
);

// fetch students from firestore
export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const querySnapshot = await getDocs(collection(db, "students"));
    const students = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return students;
  }
);

// delete student from firestore
export const deleteStudentFromFirestore = createAsyncThunk(
  "students/deleteStudentFromFirestore",
  async (studentId) => {
    await deleteDoc(doc(db, "students", studentId));
    return studentId;
  }
);

// update student in firestore
export const updateStudentInFirestore = createAsyncThunk(
  "students/updateStudentInFirestore",
  async (student) => {
    const studentRef = doc(db, "students", student.id);
    await updateDoc(studentRef, student);
    return student;
  }
);

const studentSlice = createSlice({
  name: "students",
  initialState: {
    studentsArray: [],
  },
  reducers: {
    addStudent: (state, action) => {
      state.studentsArray.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.studentsArray = state.studentsArray.filter(
        (student) => student.id !== action.payload
      );
    },
    updateStudent: (state, action) => {
      state.studentsArray = state.studentsArray.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.studentsArray = action.payload;
    });
    builder.addCase(addStudentToFirestore.fulfilled, (state, action) => {
      state.studentsArray.push(action.payload);
      toast.success("Student added successfully");
    });
    builder.addCase(deleteStudentFromFirestore.fulfilled, (state, action) => {
      state.studentsArray = state.studentsArray.filter(
        (student) => student.id !== action.payload
      );
      toast.success("Student deleted successfully");
    });
    builder.addCase(updateStudentInFirestore.fulfilled, (state, action) => {
      state.studentsArray = state.studentsArray.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
      toast.success("Student updated successfully");
    });
  },
});

export const { addStudent, deleteStudent, updateStudent } =
  studentSlice.actions;
export default studentSlice.reducer;
