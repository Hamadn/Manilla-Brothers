import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./Hero/Hero";
import Info from "./Info/Info";
import Cta from "./Cta/Cta";
import Promotions from "./Promotions/Promotions";
import About from "./About/About";
import Features from "./Features/Features";
import Testimonials from "./Testimonials/Testimonials";
import Works from "./Works/Works";

function Home() {
  return (
    <>
      <Hero />
      <Info />
      <Cta />
      <hr className="drop-shadow-neonRed shadow-glowRed border-none h-[2px]" />
      <Promotions />
      <hr className="drop-shadow-neonRed shadow-glowRed border-none h-[2px]" />
      <About />
      <Features />
      <Testimonials />
      <hr className="drop-shadow-neonRed shadow-glowRed border-none h-[2px]" />
      <Works />
      <hr className="drop-shadow-neonRed shadow-glowRed border-none h-[2px]" />
    </>
  );
}

export default Home;
