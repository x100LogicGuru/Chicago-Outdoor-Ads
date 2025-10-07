import { MdDownload } from "react-icons/md";

export default function SubSec() {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-[95%] mx-auto min-h-[50vh] bg-white rounded-3xl px-6 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20 mt-2 gap-8 lg:gap-12">
      <div className="w-full lg:w-[60%]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-12 text-gray-900">
          Chicago Highlight
        </h1>
        <button className="py-4 px-6 sm:py-5 sm:px-7 bg-gray-100 hover:bg-gray-200 rounded-3xl flex items-center gap-2 transition-colors duration-300 text-sm sm:text-base">
          Download Kit <MdDownload className="text-lg sm:text-xl" />
        </button>
      </div>
      <div className="w-full lg:w-[40%]">
        <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700">
          As one of North America's most innovative media companies, we leverage
          the power of creative excellence, unbeatable locations, and technology
          driven smart audience data to change the game for advertisers.
        </p>
      </div>
    </div>
  );
}
