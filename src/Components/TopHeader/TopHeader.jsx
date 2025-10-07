import React from "react";
import dropdown from "../TopHeader/images/DropDown.png";

const TopHeader = () => {
  return (
    <div className="w-full font-sans">
      {/* === Top Bar === */}
      <div className="bg-black text-white">
        <div
          className="
            flex flex-col lg:flex-row
            items-center justify-center lg:justify-between
            text-center relative
            h-auto lg:h-12
            px-4 sm:px-6 lg:px-12
            max-w-[1600px] mx-auto
          "
        >
          {/* === Promo Text === */}
          <div
            className="
              flex flex-col sm:flex-row
              items-center justify-center
              gap-2 sm:gap-3 py-2 lg:py-0
              text-[14px] sm:text-[15px] md:text-[16px]
            "
          >
            <p className="leading-tight">
              Summer Sale For All Swim Suits And Free Express Delivery –{" "}
              <span className="font-semibold">OFF 50%!</span>
            </p>
            <button className="underline font-semibold hover:text-[#c6477f] transition">
              Shop Now
            </button>
          </div>

          {/* === Language Selector === */}
          <div
            className="
              flex items-center justify-center gap-2
              mt-2 lg:mt-0
              text-[14px] sm:text-[15px] md:text-[16px]
              cursor-pointer hover:opacity-80
              lg:absolute lg:right-[6%]
            "
          >
            <p>English</p>
            <img
              src={dropdown}
              alt="dropdown"
              className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
