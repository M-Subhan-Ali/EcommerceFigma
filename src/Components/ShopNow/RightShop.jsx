import React from "react";
import appleLogo from "../ShopNow/imagesShop/appleLogo.png";
import arrow1 from "../ShopNow/imagesShop/arrow1.png";
import line from "../ShopNow/imagesShop/line.png";
import iphone from "../ShopNow/imagesShop/iphone.png";
import pagination from "../ShopNow/imagesShop/pagination.png";

const RightShop = () => {
  return (
    <div className="relative bg-black rounded-md overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start gap-6 lg:gap-0 p-8 lg:pl-16 lg:pr-12 text-white">
        {/* === Text Section === */}
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center gap-3 mb-4">
            <img
              src={appleLogo}
              alt="Apple logo"
              className="w-8 sm:w-10 h-10 sm:h-12"
            />
            <p className="text-xs sm:text-sm font-light">iPhone 14 Series</p>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Up to 10% <br className="hidden sm:block" /> off Voucher
          </h2>

          <div className="flex justify-center lg:justify-start items-center gap-3">
            <div className="relative">
              <button className="text-[15px] sm:text-[16px] font-semibold hover:text-[#db4444] transition">
                Shop Now
              </button>
              <img
                src={line}
                alt="underline"
                className="absolute left-0 top-6 sm:top-7 w-[60px] sm:w-[80px]"
              />
            </div>
            <img src={arrow1} alt="arrow" className="w-4 h-[14px]" />
          </div>
        </div>

        {/* === Image Section === */}
        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <img
            src={iphone}
            alt="iPhone 14"
            className="max-w-[180px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-none object-contain"
          />
        </div>
      </div>

      {/* === Pagination Dots === */}
      <div className="pb-4">
        <img
          src={pagination}
          alt="pagination dots"
          className="mx-auto w-[80px] sm:w-[100px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default RightShop;
