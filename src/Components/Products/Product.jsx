import { MdOutlineDirectionsTransit } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import { MdCode } from "react-icons/md";

export default function Products() {
  return (
    <div className="w-full lg:w-[95%] bg-white min-h-[90vh] flex flex-col lg:flex-row justify-between gap-2 lg:gap-6 px-4 sm:px-8 lg:px-20 py-8 sm:py-12 lg:py-20 lg:rounded-3xl lg:mt-2 relative lg:left-1/2 lg:transform lg:-translate-x-1/2">
      <div className="w-full lg:w-2/3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
          Products
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl">
          Technology and media solutions for cities, transit system, air travle,
          destinations and other public spaces
        </p>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6">
        {/* Transit Container */}
        <div className="bg-[#f7f7f7] text-black rounded-2xl lg:rounded-3xl shadow-lg px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex justify-between items-center mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold flex items-center justify-end">
              Transit
            </h2>
            <div className="bg-white rounded-lg p-2 sm:p-3">
              <MdOutlineDirectionsTransit className="text-2xl sm:text-3xl text-black" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mt-4 text-xs sm:text-sm md:text-base lg:text-lg">
            <p className="bg-white text-black p-3 sm:p-4 lg:p-6 xl:p-8 rounded-xl lg:rounded-2xl flex items-end justify-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
              Interior Design
            </p>
            <p className="bg-white text-black p-3 sm:p-4 lg:p-6 xl:p-8 rounded-xl lg:rounded-2xl flex items-end justify-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
              Rail Station Media
            </p>
            <p className="bg-white text-black p-3 sm:p-4 lg:p-6 xl:p-8 rounded-xl lg:rounded-2xl flex items-end justify-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
              Digital Displays
            </p>
            <p className="bg-white text-black p-3 sm:p-4 lg:p-6 xl:p-8 rounded-xl lg:rounded-2xl flex items-end justify-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
              Interior Rail
            </p>
            <p className="bg-[#1f1f1f] text-[#f7f7f7] p-3 sm:p-4 lg:p-6 xl:p-8 rounded-xl lg:rounded-2xl flex flex-col items-start justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer group sm:col-span-1">
              <MdArrowForward className="text-xl sm:text-2xl lg:text-3xl transition-transform duration-300 group-hover:translate-x-4" />
              <span className="mt-2 sm:mt-4 text-xs sm:text-sm lg:text-base">
                Exterior Rail
              </span>
            </p>
          </div>
        </div>

        {/* Air and Programmatic Container */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="bg-[#f7f7f7] text-black rounded-2xl lg:rounded-3xl shadow-lg px-4 sm:px-6 py-3 sm:py-4 lg:py-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold flex items-center justify-end">
                Air
              </h2>
              <div className="bg-white rounded-lg p-2 sm:p-3">
                <MdFlight className="text-xl sm:text-2xl lg:text-3xl text-black" />
              </div>
            </div>
          </div>

          <div className="bg-[#f7f7f7] text-black rounded-2xl lg:rounded-3xl shadow-lg px-4 sm:px-6 py-3 sm:py-4 lg:py-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
            <div className="flex justify-between items-center">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold flex items-center justify-end">
                Programmatic
              </h2>
              <div className="bg-white rounded-lg p-2 sm:p-3">
                <MdCode className="text-xl sm:text-2xl lg:text-3xl text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
