import React from "react";


const TrendingProducts = () => {
    const products = [
        {
          name: "Comfort Handy Craft",
           price: "26.00",
           originalPrice: "42.00",
          image: "/images/Trending1.png",
        },
        {
          name: "Comfort Handy Craft",
          price: "26.00",
          originalPrice: "42.00",
          image: "/images/Trending2.png",
          
        },
        {
          name: "Comfort Handy Craft",
          price: "26.00",
          originalPrice: "42.00",
          image: "/images/Trending3.png",
        },
        {
          name: "Comfort Handy Craft",
          price: "26.00",
          originalPrice: "42.00",
          image: "/images/Trending4.png",
        },
    ]
    
      return (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-6">
              Trending Products
            </h2>

    
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-200 relative"
                >
                  {/* Product Image */}
                  <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain h-full"
                    />
                  </div>
    
                  {/* Product Info */}
                  <h3 className="text-gray-800 font-semibold mb-2">{product.name}</h3>
                  <div className="text-gray-500">
                    <span className="text-blue-900 line-through mr-2">
                      ${product.originalPrice}
                    </span>
                    <span>${product.price}</span>
                  </div>
    
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };
    
export default TrendingProducts;