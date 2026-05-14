import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../../Component/HomePage/Home/Home";
import Register from "../../Component/Authentication/Register/Register";
import Signin from "../../Component/Authentication/Signin/Signin";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:"/register",
        Component: Register,
      },
      {
        path:"/signin",
        Component: Signin,
      },
    ],
  },
]);
