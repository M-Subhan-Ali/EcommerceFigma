import React from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container mx-auto pb-20">
      <div className="px-[4%] sm:px-[6%]">
        {/* Breadcrumb */}
        <div className="pb-10 sm:pb-20">
          <BreadCrumbs breadcrumb="Error" />
        </div>

        {/* Error Content */}
        <div className="content flex flex-col gap-12 sm:gap-20 items-center text-center">
          <div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold text-gray-900">
              404 Not Found
            </h1>
            <p className="text-[15px] sm:text-[16px] md:text-[18px] pt-6 sm:pt-10 font-medium text-gray-600 px-4 sm:px-0">
              The page you’re looking for doesn’t exist. You can return to the home page.
            </p>
          </div>

          {/* Back to Home Button */}
          <Link to="/" className="w-full sm:w-auto">
            <button
              className="w-full sm:w-64 py-3 sm:py-4 px-6 bg-[#db4444] text-white 
              rounded text-[15px] sm:text-[16px] font-medium hover:bg-[#b83838] transition-colors"
            >
              Back to Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
