import Image from "next/image";
import Link from "next/link";

function Discount() {
  return (
    <div className="w-full py-20 bg-white">
      <div className="w-full max-w-screen-xl mx-auto px-4">

        {/* Main Section Heading */}
        <h2 className="text-[#3F509E] text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
          Discount Item
        </h2>

        {/* Category Tags */}
        <div className="flex justify-center space-x-6 md:space-x-8 mb-10 flex-wrap">
          {["Wood Chair", "Plastic Chair", "Sofa Chair"].map((tag) => (
            <button
              key={tag}
              className="relative text-lg md:text-lg font-medium text-gray-700 hover:text-pink-600 transition-all duration-200"
            >
              {tag}
              <span className="block h-[2px] w-0 bg-pink-600 absolute bottom-0 left-0 transition-all duration-300 hover:w-full"></span>
              <span className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-600 rounded-full opacity-0 hover:opacity-100"></span>
            </button>
          ))}
        </div>

        {/* Main Content Section - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left Section - Text & Features */}
          <div className="text-center md:text-left space-y-4 md:space-y-6">
            {/* Heading */}
            <h3 className="text-[#3F509E] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2">
              20% Discount Of All Products
            </h3>

            {/* Subheading */}
            <h4 className="text-pink-600 text-lg md:text-xl lg:text-2xl font-semibold leading-snug mb-4">
              Eames Sofa Compact
            </h4>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-5 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-5 mb-4">
              Eu eget feugiat habitasse nec, bibendum condimentum.
            </p>

            {/* Features List */}
            <ul className="text-gray-600 text-sm md:text-base leading-6 space-y-2">
              <li>✓ Material exposed like metals</li>
              <li>✓ Clear lines and geometric figures</li>
              <li>✓ Simple neutral colors</li>
              <li>✓ Comfortable & versatile design</li>
            </ul>

            {/* Action Button */}
            <Link href="/shoplist">
              <button className="px-6 py-3 bg-[#FB2E86] text-white font-semibold rounded-md shadow-md hover:bg-pink-600 transition-all duration-200">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Right Section - Image & Pink Circle */}
          <div className="relative flex justify-center items-center">
            {/* Pink Circular Background */}
            <div
              className="absolute inset-0 bg-pink-100 w-[350px] md:w-[400px] lg:w-[500px] h-[350px] md:h-[400px] lg:h-[500px] -z-10 rounded-full"
            ></div>

            {/* Discount Image */}
            <div className="relative z-10">
              <Image
                src="/images/sofaDiscount.png"
                alt="Discount Sofa"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Discount;
