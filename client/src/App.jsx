import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./pages";

const router = createBrowserRouter([
  {
    path: "/:month",
    element: <HomeLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
