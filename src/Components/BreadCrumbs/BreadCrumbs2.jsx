import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs2 = ({ breadcrumb }) => {
  const GetLinkRoute = (path) => {
    switch (path) {
      case "Gaming":
        return "/gameelectronic/gaming";
      case "Electronics":
        return "/gameelectronic/electronic";
      default:
        return "/error404";
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
        {/* Base Link */}
        <Link
          to="/account"
          className="cursor-pointer text-[#808080] hover:text-black transition-colors duration-200"
        >
          Account
        </Link>

        <li className="text-[#808080]">/</li>

        {/* Dynamic Breadcrumbs */}
        {breadcrumb.map((value, index) => (
          <React.Fragment key={index}>
            <Link
              to={GetLinkRoute(value)}
              className={`${
                value === "Havic HV G-92 Gamepad"
                  ? "text-black font-semibold"
                  : "text-[#808080]"
              } cursor-pointer hover:text-black transition-colors duration-200`}
            >
              {value}
            </Link>
            {index < breadcrumb.length - 1 && (
              <li className="text-[#808080]">/</li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumbs2;
