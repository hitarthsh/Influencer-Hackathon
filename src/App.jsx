import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  const [page, setPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const renderPage = () => {
    if (page.startsWith("product/")) {
      const productId = page.split("/")[1];
      return <ProductDetailPage setPage={setPage} productId={productId} />;
    }
    switch (page) {
      case "home":
        return <HomePage setPage={setPage} />;
      case "products":
        return <ProductsPage setPage={setPage} />;
      case "about":
        return <AboutPage />;
      case "login":
        return <LoginPage setPage={setPage} />;
      case "signup":
        return <SignUpPage setPage={setPage} />;
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setPage={setPage}
      />
      <main
        className={`transition-all duration-400 ${
          isMenuOpen ? "pl-28 md:pl-32" : "pl-16"
        }`}
      >
        {renderPage()}
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
