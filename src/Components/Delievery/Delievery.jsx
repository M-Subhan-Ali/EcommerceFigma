import React from "react";
import car from "../Delievery/images/car.png";
import headphone from "../Delievery/images/headphone.png";
import verify from "../Delievery/images/Services.png";
import arrow from "../Delievery/images/arrow.png";

const Delievery = () => {
  return (
    <div className="container mx-auto my-20 sm:my-28 lg:my-36">
      <div className="px-[4%] sm:px-[6%] relative">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 lg:gap-20 text-center">
          {/* === Delivery Card 1 === */}
          <div className="mx-auto flex flex-col items-center">
            <img
              src={car}
              alt="car"
              className="w-16 sm:w-20 lg:w-auto object-contain"
            />
            <div className="pt-6 sm:pt-8 space-y-2">
              <h1 className="text-lg sm:text-xl font-sans font-[600]">
                FREE AND FAST DELIVERY
              </h1>
              <p className="text-[13px] sm:text-[14px] font-[400]">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>

          {/* === Delivery Card 2 === */}
          <div className="mx-auto flex flex-col items-center">
            <img
              src={headphone}
              alt="headphones"
              className="w-16 sm:w-20 lg:w-auto object-contain"
            />
            <div className="pt-6 sm:pt-8 space-y-2">
              <h1 className="text-lg sm:text-xl font-sans font-[600]">
                24/7 CUSTOMER SERVICE
              </h1>
              <p className="text-[13px] sm:text-[14px] font-[400]">
                Friendly 24/7 customer support
              </p>
            </div>
          </div>

          {/* === Delivery Card 3 === */}
          <div className="mx-auto flex flex-col items-center">
            <img
              src={verify}
              alt="verify"
              className="w-16 sm:w-20 lg:w-auto object-contain"
            />
            <div className="pt-6 sm:pt-8 space-y-2">
              <h1 className="text-lg sm:text-xl font-sans font-[600]">
                MONEY BACK GUARANTEE
              </h1>
              <p className="text-[13px] sm:text-[14px] font-[400]">
                We return money within 30 days
              </p>
            </div>
          </div>
        </div>

        {/* === Arrow Button === */}
        <div className="absolute -bottom-16 sm:-bottom-20 lg:-bottom-28 right-2 sm:right-6">
          <button className="hover:scale-105 transition-transform duration-300">
            <img
              src={arrow}
              alt="arrow"
              className="w-10 sm:w-12 lg:w-auto object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delievery;
