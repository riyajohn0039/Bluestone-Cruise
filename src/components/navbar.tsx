"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Search } from "lucide-react"; // icons
import Logo from '../../public/logo.svg';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "FISHING TRIPS", dropdown: true },
    { label: "PRIVATE CHARTERS", dropdown: true },
    { label: "CRUISES", dropdown: true },
    { label: "SHOP", dropdown: false },
    { label: "INFO", dropdown: true },
    { label: "WHERE TO", dropdown: false },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src={Logo} // put your logo inside public/logo.png
            alt="Logo"
            width={60}
            height={60}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-semibold text-gray-900">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link href="/" className="hover:text-blue-600">
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 p-3 w-48">
                  <Link href="/" className="block px-2 py-1 hover:bg-gray-100">
                    Option 1
                  </Link>
                  <Link href="/" className="block px-2 py-1 hover:bg-gray-100">
                    Option 2
                  </Link>
                  <Link href="/" className="block px-2 py-1 hover:bg-gray-100">
                    Option 3
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm font-semibold text-gray-900">
            <Phone size={18} /> (727) 393-1947
          </div>
          <Search className="cursor-pointer" size={20} />
          <button className="bg-red-800 text-white px-4 py-2 rounded-md font-bold">
            BOOK NOW
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href="/"
              className="block py-2 font-semibold border-b border-gray-200"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <Phone size={18} /> (727) 393-1947
            </div>
            <button className="mt-3 w-full bg-red-800 text-white py-2 rounded-md font-bold">
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
