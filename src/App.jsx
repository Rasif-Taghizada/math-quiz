import { RouterProvider } from "react-router-dom";
import { fetchExams } from "./redux/exams/examSlice";
import { router } from "./routers/routes";
import { store } from "./redux/store";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (store.getState().user.email) {
      store.dispatch(fetchExams());
    }
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
