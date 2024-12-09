"use client";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    // Main Hero Section: Responsive design with padding and flex layout
    <section className="relative bg-gray-100 py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      
      {/* Left Column: Lamp Image */}
      <div className="md:w-1/4 flex justify-center items-start relative">
        {/* Lamp Image Positioned for Desktop */}
        <div className="absolute top-[-200px] left-0 md:top-[-350px] md:left-[-40px] z-10">
          <Image
            src="/images/lamp.png" // Path to lamp image in the public folder
            alt="Lamp" // Alt text for accessibility
            width={387} // Fixed width for the lamp image
            height={387} // Fixed height for the lamp image
            className="object-contain hidden md:block" // Hidden on mobile screens
          />
        </div>
      </div>

      {/* Center Column: Text Content */}
      <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
        {/* Subtitle */}
        <p className="text-sm text-pink-500 font-medium">
          Best Furniture For Your Castle...
        </p>
        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 leading-tight mt-2">
          New Furniture Collection Trends in 2020
        </h1>
        {/* Description */}
        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        {/* Call-to-Action Button */}
        <Link
          href="#"
          className="inline-block bg-pink-500 text-white text-sm font-medium py-3 px-6 rounded-md mt-6 hover:bg-pink-600 transition-all duration-300 w-2/3 md:w-1/3 mx-auto md:mx-0 text-center"
        >
          Shop Now
        </Link>
      </div>

      {/* Right Column: Chair Image */}
      <div className="md:w-1/3 flex justify-center items-center relative">
        {/* Decorative Background for Chair */}
        <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-5 md:p-10 shadow-xl mt-10 mx-auto max-w-[300px] md:max-w-none">
          <Image
            src="/images/chair.png" // Path to chair image in the public folder
            alt="Furniture Chair" // Alt text for accessibility
            width={706}
            height={689}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
