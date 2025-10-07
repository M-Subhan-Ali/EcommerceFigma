import React, { useState, useEffect } from "react";
import top from "../SalesTimer/images/top.png";
import arrow1 from "../SalesTimer/images/arrow1.png";
import arrow2 from "../SalesTimer/images/arrow2.png";
import SliderSales from "./SliderSales";

const SalesTimer = ({ setWishList, setCart }) => {
  const duration = 731 * 24 * 60 * 60 * 1000;
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => t - 10);
    }, 10);
    return () => clearInterval(timer);
  }, []);

  const Timer = (t) => {
    const ms = Math.max(0, t);
    const totalSeconds = Math.floor(ms / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const weeks = Math.floor((totalDays % 30) / 7);
    const days = totalDays % 7;
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    const parts = [
      { label: "Years", value: years },
      { label: "Months", value: months },
      { label: "Weeks", value: weeks },
      { label: "Days", value: days },
      { label: "Hours", value: hours },
      { label: "Minutes", value: minutes },
      { label: "Seconds", value: seconds },
    ];

    return (
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-5 lg:gap-6">
        {parts.map((p, i) => (
          <div key={i} className="text-center">
            <p className="text-[10px] sm:text-xs font-semibold text-gray-600 uppercase">
              {p.label}
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              {p.value}
              {i !== parts.length - 1 && (
                <span className="px-1 sm:px-2 text-[#db4444]">:</span>
              )}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="container mx-auto mt-20 px-4 sm:px-[6%]">
      {/* === Header Section === */}
      <div
        className="
          flex flex-col
          lg:flex-row lg:justify-between lg:items-start
          gap-8 sm:gap-10
          text-center lg:text-left
        "
      >
        {/* === Left Header === */}
        <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <img src={top} alt="top" className="w-4 sm:w-5 md:w-6" />
            <p className="text-[#db4444] font-semibold text-sm sm:text-base">
              Today’s
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans">
            Flash Sales
          </h2>
        </div>

        {/* === Timer & Navigation === */}
        <div
          className="
            flex flex-col
            items-center
            justify-center
            lg:justify-end
            gap-5
            w-full
            lg:w-auto
          "
        >
          {Timer(time)}

          <div className="flex items-center justify-center gap-6 mt-2 sm:mt-4">
            <img
              src={arrow2}
              className="navigateArrowLeft w-4 sm:w-5 md:w-6 cursor-pointer hover:opacity-80"
              alt="left"
            />
            <img
              src={arrow1}
              className="navigateArrowRight w-4 sm:w-5 md:w-6 cursor-pointer hover:opacity-80"
              alt="right"
            />
          </div>
        </div>
      </div>

      {/* === Products Slider === */}
      <div className="mt-10">
        <SliderSales setCart={setCart} setWishList={setWishList} />
      </div>
    </section>
  );
};

export default SalesTimer;
