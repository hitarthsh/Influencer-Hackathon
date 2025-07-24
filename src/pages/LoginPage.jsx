import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center font-nunito">
      <div className="bg-white border-4 border-blue-900 rounded-2xl shadow-2xl w-full max-w-md p-10 sm:p-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-blue-900 mb-8">
          LOGIN
        </h1>
        <form className="space-y-6">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-md border-2 border-blue-900 bg-blue-50 focus:outline-none focus:border-yellow-400 focus:bg-white focus:text-blue-900"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-2 border-blue-900 bg-blue-50 focus:outline-none focus:border-yellow-400 focus:bg-white focus:text-blue-900"
          />
          <button className="w-full bg-yellow-400 text-blue-900 font-bold py-3 rounded-md shadow hover:bg-blue-800 hover:text-white transition-all duration-300 text-lg">
            SIGN IN
          </button>
          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-blue-600 font-bold underline hover:text-blue-800 transition-all"
            >
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
