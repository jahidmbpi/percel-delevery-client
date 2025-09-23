import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon

import logo from "@/assets/percel-logo.png";
import { Button } from "../ui/button";
import { useGetMeQuery, userApi } from "@/redux/feature/auth/auth.api";
import { useLogOutMutation } from "@/redux/feature/user/user.api";
import { useDispatch } from "react-redux";
import { Input } from "../ui/input";
import { useSinglePercelQuery } from "@/redux/feature/percel/percel.api";
import Single from "../Single";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [trakinId, setTrakinId] = useState("");
  const [inpuValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const { data: userData, isLoading, error } = useGetMeQuery(undefined);

  const { data: singlePercel } = useSinglePercelQuery(
    { trakinId },
    { skip: !trakinId }
  );

  console.log("single parcel", singlePercel);

  const [logOut] = useLogOutMutation();
  console.log("error", error);
  console.log("isloading", isLoading);
  const handelLogOut = async () => {
    try {
      const result = await logOut();
      console.log(result);
      dispatch(userApi.util.resetApiState());
    } catch (err) {
      console.error(err);
    }
  };

  const handelegetInput = (data: string) => {
    setInputValue(data);
  };
  const handleSearch = () => {
    if (!inpuValue) return;
    setTrakinId(inpuValue);
    setInputValue("");
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Parcels", path: "/parcels" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto  py-3 flex items-center justify-between">
        <div>
          <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
        </div>

        <div className="w-full gap-2 md:w-[30%] flex md:gap-4">
          <Input
            type="text"
            placeholder="Traking Id"
            value={inpuValue}
            onChange={(e) => handelegetInput(e.target.value)}
          />
          <Single data={singlePercel?.data ?? null}>
            {" "}
            <Button variant="outline" onClick={handleSearch}>
              Search
            </Button>
          </Single>
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
              {userData?.data?.role === "ADMIN" && (
                <Link to="/admin" className="text-blue-500">
                  Dashboard
                </Link>
              )}
              {userData?.data?.role === "SENDER" && (
                <Link to="/sender" className="text-green-500">
                  Dashboard
                </Link>
              )}
              {userData?.data?.role === "RECEIVER" && (
                <Link to="/receiver" className="text-purple-500">
                  Dashboard
                </Link>
              )}
            </div>
          </ul>
          {userData?.success ? (
            <Button
              onClick={handelLogOut}
              className="hidden md:block capitalize"
              variant="ghost"
            >
              <Link to="/">log Out </Link>
            </Button>
          ) : (
            <Button className="hidden md:block capitalize" variant="ghost">
              <Link to="/login"> log in</Link>
            </Button>
          )}
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
