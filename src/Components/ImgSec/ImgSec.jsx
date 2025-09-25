import toaHeftiba1 from "../../assets/images/toa-heftiba-12gjjAHkAdY-unsplash.jpg";
import toaHeftiba2 from "../../assets/images/toa-heftiba-OWxOPF1r024-unsplash.jpg";
import vasanth from "../../assets/images/vasanth-w4lVWIFxhGs-unsplash.jpg";

export default function ImgSec() {
  return (
    <div className=" w-full md:w-[95%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <img
          src={toaHeftiba1}
          alt="Outdoor advertising display"
          className="w-full h-[60vh] object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <img
          src={toaHeftiba2}
          alt="Outdoor advertising display"
          className="w-full h-[60vh] object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <img
          src={vasanth}
          alt="Outdoor advertising display"
          className="w-full h-[60vh] object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
