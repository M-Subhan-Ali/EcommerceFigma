import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const StarExplore = ({stars}) => {
  const reviews = Array.from({ length: 5 }, (_, i) => {
    const numbers = i + 0.4;
    return (
      <div key={i}>
        {stars >= i + 1 ? (
          <FaStar className='text-[#ffad33] w-5 h-5 ' />
        ) : stars >= numbers ? (
          <FaStarHalf className='text-[#ffad33]  w-5 h-5 ' />
        ) : (
          <CiStar className='text-[#bfbfbf] w-5 h-5' />
        )}
      </div>
    );
  });
  return <div className="flex gap-1">{reviews}</div>;
};

export default StarExplore;
