import React from "react";
import car from "../Delievery/images/car.png";
import headphone from "../Delievery/images/headphone.png";
import verify from "../Delievery/images/Services.png";
import arrow from "../Delievery/images/arrow.png";

const Delievery = () => {
  return (
    <div className="container mx-auto my-36">
      <div className="px-[6%] relative">
        <div className="grid grid-cols-3 gap-20">
          <div className="mx-auto">
            <div className="flex justify-center">
              <img src={car} alt="car" />
            </div>
            <div className="text-center gap-2 pt-8">
              <h1 className="text-xl font-sans font-[600]">
                FREE AND FAST DELIVERY
              </h1>
              <p className="text-[14px] font-[400]">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>
          <div className="mx-auto">
            <div className="flex justify-center">
              <img src={headphone} alt="headphones" />
            </div>
            <div className="text-center gap-2 pt-8">
              <h1 className="text-xl font-sans font-[600]">
                24/7 CUSTOMER SERVICE
              </h1>
              <p className="text-[14px] font-[400]">
                Friendly 24/7 customer support
              </p>
            </div>
          </div>
          <div className="mx-auto">
            <div className="flex justify-center">
              <img src={verify} alt="verify" />
            </div>
            <div className="text-center gap-2 pt-8">
              <h1 className="text-xl font-sans font-[600]">
                MONEY BACK GUARANTEE
              </h1>
              <p className="text-[14px] font-[400]">
                We reurn money within 30 days
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-28 right-0">
          <button>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delievery;
