import React, { useState } from "react";
import img1 from "../BillingDetails/images/img1.png";
import img2 from "../BillingDetails/images/img2.png";
import img3 from "../BillingDetails/images/img3.png";
import img4 from "../BillingDetails/images/img4.png";
import BreadCrumbs1 from "../BreadCrumbs/BreadCrumbs1";

const BillingDetails = ({
  cart,
  billing,
  billingsTotal,
  setBillingsTotal,
}) => {
  const [shipping, setShipping] = useState(0);
  const breadcrumb = ["My Account", "Product", "View Cart", "CheckOut"];
  const [data, setData] = useState({
    name: "",
    company: "",
    address: "",
    floor: "",
    city: "",
    number: "",
    email: "",
  });

  const Handler = (e) => {
    const { name, value } = e.target;
    setData((val) => ({ ...val, [name]: value }));
    if (value === "ShadBagh") setShipping(50);
  };

  const HandlerSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto">
      <div className="px-[5%] mb-[10%]">
        <BreadCrumbs1 breadcumb={breadcrumb} />

        <h1 className="text-3xl font-semibold font-sans mt-10 sm:mt-16">
          Billing Details
        </h1>

        {/* === Main Grid === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-[15%] items-start mt-10">
          {/* === Left Form Section === */}
          <div>
            <form onSubmit={HandlerSubmit} className="w-full">
              {[
                { label: "First Name", name: "name", required: true },
                { label: "Company Name", name: "company" },
                { label: "Street Address", name: "address" },
                { label: "Apartment, floor, etc. (optional)", name: "floor" },
                { label: "Town/City", name: "city", required: true },
                { label: "Phone Number", name: "number", required: true },
                { label: "Email Address", name: "email", required: true },
              ].map((field, i) => (
                <div className="pt-6 sm:pt-8" key={i}>
                  <p className="text-[#999999] pb-1 text-sm sm:text-[16px]">
                    {field.label}
                    {field.required && (
                      <span className="text-[#db4444] opacity-50">*</span>
                    )}
                  </p>
                  <input
                    value={data[field.name]}
                    name={field.name}
                    onChange={Handler}
                    type="text"
                    required={field.required}
                    className="ps-4 bg-[#f5f5f5] h-12 w-full rounded text-[15px]"
                  />
                </div>
              ))}

              {/* Save info */}
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 pt-6 sm:pt-8">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#db4444] cursor-pointer"
                  required
                />
                <p className="text-[14px] sm:text-[16px] text-gray-700">
                  Save this information for faster checkout next time.
                </p>
              </div>
            </form>
          </div>

          {/* === Right Summary Section === */}
          <div className="w-full">
            {/* Product List */}
            {cart.map((product, index) => (
              <div
                key={index}
                className="flex justify-between items-center pb-6 sm:pb-10"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={product.img}
                    className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
                    alt={product.title}
                  />
                  <p className="text-sm sm:text-[16px] font-medium font-sans">
                    {product.title}
                  </p>
                </div>
                <p className="text-sm sm:text-[16px] font-medium font-sans">
                  ${product.currentPrice * billing[index]}
                </p>
              </div>
            ))}

            {/* Totals */}
            <div className="flex justify-between border-b border-gray-300 py-4">
              <p className="text-[15px] sm:text-[16px] font-medium">Subtotal:</p>
              <p className="text-[15px] sm:text-[16px] font-medium">
                ${billingsTotal}
              </p>
            </div>

            <div className="flex justify-between border-b border-gray-300 py-4">
              <p className="text-[15px] sm:text-[16px] font-medium">Shipping</p>
              <p className="text-[15px] sm:text-[16px] font-medium">
                {shipping === 50 ? "$50" : "Free"}
              </p>
            </div>

            <div className="flex justify-between py-4">
              <p className="text-[15px] sm:text-[16px] font-medium">Total:</p>
              <p className="text-[15px] sm:text-[16px] font-medium">
                ${billingsTotal + shipping}
              </p>
            </div>

            {/* Payment Options */}
            <form>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <input
                      type="radio"
                      name="payment"
                      className="w-5 h-5 accent-black cursor-pointer"
                    />
                    <p className="text-[15px]">Bank</p>
                  </div>
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
                    {[img3, img1, img4, img2].map((img, i) => (
                      <img key={i} src={img} className="w-8 sm:w-10" alt="card" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <input
                    type="radio"
                    name="payment"
                    className="w-5 h-5 accent-black cursor-pointer"
                  />
                  <p className="text-[15px] sm:text-[16px]">Cash on delivery</p>
                </div>

                {/* Coupon + Button */}
                <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="py-4 ps-4 border border-black rounded w-full text-[15px]"
                  />
                  <button
                    type="button"
                    className="h-[60px] sm:h-[70px] bg-[#db4444] text-white text-[15px] font-medium rounded sm:w-[200px]"
                  >
                    Apply Coupon
                  </button>
                </div>

                <div className="flex justify-center sm:justify-end">
                  <button
                    className="w-full sm:w-[180px] h-14 py-3 px-4 bg-[#db4444] text-white rounded font-medium"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
