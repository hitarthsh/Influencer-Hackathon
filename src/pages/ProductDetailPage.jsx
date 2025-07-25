import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productData } from "../data/productData";

const ProductDetailPage = ({ setNotFoundIfOffline, isMenuOpen }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productData.find((p) => p.id === productId);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="bg-blue-50 min-h-screen pt-16 text-center text-blue-900">
        <h1 className="text-3xl font-bold">Product not found!</h1>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const handleDecrease = () => setQuantity((q) => Math.max(1, q - 1));
  const handleIncrease = () => setQuantity((q) => q + 1);

  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="container mx-auto px-2 sm:px-6 py-8 sm:py-12 transition-all duration-400 pl-4 pr-4 sm:pl-8 sm:pr-8">
        <button
          onClick={() => navigate("/products")}
          className="mb-6 sm:mb-8 text-blue-600 font-bold text-base sm:text-lg"
        >
          &larr; Back to all products
        </button>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg shadow-2xl w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 object-contain"
              style={{ maxWidth: "100%", minWidth: 0 }}
            />
          </div>
          <div className="w-full md:w-1/2 text-blue-900 flex flex-col items-start">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4">
              {product.name}
            </h1>
            <p className="text-lg sm:text-2xl text-yellow-500 font-bold my-2 sm:my-4">
              {product.price}
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-8">
              {product.description}
            </p>
            {/* Quantity Selector */}
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={handleDecrease}
                className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-xl flex items-center justify-center hover:bg-blue-200 transition"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="text-lg font-bold w-8 text-center select-none">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-xl flex items-center justify-center hover:bg-blue-200 transition"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button className="w-full bg-yellow-400 text-blue-900 font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-md hover:bg-blue-800 hover:text-white transition-all duration-300 text-base sm:text-lg mb-3">
              ADD TO CART
            </button>
            <button className="w-full bg-blue-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-md hover:bg-blue-800 hover:text-yellow-300 transition-all duration-300 text-base sm:text-lg">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
