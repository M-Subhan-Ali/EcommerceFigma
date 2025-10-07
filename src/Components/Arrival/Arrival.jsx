import React from "react";
import pinkbox from "../Arrival/Images/pinkbox.png";
import ps5 from "../Arrival/Images/ps5.png";
import line from "../Arrival/Images/line.png";
import girl from "../Arrival/Images/girl.png";
import speaker from "../Arrival/Images/speaker.png";
import gucci from "../Arrival/Images/gucci.png";

const Arrival = () => {
  return (
    <div className="container mx-auto mt-20 sm:mt-28 lg:mt-32">
      <div className="px-[4%] sm:px-[6%]">
        {/* === Section Header === */}
        <div className="arrival-section py-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src={pinkbox}
              alt="pink-box"
              className="w-6 sm:w-auto h-6 sm:h-auto"
            />
            <p className="text-[14px] sm:text-[16px] font-sans font-[600] text-[#db4444]">
              Featured
            </p>
          </div>
          <div className="flex justify-between items-center pt-6 sm:pt-8">
            <p className="text-2xl sm:text-3xl md:text-4xl font-sans font-[600]">
              New Arrival
            </p>
          </div>
        </div>

        {/* === Main Content Grid === */}
        <div className="arrival-details grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* === LEFT SIDE === */}
          <div className="relative bg-black rounded-md overflow-hidden">
            <div className="flex items-end justify-center">
              <img
                src={ps5}
                className="object-contain w-[80%] sm:w-auto pt-10 sm:pt-14"
                alt="ps5"
              />
            </div>
            <div className="absolute bottom-0 text-white flex flex-col pb-6 sm:pb-7 gap-4 sm:gap-6 px-5 sm:px-8">
              <h1 className="text-[20px] sm:text-[24px] font-[600] font-sans">
                PlayStation 5
              </h1>
              <p className="text-[14px] sm:text-[15px] leading-relaxed">
                Black and White version of the PS5 <br className="hidden sm:block" /> 
                coming out on sale.
              </p>
              <button className="relative w-fit text-[14px] sm:text-[16px]">
                Shop Now
                <img src={line} className="absolute left-0 bottom-0" alt="line" />
              </button>
            </div>
          </div>

          {/* === RIGHT SIDE === */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {/* === TOP RIGHT === */}
            <div className="relative bg-[#0d0d0d] text-white rounded-md overflow-hidden flex flex-col sm:flex-row justify-end items-center">
              <div className="absolute bottom-6 sm:bottom-9 left-4 sm:left-6 z-10 text-left">
                <h1 className="text-[20px] sm:text-[24px] font-[600] font-sans">
                  Women’s Collections
                </h1>
                <p className="text-[14px] sm:text-[15px] leading-relaxed mt-2">
                  Featured woman collections that <br className="hidden sm:block" /> 
                  give you another vibe.
                </p>
                <button className="relative mt-2 sm:mt-3 text-[14px] sm:text-[16px]">
                  Shop Now
                  <img src={line} className="absolute left-0 bottom-0" alt="line" />
                </button>
              </div>
              <img
                src={girl}
                className="object-contain w-[80%] sm:w-auto"
                alt="girl"
              />
            </div>

            {/* === BOTTOM RIGHT GRID === */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              {/* === Speaker === */}
              <div className="relative bg-[#1a1a1a] text-white rounded-md overflow-hidden">
                <img
                  src={speaker}
                  className="mx-auto pt-6 sm:pt-9 w-[70%] sm:w-auto"
                  alt="speakers"
                />
                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-6">
                  <h1 className="text-[18px] sm:text-[24px] font-[600] font-sans">
                    Speakers
                  </h1>
                  <p className="text-[13px] sm:text-[15px]">Amazon wireless speakers</p>
                  <button className="relative mt-1 sm:mt-2 text-[13px] sm:text-[16px]">
                    Shop Now
                    <img src={line} className="absolute left-0 bottom-0" alt="line" />
                  </button>
                </div>
              </div>

              {/* === Perfume === */}
              <div className="relative bg-[#1a1a1a] text-white rounded-md overflow-hidden">
                <img
                  src={gucci}
                  className="mx-auto pt-6 sm:pt-9 w-[70%] sm:w-auto"
                  alt="gucci perfume"
                />
                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-6">
                  <h1 className="text-[18px] sm:text-[24px] font-[600] font-sans">
                    Perfume
                  </h1>
                  <p className="text-[13px] sm:text-[15px]">GUCCI INTENSE OUD EDP</p>
                  <button className="relative mt-1 sm:mt-2 text-[13px] sm:text-[16px]">
                    Shop Now
                    <img src={line} className="absolute left-0 bottom-0" alt="line" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Arrival;
