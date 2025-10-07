import React from "react";
import arrow from "../Footer/images/inputarrow.png";
import qrcode from "../Footer/images/qrcode.png";
import google from "../Footer/images/google.png";
import appstore from "../Footer/images/appstore.png";
import line from "../Footer/images/line.png";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="container mx-auto">
        <div className="px-[4%] sm:px-[6%]">
          {/* === Footer Grid === */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
            gap-10 sm:gap-12 md:gap-14 pt-16 sm:pt-20"
          >
            {/* === Exclusive === */}
            <div className="flex flex-col gap-5 text-white">
              <h1 className="text-[22px] sm:text-[24px] font-[700]">
                Exclusive
              </h1>
              <h2 className="text-[15px] sm:text-[16px] font-sans font-[400]">
                Subscribe
              </h2>
              <p className="text-[14px] sm:text-[15px]">
                Get 10% off your first order
              </p>
              <div className="relative py-1 px-2 items-center border border-gray-400 rounded flex justify-between">
                <input
                  type="text"
                  className="bg-transparent outline-none p-1 text-[14px] sm:text-[16px] w-full text-white placeholder-gray-400"
                  placeholder="Enter your Email"
                />
                <img
                  src={arrow}
                  className="w-5 sm:w-6 cursor-pointer absolute right-3 top-2 sm:top-3"
                  alt="arrow"
                />
              </div>
            </div>

            {/* === Support === */}
            <div className="flex flex-col gap-3 text-white">
              <h1 className="text-[22px] sm:text-[24px] font-[600]">Support</h1>
              <p className="text-[14px] sm:text-[15px] leading-6">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className="text-[14px] sm:text-[15px]">exclusive@gmail.com</p>
              <p className="text-[14px] sm:text-[15px]">+88015-88888-9999</p>
            </div>

            {/* === Account === */}
            <div className="text-white">
              <h1 className="text-[22px] sm:text-[24px] font-[600]">Account</h1>
              <div className="flex flex-col gap-3 sm:gap-4 pt-4 sm:pt-6 cursor-pointer text-[14px] sm:text-[15px]">
                <Link to="/account">My Account</Link>
                <p>Login / Register</p>
                <Link to="/cart">Cart</Link>
                <Link to="/wishlist">Wishlist</Link>
                <p>Shop</p>
              </div>
            </div>

            {/* === Quick Links === */}
            <div className="text-white">
              <h1 className="text-[22px] sm:text-[24px] font-[600]">
                Quick Links
              </h1>
              <div className="flex flex-col gap-3 sm:gap-4 pt-4 sm:pt-6 cursor-pointer text-[14px] sm:text-[15px]">
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
              </div>
            </div>

            {/* === Download App === */}
            <div className="text-white">
              <h1 className="text-[22px] sm:text-[24px] font-[600]">
                Download App
              </h1>
              <p className="pt-3 sm:pt-4 text-[12px] sm:text-[13px]">
                Save $3 with App New User Only
              </p>

              <div className="flex gap-3 pt-3 sm:pt-4">
                <div>
                  <img
                    src={qrcode}
                    className="w-[65px] h-[65px] sm:w-[75px] sm:h-[75px]"
                    alt="qrcode"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <img src={google} alt="google" className="w-[110px]" />
                  <img src={appstore} alt="appstore" className="w-[110px]" />
                </div>
              </div>

              <div className="flex gap-5 sm:gap-6 mt-4 sm:mt-5">
                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
                <CiTwitter className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
                <TiSocialFacebook className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
                <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Bottom Line Section === */}
      <div className="relative pt-8 sm:pt-11 mt-10 sm:mt-16">
        <img
          src={line}
          className="absolute top-5 sm:top-7 opacity-20 w-full"
          alt="line"
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 pb-6 sm:pb-5 text-center sm:text-left">
          <p className="text-[#3d3d3d] text-[18px] sm:text-[20px]">©</p>
          <p className="text-[#3d3d3d] text-[14px] sm:text-[16px] font-[400]">
            Copyright Rimel 2022. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
