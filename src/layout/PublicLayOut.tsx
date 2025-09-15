import Footer from "@/components/sheard/Footer";
import Navbar from "@/components/sheard/Navbar";
import { Outlet } from "react-router";

export default function PublicLayOut() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-400 via-cyan-300 to-green-200 dark:from-gray-900 dark:via-slate-800 dark:to-blue-900">
      <Navbar />
      <div className="grow-1 ">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}
