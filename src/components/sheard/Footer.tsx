import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl w-full mx-auto">
        <div className="container flex flex-col md:flex-row justify-between gap-8">
          {/* Brand Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white">📦 ParcelDelivery</h2>
            <p className="mt-3 text-sm">
              দ্রুত, নির্ভরযোগ্য এবং নিরাপদ পার্সেল ডেলিভারি সেবা। শহর থেকে
              গ্রাম – আমরা আপনার পাশে।
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 ">
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
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
