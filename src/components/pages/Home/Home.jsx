import { Button } from "../../Button";
import { PhoneCall, Clock9, Phone, Moon } from "lucide-react";

function Home() {
  return (
    <>
      <section className="flex bg-home-pattern bg-center bg-cover min-h-[100vh] leading-[30px] sm:leading-[40px] lg:leading-[60px] md:leading-[30px] justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full bg-rgbaBlack min-h-[100vh]">
          <h2 className="text-center font-stalinist text-white text-xl sm:text-3xl lg:text-[43.5px] md:text-[29px] uppercase drop-shadow-neonWhite">
            Manila Brothers
          </h2>
          <h2 className="text-center font-stalinist text-white text-[31px] sm:text-[46px] lg:text-[66px] md:text-[44px] uppercase drop-shadow-neonWhite">
            Autoworks
          </h2>
          <p className="text-center text-2xl md:text-[23px] lg:text-2xl text-white mb-24">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot;
          </p>
          <Button className="flex gap-2 uppercase bg-primaryBg font-lexendDeca shadow-primaryBg lg:text-2xl h-[40px] w-[350px] lg:w-[460px] md:width-[300px] rounded-md shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_10px_#08f,0_0_20px_#08f]">
            <PhoneCall />
            Book an Appointment Now
          </Button>
          <hr className="w-[320px] lg:w-[450px] mt-5 border-2 border-primaryBg shadow-glow" />
        </div>
      </section>
      <div className="bg-black">
        <section className="grid text-white md:grid-cols-3 md:h-36 max-w-[140rem] mx-auto">
          <div className="flex flex-col md:flex-row bg-black w-full p-4 items-center justify-center">
            <Clock9 className="w-[160px] md:w-[70px] lg:w-[90px] h-auto md:mr-4" />
            <div className="flex flex-col text-center md:text-left">
              <h1 className="font-bold font-lexendDeca">Working Hours</h1>
              <p>Monday to Saturday: 8 AM - 8 PM</p>
              <p>Friday Closed</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-darkBlue w-full p-4 items-center justify-center">
            <Moon className="w-[160px] md:w-[70px] lg:w-[90px] h-auto md:mr-4" />
            <div className="flex flex-col text-center md:text-left">
              <h1 className="font-bold font-lexendDeca">Ramadan Timings</h1>
              <p>Monday to Saturday: 9 AM - 4 PM</p>
              <p>Friday Closed</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-black w-full p-4 items-center justify-center">
            <Phone className="w-[160px] md:w-[70px] lg:w-[90px] h-auto md:mr-4" />
            <div className="flex flex-col text-center md:text-left">
              <h1 className="font-bold font-lexendDeca">Contact Us Directly</h1>
              <p>+052 304 1850</p>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="flex flex-col-reverse md:flex-row md:h-[485px]">
          <div className="relative bg-darkRed text-white place-content-center md:w-[50%] p-20 md:mr-4 md:before:content-[''] md:before:absolute md:before:top-0 md:before:left-0 md:before:w-full md:before:h-full md:before:bg-darkRed md:before:transform md:before:skew-x-6 md:before:origin-top-left md:before:z-[-1]">
            <h1 className="text-[2.1875em] sm:text-[1.5em] lg:text-[2.5em] font-daysOne uppercase">
              We Provide casa quality <br /> service.
            </h1>
            <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officia voluptate quibusdam eum nostrum praesentium. Sequi nulla
              quo perspiciatis nihil voluptates!&quot;
            </p>
            <Button
              className="bg-primaryBg uppercase shadow-glow text-black mt-4"
              size="md"
            >
              Book Now
            </Button>
          </div>
          <div className="bg-casa-pattern bg-center bg-cover text-white p-10 w-full h-[500px] md:h-[485px] md:absolute md:-z-10"></div>
        </div>
      </section>
      <hr className="drop-shadow-neonRed shadow-glowRed bg-mainRed border-none h-[2px]" />
    </>
  );
}

export default Home;
