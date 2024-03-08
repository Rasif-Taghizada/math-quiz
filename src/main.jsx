import "./index.css";

import App from "./App.jsx";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <App />
  </Provider>
);
