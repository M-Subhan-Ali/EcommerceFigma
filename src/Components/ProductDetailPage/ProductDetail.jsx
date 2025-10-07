import React, { useState } from "react";
import c1 from "./Images/c1.png";
import c2 from "./Images/c2.png";
import c3 from "./Images/c3.png";
import c4 from "./Images/c4.png";
import mainC from "./Images/mainC.png";
import pinkBox from "./Images/pinkBox.png";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { GrPowerCycle } from "react-icons/gr";
import SliderProduct from "./SliderProduct";
import { Link } from "react-router-dom";
import BreadCrumbs2 from "../BreadCrumbs/BreadCrumbs2";

const ProductDetail = ({ setCart, setWishList }) => {
  const [selected, setSelected] = useState(null);
  const [counter, setCounter] = useState(1);
  const [colorCounter, setColorCounter] = useState("plus");
  const [size, setSize] = useState("M");
  const breadCrumb = ["Gaming", "Electronics", "Havic HV G-92 Gamepad"];

  const HandleClick = (index) => setSelected(index);
  const HandleSize = (value) => setSize(value);

  const minus = (value) => {
    if (counter > 1) setCounter(counter - 1);
    setColorCounter(value);
  };

  const plus = (value) => {
    setCounter(counter + 1);
    setColorCounter(value);
  };

  return (
    <div className="container mx-auto">
      <div className="px-[5%] sm:px-[6%]">
        {/* === Breadcrumbs === */}
        <BreadCrumbs2 breadcrumb={breadCrumb} />

        {/* === Product Section === */}
        <div className="flex flex-col lg:flex-row mt-10 gap-10 lg:gap-12">
          {/* === Left: Images === */}
          <div className="w-full lg:w-[60%] flex flex-col lg:flex-row gap-5 lg:gap-7">
            {/* Thumbnail Images */}
            <div className="flex lg:flex-col gap-3 lg:gap-4 justify-center order-2 lg:order-1">
              {[c1, c4, c3, c2].map((img, i) => (
                <div
                  key={i}
                  className="w-[100px] sm:w-[140px] lg:w-[170px] h-[90px] sm:h-[110px] lg:h-[138px] bg-[#f5f5f5] flex items-center justify-center py-3 px-2 rounded"
                >
                  <img
                    src={img}
                    alt={`thumb-${i}`}
                    className={`${
                      i === 0 || i === 1 ? "transform scale-x-[-1]" : ""
                    } object-contain`}
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="w-full bg-[#f5f5f5] rounded flex items-center justify-center order-1 lg:order-2">
              <img
                src={mainC}
                alt="main"
                className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-full object-contain"
              />
            </div>
          </div>

          {/* === Right: Details === */}
          <div className="w-full lg:w-[40%] lg:ps-[60px]">
            <h1 className="text-xl sm:text-2xl font-semibold pb-3">
              Havic HV G-92 Gamepad
            </h1>

            {/* Stars + Reviews */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 pb-3">
              <div className="flex gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <FaStar key={i} className="text-[#ffad33]" />
                ))}
                <FaStar className="text-[#bfbfbf]" />
              </div>
              <p className="text-sm sm:text-base text-[#bfbfbf]">
                (150 Reviews)
              </p>
              <div className="hidden sm:block w-[1px] h-4 bg-gray-400"></div>
              <p className="text-[#50df50] text-sm sm:text-base">In Stock</p>
            </div>

            {/* Price + Desc */}
            <h2 className="text-xl sm:text-2xl font-medium pb-4">$192.00</h2>
            <p className="text-sm sm:text-[15px] pb-5 leading-relaxed">
              PlayStation 5 Controller Skin high quality vinyl with air channel
              adhesive for easy bubble-free install & mess-free removal. Pressure
              sensitive.
            </p>
            <hr className="border border-gray-300" />

            {/* Color Options */}
            <div className="flex flex-wrap gap-4 items-center py-5">
              <h3 className="text-lg sm:text-xl font-medium">Colors:</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => HandleClick(0)}
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    selected === 0 ? "outline outline-black" : ""
                  }`}
                >
                  <span className="bg-[#a0bce0] w-4 h-4 rounded-full"></span>
                </button>
                <button
                  onClick={() => HandleClick(1)}
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    selected === 1 ? "outline outline-black" : ""
                  }`}
                >
                  <span className="bg-[#e07575] w-4 h-4 rounded-full"></span>
                </button>
              </div>
            </div>

            {/* Sizes */}
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center pb-6">
              <h3 className="text-lg sm:text-xl font-medium">Size:</h3>
              <div className="flex gap-2 sm:gap-3">
                {["XS", "S", "M", "L", "XL"].map((s) => (
                  <button
                    key={s}
                    onClick={() => HandleSize(s)}
                    className={`w-8 h-8 sm:w-9 sm:h-9 border border-gray-400 rounded text-sm sm:text-[14px] font-semibold ${
                      size === s ? "bg-[#db4444] text-white border-[#db4444]" : ""
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Buy + Wishlist */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pb-6">
              <div className="flex border border-gray-400 rounded h-10 sm:h-11">
                <button
                  onClick={() => minus("Minus")}
                  className={`px-3 ${
                    colorCounter === "Minus"
                      ? "bg-[#db4444] text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <FaMinus />
                </button>
                <div className="flex items-center justify-center px-3 font-semibold">
                  {counter}
                </div>
                <button
                  onClick={() => plus("Plus")}
                  className={`px-3 ${
                    colorCounter === "Plus"
                      ? "bg-[#db4444] text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <FaPlus />
                </button>
              </div>

              <Link to="/billing">
                <button className="h-10 sm:h-11 px-6 sm:px-10 bg-[#db4444] text-white rounded text-sm sm:text-[14px] font-medium">
                  Buy Now
                </button>
              </Link>

              <button className="border border-gray-400 rounded h-10 sm:h-11 px-3 flex items-center justify-center hover:bg-[#db4444] hover:text-white transition-all">
                <IoIosHeartEmpty className="text-lg sm:text-xl" />
              </button>
            </div>

            {/* Delivery + Return Info */}
            <div className="border border-gray-300 rounded">
              <div className="flex gap-3 sm:gap-4 px-4 sm:px-5 py-5">
                <TbTruckDelivery className="w-8 h-8 sm:w-10 sm:h-10" />
                <div>
                  <h4 className="text-[15px] sm:text-[16px] font-semibold">
                    Free Delivery
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <hr className="border border-gray-300" />
              <div className="flex gap-3 sm:gap-4 px-4 sm:px-5 py-5">
                <GrPowerCycle className="w-8 h-8 sm:w-10 sm:h-10" />
                <div>
                  <h4 className="text-[15px] sm:text-[16px] font-semibold">
                    Return Delivery
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold">
                    Free 30 Days Delivery Returns.{" "}
                    <span className="underline">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === Related Items === */}
        <div className="pt-20 sm:pt-28">
          <div className="flex items-center gap-3 sm:gap-4 pb-6">
            <img src={pinkBox} alt="pinkBox" className="w-4 sm:w-5 h-8 sm:h-10" />
            <p className="text-[#db4444] font-semibold text-[15px] sm:text-[16px]">
              Related Items
            </p>
          </div>
          <SliderProduct setCart={setCart} setWishList={setWishList} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
