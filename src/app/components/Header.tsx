'use client';

import { useState } from "react";
import Link from "next/link";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import TopBar from "./Topbar"; // Import the TopBar

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <TopBar /> {/* Top Bar */}

      {/* Main Header */}
      <header className="w-full h-[80px] flex justify-center items-center border-b-2 sticky top-0 bg-white z-50">
        <div className="w-full max-w-[1200px] h-full flex justify-between items-center px-6">
          {/* Left Side (Logo) */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold">Hekto</h1>
          </div>

          {/* Center Navigation Links (Hidden on Small Screens) */}
          <nav className="hidden sm:flex gap-x-6">
            {["Home", "Pages", "Products", "Blog", "Shop", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="hover:text-[#FB2E86] transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right Side (Search Bar and Mobile Menu Icon) */}
          <div className="flex items-center gap-x-4">
            {/* Search Bar */}
            <div className="hidden sm:flex items-center border rounded-md overflow-hidden bg-gray-100">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-60 px-3 py-2 text-sm outline-none bg-transparent"
              />
              <button className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors">
                <div className="w-5 h-5" ><HiMiniMagnifyingGlass/></div>  
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <button
              className="sm:hidden text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-gray-100 w-full flex flex-col gap-y-4 px-5 py-4">
          <nav className="flex flex-col gap-y-2">
            {["Home", "Pages", "Products", "Blog", "Shop", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="hover:text-[#FB2E86] transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Search Bar */}
          <div className="flex items-center border rounded-md overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 text-sm outline-none bg-transparent"
            />
            <button className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors">
             <div className="w-5 h-5"> <HiMiniMagnifyingGlass  /> </div> 
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
