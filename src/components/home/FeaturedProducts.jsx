import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../data/productData";
import "../../styles/products-grid.css";

const productBgMap = {
  peach: "#fde047", // yellow
  "peach-pour": "#fbbf24", // amber
  pickle: "#4ade80", // green
  "pickle-pour": "#22d3ee", // cyan
  "lemon-iced-tea": "#facc15", // lemon
  "pink-lemonade": "#f472b6", // pink
  "lit-special": "#2563eb", // blue
  "pl-classic": "#f97316", // orange
  "mobile-updated": "#a3e635", // lime
};

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
        <div className="product-grid">
          {products.slice(0, 4).map((product) => {
            const bg = productBgMap[product.id] || "#fde047";
            return (
              <div
                className="product-card"
                key={product.id}
                style={{
                  "--product-bg": bg,
                }}
              >
                <div className="product-details">
                  <span className="product-price">{product.price}</span>
                  <span className="product-rating">
                    ⭐ {Math.floor(Math.random() * 100) + 20}
                  </span>
                </div>
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="title-wrapper">
                  <h3 className="product-title">{product.name}</h3>
                </div>
                <div className="product-button-wrapper">
                  <button
                    className="product-btn"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    View Flavor
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
