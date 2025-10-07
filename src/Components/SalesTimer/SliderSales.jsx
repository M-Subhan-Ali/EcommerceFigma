import StarSales from "./StarSales";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FlashSaleData } from "./SalesData.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";

const SliderSales = ({ setWishList, setCart }) => {
  const handleWishlist = (item) =>
    setWishList((list) => [...list.filter((x) => x.id !== item.id), item]);

  const handleCart = (item) =>
    setCart((list) => [...list.filter((x) => x.id !== item.id), item]);

  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        loop
        modules={[Navigation, FreeMode]}
        navigation={{
          prevEl: ".navigateArrowLeft",
          nextEl: ".navigateArrowRight",
        }}
      >
        {FlashSaleData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative bg-white w-full rounded-md shadow-sm mt-8 p-3 group transition-transform hover:-translate-y-1">
              <div className="bg-[#f5f5f5] rounded-md p-3 h-[250px] flex flex-col justify-between relative">
                <p className="absolute top-3 left-3 bg-[#db4444] text-white text-xs px-2 py-[2px] rounded-md font-semibold">
                  -{item.discount}%
                </p>
                <img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto h-[140px] md:h-[160px] object-contain"
                />
                <button
                  onClick={() => handleCart(item)}
                  className="w-full bg-black text-white py-2 rounded hover:bg-[#db4444] transition"
                >
                  Add to cart
                </button>
              </div>

              <div className="pt-5">
                <p className="font-semibold text-[15px] md:text-[16px] text-[#1a1a1a] leading-6">
                  {item.title}
                </p>
                <div className="flex gap-3 mt-1">
                  <span className="text-[#db4444] font-medium text-[15px]">
                    ${item.currentPrice}
                  </span>
                  <span className="line-through text-[#808080] text-[14px]">
                    ${item.actualPrice}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <StarSales star={item.starRate} />
                  <span className="text-[#808080] text-sm">
                    ({item.reviews})
                  </span>
                </div>
              </div>

              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button onClick={() => handleWishlist(item)}>
                  <CiHeart className="w-6 h-6 cursor-pointer hover:text-[#db4444]" />
                </button>
                <MdOutlineRemoveRedEye className="w-6 h-6 cursor-pointer hover:text-[#db4444]" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* === View All Button === */}
      <div className="flex justify-center">
        <button className="bg-[#db4444] text-white font-medium mt-10 w-[220px] h-12 rounded hover:bg-[#b93535] transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default SliderSales;
