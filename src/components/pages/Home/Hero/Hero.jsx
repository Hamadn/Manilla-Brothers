import { PhoneCall } from "lucide-react";
import { Button } from "../../../Button";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="flex bg-home-pattern bg-center bg-cover min-h-[100vh] leading-[30px] sm:leading-[40px] lg:leading-[60px] md:leading-[30px] justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full bg-rgbaBlack min-h-[100vh]">
        <h2 className="text-center font-stalinist text-white text-xl sm:text-3xl lg:text-[43.5px] md:text-[29px] uppercase drop-shadow-neonWhite">
          Manila Brothers
        </h2>
        <h2 className="text-center font-stalinist text-white text-[31px] sm:text-[46px] lg:text-[66px] md:text-[44px] uppercase drop-shadow-neonWhite pb-2">
          Autoworks
        </h2>
        <p className="text-center font-lexendDeca text-2xl md:text-[23px] lg:text-2xl text-white mb-24">
          Trusted auto experts. Unbeatable prices. <br /> Your car deserves the best 
          care — choose us!
        </p>
        <Button className="flex gap-2 uppercase bg-primaryBg font-lexendDeca lg:text-xl h-[40px] w-[350px] lg:w-[460px] md:width-[300px] rounded-md">
          <PhoneCall />
          <Link to={"/bookings"}>Book an Appointment Now</Link>
        </Button>
      </div>
    </section>
  );
}

export default Hero;
