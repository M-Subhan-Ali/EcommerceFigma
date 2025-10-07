import React from "react";
import StarSales from "../SalesTimer/StarSales.jsx";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FlashSaleData } from "../SalesTimer/SalesData.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const SliderProduct = ({ setCart, setWishList }) => {
  const wishing = (value) => {
    setWishList((val) => {
      const filtered = val.filter((v) => v.id !== value.id);
      return [...filtered, value];
    });
  };

  const carting = (value) => {
    setCart((val) => {
      const filtered = val.filter((v) => v.id !== value.id);
      return [...filtered, value];
    });
  };

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, FreeMode]}
        navigation={{
          prevEl: ".navigateArrowLeft",
          nextEl: ".navigateArrowRight",
        }}
        spaceBetween={50}
        slidesPerView={1} // ✅ Default: 1 slide on all screens unless overridden
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 }, // Still 1 card for smaller tablets
          768: { slidesPerView: 2, spaceBetween: 22 }, // 2 cards on tablets
          1024: { slidesPerView: 4, spaceBetween: 24 }, // 4 cards on desktop
          1440: { slidesPerView: 4, spaceBetween: 24 }, // 5 on big screens
        }}
      >
        {FlashSaleData.map((value, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative bg-white rounded-lg overflow-hidden 
              mt-8 sm:mt-12 w-[95%] sm:w-[260px] md:w-[270px] 
              mx-auto transition-transform hover:-translate-y-2 duration-300"
            >
              {/* === Image Section === */}
              <div className="bg-[#f5f5f5] h-[240px] sm:h-[250px] relative rounded-t-lg">
                {value.discount && (
                  <p className="absolute top-2 left-2 text-xs w-12 sm:w-14 h-5 sm:h-6 rounded-md pt-1 text-white text-center font-sans font-medium bg-[#db4444]">
                    {value.discount}%
                  </p>
                )}
                <img
                  src={value.img}
                  alt={value.title || "productImage"}
                  className="mx-auto h-40 sm:h-44 pt-9 object-contain"
                />
                <button
                  onClick={() => carting(value)}
                  className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-3 text-sm sm:text-[16px] font-medium hover:bg-[#db4444] transition-colors"
                >
                  Add to Cart
                </button>
              </div>

              {/* === Product Info === */}
              <div className="p-4 sm:p-5">
                <p className="text-[16px] font-semibold leading-6 line-clamp-2">
                  {value.title}
                </p>

                <div className="flex gap-3 items-center mt-2">
                  <span className="text-[#DB4444] font-semibold text-[16px]">
                    ${value.currentPrice}
                  </span>
                  <span className="line-through text-[#808080] text-[15px]">
                    ${value.actualPrice}
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <StarSales star={value.starRate} />
                  <span className="text-[#808080] text-[14px] font-medium">
                    ({value.reviews})
                  </span>
                </div>
              </div>

              {/* === Wishlist & Eye Buttons === */}
              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button onClick={() => wishing(value)}>
                  <CiHeart className="w-7 h-7 p-1 rounded-full bg-white hover:bg-[#db4444] hover:text-white transition-colors cursor-pointer" />
                </button>
                <button>
                  <MdOutlineRemoveRedEye className="w-7 h-7 p-1 rounded-full bg-white hover:bg-[#db4444] hover:text-white transition-colors cursor-pointer" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderProduct;
