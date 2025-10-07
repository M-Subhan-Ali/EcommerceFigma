import React from "react";
import google from "../Signup/image/google.png";
import phone from "../Signup/image/phone.png";
import line from "../Signup/image/line.png";
import linesm from "../Signup/image/linesm.png";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ data, setData, setOpeartion }) => {
  const navigate = useNavigate();

  const Handler = (e) => {
    const { name, value } = e.target;
    setData((val) => ({ ...val, [name]: value }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setOpeartion((val) => [...val, data]);
    navigate("/login");

    setData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container my-16 sm:my-20 lg:my-24 2xl:mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center px-[5%]">
        {/* === Left Side Image === */}
        <div className="left-signup w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src={phone}
            className="w-[90%] sm:w-[75%] lg:w-auto h-auto object-contain"
            alt="side"
          />
        </div>

        {/* === Right Signup Form === */}
        <div className="right-signup w-full lg:w-1/2 max-w-[480px]">
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-sans font-medium">
            Create an account
          </h1>
          <p className="text-[14px] sm:text-[16px] font-medium mt-1 sm:mt-2">
            Enter your details below
          </p>

          <form onSubmit={HandleSubmit} className="pt-6 sm:pt-8">
            {/* === Input Fields === */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="relative">
                <input
                  name="name"
                  value={data.name}
                  required
                  onChange={Handler}
                  type="text"
                  className="outline-none w-full p-2 border-b border-gray-300 text-[14px] sm:text-[16px] bg-transparent"
                  placeholder="Name"
                />
                <img
                  src={line}
                  className="absolute left-0 bottom-0 w-full h-[2px] opacity-0"
                  alt="line"
                />
              </div>

              <div className="relative">
                <input
                  name="email"
                  value={data.email}
                  required
                  onChange={Handler}
                  type="email"
                  className="outline-none w-full p-2 border-b border-gray-300 text-[14px] sm:text-[16px] bg-transparent"
                  placeholder="Email or Phone Number"
                />
                <img
                  src={line}
                  className="absolute left-0 bottom-0 w-full h-[2px] opacity-0"
                  alt="line"
                />
              </div>

              <div className="relative">
                <input
                  name="password"
                  value={data.password}
                  required
                  onChange={Handler}
                  type="password"
                  className="outline-none w-full p-2 border-b border-gray-300 text-[14px] sm:text-[16px] bg-transparent"
                  placeholder="Password"
                />
                <img
                  src={line}
                  className="absolute left-0 bottom-0 w-full h-[2px] opacity-0"
                  alt="line"
                />
              </div>
            </div>

            {/* === Buttons === */}
            <div className="flex flex-col gap-4 sm:gap-5 pt-8 sm:pt-10">
              {/* Submit Button */}
              <div className="bg-[#db4444] text-center py-3 sm:py-4 rounded font-sans font-medium">
                <button
                  type="submit"
                  className="text-white text-[15px] sm:text-[16px]"
                >
                  Create Account
                </button>
              </div>

              {/* Google Signup */}
              <div className="flex items-center justify-center gap-3 border border-gray-400 py-3 sm:py-4 rounded cursor-pointer hover:bg-gray-50 transition-all">
                <img src={google} alt="google" className="w-5 sm:w-6" />
                <p className="text-[14px] sm:text-[16px] font-normal">
                  Sign up with Google
                </p>
              </div>

              {/* Already have account */}
              <div className="flex justify-center items-center gap-2 text-[14px] sm:text-[16px] font-medium">
                <p>Already have an account?</p>
                <Link
                  to="/login"
                  className="relative text-[#db4444] hover:underline"
                >
                  Log in
                  <img
                    src={linesm}
                    className="absolute left-0 bottom-[-2px] opacity-75 w-full"
                    alt="line"
                  />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
