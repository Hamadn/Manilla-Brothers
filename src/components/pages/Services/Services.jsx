import rectangleBlue from "../../../../public/images/rectangleBlue.svg";
import phoneIcon from "../../../../public/images/phoneIcon.svg";
import mechanicImg from "../../../../public/images/mechanic.png";
import { Img } from "../../Img";
import { Button } from "../../Button";

function Services() {
  return (
    <>
      {/*promotions section*/}
      <div className="bg-navyBlue flex flex-col justify-center items-center border-b-4 border-mainRed py-24">
        <div className="w-full flex flex-row justify-center items-center">
          {" "}
          {/*title container*/}
          <span>
            <img
              src={rectangleBlue}
              alt="rectangle"
              className="-scale-x-100 w-[120px]"
            />
          </span>
          <span className="text-lg lg:text-xl text-mainBlue uppercase font-daysOne mx-1">
            {" "}
            {/*title text*/}
            Promotions
          </span>
          <span>
            <img src={rectangleBlue} alt="rectangle" className=" w-[120px]" />
          </span>
        </div>

        <span className="text-2xl lg:text-5xl text-white uppercase font-daysOne text-center mt-1 lg:mt-5">
          {" "}
          {/*description text*/}
          DRIVE INTO IRRESISTIBLE PROMOS!
        </span>

        {/*promo container*/}
        <div className="flex flex-wrap lg:flex-row justify-center items-center gap-x-10 gap-y-12 md:gap-x-8 md:gap-y-10 mt-10 w-4/5 lg:w-5/6">
          <div className="flex w-[290px] xl:w-[370px] 2xl:w-[400px] relative">
            <Img
              src={mechanicImg}
              alt="mechanic"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
              {" "}
              {/*text container*/}
              <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2">
                {" "}
                {/*text container*/}
                <h2 className="text-lg lg:text-xl text-white font-daysOne mb-2 ">
                  Promotion/Offer Title
                </h2>
                <p className=" text-xs text-white font-lexendDeca">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-[290px] xl:w-[370px] 2xl:w-[400px] relative">
            <Img
              src={mechanicImg}
              alt="mechanic"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
              {" "}
              {/*text container*/}
              <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2">
                {" "}
                {/*text container*/}
                <h2 className="text-lg lg:text-xl text-white font-daysOne mb-2 ">
                  Promotion/Offer Title
                </h2>
                <p className=" text-xs text-white font-lexendDeca">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-[290px] xl:w-[370px] 2xl:w-[400px] relative">
            <Img
              src={mechanicImg}
              alt="mechanic"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
              {" "}
              {/*text container*/}
              <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2">
                {" "}
                {/*text container*/}
                <h2 className="text-lg lg:text-xl text-white font-daysOne mb-2 ">
                  Promotion/Offer Title
                </h2>
                <p className=" text-xs text-white font-lexendDeca">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex w-[290px] xl:w-[370px] 2xl:w-[400px] relative">
            <Img
              src={mechanicImg}
              alt="mechanic"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
              {" "}
              {/*text container*/}
              <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2">
                {" "}
                {/*text container*/}
                <h2 className="text-lg lg:text-xl text-white font-daysOne mb-2 ">
                  Promotion/Offer Title
                </h2>
                <p className=" text-xs text-white font-lexendDeca">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex w-[290px] xl:w-[370px] 2xl:w-[400px] relative">
            <Img
              src={mechanicImg}
              alt="mechanic"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
              {" "}
              {/*text container*/}
              <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2">
                {" "}
                {/*text container*/}
                <h2 className="text-lg lg:text-xl text-white font-daysOne mb-2 ">
                  Promotion/Offer Title
                </h2>
                <p className="text-sm text-white font-lexendDeca">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex w-[290px] xl:w-[370px] 2xl:w-[400px] relative">
            <Img
              src={mechanicImg}
              alt="mechanic"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
              {" "}
              {/*text container*/}
              <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2">
                {" "}
                {/*text container*/}
                <h2 className="text-lg lg:text-xl text-white font-daysOne mb-2 ">
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
        <div className="w-full flex flex-row justify-center items-center">
          {" "}
          {/*title container*/}
          <span>
            <img
              src={rectangleBlue}
              alt="rectangle"
              className="-scale-x-100 w-[120px]"
            />
          </span>
          <span className="text-lg lg:text-xl text-mainBlue uppercase font-daysOne mx-1">
            {" "}
            {/*title text*/}
            Services
          </span>
          <span>
            <img src={rectangleBlue} alt="rectangle" className="w-[120px]" />
          </span>
        </div>

        <span className="text-2xl lg:text-5xl text-black uppercase font-daysOne text-center mt-1 lg:mt-5">
          {" "}
          {/*description text*/}
          MANILA BROTHER’S SPECIALTIES
        </span>

        <span
          className="text-[9px] lg:text-sm text-black uppercase font-lexendDeca text-center mt-1 lg:mt-5"
          style={{ wordSpacing: "0.16rem" }}
        >
          PAINTING DENTING MECHANICAL ELECTRICAL A/C WORKS COMPUTER DIAGNOSTICS
          GEAR SPECIALISTS
        </span>

        {/*services container*/}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 xl:gap-x-4 xl:gap-y-6 2xl:gap-x-6 2xl:gap-y-8 mt-7 lg:mt-10 w-5/6">
          {/*painting*/}
          <div className="flex w-[250px] md:w-[280px]  lg:w-[300px] xl:w-[330px] 2xl:w-[400px] flex-row justify-center items-center ">
            <Img
              src={mechanicImg}
              alt="mechanic"
              className="w-full object-cover"
            />

            <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center">
              {" "}
              {/*text container*/}
              <span className="text-xs xl:text-xl text-white font-daysOne px-4 lg:px-8 py-2 ">
                Painting
              </span>
            </div>
          </div>

          {/*denting*/}
          <div className="flex w-[250px] md:w-[280px]  lg:w-[300px] xl:w-[330px] 2xl:w-[400px] flex-row justify-center items-center ">
            <Img
              src={mechanicImg}
              alt="mechanic"
              className="w-full object-cover"
            />

            <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center">
              {" "}
              {/*text container*/}
              <span className="text-xs xl:text-xl text-white font-daysOne px-4 lg:px-8 py-2 ">
                Denting
              </span>
            </div>
          </div>

          {/*mechanical*/}
          <div className="flex w-[250px] md:w-[280px]  lg:w-[300px] xl:w-[330px] 2xl:w-[400px] flex-row justify-center items-center ">
            <Img
              src={mechanicImg}
              alt="mechanic"
              className="w-full object-cover"
            />

            <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center">
              {" "}
              {/*text container*/}
              <span className="text-xs xl:text-xl text-white font-daysOne px-4 lg:px-8 py-2 ">
                Mechanical
              </span>
            </div>
          </div>

          {/*electrical*/}
          <div className="flex w-[250px] md:w-[280px]  lg:w-[300px] xl:w-[330px] 2xl:w-[400px] flex-row justify-center items-center ">
            <Img
              src={mechanicImg}
              alt="mechanic"
              className="w-full object-cover"
            />

            <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center">
              {" "}
              {/*text container*/}
              <span className="text-xs xl:text-xl text-white font-daysOne px-4 lg:px-8 py-2 ">
                Electrical
              </span>
            </div>
          </div>

          {/*ac works*/}
          <div className="flex w-[250px] md:w-[280px]  lg:w-[300px] xl:w-[330px] 2xl:w-[400px] flex-row justify-center items-center ">
            <Img
              src={mechanicImg}
              alt="mechanic"
              className="w-full object-cover"
            />

            <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center">
              {" "}
              {/*text container*/}
              <span className="text-xs xl:text-xl text-white font-daysOne px-4 lg:px-8 py-2 ">
                A/C works
              </span>
            </div>
          </div>

          {/*computer diagnostics*/}
          <div className="flex w-[250px] md:w-[280px]  lg:w-[300px] xl:w-[330px] 2xl:w-[400px] flex-row justify-center items-center ">
            <Img
              src={mechanicImg}
              alt="mechanic"
              className="w-full object-cover"
            />

            <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center">
              {" "}
              {/*text container*/}
              <span className="text-xs xl:text-xl text-white font-daysOne px-4 lg:px-8 py-2 ">
                Computer Diagnostics
              </span>
            </div>
          </div>

          {/*gear specialist*/}
          <div className="flex w-[250px] md:w-[280px]  lg:w-[300px] xl:w-[330px] 2xl:w-[400px] flex-row justify-center items-center ">
            <Img
              src={mechanicImg}
              alt="mechanic"
              className="w-full object-cover"
            />

            <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center ">
              {" "}
              {/*text container*/}
              <span className="text-xs xl:text-xl text-white font-daysOne px-4 lg:px-8 py-2 ">
                Gear Specialist
              </span>
            </div>
          </div>
        </div>

        <Button
          size="md"
          className="rounded-[4px] p-5 bg-primaryBg font-lexendDeca font-semibold text-black mt-10 transition-all duration-500 ease-in-out hover:scale-[1.06] hover:shadow-glow "
        >
          <span className=" mr-5">
            <img src={phoneIcon} alt="phone" />
          </span>
          BOOK AN APPOINTMENT NOW
        </Button>
      </div>
    </>
  );
}

export default Services;
