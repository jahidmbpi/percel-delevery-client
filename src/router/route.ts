import { createBrowserRouter } from "react-router";
import PublicLayOut from "../layout/PublicLayOut";
import Home from "../pages/home/Home";
import Login from "@/pages/authentication/Login";
import Deshbord from "@/layout/Deshbord";
import { adminSidebar } from "./adminSidebar";
import { genareteRoute } from "@/utils/genareteRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
  {
    path: "/deshbord",
    Component: Deshbord,
    children: [...genareteRoute(adminSidebar)],
  },
]);
