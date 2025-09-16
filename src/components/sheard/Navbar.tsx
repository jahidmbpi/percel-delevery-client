import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon

import logo from "@/assets/percel-logo.png";
import { Button } from "../ui/button";
import { useGetMeQuery } from "@/redux/feature/auth/auth.api";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data, isLoading, error } = useGetMeQuery(undefined);
  console.log("role from api:", data);
  console.log("error", error);
  console.log("isloading", isLoading);

  const links = [
    { name: "Home", path: "/" },
    { name: "Parcels", path: "/parcels" },
    { name: "Contact", path: "/contact" },
    {
      name: "log in",
      path: "/login",
    },
    {
      name: "register",
      path: "/register",
    },
  ];

  return (
    <nav className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto  py-3 flex items-center justify-between">
        <div>
          <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
        </div>

        <div className="flex items-center">
          <ul className="hidden md:flex gap-6">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `capitalize px-3 py-2 rounded-md ${
                      isActive
                        ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                        : "text-gray-700 hover:text-blue-500"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <div className="flex flex-col gap-2">
              {data?.data?.role === "ADMIN" && (
                <Link to="/admin" className="text-blue-500">
                  Dashboard
                </Link>
              )}
              {data?.data?.role === "SENDER" && (
                <Link to="/sender" className="text-green-500">
                  Dashboard
                </Link>
              )}
              {data?.data?.role === "RECEIVER" && (
                <Link to="/receiver" className="text-purple-500">
                  Dashboard
                </Link>
              )}
            </div>
          </ul>
          <Button className="hidden md:block" variant="ghost">
            log in
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <ul className="md:hidden bg-white px-4 py-3 space-y-3 shadow">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block capitalize px-3 py-2 rounded-md ${
                    isActive
                      ? "text-blue-600 font-semibold border-l-4 border-blue-600"
                      : "text-gray-700 hover:text-blue-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
