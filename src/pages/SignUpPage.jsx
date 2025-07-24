import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center font-nunito px-2 sm:px-0">
      <div className="bg-white border-4 border-blue-900 rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-10 md:p-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-900 mb-8">
          SIGN UP
        </h1>
        <form className="space-y-5 sm:space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-md border-2 border-blue-900 bg-blue-50 focus:outline-none focus:border-yellow-400 focus:bg-white focus:text-blue-900 text-base sm:text-lg"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-md border-2 border-blue-900 bg-blue-50 focus:outline-none focus:border-yellow-400 focus:bg-white focus:text-blue-900 text-base sm:text-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-2 border-blue-900 bg-blue-50 focus:outline-none focus:border-yellow-400 focus:bg-white focus:text-blue-900 text-base sm:text-lg"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-md border-2 border-blue-900 bg-blue-50 focus:outline-none focus:border-yellow-400 focus:bg-white focus:text-blue-900 text-base sm:text-lg"
          />
          <button className="w-full bg-yellow-400 text-blue-900 font-bold py-3 rounded-md shadow hover:bg-blue-800 hover:text-white transition-all duration-300 text-base sm:text-lg">
            SIGN UP
          </button>
          <p className="text-sm sm:text-base text-gray-700">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-600 font-bold underline hover:text-blue-800 transition-all"
            >
              Log In
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
