"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Search } from "lucide-react"; // icons
import Logo from "../../public/logo.svg";
import styles from "../styles/Navbar.module.css"; // Import CSS

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
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image src={Logo} alt="Logo" width={60} height={60} />
        </Link>

        {/* Desktop Menu */}
        <div className={`${styles.menu} hidden md:flex`}>
          {menuItems.map((item) => (
            <div key={item.label} className={styles.menuItem}>
              <Link href="/">{item.label}</Link>
              {item.dropdown && (
                <div className={styles.dropdown}>
                  <Link href="/">Option 1</Link>
                  <Link href="/">Option 2</Link>
                  <Link href="/">Option 3</Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className={`${styles.right} hidden md:flex`}>
          <div className={styles.phone}>
            <Phone size={18} /> (727) 393-1947
          </div>
          <Search className="cursor-pointer" size={20} />
          <button className={styles.bookButton}>BOOK NOW</button>
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
        <div className={`${styles.mobileMenu} md:hidden`}>
          {menuItems.map((item) => (
            <Link key={item.label} href="/" className={styles.mobileLink}>
              {item.label}
            </Link>
          ))}
          <div className={styles.mobilePhone}>
            <Phone size={18} /> (727) 393-1947
          </div>
          <button className={styles.mobileBookButton}>BOOK NOW</button>
        </div>
      )}
    </nav>
  );
}
