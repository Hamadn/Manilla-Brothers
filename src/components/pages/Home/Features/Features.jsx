import rectangleBlue from "/images/rectangleBlue.svg";
import priceTag from "/images/price-tag.png";
import techniciansImg from "/images/automobile-with-wrench.png";
import hourglassImg from "/images/hourglass.png";
import satisfactionImg from "/images/satisfaction.png";

function Features() {
  return (
    <section className="relative bg-features-pattern bg-bottom bg-opacity-20 w-full h-full p-16 bg-cover flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-white bg-opacity-80 z-10"></div>
      <div className="z-20 w-full flex flex-row max-w-[120rem] justify-center items-center relative">
        <span>
          <img
            src={rectangleBlue}
            alt="rectangle"
            className="-scale-x-100 w-[180px]"
          />
        </span>
        <span className="text-xl text-center lg:text-3xl text-mainBlue drop-shadow-neonBlue uppercase font-daysOne mx-1">
          Why choose us
        </span>
        <span>
          <img src={rectangleBlue} alt="rectangle" className="w-[180px]" />
        </span>
      </div>
      <span className="text-2xl lg:text-5xl text-black uppercase block drop-shadow-neonWhite font-daysOne text-center z-20 relative">
        Rev up your ride with Manila Brothers!
      </span>
      <div className="relative max-w-[120rem]">
        <div className="flex justify-center mt-8 z-20 relative w-full">
          <div className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row flex-wrap justify-center gap-x-28 w-full max-w-[120rem]">
            <div className="text-center flex flex-col items-center">
              <img
                src={priceTag}
                alt="pricetag"
                className="border-8 w-56 border-black p-2"
              />
              <div className="w-72">
                <h3 className="text-lg lg:text-2xl font-daysOne text-black mt-2 md:mt-10">
                  Quality on a Budget
                </h3>
              </div>
            </div>
            <div className="text-center flex flex-col items-center">
              <img
                src={techniciansImg}
                alt="car"
                className="border-8 w-56 border-black p-2"
              />
              <div className="w-72">
                <h3 className="text-lg lg:text-2xl font-daysOne text-black mt-2 md:mt-10">
                  Skilled Technicians
                </h3>
              </div>
            </div>
            <div className="text-center flex flex-col items-center">
              <img
                src={hourglassImg}
                alt="wrench"
                className="border-8 w-56 border-black p-2"
              />
              <div className="w-72">
                <h3 className="text-lg lg:text-2xl font-daysOne text-black mt-2 md:mt-10">
                  Quick Turnaround
                </h3>
              </div>
            </div>
            <div className="text-center flex flex-col items-center">
              <img
                src={satisfactionImg}
                alt="brain"
                className="border-8 w-56 border-black p-2"
              />
              <div className="w-72">
                <h3 className="text-lg lg:text-2xl font-daysOne text-black mt-2 md:mt-10">
                  Guaranteed Satisfaction
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
