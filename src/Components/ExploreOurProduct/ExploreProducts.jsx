import React from 'react';
import PinkBox from '../ExploreOurProduct/Images/pinkBox.png';
import Left from '../ExploreOurProduct/Images/left.png';
import Right from '../ExploreOurProduct/Images/right.png';
import OurProductsExplore from '../ExploreOurProduct/OurProductsExplore.jsx';

const ExploreProducts = ({ setWishList, setCart }) => {
  return (
    <div className="container mx-auto mt-20 sm:mt-28 lg:mt-32">
      <div className="px-[4%] sm:px-[6%]">
        {/* === Header === */}
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={PinkBox}
            alt="pink-box"
            className="w-6 sm:w-7 md:w-auto h-6 sm:h-7 md:h-auto"
          />
          <p className="text-[14px] sm:text-[16px] font-sans font-[600] text-[#db4444]">
            Our Products
          </p>
        </div>

        {/* === Title + Arrows === */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-6 sm:pt-8 gap-4 sm:gap-0 text-center sm:text-left">
          <p className="text-2xl sm:text-3xl md:text-4xl font-sans font-[600]">
            Explore Our Products
          </p>

          {/* hide arrows on phones */}
          <div className="hidden sm:flex gap-6 sm:gap-10">
            <button>
              <img src={Left} className="Explore-Left w-5 sm:w-6" alt="prev" />
            </button>
            <button>
              <img src={Right} className="Explore-Right w-5 sm:w-6" alt="next" />
            </button>
          </div>
        </div>

        {/* === Product Swiper/Grid === */}
        <OurProductsExplore setCart={setCart} setWishList={setWishList} />

        {/* === Button === */}
        <div className="w-[200px] sm:w-[234px] h-12 sm:h-14 flex items-center justify-center bg-[#db4444] rounded mt-12 sm:mt-16 mx-auto">
          <p className="text-white text-[14px] sm:text-[16px] cursor-pointer font-medium">
            View All Products
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
