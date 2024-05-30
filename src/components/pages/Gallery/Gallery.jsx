import rectangleBlue from "../../images/rectangleBlue.svg";
import carImg1 from "../../images/car1.png";
import carImg2 from "../../images/car2.png";
import chevronDown from "../../images/chevronDown.svg";
import { Img } from "@/components/Img";
import { Button } from "../../Button";
import { useState } from "react";

function Gallery() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  
  return(
    <>
      <div className=" bg-darkRed text-white flex flex-col justify-center items-center py-24">

        <div className="w-full flex flex-row justify-center items-center">  {/*title container*/}
          <span>
            <img
              src={rectangleBlue}
              alt="rectangle1"
              className="-scale-x-100 w-[90px] md:w-[100px]"
            />
          </span>
          
          <span className="text-sm lg:text-xl text-mainBlue uppercase font-daysOne mx-1 drop-shadow-neonBlue"> {/*title text*/}
            Featured Works
          </span>

          <span>
            <img 
              src={rectangleBlue} 
              alt="rectangle2" 
              className=" w-[9 0px] md:w-[100px]"
              />
          </span>
        </div>

        <span className="text-xl lg:text-4xl text-white uppercase font-daysOne text-center mt-1 lg:mt-5"> {/*description text*/}
          DISCOVER AUTOMOTIVE EXCELLENCE!
        </span>

        {/*gallery*/}
        <div className="gallery flex flex-wrap flex-col md:flex-row lg:flex-row justify-center items-center gap-x-2 2xl:gap-x-0 gap-y-2 mt-6 lg:mt-8 w-3/4">

          {/*rectangle*/}
          <div className="relative group overflow-hidden w-full h-[180px] md:h-[220px] lg:h-[350px] xl:h-[400px] border-[2px] border-primaryBg lg:hover:border-[0px] transition-all duration-500 ease-in-out">
            <Img
              src={carImg2}
              alt="Gallery item"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform lg:group-hover:scale-105"
            />
            <div className="absolute bottom-[-150%] inset-x-0 inset-y-[56%] bg-black bg-opacity-50 flex flex-row justify-center items-center opacity-0 lg:group-hover:opacity-100 lg:group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <div className="flex flex-col h-2/3">
                <span className="text-xl lg:text-3xl text-white mb-2 font-daysOne">
                  Honda Civic Type R
                </span>

                <span className="text-xs lg:text-sm text-white text-opacity-65 font-lexendDeca">
                  By LeBron James
                </span>
              </div>

              <div className="flex justify-center mx-32 lg:mx-16 h-2/3">
                <div className="border-[1px] border-white border-opacity-65 h-full"></div>
              </div>

              <span className="text-sm lg:text-xs text-white text-opacity-65 text-justify w-2/5 font-lexendDeca">
                Lorem ipsum dolor sit amet. Et ipsum laboriosam vel itaque incidunt qui earum adipisci ut iusto porro hic Quis omnis quo soluta consequatur ut voluptatem quaerat. Et dolorem perferendis sit facere itaque 33 officia officia.<br /><br />Et ipsum laboriosam vel itaque incidunt qui earum adipisci ut iusto porro hic Quis omnis quo soluta consequatur ut voluptatem quaerat. Et dolorem perferendis.
              </span>
            </div>
          </div>

          {/*3 parallelograms*/}
          <div className={`${showMore ? "flex" : "hidden"} relative lg:flex group w-full md:w-[49%] lg:w-[38.5%] 2xl:w-[39%] h-[180px] md:h-[220px] lg:h-[290px] lg:angledRight bg-primaryBg`}>
            <Img
              src={carImg1}
              alt=""
              className="block absolute w-[99%] h-[176px] md:h-[216px] lg:h-[286px] top-[2px] left-[2px] lg:angledRight object-cover transition-transform duration-500 ease-in-out transform lg:group-hover:scale-105 "
            />
            <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-50 flex flex-col justify-center items-start opacity-0 lg:group-hover:opacity-100 lg:group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-4">
                Honda Civic Type R
              </span>

              <span className="text-xs lg:text-xs text-white text-opacity-65 font-lexendDeca px-4">
                By LeBron James
              </span>
            </div>
          </div>
          
          <div className={`${showMore ? "flex" : "hidden"} relative lg:flex group w-full md:w-[49%] lg:w-[38.5%] 2xl:w-[39%] h-[180px] md:h-[220px] lg:h-[290px] lg:angledBoth lg:-mx-[4.8rem] xl:-mx-[5.4rem] 2xl:-mx-[6.2rem] bg-primaryBg`}>
            <Img
              src={carImg2}
              alt=""
              className="block absolute w-[99%] h-[176px] md:h-[216px] lg:h-[286px] top-[2px] left-[2px] lg:angledBoth object-cover transition-transform duration-500 ease-in-out transform lg:group-hover:scale-105"
            />
            <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-50 flex flex-col justify-center items-start opacity-0 lg:group-hover:opacity-100 lg:group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-12">
                Honda Civic Type R
              </span>

              <span className="text-xs lg:text-xs text-white text-opacity-65 font-lexendDeca px-12">
                By LeBron James
              </span>
            </div>
          </div>
          
          <div className={`${showMore ? "flex" : "hidden"} relative lg:flex group w-full lg:w-[38.5%] 2xl:w-[39%] h-[180px] md:h-[220px] lg:h-[290px] lg:angledLeft bg-primaryBg`}>
            <Img
              src={carImg1}
              alt=""
              className="block absolute w-[99%] h-[176px] md:h-[216px] lg:h-[286px] top-[2px] right-[2px] lg:angledLeft object-cover transition-transform duration-500 ease-in-out transform lg:group-hover:scale-105 "
            />

            <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-50 flex flex-col justify-center items-start opacity-0 lg:group-hover:opacity-100 lg:group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-12">
                Honda Civic Type R
              </span>

              <span className="text-xs lg:text-xs text-white text-opacity-65 font-lexendDeca px-12">
                By LeBron James
              </span>
            </div>

          </div> 

          {/*2 parallelograms*/}
          <div className="relative group w-full md:w-[49%] lg:w-[56%] h-[180px] md:h-[220px] lg:h-[260px] lg:angledRight bg-primaryBg">
            <Img
              src={carImg1}
              alt=""
              className="block absolute w-[99%] lg:w-[98.8%] h-[176px] md:h-[216px] lg:h-[256px] top-[2px] left-[2px] lg:angledRight object-cover transition-transform duration-500 ease-in-out transform lg:group-hover:scale-105 "
            />
            <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-50 flex flex-col justify-center items-start opacity-0 lg:group-hover:opacity-100 lg:group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-8">
                Honda Civic Type R
              </span>

              <span className="text-xs lg:text-xs text-white text-opacity-65 font-lexendDeca px-8">
                By LeBron James
              </span>
            </div>
          </div>
    
          <div className="relative group w-full md:w-[49%] lg:w-[56%] h-[180px] md:h-[220px] lg:h-[260px] lg:-ml-[7.4rem] xl:-ml-[8rem] 2xl:-ml-[9rem] lg:angledLeft bg-primaryBg">
            <Img
              src={carImg2}
              alt=""
              className="block absolute w-[99%] lg:w-[98.8%] h-[176px] md:h-[216px] lg:h-[256px] top-[2px] right-[2px] lg:angledLeft object-cover transition-transform duration-500 ease-in-out transform lg:group-hover:scale-105 "
            />
            <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-50 flex flex-col justify-center items-start opacity-0 lg:group-hover:opacity-100 lg:group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-12">
                Honda Civic Type R
              </span>

              <span className="text-xs lg:text-xs text-white text-opacity-65 font-lexendDeca px-12">
                By LeBron James
              </span>
            </div>
          </div>

          
          {/*rectangle*/}
          <div className="relative lg:hidden group overflow-hidden w-full h-[180px] md:h-[220px] lg:h-[350px] border-[2px] border-primaryBg lg:hover:border-[0px] transition-all duration-500 ease-in-out">
            <Img
              src={carImg2}
              alt="Gallery item"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform lg:group-hover:scale-105"
            />
            <div className="absolute bottom-[-150%] inset-x-0 inset-y-[56%] bg-black bg-opacity-50 flex flex-row justify-center items-center opacity-0 lg:group-hover:opacity-100 lg:group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <div className="flex flex-col h-2/3">
                <span className="text-xl lg:text-3xl text-white mb-2 font-daysOne">
                  Honda Civic Type R
                </span>

                <span className="text-xs lg:text-sm text-white text-opacity-65 font-lexendDeca">
                  By LeBron James
                </span>
              </div>

              <div className="flex justify-center mx-32  h-2/3">
                <div className="border-[1px] border-white border-opacity-65 h-full"></div>
              </div>

              <span className="text-sm lg:xs text-white text-opacity-65 text-justify w-2/5 font-lexendDeca">
                Lorem ipsum dolor sit amet. Et ipsum laboriosam vel itaque incidunt qui earum adipisci ut iusto porro hic Quis omnis quo soluta consequatur ut voluptatem quaerat. Et dolorem perferendis sit facere itaque 33 officia officia.<br /><br />Et ipsum laboriosam vel itaque incidunt qui earum adipisci ut iusto porro hic Quis omnis quo soluta consequatur ut voluptatem quaerat. Et dolorem perferendis.
              </span>
            </div>
          </div>

          {/*3 parallelograms*/}
          <div className={`${showMore ? "flex" : "hidden"} relative lg:flex group w-full md:w-[49%] lg:w-[38.5%] 2xl:w-[39%] h-[180px] md:h-[220px] lg:h-[290px] lg:angledRight bg-primaryBg`}>
            <Img
              src={carImg1}
              alt=""
              className="block absolute w-[99%] h-[176px] md:h-[216px] lg:h-[286px] top-[2px] left-[2px] lg:angledRight object-cover transition-transform duration-500 ease-in-out transform lg:group-hover:scale-105 "
            />
            <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-50 flex flex-col justify-center items-start opacity-0 lg:group-hover:opacity-100 lg:group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-4">
                Honda Civic Type R
              </span>

              <span className="text-xs lg:text-xs text-white text-opacity-65 font-lexendDeca px-4">
                By LeBron James
              </span>
            </div>
          </div>
          
          <div className={`${showMore ? "flex" : "hidden"} relative lg:flex group w-full md:w-[49%] lg:w-[38.5%] 2xl:w-[39%] h-[180px] md:h-[220px] lg:h-[290px] lg:angledBoth lg:-mx-[4.8rem] xl:-mx-[5.4rem] 2xl:-mx-[6.2rem] bg-primaryBg`}>
            <Img
              src={carImg2}
              alt=""
              className="block absolute w-[99%] h-[176px] md:h-[216px] lg:h-[286px] top-[2px] left-[2px] lg:angledBoth object-cover transition-transform duration-500 ease-in-out transform lg:group-hover:scale-105"
            />
            <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-50 flex flex-col justify-center items-start opacity-0 lg:group-hover:opacity-100 lg:group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-12">
                Honda Civic Type R
              </span>

              <span className="text-xs lg:text-xs text-white text-opacity-65 font-lexendDeca px-12">
                By LeBron James
              </span>
            </div>
          </div>
          
          <div className={`${showMore ? "flex" : "hidden"} relative lg:flex group w-full lg:w-[38.5%] 2xl:w-[39%] h-[180px] md:h-[220px] lg:h-[290px] lg:angledLeft bg-primaryBg`}>
            <Img
              src={carImg1}
              alt=""
              className="block absolute w-[99%] h-[176px] md:h-[216px] lg:h-[286px] top-[2px] right-[2px] lg:angledLeft object-cover transition-transform duration-500 ease-in-out transform lg:group-hover:scale-105 "
            />

            <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-50 flex flex-col justify-center items-start opacity-0 lg:group-hover:opacity-100 lg:group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-12">
                Honda Civic Type R
              </span>

              <span className="text-xs lg:text-xs text-white text-opacity-65 font-lexendDeca px-12">
                By LeBron James
              </span>
            </div>

          </div> 


        </div>  
        
        <Button   
          size="md" 
          className="font-lexendDeca bg-primaryBg rounded-full uppercase font-semibold text-black mt-10 drop-shadow-neonYellow flex flex-col lg:hidden"
          onClick={toggleShowMore}
          >
            {showMore ? "Show Less" : "Show More"}
        </Button>

        <span className={`mt-3 size-5 lg:hidden transition-transform duration-300 ${showMore ? "rotate-180" : "rotate-0"}`}>
          <img src={chevronDown} alt="chevron_down"/>
        </span>

      </div>
    </>
  )

}


export default Gallery;
