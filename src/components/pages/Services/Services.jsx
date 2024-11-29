import rectangleBlue from "/images/rectangleBlue.svg";
import { PhoneCall } from "lucide-react";
import painting from "/images/Painting.png";
import mechanical from "/images/Mechanical.png";
import denting from "/images/Denting.png";
import gearSpecialist from "/images/Gear Specialist.png";
import acWorks from "/images/AC Works.png";
import electrical from "/images/Electric.png";
import computerDiagnostics from "/images/Computer Diagnostics.png";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/*services section*/}
      <div className="flex flex-col justify-center items-center py-16">
        <div className="w-full flex flex-row justify-center items-center">
          <span>
            <img
              src={rectangleBlue}
              alt="rectangle"
              className="-scale-x-100 w-[120px]"
            />
          </span>
          <span className="text-[18px] sm:text-xl lg:text-3xl text-mainBlue drop-shadow-neonBlue uppercase font-daysOne mx-1">
            Services
          </span>
          <span>
            <img src={rectangleBlue} alt="rectangle" className="w-[120px]" />
          </span>
        </div>

        <span className="text-[20px] sm:text-2xl lg:text-5xl text-black uppercase font-daysOne text-center">
          MANILA BROTHER’S SPECIALTIES
        </span>

        <span
          className="text-[13px] lg:text-sm text-black uppercase font-lexendDeca text-center mt-1 lg:mt-5"
          style={{ wordSpacing: "0.16rem" }}
        >
          PANEL & FULL BODY PAINT | DENTING | ENGINE DIAGNOSTICS & REPAIRS |
          TRANSMISSION REBUILD AND REPAIRS | <br />
          A/C REPAIRS | ELECTRICAL REPAIRS | OIL CHANGE, WHEEL BALANCING AND
          OTHER ROUTINE MAINTENANCE
        </span>

        {/*services container*/}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 xl:gap-x-4 xl:gap-y-6 2xl:gap-x-6 2xl:gap-y-8 mt-7 lg:mt-10 w-5/6">
          <div className="flex w-[250px] md:w-[280px]  lg:w-[300px] xl:w-[330px] 2xl:w-[400px] flex-row justify-center items-center ">
            <img
              src={painting}
              alt="painting"
              className="w-full object-cover"
            />

            <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center">
              <span className="text-[14px] sm:text-xs xl:text-xl text-white font-daysOne px-4 lg:px-8 py-2 text-center">
                Panel and Full Body Paint
              </span>
            </div>
          </div>

          <div className="flex w-[250px] md:w-[280px]  lg:w-[300px] xl:w-[330px] 2xl:w-[400px] flex-row justify-center items-center ">
            <img src={denting} alt="denting" className="w-full object-cover" />

            <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center">
              <span className="text-[14px] sm:text-xs xl:text-xl text-white font-daysOne px-4 lg:px-8 py-2 text-center">
                Denting
              </span>
            </div>
          </div>

          <div className="flex w-[250px] md:w-[280px]  lg:w-[300px] xl:w-[330px] 2xl:w-[400px] flex-row justify-center items-center ">
            <img
              src={mechanical}
              alt="mechanical"
              className="w-full object-cover"
            />

            <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center">
              <span className="text-[14px] sm:text-xs xl:text-xl text-white font-daysOne px-4 lg:px-8 py-2 text-center">
                Engine Diagnostics
                <br /> and Repairs
              </span>
            </div>
          </div>

          <div className="flex w-[250px] md:w-[280px]  lg:w-[300px] xl:w-[330px] 2xl:w-[400px] flex-row justify-center items-center ">
            <img
              src={electrical}
              alt="electrical"
              className="w-full object-cover"
            />

            <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center">
              <span className="text-[14px] sm:text-xs xl:text-xl text-white font-daysOne px-4 lg:px-8 py-2 text-center">
                Transmission Rebuild
                <br /> and Repairs
              </span>
            </div>
          </div>

          <div className="flex w-[250px] md:w-[280px]  lg:w-[300px] xl:w-[330px] 2xl:w-[400px] flex-row justify-center items-center ">
            <img src={acWorks} alt="acWorks" className="w-full object-cover" />

            <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center">
              <span className="text-[14px] sm:text-xs xl:text-xl text-white font-daysOne px-4 lg:px-8 py-2 text-center">
                A/C Repairs
              </span>
            </div>
          </div>

          <div className="flex w-[250px] md:w-[280px]  lg:w-[300px] xl:w-[330px] 2xl:w-[400px] flex-row justify-center items-center ">
            <img
              src={computerDiagnostics}
              alt="computerDiagnostics"
              className="w-full object-cover"
            />

            <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center">
              <span className="text-[14px] sm:text-xs xl:text-xl text-white font-daysOne px-4 lg:px-8 py-2 text-center">
                Electrical Repairs
              </span>
            </div>
          </div>

          <div className="flex w-[250px] md:w-[280px]  lg:w-[300px] xl:w-[330px] 2xl:w-[400px] flex-row justify-center items-center ">
            <img
              src={gearSpecialist}
              alt="gearSpecialist"
              className="w-full object-cover"
            />

            <div className="absolute bg-black bg-opacity-70 flex flex-col justify-center item-center ">
              <span className="text-[13px] sm:text-xs xl:text-xl text-white font-daysOne px-4 lg:px-8 py-2 text-center">
                Oil Change, Wheel Balancing
                <br /> and Other Routine
                <br /> Maintenance
              </span>
            </div>
          </div>
        </div>

        <Button
          size="md"
          className="rounded-[4px] p-5 bg-primaryBg font-lexendDeca font-semibold text-black mt-10 transition-all duration-500 ease-in-out hover:scale-[1.06] hover:shadow-glow "
        >
          <span className="mr-5">
            <PhoneCall />
          </span>
          <Link to={"/bookings"}>BOOK AN APPOINTMENT NOW</Link>
        </Button>
      </div>
      {/*promotions section*/}
      <hr className="drop-shadow-neonBlue shadow-glowBlue border-none h-[2px]" />
      <div className="bg-darkRed flex flex-col justify-center items-center py-24">
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
          <span className="text-[18px] sm:text-xl lg:text-3xl text-mainBlue drop-shadow-neonBlue uppercase font-daysOne mx-1">
            {" "}
            {/*title text*/}
            Promotions
          </span>
          <span>
            <img src={rectangleBlue} alt="rectangle" className=" w-[120px]" />
          </span>
        </div>

        <span className="text-xl lg:text-5xl text-white uppercase font-daysOne text-center">
          {" "}
          {/*description text*/}
          DRIVE INTO IRRESISTIBLE PROMOS!
        </span>

        {/*promo container*/}
        <div className="flex flex-wrap lg:flex-row justify-center items-center gap-x-10 gap-y-12 md:gap-x-8 md:gap-y-10 mt-10 w-4/5 lg:w-5/6">
          <div className="lg:flex w-[290px] xl:w-[370px] 2xl:w-[400px] relative">
            <img
              src={painting}
              alt="acWorks"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
              <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2">
                <h2 className="text-[16px] sm:text-lg lg:text-xl text-white font-bold font-lexendDeca mb-2 text-center">
                  Stay Tuned for Exciting Offers!
                </h2>
                <p className="text-xs text-white font-lexendDeca text-center">
                  We’re preparing great deals for your car. Check back soon for
                  special offers!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="drop-shadow-neonBlue shadow-glowBlue border-none h-[2px]" />
    </>
  );
}

export default Services;
