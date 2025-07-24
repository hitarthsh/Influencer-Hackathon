import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import litPic from "../../assets/images/LIT_pic.webp";

const Hero = () => {
  const headlineRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.set(headlineRef.current, { y: 60, opacity: 0, scale: 0.95 });
    gsap.set(buttonRef.current, { scale: 0.7, opacity: 0 });
    gsap.to(headlineRef.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      delay: 0.2,
    });
    gsap.to(buttonRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.7,
      ease: "back.out(1.7)",
      delay: 0.7,
    });
  }, []);

  return (
    <div className="min-h-[60vh] md:min-h-screen bg-blue-800 text-white relative overflow-hidden flex flex-col justify-center items-center py-12 md:py-0">
      <img
        src={litPic}
        alt="Hero Background"
        className="absolute z-0 w-full h-full object-cover object-center"
        style={{
          top: 0,
          left: 0,
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 w-full max-w-xl mx-auto text-center px-4 flex flex-col items-center justify-center">
        <div
          className="text-yellow-300"
          style={{ textShadow: "3px 3px 0px rgba(0,0,0,0.2)" }}
        >
          <h1
            ref={(el) => (headlineRef.current[0] = el)}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none"
          >
            TASTE
          </h1>
          <h1
            ref={(el) => (headlineRef.current[1] = el)}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mt-2"
          >
            THE HYPE
          </h1>
        </div>
        <p className="text-base sm:text-lg md:text-2xl font-light mt-4 md:mt-6 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto text-gray-200">
          Award-winning sparkling cocktails that actually taste good.
        </p>
        <button
          ref={buttonRef}
          onClick={() => (window.location.href = "/products")}
          className="mt-6 sm:mt-8 bg-yellow-400 text-blue-900 font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-md hover:bg-white transition-all duration-300 text-base sm:text-lg transform hover:scale-105"
        >
          DISCOVER THE FLAVORS
        </button>
      </div>
    </div>
  );
};

export default Hero;
