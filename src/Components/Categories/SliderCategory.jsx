import React from "react";
import { CategoryData } from "../Categories/CategoryData.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, FreeMode } from "swiper/modules";

const SliderCategory = () => {
  return (
    <div className="mt-20">
      <Swiper
        slidesPerView={6}
        loop={true}
        modules={[Navigation, FreeMode]}
        navigation={{ prevEl: ".arrowLeft", nextEl: ".rightarrow" }}
      >
        {CategoryData.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-around">
              <div
                className={`px-12  pt-5 rounded border border-gray-300  ${
                  product.title === "Camera" ? "bg-[#db4444] text-white" : ""
                }`}
              >
                <img
                  src={product.img}
                  className={` mx-auto object-contain  `}
                  alt={product.title || "product-image"}
                />
                <p className="py-3 text-center">{product.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderCategory;
