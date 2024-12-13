import React from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingBag, FaHeart } from "react-icons/fa";


const Header = () => {
  return (
    <header className="">
      {/* Top bar */}
      <div className="bg-light-gray flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-black">
        {/* Logo section */}
        <img src="/logo.png" alt="Logo" className="w-[50px]" />

        <div className="flex md:gap-4 sm:gap-3 gap-2 ">
          <span className="border-r-2 pr-4 text-black">
            <Link href="#" className="hover:text-gray-800">Find a Store</Link>
          </span>
          <span className="border-r-2 pr-4">
            <Link href="#" className="hover:text-gray-800">Help</Link>
          </span>
          <span className="border-r-2 pr-4">
            <Link href="#" className="hover:text-gray-800">Join Us</Link>
          </span>
          <Link href="#" className="hover:text-gray-800">
            Sign In
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex flex-wrap justify-between items-center px-6 py-4">
        {/* Left section (Logo) */}
        <div className="flex items-center">
          <img src="/nike.png" alt="Logo" className="w-[60px]" />
        </div>

        {/* Center section (Navigation Links) */}
        <nav className="flex gap-4 md:gap-6 text-black font-medium md:text-[16px] sm:text-[14px] text-[10px]">
          <Link href="#" className="hover:text-black whitespace-nowrap">New & Featured</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Men</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Women</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Kids</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Sale</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">SNKRS</Link>
        </nav>

        {/* Right section (Search, Wishlist, Cart) */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
          <FaHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
          <FaShoppingBag className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
        </div>
      </div>
    </header>
  );
};

export default Header;






















