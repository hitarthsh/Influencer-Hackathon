import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../data/productData";
import "../styles/products-grid.css";

// Map product id to a unique main color for the hover effect
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

const ProductsPage = ({ setNotFoundIfOffline }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        if (setNotFoundIfOffline) setNotFoundIfOffline();
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        if (setNotFoundIfOffline) setNotFoundIfOffline();
      }
    };
    loadProducts();
    window.addEventListener("offline", setNotFoundIfOffline);
    return () => window.removeEventListener("offline", setNotFoundIfOffline);
  }, []);

  return (
    <section className="product-grid-section min-h-screen pt-16">
      <div className="container">
        <div className="title-section">
          <h2 className="section-title font-nunito text-blue-900">
            Latest Drop
          </h2>
        </div>
        <div className="subtitle-section">
          <p className="section-subtitle text-blue-900/80 font-nunito">
            Grab our freshest flavors before they sell out!
          </p>
        </div>
        {loading ? (
          <div className="text-center text-2xl font-bold text-blue-900 mt-12">
            Loading...
          </div>
        ) : (
          <div className="product-grid">
            {products.map((product, i) => {
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
        )}
      </div>
    </section>
  );
};

export default ProductsPage;
