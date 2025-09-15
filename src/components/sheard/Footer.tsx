import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router";
import logo from "@/assets/percel-logo.png";

export default function Footer() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Parcels", path: "/parcels" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className="max-w-7xl w-full mx-auto">
        <div className="container flex flex-col  p-4 md:flex-row justify-between gap-8 md:p-8 lg:p-0">
          {/* Brand Info */}
          <div className="flex-1 ">
            <img className="w-[80px] h-[75px]" src={logo} alt="" />
            <p className="mt-2 text-sm">
              দ্রুত, নির্ভরযোগ্য এবং নিরাপদ পার্সেল ডেলিভারি সেবা। শহর থেকে
              গ্রাম – আমরা আপনার পাশে।
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1  ">
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {links.map((item) => (
                <li>
                  <Link to={item.path} className="hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}{" "}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 ">
            <h3 className="text-lg font-semibold text-white mb-3">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaPhone /> +880 1234 567 890
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> support@parcel.com
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex-1 ">
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-blue-500">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-sky-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm">
          © {new Date().getFullYear()} ParcelDelivery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
