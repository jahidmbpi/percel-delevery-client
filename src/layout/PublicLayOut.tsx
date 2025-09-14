import Footer from "@/components/sheard/Footer";
import { Outlet } from "react-router";

export default function PublicLayOut() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow-1 mx-auto max-w-7xl w-full">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}
