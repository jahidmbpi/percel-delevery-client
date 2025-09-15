import Footer from "@/components/sheard/Footer";
import Navbar from "@/components/sheard/Navbar";
import { Outlet } from "react-router";

export default function PublicLayOut() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="grow-1">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}
