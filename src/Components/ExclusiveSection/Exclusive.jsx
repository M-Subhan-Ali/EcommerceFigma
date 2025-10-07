import React, { useState } from "react";
import { CiSearch, CiHeart, CiLogout } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiUser, FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import line from "../ExclusiveSection/Images/UnderLine.png";
import { Link } from "react-router-dom";

const Exclusive = ({ operation1, wishlist, cart }) => {
  const [active, setActive] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const HandleItem = (i) => setActive(i);
  const toggleDropdown = () => setDropdown(!dropdown);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="border border-b-gray-300 bg-white font-sans relative z-50">
      {/* === Main Header (≥768px) === */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 xl:px-[6%] py-4">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
            {/* === Logo === */}
            <p className="text-[22px] md:text-[24px] font-[700] cursor-pointer whitespace-nowrap">
              Exclusive
            </p>

            {/* === Nav Links (visible ≥1024px only) === */}
            <div className="relative hidden lg:block">
              <ul className="flex text-[15px] lg:text-[16px] gap-6 xl:gap-12 font-[400] cursor-pointer font-sans">
                <li onClick={() => HandleItem(0)}>
                  <Link to="/">Home</Link>
                </li>
                <img
                  src={line}
                  alt="line"
                  style={{ left: `${active * 105}px` }}
                  className="absolute bottom-0"
                />
                <li onClick={() => HandleItem(1)}>
                  <Link to="/contact">Contact</Link>
                </li>
                <li onClick={() => HandleItem(2)}>
                  <Link to="/about">About</Link>
                </li>
                <li onClick={() => HandleItem(3)}>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>

            {/* === Right Section === */}
            <div className="flex items-center justify-end gap-4 sm:gap-5 md:gap-6 xl:gap-8 relative w-full md:w-auto">
              {/* Search bar */}
              <div className="flex items-center justify-between bg-[#f5f5f5] px-2 md:px-3 py-1.5 md:py-2 rounded w-full sm:w-[200px] md:w-[220px] lg:w-[243px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none bg-transparent w-full text-[#7b7b7b] text-[14px]"
                />
                <CiSearch className="w-[22px] h-[22px] cursor-pointer text-gray-600" />
              </div>

              {/* Wishlist */}
              <div className="relative">
                <Link to="/wishlist">
                  <CiHeart className="w-[24px] h-[24px] cursor-pointer text-gray-700" />
                </Link>
                {wishlist.length > 0 && (
                  <div className="absolute -top-1 -right-1 bg-[#db4444] px-1 rounded-full">
                    <p className="text-white text-xs">{wishlist.length}</p>
                  </div>
                )}
              </div>

              {/* Cart */}
              <div className="relative">
                <Link to="/cart">
                  <IoCartOutline className="w-[24px] h-[24px] cursor-pointer text-gray-700" />
                </Link>
                {cart.length > 0 && (
                  <div className="absolute -top-1 -right-1 bg-[#db4444] px-1 rounded-full">
                    <p className="text-white text-xs">{cart.length}</p>
                  </div>
                )}
              </div>

              {/* User Dropdown */}
              {operation1 !== "" && (
                <div>
                  <FiUser
                    onClick={toggleDropdown}
                    className={`p-2 w-[35px] h-[35px] rounded-full cursor-pointer transition-all ${
                      dropdown
                        ? "bg-[#db4444] text-white"
                        : "hover:bg-[#db4444] hover:text-white"
                    }`}
                  />
                  {dropdown && (
                    <div className="absolute right-0 top-[60px] bg-black/90 text-white py-4 px-6 rounded-lg w-[200px] flex flex-col gap-3 shadow-lg">
                      <div className="flex gap-3 items-center">
                        <FiUser /> <Link to="/account">My Account</Link>
                      </div>
                      <div className="flex gap-3 items-center">
                        <FiShoppingBag /> <p>My Orders</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <MdOutlineCancel /> <p>Cancellations</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <FaRegStar /> <p>My Reviews</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <CiLogout /> <p>Logout</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* === Hamburger for ≤1023px === */}
            <button
              onClick={toggleMenu}
              className="block lg:hidden ml-2 text-gray-700"
            >
              {menuOpen ? (
                <HiX className="w-7 h-7" />
              ) : (
                <HiMenuAlt3 className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* === Mobile Layout (<768px) === */}
      <div className="md:hidden px-4 py-4 flex items-center justify-between">
        <p className="text-[22px] font-[700]">Exclusive</p>
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <IoCartOutline className="w-[24px] h-[24px]" />
          </Link>
          <Link to="/wishlist">
            <CiHeart className="w-[24px] h-[24px]" />
          </Link>
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <HiX className="w-[28px] h-[28px]" />
            ) : (
              <HiMenuAlt3 className="w-[28px] h-[28px]" />
            )}
          </button>
        </div>
      </div>

      {/* === Dropdown for Mobile + Tablet (≤1023px) === */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-5 flex flex-col gap-4 text-[16px] text-[#333] font-medium shadow-md">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/signup" onClick={toggleMenu}>
            Sign Up
          </Link>

          {/* Search bar inside dropdown */}
          <div className="bg-[#f5f5f5] flex justify-between px-3 py-2 rounded mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none bg-transparent w-full text-[#7b7b7b]"
            />
            <CiSearch className="w-[22px] h-[22px] cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Exclusive;
