import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./pages";

import { loader as allDataLoader } from "./pages/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    loader: allDataLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
