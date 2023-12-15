import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "lucide-react";


const login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const handleInput = (field, input) => {
    setUserInput((prev) => ({ ...prev, [`${field}`]: input }));
  };
  const handleSingIn = async () => {
    // send post request to the server
    // const response = await fetch("api", {
    //   method: "Post .....................",
    // });
    // if response is ok then !!!!!!!!!!!!!!!
    // else error
  };

  const containerStyle = {
    fontFamily: "system-ui",
  };

  return (
    <div className="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2 relative flex items-center">
              <i className="absolute text-[#999] pl-2">
                <FaUser />
              </i>
              <input
                onChange={(e) => handleInput("email", e.target.value)}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-8 text-xl"
                placeholder="Email"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2 relative flex items-center">
              <i className="absolute text-[#999] pl-2">
                <FaUnlock />
              </i>
              <input
                onChange={(e) => handleInput("password", e.target.value)}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-8"
                placeholder="Passoword"
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleSingIn}
              type="button"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>

          <div className=" flex justify-end">
            <a
              href="register"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              create new account ?
            </a>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default login;
