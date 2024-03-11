import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";
import { Provider } from "react-redux";
import { Spinner } from "flowbite-react";
import { ToastContainer } from "react-toastify";
import { auth } from "./config/firebase.js";
import { createRoot } from "react-dom/client";
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

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in");
    store.dispatch(
      saveUser({
        email: user.email,
        uid: user.uid,
        token: user.refreshToken,
      })
    );
  } else {
    console.log("User is signed out");
  }
  root.render(result);
});
