import React, { useState, useEffect } from "react";
import { fetchProducts } from "../data/productData";

const ProductsPage = ({ setPage }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    loadProducts();
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen pt-16">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-black text-center mb-12 text-blue-900">
          ALL FLAVORS
        </h1>
        {loading ? (
          <div className="text-center text-2xl font-bold text-blue-900">
            Loading...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-blue-400 cursor-pointer group"
                onClick={() => setPage(`product/${product.id}`)}
              >
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={`${product.name} Spritz`}
                    className="mx-auto h-96 object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 h-20">
                    {product.description}
                  </p>
                  <span className="bg-yellow-400 text-blue-900 font-bold py-2 px-8 rounded-md transition-all duration-300">
                    VIEW FLAVOR
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
