import React from "react";
import { CategoryData } from "../Categories/CategoryData.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";

const SliderCategory = () => {
  return (
    <div className="w-full">
      <Swiper
        loop={true}
        spaceBetween={16}
        modules={[Navigation, FreeMode]}
        navigation={{ prevEl: ".arrowLeft", nextEl: ".rightarrow" }}
        breakpoints={{
          320: { slidesPerView: 2.2, spaceBetween: 10 },
          480: { slidesPerView: 3, spaceBetween: 12 },
          640: { slidesPerView: 4, spaceBetween: 14 },
          1024: { slidesPerView: 5, spaceBetween: 16 },
          1280: { slidesPerView: 6, spaceBetween: 18 },
          1536: { slidesPerView: 6.5, spaceBetween: 22 },
        }}
      >
        {CategoryData.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <div
                className={`
                  w-[120px] sm:w-[140px] md:w-[160px] lg:w-[170px] xl:w-[180px]
                  h-[110px] sm:h-[130px] md:h-[150px] lg:h-[160px]
                  border border-gray-300 rounded-md 
                  flex flex-col items-center justify-center
                  cursor-pointer transition-all duration-300 ease-in-out
                  hover:scale-[1.05] hover:border-[#db4444] hover:shadow-md
                  ${
                    product.title === "Camera"
                      ? "bg-[#db4444] text-white border-none"
                      : "bg-white text-black"
                  }
                `}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-8 sm:w-10 md:w-12 lg:w-14 mb-3 object-contain"
                />
                <p className="text-xs sm:text-sm md:text-base font-medium">
                  {product.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderCategory;
