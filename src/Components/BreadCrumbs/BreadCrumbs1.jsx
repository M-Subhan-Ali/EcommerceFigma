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
        return "/error";
    }
  };

  return (
    <div className="crumbs pt-20">
      <ul className="flex gap-3 text-gray-400">
        <Link to="/" className="cursor-pointer text-[#808080]">
          Home
        </Link>
        <li>/</li>
        {breadcumb.map((value, i) => {
          return (
            <React.Fragment key={i}>
              <Link
              to={getLinkRoute(value)}
                className={`${
                  value === "CheckOut" &&
                  "text-black font-semibold cursor-pointer"
                } cursor-pointer text-[#808080]`}
              >
                {value}
              </Link>
              {i < breadcumb.length - 1 && (
                <li className={`text-[#808080] `}>/</li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadCrumbs1;
