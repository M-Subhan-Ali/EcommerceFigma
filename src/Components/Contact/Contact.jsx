import React from "react";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const Contact = () => {
  return (
    <div className="container mx-auto pb-16 sm:pb-20">
      <div className="px-[4%] sm:px-[6%] py-2">
        {/* Breadcrumb */}
        <div className="pb-10 sm:pb-16">
          <BreadCrumbs breadcrumb="Contact" />
        </div>

        {/* Responsive layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
          {/* === Left Info Card === */}
          <div className="shadow-xl rounded-md p-6 sm:p-8 flex-1">
            <div className="border-b border-gray-300 pb-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-[#db4444] text-white rounded-full">
                  <LuPhone className="text-lg sm:text-xl" />
                </div>
                <p className="text-[15px] sm:text-[16px] font-semibold">
                  Call To Us
                </p>
              </div>
              <p className="text-[14px] sm:text-[16px] font-medium pt-5 pb-2">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-[14px] sm:text-[16px] font-medium pb-6">
                Phone: +8801611112222
              </p>
            </div>

            {/* Email Section */}
            <div className="pt-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-[#db4444] text-white rounded-full">
                  <MdOutlineEmail className="text-lg sm:text-xl" />
                </div>
                <p className="text-[15px] sm:text-[16px] font-semibold">
                  Write To Us
                </p>
              </div>
              <p className="text-[14px] sm:text-[16px] font-medium pt-5">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-[14px] sm:text-[16px] font-medium pt-3">
                Emails: customer@exclusive.com
              </p>
              <p className="text-[14px] sm:text-[16px] font-medium pt-3">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>

          {/* === Right Contact Form === */}
          <div className="shadow-xl rounded-md p-6 sm:p-8 flex-[2]">
            {/* Input Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#f5f5f5] py-3 px-4 rounded w-full text-[14px] sm:text-[15px] outline-none"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="bg-[#f5f5f5] py-3 px-4 rounded w-full text-[14px] sm:text-[15px] outline-none"
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="bg-[#f5f5f5] py-3 px-4 rounded w-full text-[14px] sm:text-[15px] outline-none"
              />
            </div>

            {/* Textarea */}
            <div className="pt-4">
              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full py-4 px-4 bg-[#f5f5f5] rounded text-[14px] sm:text-[15px] outline-none resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <div className="flex justify-center sm:justify-end pt-6 sm:pt-8">
              <button className="w-full sm:w-[50%] lg:w-[30%] bg-[#db4444] text-white py-3 rounded hover:opacity-90 transition-all duration-300">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
