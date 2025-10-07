import React, { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const Cart = ({
  cart,
  setCart,
  billing,
  setBilling,
  billingsTotal,
  setBillingsTotal,
  active,
  setActive,
}) => {
  const [quantity, setQuantity] = useState(cart.map(() => 1));
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totals = 0;
    cart.forEach((product, index) => {
      totals += product.currentPrice * parseInt(quantity[index]);
    });
    setTotal(totals);
    setBillingsTotal(totals);
  }, [cart, quantity]);

  const Handler = (e, index) => {
    const ee = e.target.value;
    const newQuantity = [...quantity];
    newQuantity[index] = Math.max(1, parseInt(ee) || 1);
    setQuantity(newQuantity);
    setBilling(newQuantity);
  };

  const Delete = (item) => {
    setCart((val) => val.filter((x) => x.id !== item.id));
  };

  return (
    <div className="container mx-auto">
      <div className="px-[4%] sm:px-[6%]">
        <BreadCrumbs breadcrumb="Cart" />

        {/* === Cart Table === */}
        <div className="px-3 sm:px-6 md:px-10 py-6 mt-8 sm:mt-16 overflow-x-auto">
          {/* Table Header */}
          <ul className="hidden md:flex items-center text-[16px] font-medium font-sans pb-10 min-w-[600px]">
            <li className="w-[25%]">Product</li>
            <li className="w-[25%] flex justify-center">Price</li>
            <li className="w-[25%] flex justify-center">Quantity</li>
            <li className="w-[25%] flex justify-end">Subtotal</li>
          </ul>

          {/* Table Body */}
          <div className="min-w-[600px]">
            {cart.map((product, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center py-6 border-b border-gray-200"
              >
                {/* Product Info */}
                <div className="w-full md:w-[25%] flex items-center gap-4 relative mb-4 md:mb-0">
                  <img
                    src={product.img}
                    className="w-16 h-12 object-contain"
                    alt={product.title}
                  />
                  <p className="text-sm sm:text-base">{product.title}</p>
                  <button>
                    <RxCrossCircled
                      onClick={() => Delete(product)}
                      className="absolute -top-2 -left-2 bg-[#db4444] text-white text-lg sm:text-xl rounded-full cursor-pointer"
                    />
                  </button>
                </div>

                {/* Price */}
                <div className="w-full md:w-[25%] flex justify-between md:justify-center text-sm sm:text-base mb-2 md:mb-0">
                  <p className="md:hidden text-gray-500 font-medium">Price:</p>
                  <p>${product.currentPrice}</p>
                </div>

                {/* Quantity */}
                <div className="w-full md:w-[25%] flex justify-between md:justify-center text-sm sm:text-base mb-2 md:mb-0">
                  <p className="md:hidden text-gray-500 font-medium">
                    Quantity:
                  </p>
                  <input
                    value={quantity[index]}
                    onChange={(e) => Handler(e, index)}
                    type="number"
                    className="w-16 text-black border border-gray-400 rounded px-2 py-2"
                    min={1}
                  />
                </div>

                {/* Subtotal */}
                <div className="w-full md:w-[25%] flex justify-between md:justify-end text-sm sm:text-base font-semibold">
                  <p className="md:hidden text-gray-500 font-medium">
                    Subtotal:
                  </p>
                  <p>${product.currentPrice * quantity[index]}</p>
                </div>
              </div>
            ))}
          </div>

          {/* === Buttons Row === */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
            <Link to="/">
              <button className="w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-12 border border-gray-400 font-semibold text-[15px] sm:text-[16px] font-sans">
                Return To Shop
              </button>
            </Link>
            <button className="w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-12 border border-gray-400 font-semibold text-[15px] sm:text-[16px] font-sans">
              Update Cart
            </button>
          </div>

          {/* === Coupon + Total Section === */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 pt-12 sm:pt-20">
            {/* Coupon Input */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full lg:w-auto">
              <input
                type="text"
                className="py-3 sm:py-4 px-4 sm:px-5 border border-gray-400 rounded w-full sm:w-[300px] h-12 sm:h-16 md:h-20"
                placeholder="Coupon Code"
              />
              <button className="py-3 sm:py-4 px-6 sm:px-12 border border-gray-400 rounded bg-[#db4444] text-white font-medium h-12 sm:h-16 md:h-20 ">
                Apply Coupon
              </button>
            </div>

            {/* Cart Totals */}
            <div className="w-full lg:w-[470px] border border-black py-6 sm:py-7 px-4 sm:px-5 rounded mt-6 lg:mt-0">
              <h1 className="text-lg sm:text-xl font-semibold pb-4 sm:pb-5">
                Cart Total
              </h1>
              <div className="flex justify-between items-center font-medium border-b border-gray-300 pb-3 sm:pb-4 text-[15px] sm:text-[16px]">
                <p>Subtotal:</p>
                <p>${total}</p>
              </div>

              <div className="flex justify-between items-center font-medium text-[15px] sm:text-[16px] border-b border-gray-300 py-3 sm:py-4">
                <p>Shipping</p>
                <p>Free</p>
              </div>

              <div className="flex justify-between items-center font-medium text-[15px] sm:text-[16px] py-3 sm:py-4">
                <p>Total:</p>
                <p>${total}</p>
              </div>

              <div className="flex justify-center pt-4">
                <Link to="/billing">
                  <button className="w-full sm:w-auto py-3 sm:py-4 px-8 sm:px-12 border border-gray-400 rounded bg-[#db4444] text-white font-medium">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
