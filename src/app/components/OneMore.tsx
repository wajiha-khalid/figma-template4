import React from "react";

const OneMore: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Upper Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">
          What Shopex Offer!
        </h2>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {/* Dynamically rendering 4 cards with responsive design */}
          {[
            { id: 1, image: "/images/icon1.png", title: "24/7 Support" },
            { id: 2, image: "/images/icon2.png", title: "Fast Delivery" },
            { id: 3, image: "/images/icon3.png", title: "Exclusive Discounts" },
            { id: 4, image: "/images/icon4.png", title: "Secure Payments" },
          ].map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg p-6 rounded-md max-w-xs text-center flex flex-col items-center justify-center"
            >
              {/* Dynamic Icon Container */}
              <div className="mb-4">
                <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lower Section with an Image and Description */}
      <section className="bg-[#F2F0FF] py-10">
        <div className="container mx-auto px-6 flex flex-wrap md:flex-nowrap items-center gap-8">
          {/* Product Image */}
          <div className="flex-1 w-full md:w-1/2">
            <img
              src="/images/sofa-home.png"
              alt="Product"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>

          {/* Product Description Section */}
          <div className="flex-1 w-full md:w-1/2">
            <h3 className="text-xl font-bold text-purple-700 mb-4">
              Unique Features Of Latest & Trending Products
            </h3>
            <ul className="text-gray-700 space-y-2 list-disc pl-5 text-sm">
              <li>All frames constructed with hardwood solids and laminates.</li>
              <li>
                Reinforced with double wood dowels, glue, screws, nails at corner blocks, and machine nails.
              </li>
              <li>Arms, backs, and seats are structurally reinforced.</li>
            </ul>
            <div className="mt-6">
              <button className="bg-purple-600 text-white py-2 px-6 rounded shadow-md hover:bg-purple-700 transition">
                Add To Cart
              </button>
              <p className="mt-2 text-sm text-gray-500">B&B Italian Sofa - $32.00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneMore;
