import rectangleBlue from "../../images/rectangleBlue.svg";
import mechanicImg from "../../images/mechanic.png";
import { Img } from "../../Img";

function Services() {
  return (
  <>
    {/*promotions section*/}
    <div className="bg-navyBlue flex flex-col justify-center items-center border-b-2 border-mainRed shadow-bottom py-16"> 
      <div className="w-full flex flex-row justify-center items-center mt-[120px] md:mt-[0px]">  {/*title container*/}
        <span>
          <img
            src={rectangleBlue}
            alt="rectangle"
            className="-scale-x-100"
          />
        </span>
        <span className="text-2xl text-white uppercase font-daysOne mx-1 neon-text"> {/*title text*/}
          Promotions
        </span>
        <span>
          <img src={rectangleBlue} alt="rectangle" />
        </span>
      </div>

      <span className="text-5xl text-white uppercase font-daysOne text-center mt-5"> {/*description text*/}
        DRIVE INTO IRRESISTIBLE PROMOS!
      </span>
      
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-12 mt-10"> {/*promo container*/}
        <div className="flex w-[400px] relative">
          <Img
            src={mechanicImg}
            alt="mechanic"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4"> {/*text container*/}
            <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2"> {/*text container*/}
              <h2 className="text-2xl text-white font-daysOne mb-2 ">
                Promotion/Offer Title
              </h2>
              <p className="text-sm text-white font-lexendDeca">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              </div>
          </div>
        </div>

        <div className="flex w-[400px] relative">
          <Img
            src={mechanicImg}
            alt="mechanic"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4"> {/*text container*/}
            <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2"> {/*text container*/}
              <h2 className="text-2xl text-white font-daysOne mb-2 ">
                Promotion/Offer Title
              </h2>
              <p className="text-sm text-white font-lexendDeca">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              </div>
          </div>
        </div>

        <div className="flex w-[400px] relative">
          <Img
            src={mechanicImg}
            alt="mechanic"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4"> {/*text container*/}
            <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2"> {/*text container*/}
              <h2 className="text-2xl text-white font-daysOne mb-2 ">
                Promotion/Offer Title
              </h2>
              <p className="text-sm text-white font-lexendDeca">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              </div>
          </div>
        </div>

        <div className="flex w-[400px] relative">
          <Img
            src={mechanicImg}
            alt="mechanic"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4"> {/*text container*/}
            <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2"> {/*text container*/}
              <h2 className="text-2xl text-white font-daysOne mb-2 ">
                Promotion/Offer Title
              </h2>
              <p className="text-sm text-white font-lexendDeca">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              </div>
          </div>
        </div>

        <div className="flex w-[400px] relative">
          <Img
            src={mechanicImg}
            alt="mechanic"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4"> {/*text container*/}
            <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2"> {/*text container*/}
              <h2 className="text-2xl text-white font-daysOne mb-2 ">
                Promotion/Offer Title
              </h2>
              <p className="text-sm text-white font-lexendDeca">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              </div>
          </div>
        </div>

        <div className="flex w-[400px] relative">
          <Img
            src={mechanicImg}
            alt="mechanic"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4"> {/*text container*/}
            <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2"> {/*text container*/}
              <h2 className="text-2xl text-white font-daysOne mb-2 ">
                Promotion/Offer Title
              </h2>
              <p className="text-sm text-white font-lexendDeca">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              </div>
          </div>
        </div>
      </div>
    </div>

    {/*services section*/}
    <div className="flex flex-col justify-center items-center py-16">
      <div className="w-full flex flex-row justify-center items-center mt-[120px] md:mt-0">  {/*title container*/}
        <span>
          <img
            src={rectangleBlue}
            alt="rectangle"
            className="-scale-x-100"
          />
        </span>
        <span className="text-2xl text-mainBlue uppercase font-daysOne mx-1"> {/*title text*/}
          Services
        </span>
        <span>
          <img src={rectangleBlue} alt="rectangle" />
        </span>
      </div>

      <span className="text-5xl text-black uppercase font-daysOne text-center mt-5"> {/*description text*/}
        MANILA BROTHER’S SPECIALTIES
      </span>

      <span className="text-sm text-black uppercase font-lexendDeca text-center mt-5 spacing" style={{ wordSpacing: '0.8rem' }}> {/*description text*/}
        PAINTING  DENTING MECHANICAL ELECTRICAL A/C WORKS COMPUTER DIAGNOSTICS GEAR SPECIALISTS
      </span>

      <div className="flex flex-wrap justify-center gap-x-10 gap-y-12 mt-10"> {/*services container*/}
        
        {/*painting*/}
        <div className="flex w-[400px] flex-row justify-center items-center shadow-blue"> 

          <Img
            src={mechanicImg}
            alt="mechanic"
            className="w-full object-cover"
          />

          <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center"> {/*text container*/}
            <span className="text-2xl text-white font-daysOne px-10 py-2 ">
              Painting
            </span>
          </div>

        </div>

        {/*denting*/}
        <div className="flex w-[400px] flex-row justify-center items-center shadow-blue"> 

          <Img
            src={mechanicImg}
            alt="mechanic"
            className="w-full object-cover"
          />

          <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center"> {/*text container*/}
            <span className="text-2xl text-white font-daysOne px-10 py-2 ">
              Denting
            </span>
          </div>

        </div>

        {/*mechanical*/}
        <div className="flex w-[400px] flex-row justify-center items-center shadow-blue"> 

          <Img
            src={mechanicImg}
            alt="mechanic"
            className="w-full object-cover"
          />

          <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center"> {/*text container*/}
            <span className="text-2xl text-white font-daysOne px-10 py-2 ">
              Mechanical
            </span>
          </div>

        </div>

        {/*electrical*/}
        <div className="flex w-[400px] flex-row justify-center items-center shadow-blue"> 

          <Img
            src={mechanicImg}
            alt="mechanic"
            className="w-full object-cover"
          />

          <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center"> {/*text container*/}
            <span className="text-2xl text-white font-daysOne px-10 py-2 ">
              Electrical
            </span>
          </div>

        </div>

        {/*ac works*/}
        <div className="flex w-[400px] flex-row justify-center items-center shadow-blue"> 

          <Img
            src={mechanicImg}
            alt="mechanic"
            className="w-full object-cover"
          />

          <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center"> {/*text container*/}
            <span className="text-2xl text-white font-daysOne px-10 py-2 ">
              A/C works
            </span>
          </div>

        </div>

        {/*computer diagnostics*/}
        <div className="flex w-[400px] flex-row justify-center items-center shadow-blue"> 

          <Img
            src={mechanicImg}
            alt="mechanic"
            className="w-full object-cover"
          />

          <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center"> {/*text container*/}
            <span className="text-2xl text-white font-daysOne px-10 py-2 ">
              Computer Diagnostics
            </span>
          </div>

        </div>

        {/*gear specialist*/}
        <div className="flex w-[400px] flex-row justify-center items-center shadow-blue"> 

          <Img
            src={mechanicImg}
            alt="mechanic"
            className="w-full object-cover"
          />

          <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center "> {/*text container*/}
            <span className="text-2xl text-white font-daysOne px-10 py-2 ">
              Gear Specialist
            </span>
          </div>

        </div>
      </div>
    </div>
    
    
  </>
  )

}

export default Services;
