import rectangleBlue from "/images/rectangleBlue.svg";
import painting from "/images/Painting.png";
import { Link } from "react-router-dom";

function Promotions() {
  return (
    <section className="grid bg-darkBlue py-10">
      <div className="text-center p-10 grid place-content-center">
        <section>
          <div className="w-full flex flex-row justify-center items-center">
            <span>
              <img
                src={rectangleBlue}
                alt="rectangle"
                className="-scale-x-100 w-[120px]"
              />
            </span>
            <span className="text-lg lg:text-xl text-mainBlue drop-shadow-neonBlue uppercase font-daysOne mx-1">
              Promotions
            </span>
            <span>
              <img src={rectangleBlue} alt="rectangle" className=" w-[120px]" />
            </span>
          </div>

          <span className="text-2xl lg:text-5xl text-white uppercase drop-shadow-neonWhite font-daysOne text-center mt-1 lg:mt-5">
            Drive Into Irresistible Promos!
          </span>
        </section>
        <section>
          <div className="flex flex-wrap justify-center items-center max-w-[150rem] gap-x-5 gap-y-12 md:gap-y-10 mt-10">
            <div className="flex w-[290px] xl:w-[370px] 2xl:w-[400px] relative">
              <img
                src={painting}
                alt="painting"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
                <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2">
                  <h2 className="text-lg lg:text-xl text-white font-daysOne mb-2 ">
                    Stay Tuned for Exciting Offers!
                  </h2>
                  <p className=" text-xs text-white font-lexendDeca">
                    We’re preparing great deals for your car. Check back soon
                    for special offers!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-primaryBg font-lexendDeca drop-shadow-neonYellow mt-44 text-center underline">
            <Link to="/services">See all promotions&gt;</Link>
          </p>
        </section>
      </div>
    </section>
  );
}

export default Promotions;
