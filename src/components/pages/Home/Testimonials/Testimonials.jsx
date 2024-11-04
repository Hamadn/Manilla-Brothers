import rectangleBlue from "/images/rectangleBlue.svg";
import rev1 from "/images/rev1.png";
import rev2 from "/images/rev2.png";
import rev3 from "/images/rev3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonials() {
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
    <section>
      <div className="lg:p-10 p-6 bg-darkBlue">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-left">
            <div className="flex items-center">
              <span className="text-3xl uppercase font-daysOne text-mainBlue drop-shadow-neonBlue">
                Client Testimonials
              </span>
              <span>
                <img
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
                src={rev1}
                className="w-32 h-32 rounded-full absolute right-0 left-0 mx-auto -top-16"
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
                <p className="text-sm text-center leading-relaxed font-lexendDeca">
                  "Very good mechanic, quality works, specifically in pajero, also paint job carshow finish,
                  the owner very accommodating. Highly recommended." <br />— Francis Tanig
                </p>
              </div>
            </div>
            <div className="h-auto py-8 px-4 lg:px-8 mx-auto bg-purpleBlue text-white relative">
              <img
                src={rev2}
                className="w-32 h-32 rounded-full absolute right-0 left-0 mx-auto -top-16"
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
                <p className="text-sm text-center leading-relaxed font-lexendDeca">
                  "Five stars to this Filipino-owned garage. Very kind, honest and approachable. 
                  All staff are fiendly. I recommend this garage to all car owners." <br />— Fidel Estella
                </p>
              </div>
            </div>
            <div className="h-auto py-8 px-4 lg:px-8 mx-auto bg-purpleBlue text-white relative">
              <img
                src={rev3}
                className="w-32 h-32 rounded-full absolute right-0 left-0 mx-auto -top-16"
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
                <p className="text-sm text-center leading-relaxed font-lexendDeca">
                  "Very professional and skilled mechanics they have, reasonable price, and I'm very satisfied with
                  work they have done to my car." <br />— John Mhay Cortez
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
