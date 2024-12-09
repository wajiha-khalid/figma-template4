import React from "react";

const FeaturedProducts = () => {
  // Array of featured products
  const products = [
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/chair1.png", // Replace with actual image paths
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/chair2.png",
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/chair3.png",
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/images/chair4.png",
    },
  ];

  return (
    <section className="bg-purple-50 py-10 px-6"> {/* Outer section with background and padding */}
      <div className="max-w-7xl mx-auto"> {/* Container for centering content and limiting width */}
        {/* Section heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Featured Products
        </h2>
        
        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300" // Product card style with hover effect
              style={{ width: "100%", maxWidth: "270px", height: "361px" }} // Set fixed sizing that works responsively
            >
              {/* Product Image Section */}
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={product.image} // Dynamically load product image
                  alt={product.name} // Alt text for accessibility
                  className="object-contain"
                />
              </div>
              
              {/* Product Text Details */}
              <div className="mt-4 text-center">
                {/* Product name */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                {/* Product code */}
                <p className="text-sm text-gray-500">{product.code}</p>
                {/* Product price */}
                <p className="text-lg font-bold text-gray-800 mt-2">
                  {product.price}
                </p>
              </div>
              
              {/* Overlay with "View Details" button on hover */}
              <div className="absolute inset-0 bg-purple-500 text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300">
                {/* Hover effect: View details  on button */}
                <button className="py-2 px-4 bg-white text-purple-500 font-bold rounded-md shadow-md">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
