import { Button } from "../../Button";
import { PhoneCall, Clock9, Phone, Moon } from "lucide-react";
import rectangleBlue from "../../images/rectangleBlue.svg";
import mechanicImg from "../../images/mechanic.png";
import hoodImg from "../../images/hood.png";
import priceTag from "../../images/Price Tag USD.png";
import carImg from "../../images/Koenigsegg One.png";
import wrench from "../../images/Wrench.png";
import brain from "../../images/Critical Thinking.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Img } from "../../Img";
import { NavLink } from "react-router-dom";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
        <div className="flex flex-col-reverse md:flex-row md:h-[485px] relative">
          <div className="relative z-[1] bg-darkRed text-white place-content-center md:w-[50%] p-20 md:mr-4 md:before:content-[''] md:before:absolute md:before:top-0 md:before:w-full md:before:h-full md:before:bg-darkRed md:before:transform md:before:-skew-x-[9deg] md:before:z-[1]">
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
            <div className="bg-casa-pattern bg-cover bg-center bg-no-repeat w-full h-full"></div>
          </div>
        </div>
      </section>
      <hr className="drop-shadow-neonRed shadow-glowRed bg-mainRed border-none h-[2px]" />
      <section className="grid bg-darkBlue py-10">
        <div className="text-center p-10 grid place-content-center">
          <section>
            <div className="w-full flex flex-row justify-center items-center">
              <span>
                <Img
                  src={rectangleBlue}
                  alt="rectangle"
                  className="-scale-x-100 w-[120px]"
                />
              </span>
              <span className="text-lg lg:text-xl text-mainBlue drop-shadow-neonBlue uppercase font-daysOne mx-1">
                Promotions
              </span>
              <span>
                <Img
                  src={rectangleBlue}
                  alt="rectangle"
                  className=" w-[120px]"
                />
              </span>
            </div>

            <span className="text-2xl lg:text-5xl text-white uppercase drop-shadow-neonWhite font-daysOne text-center mt-1 lg:mt-5">
              Drive Into Irresistible Promos!
            </span>
          </section>
          <section>
            <div className="flex flex-wrap justify-center items-center max-w-[150rem] gap-x-5 gap-y-12 md:gap-y-10 mt-10">
              <div className="flex w-[290px] xl:w-[370px] 2xl:w-[400px] relative">
                <Img
                  src={mechanicImg}
                  alt="mechanic"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
                  <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2">
                    <h2 className="text-lg lg:text-xl text-white font-daysOne mb-2 ">
                      Promotion/Offer Title
                    </h2>
                    <p className=" text-xs text-white font-lexendDeca">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-[290px] xl:w-[370px] 2xl:w-[400px] relative">
                <Img
                  src={mechanicImg}
                  alt="mechanic"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
                  <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2">
                    <h2 className="text-lg lg:text-xl text-white font-daysOne mb-2 ">
                      Promotion/Offer Title
                    </h2>
                    <p className=" text-xs text-white font-lexendDeca">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-[290px] xl:w-[370px] 2xl:w-[400px] md:hidden lg:block relative">
                <Img
                  src={mechanicImg}
                  alt="mechanic"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
                  <div className="absolute inset-x-2 bg-black bg-opacity-50 flex flex-col justify-center px-4 py-2 bottom-2">
                    <h2 className="text-lg lg:text-xl text-white font-daysOne mb-2 ">
                      Promotion/Offer Title
                    </h2>
                    <p className=" text-xs text-white font-lexendDeca">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-primaryBg font-lexendDeca drop-shadow-neonYellow mt-44 text-center underline">
              <NavLink to="/services">See all promotions&gt;</NavLink>
            </p>
          </section>
        </div>
      </section>
      <hr className="drop-shadow-neonRed shadow-glowRed bg-mainRed border-none h-[2px]" />
      <section>
        <div className="flex flex-col-reverse md:grid md:grid-cols-12 bg-darkRed">
          <div className="md:transform md:skew-x-[10deg] lg:skew-x-[15deg] flex lg:w-[80%] z-10 col-span-7 justify-self-end">
            <img src={hoodImg} alt="hood" className="hidden md:block" />
          </div>
          <div className="relative bg-hood-pattern md:bg-none lg:bg-darkRed text-white place-content-center col-span-5 p-20 w-full h-full">
            <div className="absolute inset-0 bg-rgbaLightRed md:hidden"></div>
            <div className="relative z-10 bg-darkRed p-10 md:p-0">
              <div>
                <div className="w-full flex flex-row items-center">
                  <span className="text-lg lg:text-xl text-mainBlue uppercase font-daysOne">
                    About Us
                  </span>
                  <span>
                    <Img
                      src={rectangleBlue}
                      alt="rectangle"
                      className="w-[120px]"
                    />
                  </span>
                </div>
                <h1 className="text-[2.1875em] sm:text-[1.5em] lg:text-[2.5em] font-daysOne uppercase">
                  Under the hood
                </h1>
                <p>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do <br /> eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris <br /> nisi ut aliquip ex ea
                  commodo consequat&quot;
                </p>
                <Button
                  className="bg-primaryBg uppercase shadow-glow text-black mt-4"
                  size="md"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-features-pattern bg-bottom bg-opacity-20 w-full h-full p-16 bg-cover flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-white bg-opacity-80 z-10"></div>
        <div className="z-20 w-full flex flex-row max-w-[120rem] justify-center items-center mb-8 relative">
          <span>
            <Img
              src={rectangleBlue}
              alt="rectangle"
              className="-scale-x-100 w-[180px]"
            />
          </span>
          <span className="text-xl text-center lg:text-3xl text-mainBlue drop-shadow-neonBlue uppercase font-daysOne mx-1">
            Why choose us
          </span>
          <span>
            <Img src={rectangleBlue} alt="rectangle" className="w-[180px]" />
          </span>
        </div>
        <span className="text-2xl lg:text-5xl text-black uppercase block drop-shadow-neonWhite font-daysOne text-center mt-1 lg:mt-2 z-20 relative">
          Rev up your ride with Manila Brothers!
        </span>
        <div className="relative max-w-[120rem]">
          <div className="flex justify-center mt-8 z-20 relative w-full">
            <div className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row flex-wrap justify-center gap-x-28 w-full max-w-[120rem]">
              <div className="text-center flex flex-col items-center">
                <Img
                  src={priceTag}
                  alt="pricetag"
                  className="border-8 w-56 border-black p-2"
                />
                <div className="w-72">
                  <h3 className="text-lg lg:text-2xl font-daysOne text-black mt-2 md:mt-10">
                    Transparent and Customized Pricing
                  </h3>
                </div>
              </div>
              <div className="text-center flex flex-col items-center">
                <Img
                  src={carImg}
                  alt="car"
                  className="border-8 w-56 border-black p-2"
                />
                <div className="w-72">
                  <h3 className="text-lg lg:text-2xl font-daysOne text-black mt-2 md:mt-10">
                    Premium Experience & Affordable Rates
                  </h3>
                </div>
              </div>
              <div className="text-center flex flex-col items-center">
                <Img
                  src={wrench}
                  alt="wrench"
                  className="border-8 w-56 border-black p-2"
                />
                <div className="w-72">
                  <h3 className="text-lg lg:text-2xl font-daysOne text-black mt-2 md:mt-10">
                    Trusted By <br /> Certified Car Guys
                  </h3>
                </div>
              </div>
              <div className="text-center flex flex-col items-center">
                <Img
                  src={brain}
                  alt="brain"
                  className="border-8 w-56 border-black p-2"
                />
                <div className="w-72">
                  <h3 className="text-lg lg:text-2xl font-daysOne text-black mt-2 md:mt-10">
                    Tailored Solutions
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:p-10 p-6 bg-darkBlue">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20 text-left">
              <div className="flex items-center">
                <span className="text-3xl uppercase font-daysOne text-mainBlue drop-shadow-neonBlue">
                  Client Testimonials
                </span>
                <span>
                  <Img
                    src={rectangleBlue}
                    className="w-[150px] drop-shadow-neonBlue"
                  />
                </span>
              </div>
              <h2 className="font-daysOne text-white text-4xl uppercase">
                Hear it straight from the source!
              </h2>
            </div>
            <Slider {...settings}>
              <div className="h-auto py-8 px-4 lg:px-8 mx-auto bg-purpleBlue text-white relative">
                <img
                  src="https://readymadeui.com/profile_2.webp"
                  className="w-24 h-24 rounded-full absolute right-0 left-0 mx-auto -top-12"
                />
                <div className="flex space-x-1 justify-center my-8">
                  <svg
                    className="w-6 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-6 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-6 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-6 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-6 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
                <hr />
                <div className="mt-4">
                  <p className="text-sm text-center leading-relaxed">
                    The service was amazing. I never had to wait that long for
                    my food. The staff was friendly and attentive, and the
                    delivery was impressively prompt.
                  </p>
                </div>
              </div>
              <div className="h-auto py-8 px-4 lg:px-8 mx-auto bg-purpleBlue text-white relative">
                <img
                  src="https://readymadeui.com/profile_3.webp"
                  className="w-24 h-24 rounded-full absolute right-0 left-0 mx-auto -top-12"
                />
                <div className="flex space-x-1 justify-center my-8">
                  <svg
                    className="w-6 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-6 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-6 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-6 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-6 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
                <hr />
                <div className="mt-4">
                  <p className="text-sm text-center leading-relaxed">
                    The service was amazing. I never had to wait that long for
                    my food. The staff was friendly and attentive, and the
                    delivery was impressively prompt.
                  </p>
                </div>
              </div>
              <div className="h-auto py-8 px-4 lg:px-8 mx-auto bg-purpleBlue text-white relative">
                <img
                  src="https://readymadeui.com/profile_4.webp"
                  className="w-24 h-24 rounded-full absolute right-0 left-0 mx-auto -top-12"
                />
                <div className="flex space-x-1 justify-center my-8">
                  <svg
                    className="w-6 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-6 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-6 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-6 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-6 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
                <hr />
                <div className="mt-4">
                  <p className="text-sm text-center leading-relaxed">
                    The service was amazing. I never had to wait that long for
                    my food. The staff was friendly and attentive, and the
                    delivery was impressively prompt.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="relative bg-featuredWork-pattern bg-cover h-full w-full">
        <div></div>
      </section>
    </>
  );
}

export default Home;
