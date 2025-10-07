import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import pinkBox from "../Wishlist/images/pinkBox.png";
import StarsWish from "./StarsWish";
import { WishData } from "./DataWishlist.jsx";

const WishList = ({ wishlist, setWishList, setCart }) => {
  const Delete = (i) => {
    setWishList((product) => product.filter((x) => x.id !== i));
  };

  const carting = (item) => {
    setCart((product) => {
      const filteredProduct = product.filter((val) => val.id !== item.id);
      return [...filteredProduct, item];
    });
  };

  return (
    <div className="container mx-auto">
      <div className="px-[4%] sm:px-[6%] flex flex-col gap-10 sm:gap-16 mt-12 sm:mt-16">
        {/* === Wishlist Header === */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-lg sm:text-xl font-sans font-normal">
            Wishlist ({wishlist.length})
          </p>
          <div className="flex items-center justify-center rounded border border-gray-400 w-full sm:w-[223px] h-12 sm:h-14">
            <p className="text-[15px] sm:text-[16px] font-sans font-medium">
              Move All To Bag
            </p>
          </div>
        </div>

        {/* === Wishlist Cards Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-7 items-center">
          {wishlist.map((x, i) => (
            <div className="relative" key={i}>
              {/* Discount + Delete */}
              <div
                className={`${
                  x.discount ? "justify-between" : "justify-end"
                } absolute top-3 w-full flex px-3 items-center`}
              >
                {x.discount && (
                  <div className="bg-[#db4444] flex items-center py-1 px-3 rounded">
                    <p className="text-white text-sm">{x.discount}%</p>
                  </div>
                )}
                <button
                  className="p-1 bg-white rounded-full"
                  onClick={() => Delete(x.id)}
                >
                  <RiDeleteBin5Line className="w-6 h-6 sm:w-8 sm:h-6" />
                </button>
              </div>

              {/* Product Image */}
              <div className="flex justify-center h-56 sm:h-64 bg-[#f5f5f5] rounded">
                <img
                  src={x.img}
                  className="object-contain w-[80%] sm:w-auto px-8"
                  alt={x.title}
                />
              </div>

              {/* Add to Cart Button */}
              <div
                onClick={() => carting(x)}
                className="flex items-center justify-center gap-2 py-2 mb-4 bg-black text-white cursor-pointer hover:opacity-90 transition-all"
              >
                <IoCartOutline className="w-5 h-5 sm:w-6 sm:h-6" />
                <button className="text-xs sm:text-sm font-medium">
                  Add To Cart
                </button>
              </div>

              {/* Product Details */}
              <div className="detail text-center sm:text-left">
                <p className="text-[15px] sm:text-[16px] font-sans">
                  {x.title}
                </p>
                <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
                  <p className="text-[#db4444] font-medium">
                    ${x.actualPrice}
                  </p>
                  {x.currentPrice && (
                    <p className="text-[#808080] line-through font-medium">
                      ${x.currentPrice}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* === Just For You Section === */}
        <div className="wishlist second-part">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-10 sm:pb-16 gap-4">
            <div className="flex items-center gap-4 sm:gap-5">
              <img
                src={pinkBox}
                alt="pinkbox"
                className="w-6 sm:w-auto h-6 sm:h-auto"
              />
              <p className="text-[18px] sm:text-[20px] font-normal font-sans">
                Just For You
              </p>
            </div>
            <div className="border border-gray-400 rounded w-full sm:w-[150px] h-12 sm:h-14 flex items-center justify-center">
              <p className="text-[15px] sm:text-[16px]">See All</p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-7 pb-16 sm:pb-24">
            {WishData.map((data, index) => (
              <div className="relative" key={index}>
                {/* Discount/New + Eye */}
                <div
                  className={`absolute top-4 w-full flex px-3 ${
                    data.discount !== null || data.new !== null
                      ? "justify-between"
                      : "justify-end"
                  }`}
                >
                  {data.discount && (
                    <div className="bg-[#db4444] flex items-center py-1 px-3 rounded">
                      <p className="text-white text-sm">{data.discount}%</p>
                    </div>
                  )}
                  {data.new && (
                    <div className="bg-[#00ff66] flex items-center py-1 px-3 rounded">
                      <p className="text-white text-sm">{data.new}</p>
                    </div>
                  )}
                  <button className="p-1 bg-white rounded-full">
                    <IoEyeOutline className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {/* Product Image */}
                <div className="flex justify-center items-center h-56 sm:h-64 bg-[#f5f5f5] rounded">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="object-contain w-[80%] sm:w-auto"
                  />
                </div>

                {/* Add To Cart */}
                <div
                  onClick={() => carting(data)}
                  className="flex items-center justify-center gap-2 py-2 mb-4 bg-black text-white cursor-pointer hover:opacity-90 transition-all"
                >
                  <IoCartOutline className="w-5 h-5 sm:w-6 sm:h-6" />
                  <button className="text-xs sm:text-sm font-medium">
                    Add To Cart
                  </button>
                </div>

                {/* Product Details */}
                <div className="text-center sm:text-left">
                  <p className="text-[15px] sm:text-[16px] font-sans font-semibold">
                    {data.title}
                  </p>
                  <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
                    <p className="text-[#db4444] font-medium">
                      ${data.currentPrice}
                    </p>
                    <p className="text-[#808080] line-through font-medium">
                      ${data.actualPrice}
                    </p>
                  </div>
                  <div className="flex justify-center sm:justify-start gap-3 sm:gap-4 items-center">
                    <StarsWish starRate={data.starRate} />
                    <p className="text-[#808080] font-medium">
                      ({data.reviews})
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
