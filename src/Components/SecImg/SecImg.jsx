import heroImage from "../../assets/images/vasanth-w4lVWIFxhGs-unsplash.jpg";

export default function SecImg() {
  return (
    <div className="">
      <div className="w-[95%]  mx-auto lg:rounded-3xl lg:mt-3 overflow-hidden">
        <img
          src={heroImage}
          alt="Chicago Outdoor Advertising"
          loading="lazy"
          decoding="async"
          className="w-full h-[45vh] sm:h-[60vh] md:h-[70vh] lg:h-[65vh] object-cover rounded-2xl lg:rounded-3xl shadow-lg"
        />
      </div>
    </div>
  );
}
