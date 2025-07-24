import React, { useRef, useEffect } from "react";
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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const mainRef = useRef(null);

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

  return (
    <div className="bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main
        ref={mainRef}
        className={`transition-all duration-400 ${
          isMenuOpen ? "pl-28 md:pl-32" : "pl-16"
        }`}
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
              <ProductDetailPage setNotFoundIfOffline={setNotFoundIfOffline} />
            }
          />
          <Route
            path="/about"
            element={<AboutPage setNotFoundIfOffline={setNotFoundIfOffline} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/notfound" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <div
        className={`transition-all duration-400 ${
          isMenuOpen ? "pl-28 md:pl-32" : "pl-16"
        }`}
      >
        <Footer />
      </div>
    </div>
  );
}
