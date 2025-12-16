import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    name: " ",
    email: " ",
    password: " ",
  });

  

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 sm:p-8">
        {/*Heading*/}
        <h1 className="text-2xl font-bold text-center mb-2">Book Tracker</h1>
        <p className="text-sm text-gray-500 text-center mb-4">
          Login to manage your books
        </p>
        {/*Form*/}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 py-2 rounded-md hover:bg-blue-700 transition text-white cursor-pointer"
          >
            LogIn
          </button>
        </form>

        {/*Footer*/}
        <Link to="/signup">
          <p className="text-sm text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Sign Up
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
