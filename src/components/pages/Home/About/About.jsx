import hoodImg from "/images/hood.png";
import rectangleBlue from "/images/rectangleBlue.svg";
import { Button } from "../../../Button";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="relative">
      <div className="flex flex-col-reverse md:grid md:grid-cols-12 bg-darkRed">
        <div className="md:transform md:skew-x-[10deg] lg:skew-x-[15deg] flex lg:w-[80%] z-10 col-span-7 justify-self-end">
          <img src={hoodImg} alt="hood" className="hidden md:block" />
        </div>
        <div className="relative bg-hood-pattern md:bg-none lg:bg-darkRed text-white place-content-center col-span-5 p-20 w-full h-full">
          <div className="absolute inset-0 bg-rgbaLightRed md:hidden"></div>
          <div className="relative z-10 bg-darkRed p-10 md:p-0">
            <div>
              <div className="w-full flex flex-row items-center">
                <span className="text-[18px] sm:text-xl lg:text-3xl text-mainBlue drop-shadow-neonBlue uppercase font-daysOne">
                  About Us
                </span>
                <span className="hidden sm:block mb-2 sm:mr-2">
                  <img
                    src={rectangleBlue}
                    alt="rectangle"
                    className="w-[120px]"
                  />
                </span>
              </div>
              <h1 className="text-[20px] sm:text-[1.5em] lg:text-[2.5em] font-daysOne uppercase pb-2">
                Under the hood
              </h1>
              <p className="font-lexendDeca">
                Our story is one of perseverance, growth, and a relentless
                pursuit of excellence.
                <br /> Manila Brothers Autoworks will continue to offer
                <br /> budget-friendly services without compromising on quality.{" "}
                <br /> We remain dedicated to providing the best for our valued
                customers.
              </p>
              <Button
                className="bg-primaryBg uppercase font-lexendDeca shadow-glow text-black mt-4"
                size="md"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
