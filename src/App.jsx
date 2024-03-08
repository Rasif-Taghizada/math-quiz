import AppRouter from "./routers/AppRouter";
import { fetchExams } from "./redux/exams/examSlice";
import { store } from "./redux/store";
import { useEffect } from "react";

function App() {
  console.log("App");
  useEffect(() => {
    if (store.getState().user.email) {
      store.dispatch(fetchExams());
    }
  }, []);
  return <AppRouter />;
}

export default App;
