import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const Account = ({ operation1 }) => {
  const [data1, setData1] = useState({
    name: "",
    last: "",
    email: "",
    address: "",
    currentPass: "",
    newPass: "",
    confirmPass: "",
  });

  const [storeData, setStoreData] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData1((prev) => ({ ...prev, [name]: value }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setStoreData(data1);

    if (data1.currentPass !== operation1.password) {
      toast.error("Current Password Does Not Match", {
        position: "top-right",
        theme: "dark",
      });
    } else if (data1.newPass !== data1.confirmPass) {
      toast.error("New Password Does not match Confirm Password!", {
        position: "top-center",
        theme: "dark",
      });
    } else {
      toast.success("Account Updated Successfully", {
        position: "top-center",
        theme: "dark",
      });
      setData1({
        name: "",
        last: "",
        email: "",
        address: "",
        currentPass: "",
        newPass: "",
        confirmPass: "",
      });
    }
  };

  return (
    <div className="container mx-auto">
      <div className="px-[5%] sm:px-[6%]">
        {/* === Header Section === */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-10 sm:pb-20">
          <BreadCrumbs breadcrumb="My Account" />
          <p className="font-medium pt-2 sm:pt-0">
            Welcome!{" "}
            <span className="font-medium text-[#db4444]">
              {storeData.name || "Guest"}
            </span>
          </p>
        </div>

        {/* === Main Layout === */}
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-[15%]">
          {/* === Left Sidebar === */}
          <div className="w-full lg:w-[25%] border border-gray-200 rounded-md p-5 lg:p-0">
            <div className="inner-account p-4">
              <h1 className="text-[16px] font-semibold pb-4">Manage My Account</h1>
              <p className="text-[15px] pb-3 text-[#db4444] ps-1 cursor-pointer">
                My Profile
              </p>
              <p className="text-[15px] pb-3 text-[#808080] ps-1 cursor-pointer">
                Address Book
              </p>
              <p className="text-[15px] pb-3 text-[#808080] ps-1 cursor-pointer">
                My Payment Options
              </p>

              <div className="pt-4">
                <h1 className="text-[16px] font-semibold pb-4">My Orders</h1>
                <p className="text-[15px] pb-3 text-[#808080] ps-1 cursor-pointer">
                  My Returns
                </p>
                <p className="text-[15px] pb-3 text-[#808080] ps-1 cursor-pointer">
                  My Cancellations
                </p>
              </div>

              <div className="pt-4">
                <h1 className="text-[16px] font-semibold pb-4">My Wishlist</h1>
              </div>
            </div>
          </div>

          {/* === Right Form Section === */}
          <div className="w-full">
            <div className="inneraccount-details px-5 py-6 border border-gray-200 rounded-md">
              <form onSubmit={HandleSubmit}>
                <h1 className="text-lg sm:text-xl font-medium pb-3 text-[#db4444]">
                  Edit Your Profile
                </h1>

                {/* === Personal Info === */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h1 className="font-medium pb-2 text-sm sm:text-base">
                      First Name
                    </h1>
                    <input
                      value={data1.name}
                      onChange={onChangeHandler}
                      name="name"
                      type="text"
                      required
                      className="bg-[#f5f5f5] py-2 px-3 w-full rounded text-sm sm:text-base"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <h1 className="font-medium pb-2 text-sm sm:text-base">
                      Last Name
                    </h1>
                    <input
                      value={data1.last}
                      onChange={onChangeHandler}
                      name="last"
                      type="text"
                      required
                      className="bg-[#f5f5f5] py-2 px-3 w-full rounded text-sm sm:text-base"
                      placeholder="Last Name"
                    />
                  </div>
                  <div>
                    <h1 className="font-medium pb-2 text-sm sm:text-base">
                      Email
                    </h1>
                    <input
                      value={data1.email}
                      onChange={onChangeHandler}
                      name="email"
                      type="email"
                      required
                      className="bg-[#f5f5f5] py-2 px-3 w-full rounded text-sm sm:text-base"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <h1 className="font-medium pb-2 text-sm sm:text-base">
                      Address
                    </h1>
                    <input
                      value={data1.address}
                      onChange={onChangeHandler}
                      name="address"
                      type="text"
                      required
                      className="bg-[#f5f5f5] py-2 px-3 w-full rounded text-sm sm:text-base"
                      placeholder="Address"
                    />
                  </div>
                </div>

                {/* === Password Section === */}
                <div className="py-6">
                  <h1 className="font-medium pb-4 text-sm sm:text-base">
                    Password Changes
                  </h1>
                  <div className="grid gap-4 sm:gap-5">
                    <input
                      value={data1.currentPass}
                      onChange={onChangeHandler}
                      name="currentPass"
                      type="password"
                      required
                      className="py-2 px-3 bg-[#f5f5f5] rounded text-sm sm:text-base"
                      placeholder="Current Password"
                    />
                    <input
                      value={data1.newPass}
                      onChange={onChangeHandler}
                      name="newPass"
                      type="password"
                      required
                      className="py-2 px-3 bg-[#f5f5f5] rounded text-sm sm:text-base"
                      placeholder="New Password"
                    />
                    <input
                      value={data1.confirmPass}
                      onChange={onChangeHandler}
                      name="confirmPass"
                      type="password"
                      required
                      className="py-2 px-3 bg-[#f5f5f5] rounded text-sm sm:text-base"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-5 pt-6">
                    <button
                      type="button"
                      className="py-3 px-7 font-sans font-medium text-sm sm:text-base border border-gray-300 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="py-3 px-7 font-sans font-medium text-sm sm:text-base bg-[#db4444] rounded text-white"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Account;
