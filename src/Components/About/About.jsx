import React, { useState } from "react";
import girls from "./image/girls.png";
import s1 from "./image/service1.png";
import s2 from "./image/service2.png";
import s3 from "./image/service4.png";
import s4 from "./image/service3.png";
import p1 from "./image/person.png";
import p2 from "./image/person1.png";
import p3 from "./image/person2.png";
import frame from "./image/frame.png";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const About = () => {
  const [selected, setSelected] = useState(2);

  const HandleColor = (index) => {
    setSelected(index);
  };

  return (
    <div className="OurStory-Section">
      {/* === Our Story Section === */}
      <div className="px-[4%] sm:px-[6%] pb-16 sm:pb-24">
        <div className="pb-4 sm:pb-6">
          <BreadCrumbs breadcrumb="About" />
        </div>

        {/* Responsive Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* === Left Column === */}
          <div className="flex flex-col justify-center">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide pb-4 sm:pb-[7%]">
              Our Story
            </p>
            <div className="max-w-[480px] flex flex-col items-start space-y-4 text-justify sm:text-left">
              <p className="text-[15px] sm:text-[16px] font-medium leading-relaxed">
                Launched in 2015, Exclusive is South Asia’s premier online
                shopping marketplace with an active presence in Bangladesh.
                Supported by a wide range of tailored marketing, data, and
                service solutions, Exclusive has 10,500 sellers and 300 brands
                and serves 3 million customers across the region.
              </p>
              <p className="text-[15px] sm:text-[16px] font-medium leading-relaxed">
                Exclusive has more than 1 million products to offer, growing at
                a very fast pace. Exclusive offers a diverse assortment in
                categories ranging from consumer goods to lifestyle.
              </p>
            </div>
          </div>

          {/* === Right Column === */}
          <div className="flex justify-center">
            <img
              src={girls}
              className="rounded-lg w-[90%] sm:w-[80%] lg:w-auto object-cover"
              alt="girls"
            />
          </div>
        </div>
      </div>

      {/* === Stats Section === */}
      <div className="container mx-auto pt-10 sm:pt-16">
        <div className="px-[4%] sm:px-[6%]">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[s1, s2, s3, s4].map((img, index) => (
              <div
                key={index}
                onClick={() => HandleColor(index + 1)}
                className={`${
                  selected === index + 1
                    ? "bg-[#db4444] text-white"
                    : "bg-white text-black"
                } flex flex-col gap-3 sm:gap-4 items-center border border-gray-300 rounded justify-center py-4 sm:py-5 px-3 cursor-pointer transition-all duration-300`}
              >
                <img src={img} className="w-14 sm:w-20" alt={`service${index}`} />
                <p className="text-2xl sm:text-3xl font-semibold">
                  {["10.5K", "33K", "45.5K", "25K"][index]}
                </p>
                <p className="text-[13px] sm:text-[15px] font-medium font-sans text-center">
                  Sellers active on our site
                </p>
              </div>
            ))}
          </div>

          {/* === Team Section === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-20 sm:pt-32 text-center">
            {[{ img: p1, name: "Tom Cruise", role: "Founder & Chairman" },
              { img: p2, name: "Emma Watson", role: "Managing Director" },
              { img: p3, name: "Will Smith", role: "Product Designer" }].map(
              (person, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="flex justify-center items-center w-full bg-[#f5f5f5] rounded-lg p-4 sm:p-6">
                    <img
                      src={person.img}
                      className="object-contain w-[80%] sm:w-[70%]"
                      alt={person.name}
                    />
                  </div>
                  <p className="text-2xl sm:text-3xl font-medium">
                    {person.name}
                  </p>
                  <p className="text-[14px] sm:text-[16px] font-medium text-gray-600">
                    {person.role}
                  </p>
                  <div className="flex gap-4 sm:gap-6 justify-center">
                    <FiTwitter className="text-lg sm:text-xl cursor-pointer hover:text-[#db4444]" />
                    <IoLogoInstagram className="text-lg sm:text-xl cursor-pointer hover:text-[#db4444]" />
                    <FaLinkedinIn className="text-lg sm:text-xl cursor-pointer hover:text-[#db4444]" />
                  </div>
                </div>
              )
            )}
          </div>

          {/* === Bottom Image === */}
          <div className="flex justify-center pt-12 sm:pt-16 cursor-pointer">
            <img
              src={frame}
              alt="frame"
              className="w-[80%] sm:w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
