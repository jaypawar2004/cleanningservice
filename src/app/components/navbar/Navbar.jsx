import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img className="w-[110px] rounded-lg flex items-center justify-center text-white font-bold" src="/photos/CleanningLogo.png" alt="Clino Logo"></img>
        {/* <span className="text-2xl font-bold text-gray-800">Clino</span> */}
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-gray-600 font-medium text-sm">
        <Link href="/" className="text-blue-600 font-semibold">Home</Link>
        <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>
        <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
        <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4">
        <button className="p-2 bg-white rounded-full shadow-sm text-gray-600 hover:text-blue-600">
          <Search size={20} />
        </button>
        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium shadow-lg shadow-blue-200 hover:bg-blue-700 transition">
          Contact Us
        </button>
      </div>
    </nav>
  );
}