import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const StarsProducts = ({ star }) => {
  const ratings = Array.from({ length: 5 }, (_, i) => {
    const number = i + 0.4;
    return (
      <div key={i}>
        {star >= i + 1 ? (
          <FaStar className="text-[#ffad33] w-6 h-6" />
        ) : star >= number ? (
          <FaStarHalfAlt className="text-[#ffad33] w-6 h-6" />
        ) : (
          <FaRegStar className="text-[#bfbfbf] w-6 h-6" />
        )}
      </div>
    );
  });
  return <div className="flex gap-2">{ratings}</div>;
};

export default StarsProducts;
