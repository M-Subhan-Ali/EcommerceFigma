import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import StarsProducts from "../BestSellingProducts/StarsProducts.jsx";
import { DataSelling } from "../BestSellingProducts/SellingData.jsx";

const SellingProducts = ({ setWishList }) => {
  const wishing = (product) => {
    setWishList((val) => {
      const filteredData = val.filter((value) => value.id !== product.id);
      return [...filteredData, product];
    });
  };

  return (
    <div
      className="
      grid 
      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
      gap-6 sm:gap-8 md:gap-10 justify-items-center
      "
    >
      {DataSelling.map((product, index) => (
        <div
          key={index}
          className="
          w-[90%] sm:w-[250px] md:w-[260px] lg:w-[220px] xl:w-[270px] 
          font-sans
          "
        >
          {/* === Product Image Box === */}
          <div className="relative flex items-center justify-center bg-[#f5f5f5] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px] rounded-md overflow-hidden">
            <img
              src={product.img}
              alt={product.title || 'product'}
              className="h-[120px] sm:h-[140px] md:h-[160px] object-contain cursor-pointer"
            />

            {/* === Icons === */}
            <div className="absolute top-4 right-4 flex flex-col gap-4 sm:gap-5">
              <FaRegHeart
                onClick={() => wishing(product)}
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white p-1 rounded-full cursor-pointer hover:text-[#db4444] transition"
              />
              <IoEyeOutline className="w-7 h-7 sm:w-8 sm:h-8 bg-white p-1 rounded-full cursor-pointer hover:text-[#db4444] transition" />
            </div>
          </div>

          {/* === Product Info === */}
          <div className="pt-4 sm:pt-5 text-center sm:text-left">
            <p className="text-sm sm:text-base md:text-[16px] font-semibold leading-6 sm:leading-8">
              {product.title}
            </p>

            <div className="flex justify-center sm:justify-start gap-2 sm:gap-3 text-sm sm:text-[16px] font-semibold leading-7">
              <p className="text-[#db4444]">${product.actualPrice}</p>
              {product.currentPrice && (
                <p className="line-through text-[#808080]">
                  ${product.currentPrice}
                </p>
              )}
            </div>

            <div className="flex justify-center sm:justify-start items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
              <StarsProducts star={product.starRate} />
              <p className="text-[#808080] text-xs sm:text-sm font-semibold">
                ({product.reviews})
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SellingProducts;
