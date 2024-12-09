// app/components/LatestProducts.tsx

import React from "react";

const LatestProducts: React.FC = () => {
  // Category data
  const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"];

  // Array of products with images and Sale tag data
  const products = [
    {
      name: "Modern Wooden Chair",
      price: 42.0,
      originalPrice: 65.0,
      image: "/images/latestproduct1.png",
    },
    {
      name: "Luxury Dining Set",
      price: 72.0,
      originalPrice: 90.0,
      image: "/images/latestproduct2.png",
      sale: true,
    },
    {
      name: "Vintage Armchair",
      price: 50.0,
      originalPrice: 80.0,
      image: "/images/latestproduct3.png",
    },
    {
      name: "Elegant Office Chair",
      price: 65.0,
      originalPrice: 100.0,
      image: "/images/latestproduct4.png",
    },
    {
      name: "Comfy Sofa",
      price: 120.0,
      originalPrice: 150.0,
      image: "/images/latestproduct5.png",
    },
    {
      name: "Minimalist Dining Table",
      price: 55.0,
      originalPrice: 75.0,
      image: "/images/latestproduct6.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Latest Products</h2>

        {/* Categories Section */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`text-sm font-medium ${
                index === 0
                  ? "text-pink-500 border-b-2 border-pink-500"
                  : "text-gray-500"
              } hover:text-pink-500`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Responsive Product Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg p-4 border border-gray-200 group"
            >
              {/* Conditional Sale Badge - only for the second product */}
              {product.sale && (
                <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                  Sale
                </div>
              )}

              {/* Responsive Product Image with different sizes for mobile/tablets/desktop */}
              <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>

              {/* Product Info Section */}
              <h3 className="text-gray-800 font-semibold mb-2 text-center text-sm sm:text-base md:text-lg">
                {product.name}
              </h3>
              <div className="text-gray-500 text-center">
                {/* Original price with strikethrough */}
                <span className="text-red-500 line-through mr-2 text-sm sm:text-base md:text-lg">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="text-sm sm:text-base md:text-lg">${product.price.toFixed(2)}</span>
              </div>

              {/* Interactive Buttons with hover effect */}
              <div className="flex justify-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100">❤</button>
                <button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100">🛒</button>
                <button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100">🔍</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;