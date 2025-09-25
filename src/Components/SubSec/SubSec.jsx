import { MdDownload } from "react-icons/md";

export default function SubSec() {
  return (
    <div className="flex justify-between w-[95%] mx-auto h-[50vh] bg-white rounded-3xl px-10 py-20 -mt-9">
      <div className="w-[70%]">
        <h1 className="text-6xl mb-50">Chicago Highlight</h1>
        <button className="py-5 px-7 bg-gray-100 hover:bg-gray-200 rounded-3xl flex items-center gap-2 transition-colors duration-300">
          Download Kit <MdDownload className="text-xl" />
        </button>
      </div>
      <div className="w-[40%]">
        <p className="text-[20px]">
          As one of North America's most innovative media compinies, we leverage
          the power of creative Excellences unbeatable locations, and technology
          driven smart audience data to change the game for advertiers.
        </p>
      </div>
    </div>
  );
}
