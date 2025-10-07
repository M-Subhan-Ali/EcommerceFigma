import React from 'react';
import pinkBox from '../Categories/imagesCategories/pinkBox.png';
import arrowRight from '../Categories/imagesCategories/arrow1.png';
import arrowLeft from '../Categories/imagesCategories/arrow2.png';
import SliderCategory from './SliderCategory';

const Categories = () => {
  return (
    <div className="container mx-auto mt-16 sm:mt-24 lg:mt-28 xl:mt-32 px-4 sm:px-8 md:px-[6%]">
      {/* === Header === */}
      <div className="flex flex-col gap-5">
        {/* === Red Tag === */}
        <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
          <img
            src={pinkBox}
            className="w-3 sm:w-4 md:w-5 h-6 sm:h-8 md:h-10"
            alt="pinkBox"
          />
          <p className="text-sm sm:text-base md:text-lg text-[#db4444] font-semibold">
            Categories
          </p>
        </div>

        {/* === Title + Arrows === */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-center sm:text-left">
          <p className="text-xl sm:text-3xl md:text-4xl font-sans font-semibold leading-tight">
            Browse By Category
          </p>

          <div className="flex items-center justify-center sm:justify-end gap-5 sm:gap-6 md:gap-8">
            <button>
              <img
                src={arrowLeft}
                className="arrowLeft w-4 sm:w-5 md:w-6 hover:opacity-70 transition-all"
                alt="arrowLeft"
              />
            </button>
            <button>
              <img
                src={arrowRight}
                className="rightarrow w-4 sm:w-5 md:w-6 hover:opacity-70 transition-all"
                alt="arrowRight"
              />
            </button>
          </div>
        </div>
      </div>

      {/* === Slider Section === */}
      <div className="mt-10 sm:mt-14 md:mt-16">
        <SliderCategory />
      </div>
    </div>
  );
};

export default Categories;
