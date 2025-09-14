import { createBrowserRouter } from "react-router";
import PublicLayOut from "../layout/PublicLayOut";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
