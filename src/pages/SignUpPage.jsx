import React from "react";

const SignUpPage = ({ setPage }) => (
  <div className="bg-blue-500 min-h-screen flex items-center justify-center">
    <div className="bg-white p-12 rounded-lg shadow-2xl w-full max-w-md text-center">
      <h1 className="text-4xl font-black text-blue-900 mb-8">SIGN UP</h1>
      <form className="space-y-6">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button className="w-full bg-yellow-400 text-blue-900 font-bold py-3 rounded-md hover:bg-blue-800 hover:text-white transition-all duration-300">
          SIGN UP
        </button>
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => setPage("login")}
            className="text-blue-600 font-bold underline hover:text-blue-800 transition-all"
          >
            Log In
          </button>
        </p>
      </form>
    </div>
  </div>
);

export default SignUpPage;
