import rectangleBlue from "../../../images/rectangleBlue.svg";
import { Img } from "../../../Img";
import priceTag from "../../../images/Price Tag USD.png";
import carImg from "../../../images/Koenigsegg One.png";
import wrench from "../../../images/Wrench.png";
import brain from "../../../images/Critical Thinking.png";

function Features() {
  return (
    <section className="relative bg-features-pattern bg-bottom bg-opacity-20 w-full h-full p-16 bg-cover flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-white bg-opacity-80 z-10"></div>
      <div className="z-20 w-full flex flex-row max-w-[120rem] justify-center items-center mb-8 relative">
        <span>
          <Img
            src={rectangleBlue}
            alt="rectangle"
            className="-scale-x-100 w-[180px]"
          />
        </span>
        <span className="text-xl text-center lg:text-3xl text-mainBlue drop-shadow-neonBlue uppercase font-daysOne mx-1">
          Why choose us
        </span>
        <span>
          <Img src={rectangleBlue} alt="rectangle" className="w-[180px]" />
        </span>
      </div>
      <span className="text-2xl lg:text-5xl text-black uppercase block drop-shadow-neonWhite font-daysOne text-center mt-1 lg:mt-2 z-20 relative">
        Rev up your ride with Manila Brothers!
      </span>
      <div className="relative max-w-[120rem]">
        <div className="flex justify-center mt-8 z-20 relative w-full">
          <div className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row flex-wrap justify-center gap-x-28 w-full max-w-[120rem]">
            <div className="text-center flex flex-col items-center">
              <Img
                src={priceTag}
                alt="pricetag"
                className="border-8 w-56 border-black p-2"
              />
              <div className="w-72">
                <h3 className="text-lg lg:text-2xl font-daysOne text-black mt-2 md:mt-10">
                  Transparent and Customized Pricing
                </h3>
              </div>
            </div>
            <div className="text-center flex flex-col items-center">
              <Img
                src={carImg}
                alt="car"
                className="border-8 w-56 border-black p-2"
              />
              <div className="w-72">
                <h3 className="text-lg lg:text-2xl font-daysOne text-black mt-2 md:mt-10">
                  Premium Experience & Affordable Rates
                </h3>
              </div>
            </div>
            <div className="text-center flex flex-col items-center">
              <Img
                src={wrench}
                alt="wrench"
                className="border-8 w-56 border-black p-2"
              />
              <div className="w-72">
                <h3 className="text-lg lg:text-2xl font-daysOne text-black mt-2 md:mt-10">
                  Trusted By <br /> Certified Car Guys
                </h3>
              </div>
            </div>
            <div className="text-center flex flex-col items-center">
              <Img
                src={brain}
                alt="brain"
                className="border-8 w-56 border-black p-2"
              />
              <div className="w-72">
                <h3 className="text-lg lg:text-2xl font-daysOne text-black mt-2 md:mt-10">
                  Tailored Solutions
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
