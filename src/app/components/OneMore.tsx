import React from "react";

const OneMore: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Upper Section: Displaying Services Offered */}
      <section className="text-center py-16">
        {/* Main Heading with responsive font sizes */}
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-10">
          What Shopex Offer!
        </h2>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {/* Dynamically rendering 4 feature cards with responsiveness */}
          {[
            { id: 1, image: "/images/icon1.png", title: "24/7 Support" },
            { id: 2, image: "/images/icon2.png", title: "Fast Delivery" },
            { id: 3, image: "/images/icon3.png", title: "Exclusive Discounts" },
            { id: 4, image: "/images/icon4.png", title: "Secure Payments" },
          ].map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg p-6 rounded-md max-w-xs text-center flex flex-col items-center justify-center md:w-1/4 sm:w-1/2 w-full" // Responsive widths
            >
              {/* Service Icon Section */}
              <div className="mb-4">
                <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              {/* Service Title */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              {/* Description for service */}
              <p className="text-gray-500 text-sm md:text-base mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lower Section: Product Image & Description with mobile responsiveness */}
      <section className="bg-[#F2F0FF] py-10">
        <div className="container mx-auto px-6 flex flex-wrap md:flex-nowrap items-center gap-8">
          {/* Product Image Section */}
          <div className="flex-1 w-full md:w-1/2">
            <img
              src="/images/sofa-home.png"
              alt="Product"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>

          {/* Product Description Section */}
          <div className="flex-1 w-full md:w-1/2">
            {/* Heading Section with responsiveness */}
            <h3 className="text-xl md:text-2xl font-bold text-purple-700 mb-4">
              Unique Features Of Latest & Trending Products
            </h3>
            {/* Features List Section */}
            <ul className="text-gray-700 space-y-2 list-disc pl-5 text-sm md:text-base">
              <li>All frames constructed with hardwood solids and laminates.</li>
              <li>
                Reinforced with double wood dowels, glue, screws, nails at corner blocks, and machine nails.
              </li>
              <li>Arms, backs, and seats are structurally reinforced.</li>
            </ul>
            {/* Call-to-action Section */}
            <div className="mt-6">
              <button className="bg-purple-600 text-white py-2 px-6 rounded shadow-md hover:bg-purple-700 transition">
                Add To Cart
              </button>
              <p className="mt-2 text-sm md:text-base text-gray-500">B&B Italian Sofa - $32.00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneMore;
