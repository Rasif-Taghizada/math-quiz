import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";
import { Provider } from "react-redux";
import { Spinner } from "flowbite-react";
import { ToastContainer } from "react-toastify";
import { auth } from "./config/firebase.js";
import { createRoot } from "react-dom/client";
import { fetchStudents } from "./redux/students/studentSlice.js";
import { onAuthStateChanged } from "firebase/auth";
import { saveUser } from "./redux/auth/authSlice.js";
import { store } from "./redux/store.js";

const root = createRoot(document.getElementById("root"));

const result = (
  <Provider store={store}>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
    />
  </Provider>
);

root.render(
  <div className="load">
    <Spinner aria-label="Extra large spinner example" size="xl" />
  </div>
);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    //* get students from firestore
    await store.dispatch(fetchStudents());
    //* find student by email from students array and save user to redux
    const students = store.getState().students.studentsArray;
    const currentStudent = students.find(
      (student) => student.email === user.email
    );
    store.dispatch(
      saveUser({
        email: user.email,
        uid: user.uid,
        token: user.refreshToken,
        id: currentStudent?.id,
      })
    );
  } else {
    console.log("User is signed out");
  }
  root.render(result);
});
