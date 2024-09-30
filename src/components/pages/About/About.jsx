import { Button } from "../../Button";

function About() {
  return (
    <>
      <div className="bg-about-pattern h-[100vh] bg-cover bg-rgbaLightRed bg-no-repeat bg-blend-overlay grid place-items-center">
        <div className="grid place-content-center bg-darkRed w-[80%] text-white p-20 m-4 h-auto">
          <header className="font-daysOne text-3xl pb-2">Under the hood</header>
          <p className="text-base">
          On March 9, 2021, MBworkz began its journey from humble beginnings. We started as a small shop, as operators of Caravan
          Garage, where we could only accommodate up to seven cars at a time. Despite the limited space and resources, our passion
          and commitment to delivering excellent service were unwavering. <br /> <br /> 
          
          Located in Al Qusais 1, albeit in a different area back then, we slowly started to build a reputation. Our dedication and 
          hard work paid off as word spread about our budget-friendly prices and high-quality paintwork. Customers began to recognize
          and trust our services, leading to increased demand.

          As our clientele grew, so did our ambitions. With perseverance and continuous improvement, we expanded our garage to 
          accommodate 15 cars, providing more space and better facilities to serve our customers effectively. Our growth did not stop 
          there. We moved beyond just a name and a small shop; we evolved into something greater. <br /> <br /> 
          
          With a bigger and better garage, we also achieved a significant milestone by securing our own license, no longer needing to 
          operate under a second party. This transformation marked the birth of Manila Brothers Autoworks, symbolizing our commitment 
          to quality and customer satisfaction.

          Today, Manila Brothers Autoworks stands as a testament to our journey from a modest paint shop to a well-respected name in 
          the automotive industry. Discover Manila Brothers Autoworks Filipino Garage in Dubai – your go-to for affordable auto repair
          and maintenance!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
