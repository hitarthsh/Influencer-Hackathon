import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../data/productData";

const FeaturedProducts = ({ setPage }) => {
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

  if (loading) {
    return (
      <section className="py-20 bg-blue-50 text-center">
        <h2 className="text-2xl font-bold text-blue-900">Loading Flavors...</h2>
      </section>
    );
  }

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-4 text-blue-900">
          MEET THE SOCIETY
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Four delicious flavors, each with their own personality. Which one is
          yours?
        </p>
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
                <p className="text-gray-600 mb-4 h-20">{product.description}</p>
                <span className="bg-yellow-400 text-blue-900 font-bold py-2 px-8 rounded-md transition-all duration-300">
                  VIEW FLAVOR
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
