import { Button } from "../../Button";

function About() {
  return (
    <>
      <div className="bg-about-pattern h-[100vh] bg-cover bg-rgbaLightRed bg-no-repeat bg-blend-overlay grid place-items-center">
        <div className="grid place-content-center bg-darkRed w-[80%] text-white p-20 m-4 h-auto">
          <header className="font-daysOne text-2xl">Under the hood</header>
          <p>
          On March 9, 2021, MBworkz began its journey from humble beginnings. We started as a small shop, as operators of Caravan
          Garage, where we could only accommodate up to seven cars at a time. Despite the limited space and resources, our passion
          and commitment to delivering excellent service were unwavering.
          
          Located in Al Qusais 1, albeit in a different area back then, we slowly started to build a reputation. Our dedication and 
          hard work paid off as word spread about our budget-friendly prices and high-quality paintwork. Customers began to recognize
          and trust our services, leading to increased demand.

          As our clientele grew, so did our ambitions. With perseverance and continuous improvement, we expanded our garage to 
          accommodate 15 cars, providing more space and better facilities to serve our customers effectively. Our growth did not stop 
          there. We moved beyond just a name and a small shop; we evolved into something greater.
          
          With a bigger and better garage, we also achieved a significant milestone by securing our own license, no longer needing to 
          operate under a second party. This transformation marked the birth of Manila Brothers Autoworks, symbolizing our commitment 
          to quality and customer satisfaction.

          Today, Manila Brothers Autoworks stands as a testament to our journey from a modest paint shop to a well-respected name in 
          the automotive industry. Discover Manila Brothers Autoworks Filipino Garage in Dubai – your go-to for affordable auto repair
          and maintenance!
          </p>
        </div>
      </div>
      <section className="h-[630px]">
        <div className="flex flex-col-reverse md:flex-row md:h-full relative">
          <div className="relative w-full md:w-[50%] h-[50vh] md:h-full">
            <div className="absolute inset-0 bg-carlift-pattern bg-cover bg-center bg-no-repeat w-full h-full"></div>
          </div>
          <div className="relative z-[1] bg-blue text-white h-full place-content-center md:w-[50%] p-20 md:before:content-[''] md:before:absolute md:before:top-0 md:before:w-full md:before:-left-16 md:before:h-full md:before:bg-blue md:before:transform md:before:-skew-x-[9deg] md:before:z-[1]">
            <div className="text-center md:text-left relative z-[2]">
              <h1 className="text-[2.1875em] sm:text-[1.5em] lg:text-[2.5em] font-daysOne uppercase">
                We Provide casa quality <br /> service.
              </h1>
              <p>
                &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia voluptate quibusdam eum nostrum praesentium. Sequi nulla
                quo perspiciatis nihil voluptates!&quot;
              </p>
              <Button
                className="bg-primaryBg uppercase shadow-glow text-black mt-4 mx-auto md:mx-0"
                size="md"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[630px]">
        <div className="flex flex-col-reverse md:flex-row md:h-full relative">
          <div className="relative z-[1] bg-blue text-white h-full place-content-center md:w-[50%] p-20 md:mr-4 md:before:content-[''] md:before:absolute md:before:top-0 md:before:w-full md:before:h-full md:before:bg-blue md:before:transform md:before:skew-x-[9deg] md:before:z-[1]">
            <div className="text-center md:text-left relative z-[2]">
              <h1 className="text-[2.1875em] sm:text-[1.5em] lg:text-[2.5em] font-daysOne uppercase">
                We Provide casa quality <br /> service.
              </h1>
              <p>
                &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia voluptate quibusdam eum nostrum praesentium. Sequi nulla
                quo perspiciatis nihil voluptates!&quot;
              </p>
              <Button
                className="bg-primaryBg uppercase shadow-glow text-black mt-4 mx-auto md:mx-0"
                size="md"
              >
                Book Now
              </Button>
            </div>
          </div>
          <div className="relative w-full md:w-[50%] h-[50vh] md:h-full">
            <div className="absolute inset-0 bg-mechanic-pattern bg-cover bg-center bg-no-repeat w-full h-full"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
