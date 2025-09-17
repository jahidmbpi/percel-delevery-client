import { createBrowserRouter } from "react-router";
import PublicLayOut from "../layout/PublicLayOut";
import Home from "../pages/home/Home";

import Deshbord from "@/layout/Deshbord";
import { adminSidebar } from "./adminSidebar";
import { genareteRoute } from "@/utils/genareteRoutes";
import { reciverSidebar } from "./reciverSidbar";
import { senderSidebar } from "./senderSidebar";
import Register from "@/pages/authentication/register/Register";
import Login from "@/pages/authentication/login/Login";
import UnAuthorized from "@/components/sheard/UnAuthorized";

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
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/unauthorized",
    Component: UnAuthorized,
  },
  {
    path: "/admin",
    Component: Deshbord,
    children: [...genareteRoute(adminSidebar)],
  },
  {
    Component: Deshbord,
    path: "/admin",
    children: [...genareteRoute(reciverSidebar)],
  },
  {
    Component: Deshbord,
    path: "/sender",
    children: [...genareteRoute(senderSidebar)],
  },
]);
