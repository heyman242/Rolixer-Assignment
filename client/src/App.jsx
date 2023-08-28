import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./pages";

const router = createBrowserRouter([
  {
    path: "/", // This is for the root path
    element: <HomeLayout defaultMonth="3" />, // Provide the default month as a prop
  },
  {
    path: "/:month",
    element: <HomeLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
