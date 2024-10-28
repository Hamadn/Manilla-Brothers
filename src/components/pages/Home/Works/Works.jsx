import { Link } from "react-router-dom";
import { Button } from "../../../Button";

function Works() {
  return (
    <section className="relative bg-featured-works-pattern bg-center w-full h-full p-16 bg-cover flex flex-col items-center">
      <div className="absolute inset-0 bg-rgbaLightRed z-10"></div>
      <div className="text-2xl lg:text-5xl text-white drop-shadow-neonWhite w-full h-96 md:h-36  max-w-[120rem] font-daysOne text-left mt-1 lg:mt-2 z-20 relative">
        <h1 className="uppercase">Check out our featured works!</h1>
        <p className="text-white text-base drop-shadow-none font-lexendDeca z-20 pt-3">
          Explore how Manila Brothers Autoworks brings expert craftsmanship and
          meticulous care to every project.
          <br />
          Our featured works highlight our commitment to exceptional quality and
          attention to detail.
        </p>
      </div>
      <Button className="bg-white uppercase shadow-glowWhite border-1 text-2xl text-black mt-4 z-20 self-end h-[60px] w-[230px]">
        <Link to="/gallery">Visit Gallery</Link>
      </Button>
    </section>
  );
}

export default Works;
