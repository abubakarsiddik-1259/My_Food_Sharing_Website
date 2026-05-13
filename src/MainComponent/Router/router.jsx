import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../../Component/HomePage/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
