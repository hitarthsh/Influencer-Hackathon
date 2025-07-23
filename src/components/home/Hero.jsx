import React from "react";
import litPic from "../../assets/images/LIT_pic.webp";

const Hero = ({ setPage }) => {
  return (
    <div className="min-h-screen bg-blue-800 text-white relative overflow-hidden flex items-center">
      <img
        src={litPic}
        alt="Hero Background"
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 w-full text-center px-4">
        <div
          className="text-yellow-300"
          style={{ textShadow: "3px 3px 0px rgba(0,0,0,0.2)" }}
        >
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none animate-fade-in-down">
            Taste
          </h1>
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none animate-fade-in-up mt-[-1.5rem] md:mt-[-3rem]">
            The Hype
          </h1>
        </div>
        <p className="text-xl md:text-2xl font-light mt-6 max-w-2xl mx-auto animate-fade-in-up-delay text-gray-200">
          Award-winning sparkling cocktails that actually taste good.
        </p>
        <button
          onClick={() => setPage("products")}
          className="mt-8 bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-md hover:bg-white transition-all duration-300 text-lg transform hover:scale-105 animate-fade-in-up-delay-2"
        >
          DISCOVER THE FLAVORS
        </button>
      </div>
    </div>
  );
};

export default Hero;
