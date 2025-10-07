import React from "react";
import PinkBox from "../BestSellingProducts/SellingImages/PinkBox.png";
import SellingProducts from "../BestSellingProducts/SellingProducts.jsx";

const Selling = ({ setWishList }) => {
  return (
    <div className="container mx-auto mt-16 sm:mt-24 lg:mt-32 px-4 sm:px-[6%]">
      {/* === Section Header === */}
      <div className="flex flex-col gap-6 sm:gap-8">
        {/* === Tag Line === */}
        <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
          <img
            src={PinkBox}
            className="w-3 sm:w-4 md:w-5 h-6 sm:h-8 md:h-10"
            alt="pink-box"
          />
          <p className="text-sm sm:text-base md:text-lg font-semibold text-[#db4444] font-sans">
            This Month
          </p>
        </div>

        {/* === Title + Button === */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 text-center sm:text-left">
          <p className="text-2xl sm:text-3xl md:text-4xl font-sans font-semibold leading-tight">
            Best Selling Products
          </p>
          <button className="bg-[#db4444] text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded w-fit hover:bg-[#c43c3c] transition">
            View All
          </button>
        </div>
      </div>

      {/* === Product Section === */}
      <div className="pt-10 sm:pt-14 md:pt-16">
        <SellingProducts setWishList={setWishList} />
      </div>
    </div>
  );
};

export default Selling;
