import React from "react";

// Trending Products Section
const TrendingProducts = () => {
  // Data for dynamic rendering of product cards
  const productList = [
    {
      name: "Comfort Handy Craft",
      price: "26.00",
      originalPrice: "42.00",
      imgUrl: "/images/Trending1.png",
    },
    {
      name: "Comfort Handy Craft",
      price: "26.00",
      originalPrice: "42.00",
      imgUrl: "/images/Trending2.png",
    },
    {
      name: "Comfort Handy Craft",
      price: "26.00",
      originalPrice: "42.00",
      imgUrl: "/images/Trending3.png",
    },
    {
      name: "Comfort Handy Craft",
      price: "26.00",
      originalPrice: "42.00",
      imgUrl: "/images/Trending4.png",
    },
  ];

  return (
    <div className="bg-white py-12">
      {/* Main Wrapper with responsive layout */}
      <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
        {/* Section Title */}
        <h2 className="text-center text-blue-800 font-bold text-2xl md:text-3xl mb-8">
          Explore Trending Products
        </h2>

        {/* Grid Container for Responsive Cards */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productList.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center bg-white border border-gray-200 shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Product Image Section */}
              <div className="flex items-center justify-center w-3/4 h-36 bg-gray-100 rounded-md mb-4">
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Product Information */}
              <h3 className="text-sm md:text-base font-semibold text-gray-700 text-center mb-2">
                {item.name}
              </h3>

              {/* Pricing Information */}
              <div className="text-gray-600 text-sm md:text-base">
                <span className="line-through text-blue-700 mr-2">${item.originalPrice}</span>
                <span className="font-bold">${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
