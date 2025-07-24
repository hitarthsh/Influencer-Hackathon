import React from "react";
import peachPic from "../assets/images/peach_pic.webp";
import picklePic from "../assets/images/pickle_pic.webp";
import litPic from "../assets/images/LIT_pic.webp";
// import plPic from "../assets/images/PL_pic.webp";
// import peachPour from "../assets/images/Photo-15-PeachPouring_5a714ff2-f33e-40b5-b7cb-6bfee5b04e7c.webp";
// import picklePour from "../assets/images/Photo-14-PicklePour.webp";
// import pinkLemonadePour from "../assets/images/Photo-12-PinkLemonadePour.webp";
// import lemonIcedTeaPour from "../assets/images/Photo-13-LemonIcedTeaPour_d077ebf7-a8a3-4688-a165-4ef7e8a1f3bd.webp";
// import mobileUpdated from "../assets/images/MobileUpdatedV3.webp";

const AboutPage = () => (
  <div className="bg-blue-50 min-h-screen pt-16 font-nunito flex items-center justify-center">
    <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 flex flex-col lg:flex-row gap-8 sm:gap-12 items-center justify-center">
      {/* Left: Images and Cards */}
      <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-1/2 items-center">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
          {/* Product Image 1 */}
          <div className="bg-white rounded-2xl shadow-xl w-full sm:w-1/2 p-2 sm:p-4 flex items-center justify-center">
            <img
              src={peachPic}
              alt="Peach Fizz"
              className="rounded-xl w-full h-32 sm:h-40 object-cover"
            />
          </div>
          {/* Stats Card */}
          <div className="bg-white rounded-2xl shadow-xl w-full sm:w-1/2 p-4 sm:p-6 flex flex-col items-start justify-between min-h-[120px] sm:min-h-[180px]">
            <div>
              <div className="text-xl sm:text-2xl font-black text-blue-900 mb-1">
                30,000+
              </div>
              <div className="text-gray-700 text-xs sm:text-sm mb-2">
                Sales in July 2021 with 5 star ratings and happy clients.
              </div>
              <div className="border-t border-gray-200 my-2 w-full" />
            </div>
            <div className="flex -space-x-2 mt-2">
              {["AJ", "RE", "PJ", "EM", "JU"].map((name, i) => (
                <div
                  key={i}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-900 shadow"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
          {/* Product Image 2 */}
          <div className="bg-white rounded-2xl shadow-xl w-full sm:w-1/2 p-2 sm:p-4 flex items-center justify-center">
            <img
              src={picklePic}
              alt="Pickle Splash"
              className="rounded-xl w-full h-32 sm:h-40 object-cover"
            />
          </div>
          {/* Ratings Card */}
          <div className="bg-white rounded-2xl shadow-xl w-full sm:w-1/2 p-4 sm:p-6 flex flex-col items-start justify-between min-h-[80px] sm:min-h-[120px]">
            <div className="text-gray-700 font-semibold mb-2 text-xs sm:text-base">
              Best ratings
            </div>
            <div className="flex gap-2 text-lg sm:text-2xl">
              <span>😡</span>
              <span>😠</span>
              <span>😐</span>
              <span>😋</span>
              <span>😁</span>
            </div>
          </div>
        </div>
        {/* Product Image 3 */}
        <div className="bg-white rounded-2xl shadow-xl w-full p-2 sm:p-4 flex items-center justify-center">
          <img
            src={litPic}
            alt="LIT Special Edition"
            className="rounded-xl w-full h-32 sm:h-40 object-cover"
          />
        </div>
      </div>
      {/* Right: About Text and Button */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-1 sm:px-2 lg:px-8 mt-6 lg:mt-0">
        <div className="uppercase text-orange-500 font-bold tracking-widest mb-2 text-xs sm:text-sm">
          A BIT
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-blue-900 mb-4">
          ABOUT US
        </h1>
        <p className="text-gray-700 text-base sm:text-lg mb-6 max-w-xs sm:max-w-xl">
          From they fine john he give of rich he. They age and draw mrs like.
          Improving end distrusts may instantly was household applauded
          incommode. Why kept very ever home mrs. Considered sympathize ten
          uncommonly occasional assistance sufficient not.
        </p>
        <button className="mt-2 bg-orange-500 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-xl hover:bg-yellow-400 hover:text-blue-900 transition-all text-base sm:text-lg">
          EXPLORE MORE
        </button>
      </div>
    </div>
  </div>
);

export default AboutPage;
