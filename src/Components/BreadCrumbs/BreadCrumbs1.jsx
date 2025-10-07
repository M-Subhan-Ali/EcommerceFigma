import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs1 = ({ breadcumb }) => {
  const getLinkRoute = (value) => {
    switch (value) {
      case "My Account":
        return "/account";
      case "CheckOut":
        return "/checkout";
      case "Product":
        return "/productDetail";
      case "View Cart":
        return "/cart";
      default:
        return "/";
    }
  };

  return (
    <div className="crumbs pt-10 sm:pt-16 overflow-x-auto">
      <ul
        className="
          flex items-center gap-2 sm:gap-3 
          text-[13px] sm:text-[15px] text-gray-400
          whitespace-nowrap 
          scrollbar-hide 
          px-1 sm:px-0
        "
      >
        <Link
          to="/"
          className="cursor-pointer text-[#808080] hover:text-black transition-colors duration-200"
        >
          Home
        </Link>

        <li className="text-[#808080]">/</li>

        {breadcumb.map((value, i) => (
          <React.Fragment key={i}>
            <Link
              to={getLinkRoute(value)}
              className={`${
                value === "CheckOut"
                  ? "text-black font-semibold"
                  : "text-[#808080]"
              } cursor-pointer hover:text-black transition-colors duration-200`}
            >
              {value}
            </Link>
            {i < breadcumb.length - 1 && (
              <li className="text-[#808080]">/</li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumbs1;
