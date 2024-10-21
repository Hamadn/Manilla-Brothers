import rectangleBlue from "/images/rectangleBlue.svg";
import carImg1 from "/images/Honda Civic Type R.jpg";
import carImg2 from "/images/Mitsubishi Lancer Blue.jpg";
import carImg3 from "/images/Mitsubishi Lancer Black.jpg";
import { useEffect } from "react";

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-darkRed text-white flex flex-col justify-center items-center py-24">
        <div className="w-full flex flex-row justify-center items-center">
          <span>
            <img
              src={rectangleBlue}
              alt="rectangleBlue"
              className="-scale-x-100 w-[90px] md:w-[100px]"
            />
          </span>
          <span className="text-sm lg:text-xl text-mainBlue uppercase font-daysOne mx-1 drop-shadow-neonBlue">
            Featured Works
          </span>
          <span>
            <img
              src={rectangleBlue}
              alt="rectangle2"
              className=" w-[90px] md:w-[100px]"
            />
          </span>
        </div>

        <span className="text-xl lg:text-5xl text-white uppercase font-daysOne text-center mt-1 lg:mt-5">
          DISCOVER AUTOMOTIVE EXCELLENCE!
        </span>

        <div className="gallery grid gap-x-2 2xl:gap-x-0 gap-y-2 mt-6 lg:mt-8 w-1/2">
          <div className="relative group overflow-hidden w-full h-[180px] md:h-[220px] lg:h-[350px] xl:h-[400px] border-[2px] border-primaryBg lg:hover:border-[0px] transition-all duration-500 ease-in-out">
            <img
              src={carImg2}
              alt="Gallery item"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform lg:group-hover:scale-105"
            />
            <div className="absolute bottom-[-150%] inset-x-0 inset-y-[56%] bg-black bg-opacity-50 flex flex-row justify-center items-center opacity-0 lg:group-hover:opacity-100 lg:group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <div className="flex flex-col">
                <span className="text-xl lg:text-3xl text-white font-daysOne">
                  Mitsubishi Lancer
                </span>

                <span className="text-xs lg:text-sm text-white text-opacity-65 font-lexendDeca"></span>
              </div>

              <div className="flex justify-center mx-32 lg:mx-16 h-2/3">
                <div className="border-[1px] border-white border-opacity-75 h-full"></div>
              </div>

              <span className="text-sm lg:text-xs text-white text-justify w-2/5 font-lexendDeca">
                Award won: Single 8 Raw Pro Champion
              </span>
            </div>
          </div>

          <div className="md:grid lg:grid-cols-2 md:gap-x-2 flex flex-col gap-y-2">
            <div className="flex relative group w-full h-[180px] md:h-[220px] lg:h-[290px]">
              <img
                src={carImg3}
                alt=""
                className="block absolute w-[99%] h-[176px] md:h-[216px] lg:h-[286px] top-[2px] left-[2px] object-cover transition-transform duration-500 ease-in-out transform lg:group-hover:scale-105"
              />
              <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-75 flex flex-col justify-center items-start opacity-0 lg:group-hover:opacity-100 lg:group-hover:bottom-0 transition-all duration-500 ease-in-out">
                <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-4">
                  Mitsubishi Lancer
                </span>

                <span className="text-xs lg:text-xs text-white font-lexendDeca px-4">
                  Award won: Best Lancer
                </span>
              </div>
            </div>

            <div className="flex relative group w-full h-[180px] md:h-[220px] lg:h-[290px]">
              <img
                src={carImg1}
                alt="Honda Civic Type R"
                className="block absolute w-[99%] h-[176px] md:h-[216px] lg:h-[286px] top-[2px] left-[2px] object-cover transition-transform duration-500 ease-in-out transform lg:group-hover:scale-105"
              />
              <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-75 flex flex-col justify-center items-start opacity-0 lg:group-hover:opacity-100 lg:group-hover:bottom-0 transition-all duration-500 ease-in-out">
                <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-12">
                  Honda Civic Type R
                </span>

                <span className="text-xs lg:text-xs text-white font-lexendDeca px-12">
                  Awards Won: Best daily driven car and Best SPL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
