import React, { useRef, useEffect, useLayoutEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import SplashCursor from "./components/SplashCursor";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const mainRef = useRef(null);
  const smootherRef = useRef(null);

  // Helper: set notfound if offline
  const setNotFoundIfOffline = () => {
    if (!navigator.onLine) navigate("/notfound");
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fade-in-down { 0% { opacity: 0; transform: translateY(-30px); } 100% { opacity: 1; transform: translateY(0); } }
      .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
      @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
      .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      .animate-fade-in-up-delay { animation: fade-in-up 0.8s ease-out 0.4s forwards; opacity: 0; }
      .animate-fade-in-up-delay-2 { animation: fade-in-up 0.8s ease-out 0.8s forwards; opacity: 0; }
      .ease-out-expo { transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // GSAP page transition animation
  useEffect(() => {
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      );
    }
  }, [location]);

  // GSAP ScrollSmoother for smooth scrolling
  useLayoutEffect(() => {
    let smoother;
    // Dynamically import ScrollSmoother for compatibility
    import("gsap/ScrollSmoother")
      .then((module) => {
        gsap.registerPlugin(module.default);
        smoother = module.default.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.2,
          effects: true,
        });
        smootherRef.current = smoother;
      })
      .catch(() => {});
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, []);

  return (
    <div
      id="smooth-wrapper"
      className="bg-white min-h-screen overflow-x-hidden"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "linear-gradient(135deg, #fff 60%, #f0f4ff 100%)",
      }}
    >
      <div id="smooth-content">
        <SplashCursor />
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main
          ref={mainRef}
          className={`transition-all duration-400 ml-12 sm:ml-16 ${
            isMenuOpen ? "md:ml-32" : ""
          } min-h-screen`}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/products"
              element={
                <ProductsPage setNotFoundIfOffline={setNotFoundIfOffline} />
              }
            />
            <Route
              path="/product/:productId"
              element={
                <ProductDetailPage
                  setNotFoundIfOffline={setNotFoundIfOffline}
                  isMenuOpen={isMenuOpen}
                />
              }
            />
            <Route
              path="/about"
              element={
                <AboutPage setNotFoundIfOffline={setNotFoundIfOffline} />
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/notfound" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <div
          className={`transition-all duration-400 ml-12 sm:ml-16 ${
            isMenuOpen ? "md:ml-32" : ""
          }`}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}
