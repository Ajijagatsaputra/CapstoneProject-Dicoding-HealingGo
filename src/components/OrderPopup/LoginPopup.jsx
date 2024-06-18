import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import SignupPopup from "./signup.jsx"; 
import { Link } from "react-router-dom";

const LoginPopup = ({ setOpen }) => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {showSignup ? (
        <SignupPopup setOpen={setOpen} /> 
      ) : (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {" "}
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black/70">Login</h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer "
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="mt-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
             
              <div className="flex justify-center space-x-2">
                <Link to={"/profile"} onClick={() => setOpen(false)}>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
                  Login
                </button>
                </Link>

                <button
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full "
                  onClick={() => setShowSignup(true)}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;
