import heroImage from "../../assets/images/gael-d-E3vYFft6aS4-unsplash.jpg";

export default function Hero() {
  return (
    <div
      className="w-full lg:w-[95%] h-screen lg:rounded-3xl lg:mt-30 bg-cover bg-center bg-no-repeat relative lg:left-1/2 lg:transform lg:-translate-x-1/2 hero-desktop-height"
      style={{
        backgroundImage: `url(${heroImage})`,
        height: "100vh",
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0"></div>

      {/* Hero content can go here */}
      <div className="absolute inset-0 flex justify-between px-20">
        {/* Desktop: Left side text */}
        <div className="relative z-10 hidden lg:flex flex-col justify-end items-start h-full pb-50">
          <h1 className="text-white text-7xl md:text-8xl font-extrabold text-left">
            Chicago
          </h1>
          <p className="text-white font-light text-2xl md:text-3xl text-left mt-2">
            Outdoor Ads
          </p>
        </div>

        {/* Mobile: Centered text */}
        <div className="relative z-10 flex lg:hidden flex-col justify-center items-center h-full w-full px-8">
          <h1 className="text-white text-8xl font-extrabold text-center">
            Chicago
          </h1>
          <p className="text-white font-light text-4xl text-center mt-4">
            Outdoor Ads
          </p>
          <button className="text-black bg-white items-center rounded-xl px-12 py-6 flex flex-col justify-center text-center w-80 mt-12 text-xl">
            Learn More
          </button>
        </div>

        {/* Desktop: Right side contact card */}
        <div className="relative z-10 hidden lg:flex flex-col justify-end items-start pb-30">
          <div className="text-white bg-black/15 backdrop-blur-md items-start rounded-xl px-12 py-6 flex flex-col justify-center shadow-md">
            <p className="text-[20px] pb-4 text-center w-full">Sales Office</p>
            <p className="text-[1.1rem] text-left">
              11, North Milwaukee Avenue
            </p>
            <p className="text-[1.1rem] text-left">Suite 1500</p>
            <p className="text-[1.1rem]  text-left">Chicago, IL 60614</p>
            <p className="text-[1.1rem] pb-10">777-898-8977</p>

            <button className="text-black font-nono bg-white items-center rounded-xl px-8 py-4 flex flex-col justify-center text-center w-full">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
