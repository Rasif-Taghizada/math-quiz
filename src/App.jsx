import { RouterProvider } from "react-router-dom";
import { router } from "./routers/routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
