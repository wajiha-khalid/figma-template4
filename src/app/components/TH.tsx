import Image from "next/image";
import Link from "next/link";

export default function Th() {
  return (
    <div className="m-4 py-6 sm:py-10 lg:py-12">
      {/* Main Grid Layout with 3 columns for desktop responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">

        {/* First Column */}
        <div className="relative bg-[#FFF6FB] p-3 sm:p-4 md:p-6 flex flex-col justify-between h-[220px] sm:h-[250px] md:h-[300px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-bottom bg-right w-full h-full"
            style={{ backgroundImage: "url('/images/TH1.png')" }}
          ></div>
          {/* Content Section */}
          <div className="relative z-10 text-left p-2 sm:p-4 md:p-6">
            <h2 className="text-[#151875] text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              23% off in all products
            </h2>
            <Link href="/" className="text-pink-500 hover:underline text-sm sm:text-base md:text-lg">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Second Column */}
        <div className="relative bg-[#EEEFFB] p-3 sm:p-4 md:p-6 flex flex-col justify-between h-[220px] sm:h-[250px] md:h-[300px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-bottom bg-right w-full h-full"
            style={{ backgroundImage: "url('/images/TH2.png')" }}
          ></div>
          {/* Content Section */}
          <div className="relative z-10 text-left p-2 sm:p-4 md:p-6">
            <h2 className="text-[#151875] text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              23% off in all products
            </h2>
            <Link href="/" className="text-pink-500 hover:underline text-sm sm:text-base md:text-lg">
              View Collection
            </Link>
          </div>
        </div>

        {/* Third Column with nested rows */}
        <div className="grid grid-rows-3 gap-4 sm:gap-6 md:gap-8 md:h-[300px]">

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="relative w-full h-20 sm:h-24 md:h-28 bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/images/TH3.png"
                alt="Executive Seat Chair"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col justify-center text-left p-2 sm:p-4 md:p-6">
              <h3 className="text-[#151875] text-sm sm:text-lg md:text-xl font-semibold mb-1">Executive Seat Chair</h3>
              <p className="text-[#151875] line-through text-xs sm:text-sm md:text-base">$32.00</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="relative w-full h-20 sm:h-24 md:h-28 bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/images/TH4.png"
                alt="Executive Seat Chair"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col justify-center text-left p-2 sm:p-4 md:p-6">
              <h3 className="text-[#151875] text-sm sm:text-lg md:text-xl font-semibold mb-1">Executive Seat Chair</h3>
              <p className="text-[#151875] line-through text-xs sm:text-sm md:text-base">$32.00</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="relative w-full h-20 sm:h-24 md:h-28 bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/images/TH5.png"
                alt="Executive Seat Chair"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col justify-center text-left p-2 sm:p-4 md:p-6">
              <h3 className="text-[#151875] text-sm sm:text-lg md:text-xl font-semibold mb-1">Executive Seat Chair</h3>
              <p className="text-[#151875] line-through text-xs sm:text-sm md:text-base">$32.00</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
