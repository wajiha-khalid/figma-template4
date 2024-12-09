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
      {/* Top Bar */}
      <TopBar />

      {/* Main Header */}
      <header className="w-full h-[70px] flex justify-center items-center border-b sticky top-0 bg-white z-50">
        <div className="w-full max-w-[1200px] h-full flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          
          {/* Left Side (Logo Section) */}
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Hekto</h1>
          </div>

          {/* Center Navigation - Visible on md and larger screens */}
          <nav className="hidden sm:flex md:flex gap-x-4 md:gap-x-6 lg:gap-x-8">
            {["Home", "Pages", "Products", "Blog", "Shop", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="hover:text-[#FB2E86] text-sm md:text-base lg:text-lg transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right Side (Search & Mobile Menu Icon) */}
          <div className="flex items-center gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6">
            
            {/* Search Bar - Visible on medium and larger devices */}
            <div className="hidden sm:flex items-center border rounded-md overflow-hidden bg-gray-100">
              <input
                type="text"
                placeholder="Search..."
                className="w-32 sm:w-48 md:w-60 px-3 py-1 text-xs md:text-sm outline-none bg-transparent"
              />
              <button className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors">
                <HiMiniMagnifyingGlass className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <button
              className="sm:hidden text-2xl md:text-3xl"
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
        <div className="sm:hidden bg-gray-50 w-full flex flex-col gap-y-4 px-4 py-4 border-t">
          <nav className="flex flex-col gap-y-3">
            {["Home", "Pages", "Products", "Blog", "Shop", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-[#FB2E86] transition-colors"
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
              <HiMiniMagnifyingGlass className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
