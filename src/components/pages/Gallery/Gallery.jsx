import rectangleBlue from "../../images/rectangleBlue.svg";
import carImg1 from "../../images/car1.png";
import carImg2 from "../../images/car2.png";
import { Img } from "@/components/Img";


function Gallery() {
  return(
    <>
      <div className=" bg-darkRed text-white flex flex-col justify-center items-center py-24">

        <div className="w-full flex flex-row justify-center items-center">  {/*title container*/}
          <span>
            <img
              src={rectangleBlue}
              alt="rectangle"
              className="-scale-x-100 w-[120px]"
            />
          </span>
          
          <span className="text-lg lg:text-xl text-mainBlue uppercase font-daysOne mx-1 drop-shadow-neonBlue"> {/*title text*/}
            Promotions
          </span>

          <span>
            <img 
              src={rectangleBlue} 
              alt="rectangle" 
              className=" w-[120px]"
              />
          </span>
        </div>

        <span className="text-2xl lg:text-4xl text-white uppercase font-daysOne text-center mt-1 lg:mt-5"> {/*description text*/}
          DISCOVER AUTOMOTIVE EXCELLENCE!
        </span>

        {/*gallery*/}
        <div className="gallery flex flex-wrap flex-row justify-center items-center gap-y-4 mt-10 w-3/4">

          {/*rectangle*/}
          <div className="relative group overflow-hidden w-full h-[500px] border-[2px] border-primaryBg hover:border-[0px] transition-all duration-500 ease-in-out">
            <Img
              src={carImg2}
              alt="Gallery item"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute bottom-[-150%] inset-x-0 inset-y-[56%] bg-black bg-opacity-50 flex flex-row justify-center items-center opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-500 ease-in-out">
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
          <div className="relative group w-[39%] h-[300px] bg-primaryBg" style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)'}}>
            <Img
              src={carImg1}
              alt=""
              className="block absolute w-[99%] h-[296px] top-[2px] left-[2px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 "
              style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)'}}
            />
            <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-50 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-4">
                Honda Civic Type R
              </span>

              <span className="text-xs lg:text-xs text-white text-opacity-65 font-lexendDeca px-4">
                By LeBron James
              </span>
            </div>
          </div>
          
          <div className="relative group w-[39%] h-[300px] mx-[-97px] bg-primaryBg" style={{ clipPath: 'polygon(25% 0, 100% 0, 75% 100%, 0 100%)' }}>
            <Img
              src={carImg2}
              alt=""
              className="block absolute w-[99%] h-[296px] top-[2px] left-[2px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 "
              style={{ clipPath: 'polygon(25% 0, 100% 0, 75% 100%, 0 100%)' }}
            />
            <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-50 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-12">
                Honda Civic Type R
              </span>

              <span className="text-xs lg:text-xs text-white text-opacity-65 font-lexendDeca px-12">
                By LeBron James
              </span>
            </div>
          </div>

          <div className="relative group w-[39%] h-[300px] bg-primaryBg" style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }}>
            <Img
              src={carImg1}
              alt=""
              className="block absolute w-[99%] h-[296px] top-[2px] right-[2px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 "
              style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }}
            />
            <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-50 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-12">
                Honda Civic Type R
              </span>

              <span className="text-xs lg:text-xs text-white text-opacity-65 font-lexendDeca px-12">
                By LeBron James
              </span>
            </div>
          </div>

          {/*2 parallelograms*/}
          <div className="relative group w-[56.5%] h-[300px] bg-primaryBg" style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)'}}>
            <Img
              src={carImg1}
              alt=""
              className="block absolute w-[99%] h-[296px] top-[2px] left-[2px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 "
              style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)'}}
            />
                        <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-50 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-8">
                Honda Civic Type R
              </span>

              <span className="text-xs lg:text-xs text-white text-opacity-65 font-lexendDeca px-8">
                By LeBron James
              </span>
            </div>
          </div>
    
          <div className="relative group w-[56.5%] h-[300px] ml-[-150px] bg-primaryBg" style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }}>
            <Img
              src={carImg2}
              alt=""
              className="block absolute w-[99%] h-[296px] top-[2px] right-[2px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 "
              style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }}
            />
                        <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-50 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-12">
                Honda Civic Type R
              </span>

              <span className="text-xs lg:text-xs text-white text-opacity-65 font-lexendDeca px-12">
                By LeBron James
              </span>
            </div>
          </div>

          {/*3 parallelograms*/}
          <div className="relative group w-[39%] h-[300px] bg-primaryBg" style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)'}}>
            <Img
              src={carImg1}
              alt=""
              className="block absolute w-[99%] h-[296px] top-[2px] left-[2px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 "
              style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)'}}
            />
            <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-50 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-4">
                Honda Civic Type R
              </span>

              <span className="text-xs lg:text-xs text-white text-opacity-65 font-lexendDeca px-4">
                By LeBron James
              </span>
            </div>
          </div>
          
          <div className="relative group w-[39%] h-[300px] mx-[-97px] bg-primaryBg" style={{ clipPath: 'polygon(25% 0, 100% 0, 75% 100%, 0 100%)' }}>
            <Img
              src={carImg2}
              alt=""
              className="block absolute w-[99%] h-[296px] top-[2px] left-[2px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 "
              style={{ clipPath: 'polygon(25% 0, 100% 0, 75% 100%, 0 100%)' }}
            />
            <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-50 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-12">
                Honda Civic Type R
              </span>

              <span className="text-xs lg:text-xs text-white text-opacity-65 font-lexendDeca px-12">
                By LeBron James
              </span>
            </div>
          </div>

          <div className="relative group w-[39%] h-[300px] bg-primaryBg" style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }}>
            <Img
              src={carImg1}
              alt=""
              className="block absolute w-[99%] h-[296px] top-[2px] right-[2px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 "
              style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }}
            />
            <div className="absolute bottom-[-50%] inset-x-0 inset-y-[68%] bg-black bg-opacity-50 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-500 ease-in-out">
              <span className="text-xl lg:text-xl text-white mb-2 font-daysOne px-12">
                Honda Civic Type R
              </span>

              <span className="text-xs lg:text-xs text-white text-opacity-65 font-lexendDeca px-12">
                By LeBron James
              </span>
            </div>
          </div>
        </div>  

      </div>
    </>
  )

}


export default Gallery;
