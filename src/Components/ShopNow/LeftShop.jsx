import React from "react";
import arrow from "../ShopNow/imagesShop/arrow.png";

const LeftShop = () => {
  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="border-r border-gray-200 pr-4 sm:pr-6 lg:pr-10 font-sans">
      <ul className="space-y-4 text-[15px] sm:text-[16px] text-[#1a1a1a] font-[500]">
        {categories.map((cat, i) => (
          <li
            key={i}
            className="flex items-center justify-between cursor-pointer hover:text-[#db4444] transition-colors"
          >
            <span>{cat}</span>
            {(cat === "Woman’s Fashion" || cat === "Men’s Fashion") && (
              <img src={arrow} alt="arrow" className="w-2.5 h-3" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftShop;
