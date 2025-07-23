import React from "react";
import { productData } from "../data/productData";

const ProductDetailPage = ({ setPage, productId }) => {
  const product = productData.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="bg-blue-50 min-h-screen pt-16 text-center text-blue-900">
        <h1 className="text-3xl font-bold">Product not found!</h1>
        <button
          onClick={() => setPage("products")}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={() => setPage("products")}
          className="mb-8 text-blue-600 font-bold"
        >
          &larr; Back to all products
        </button>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 text-blue-900">
            <h1 className="text-5xl font-black">{product.name}</h1>
            <p className="text-2xl text-yellow-500 font-bold my-4">
              {product.price}
            </p>
            <p className="text-lg text-gray-700 mb-8">{product.description}</p>
            <button className="w-full bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-md hover:bg-blue-800 hover:text-white transition-all duration-300 text-lg">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
