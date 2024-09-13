import { Link } from "react-router-dom";
import { Button } from "../../../Button";

function Cta() {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row md:h-[485px] relative">
        <div className="relative z-[1] bg-darkRed text-white place-content-center md:w-[50%] p-20 md:mr-4 md:before:content-[''] md:before:absolute md:before:top-0 md:before:w-full md:before:h-full md:before:bg-darkRed md:before:transform md:before:-skew-x-[9deg] md:before:z-[1]">
          <div className="text-center md:text-left relative z-[2]">
            <h1 className="text-[2.1875em] sm:text-[1.5em] lg:text-[2.5em] font-daysOne uppercase">
              We Provide casa quality <br /> service.
            </h1>
            <p>
              Visit us today and trust our experts to take care of your car. 
              With Manila <br />Brothers Autoworks, you can drive confidently knowing 
              your vehicle is in great hands!
            </p>
            <Button
              className="bg-primaryBg uppercase shadow-glow text-black mt-4 mx-auto md:mx-0"
              size="md"
            >
              <Link to={"/bookings"}>Book Now</Link>
            </Button>
          </div>
        </div>
        <div className="relative w-full md:w-[50%] h-[50vh] md:h-full">
          <div className="bg-casa-pattern bg-cover bg-center bg-no-repeat w-full h-full"></div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
