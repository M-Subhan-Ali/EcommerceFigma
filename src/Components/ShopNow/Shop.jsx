import React from "react";
import LeftShop from "./LeftShop";
import RightShop from "./RightShop";

const Shop = () => {
  return (
    <section className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 py-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-8">
        {/* === Left Sidebar === */}
        <div className="w-full lg:w-[25%]">
          <LeftShop />
        </div>

        {/* === Right Banner Section === */}
        <div className="w-full lg:w-[75%]">
          <RightShop />
        </div>
      </div>
    </section>
  );
};

export default Shop;
