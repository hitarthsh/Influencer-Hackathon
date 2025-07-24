import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productData } from "../data/productData";

const ProductDetailPage = ({ setNotFoundIfOffline }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productData.find((p) => p.id === productId);

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

  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="container mx-auto px-2 sm:px-6 py-8 sm:py-12">
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
            <button className="w-full bg-yellow-400 text-blue-900 font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-md hover:bg-blue-800 hover:text-white transition-all duration-300 text-base sm:text-lg">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
