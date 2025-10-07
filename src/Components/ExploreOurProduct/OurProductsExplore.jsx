import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import StarExplore from "./StarExplore";
import { ExploreData } from "../ExploreOurProduct/ExploreProductData.jsx";

const OurProductsExplore = ({ setWishList, setCart }) => {
  const [_, dummySet] = useState([]); // fallback setter if props missing
  const setWishListSafe = setWishList || dummySet;
  const setCartSafe = setCart || dummySet;

  const wishing = (product) => {
    setWishListSafe((val) => {
      const exists = val.some((item) => item.id === product.id);
      return exists ? val : [...val, product];
    });
  };

  const carting = (x) => {
    setCartSafe((val) => {
      const exists = val.some((item) => item.id === x.id);
      return exists ? val : [...val, x];
    });
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Responsive grid layout:
          - 1 col on mobile
          - 2 cols on tablets
          - 3 cols on medium screens
          - 4 cols on large screens (same as original design)
      */}
      <div className="grid gap-x-6 gap-y-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {ExploreData.map((x, i) => (
          <div key={i} className="mt-8 group">
            {/* Product Card */}
            <div className="w-full">
              {/* === Image Section === */}
              <div className="relative h-72 flex items-center justify-center bg-[#f5f5f5] rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <img
                  src={x.img}
                  alt={x.title}
                  className="max-w-[70%] max-h-[70%] object-contain transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                />

                {/* Action Icons */}
                <div className="absolute flex flex-col gap-3 top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaRegHeart
                    onClick={() => wishing(x)}
                    className="w-7 h-7 p-1 bg-white text-gray-700 rounded-full cursor-pointer hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
                    aria-label="Add to Wishlist"
                  />
                  <MdOutlineRemoveRedEye
                    className="w-7 h-7 p-1 bg-white text-gray-700 rounded-full cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                    aria-label="Quick View"
                  />
                </div>

                {/* "New" / Sale Tag */}
                {x.new && (
                  <div
                    className={`w-[52px] h-6 absolute top-4 left-4 ${
                      x.new === "NEW" ? "bg-[#00ff66]" : "bg-[#DB4444]"
                    } flex items-center justify-center rounded-sm`}
                  >
                    <p className="text-white text-[12px] font-medium">
                      {x.new}
                    </p>
                  </div>
                )}

                {/* Add to Cart Button */}
                <div className="absolute bottom-0 w-full bg-black/80 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer">
                  <button
                    onClick={() => carting(x)}
                    className="text-white py-2 text-[16px] font-sans font-[500] w-full hover:bg-black transition-colors"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>

              {/* === Product Details === */}
              <div className="pt-4">
                <p className="text-[16px] font-sans font-[600] leading-6 truncate">
                  {x.title}
                </p>

                <div className="flex items-center gap-3 py-1">
                  <p className="text-[16px] font-[600] text-[#db4444]">
                    ${x.currentPrice}
                  </p>
                  <div>
                    <StarExplore stars={x.starRate} />
                  </div>
                  <p className="text-[14px] font-[600] text-[#808080]">
                    ({x.reviews})
                  </p>
                </div>

                {/* === Color Options === */}
                {x.color && (
                  <div className="flex gap-2 items-center">
                    <button
                      className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center"
                      aria-label="Color Option 1"
                    >
                      <span
                        style={{ backgroundColor: x.color }}
                        className="w-4 h-4 rounded-full"
                      ></span>
                    </button>
                    <button
                      className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center"
                      aria-label="Color Option 2"
                    >
                      <span className="w-4 h-4 bg-gray-500 rounded-full"></span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProductsExplore;
