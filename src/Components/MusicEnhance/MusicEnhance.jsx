import React from 'react';
import MusicTimer from '../MusicEnhance/MusicTimer.jsx';
import jbl2 from '../MusicEnhance/image/jbl2.png';

const MusicEnhance = () => {
  return (
    <div className="container px-[6%] mt-40 mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-black rounded-lg overflow-hidden">
        {/* === Left Text Section === */}
        <div className="ps-6 sm:ps-10 text-center md:text-left">
          <p className="text-[14px] sm:text-[16px] pt-10 sm:pt-[69px] leading-5 text-[#00ff66] font-[600] font-sans">
            Categories
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl pt-6 sm:pt-12 font-[600] font-sans text-white leading-tight md:leading-[60px]">
            Enhance Your <br className="hidden md:block" /> Music Experience
          </p>

          <MusicTimer duration={6 * 24 * 60 * 60 * 1000} />

          <button className="text-[14px] sm:text-[16px] font-sans font-[500] mt-10 sm:mt-14 w-36 sm:w-44 h-12 sm:h-14 text-white rounded bg-[#00ff66] mb-10 sm:mb-20 hover:opacity-90 transition">
            Buy Now!
          </button>
        </div>

        {/* === Image Section === */}
        <div className="relative flex justify-center md:justify-end w-full md:w-1/2 p-10 sm:p-16 md:p-20">
          <div className="w-full h-full blur-[90px] bg-[#454444] text-[#454444] absolute top-0 left-0 rounded-xl"></div>
          <img
            src={jbl2}
            alt="JBL Speaker"
            className="relative z-40 max-w-[250px] sm:max-w-[350px] md:max-w-[480px] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicEnhance;
