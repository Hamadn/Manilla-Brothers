import { Img } from "../../../Img";
import hoodImg from "/images/hood.png";
import rectangleBlue from "/images/rectangleBlue.svg";
import { Button } from "../../../Button";

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
                <span className="text-lg lg:text-xl text-mainBlue drop-shadow-neonBlue uppercase font-daysOne">
                  About Us
                </span>
                <span>
                  <img
                    src={rectangleBlue}
                    alt="rectangle"
                    className="w-[120px]"
                  />
                </span>
              </div>
              <h1 className="text-[2.1875em] sm:text-[1.5em] lg:text-[2.5em] font-daysOne uppercase">
                Under the hood
              </h1>
              <p>
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do <br /> eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud
                exercitation ullamco laboris <br /> nisi ut aliquip ex ea
                commodo consequat&quot;
              </p>
              <Button
                className="bg-primaryBg uppercase shadow-glow text-black mt-4"
                size="md"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
