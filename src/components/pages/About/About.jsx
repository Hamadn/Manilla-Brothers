import { Img } from "../../Img";
import { Button } from "../../Button";
import rectangleYellow from "../../../../public/images/rectangleYellow.svg";

function About() {
  return (
    <>
      <div className="bg-about-pattern h-[100vh] bg-cover bg-rgbaLightRed bg-no-repeat bg-blend-overlay grid place-items-center">
        <div className="grid place-content-center bg-darkRed w-[80%] text-white p-20 m-4 h-auto">
          <header className="font-daysOne text-2xl">Under the hood</header>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse porro
            excepturi, tempora aliquid, officiis, laboriosam in cupiditate ad
            aspernatur iusto facere perspiciatis distinctio. Sed velit autem
            facilis placeat adipisci quibusdam? Deserunt, rerum distinctio
            dignissimos reprehenderit facilis nobis, sit corporis laborum quia
            omnis officiis iure rerum quos eligendi eveniet harum esse doloribus
            sequi libero facilis unde veritatis, ut cumque nemo qui quod alias
            ex nulla! Atque! Placeat magnam totam officia molestiae recusandae?
            Fuga adipisci explicabo libero dolorem voluptas, modi nemo
            repudiandae minus dignissimos laboriosam eaque eum dolor quisquam
            pariatur fugiat ut consequatur amet eveniet quos eligendi!
            Asperiores a odit quod obcaecati suscipit molestias exercitationem,
            similique quas repellat enim deserunt, fugiat quos facilis
            aspernatur recusandae tenetur pariatur aut ipsa sequi praesentium.
            Assumenda quos ut cumque doloremque ducimus. Ut, eos! Perferendis
            vero rerum dolores eius dolorem sint dolor quisquam totam
            exercitationem porro eveniet autem doloremque amet, illum illo neque
            fugiat consectetur. Fugit ipsa pariatur ipsam officia provident.
            Porro delectus minima alias voluptas asperiores ipsa ad non impedit
            recusandae. Veritatis quia amet consectetur quidem impedit, aut eos
            voluptas, quis ducimus id ea et quibusdam accusantium harum libero
            ex! Tenetur dolor laboriosam provident quaerat iste minima assumenda
            fuga! Voluptate culpa eaque officiis quia ducimus quidem a soluta
            laborum voluptatibus. Amet, facere est! Molestias officia inventore
            dolore voluptatem quaerat corporis. Cum iste sunt debitis eveniet
            modi mollitia beatae? Earum deserunt non accusantium, ipsa quod
            sapiente quia architecto ex adipisci vitae saepe? Facilis quos totam
            sed minus. Illum eveniet impedit doloribus. Similique reprehenderit
            ut alias sapiente eveniet! Aliquam, accusantium provident corporis
            vel reiciendis laborum vitae eveniet unde autem illo quidem culpa
            fugit facilis nisi ipsam, consectetur numquam minima eaque nam
            architecto. Accusantium veritatis eligendi obcaecati est, laudantium
            doloremque. Officia debitis accusantium, amet provident harum
            sapiente eligendi dignissimos, quae aliquam eaque, porro cumque
            dolorem excepturi animi nisi ratione. Vitae voluptate iste
            officia.:w
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
