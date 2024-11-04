import { Link, NavLink } from "react-router-dom";
import logo from "/images/logo.png";
import rectangle from "/images/rectangle.svg";
import rectangleTwo from "/images/rectangleTwo.svg";
import location from "/images/location.png";
import { Phone, Mail, Clock9, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-navyBlue">
        <div className="mx-auto max-w-[120rem] space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="w-40 h-40">
                <img src={logo} alt="logo" />
              </div>

              <p className="mt-4 max-w-s text-white font-lexendDeca">
                Trusted by certified car experts, we deliver top-quality service
                at unbeatable prices. Experience the care your car deserves with
                us!
              </p>

              <h2 className="text-white text-[18px] sm:text-xl mt-4 font-daysOne">
                FOLLOW US
              </h2>
              <img src={rectangle} alt="rectangle" className="mt-5" />
              <ul className="mt-[25px] flex gap-6">
                <li>
                  <a
                    href="https://www.facebook.com/mbworkzgarage"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>

                    <svg
                      className="h-11 w-11"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
              <div>
                <p className="text-[18px] sm:font-[1.25rem] text-white font-daysOne uppercase">
                  Links
                </p>
                <img src={rectangleTwo} alt="rectangleTwo" className="mt-5" />

                <ul className="mt-[50px] text-xl">
                  <li className="mb-4">
                    <NavLink
                      to=""
                      className="text-white font-lexendDeca text-[16px] sm:text-[1.125rem] transition hover:opacity-75"
                    >
                      Home
                    </NavLink>
                  </li>

                  <li className="mb-4">
                    <a
                      href="/about"
                      className="text-white font-lexendDeca text-[16px] sm:text-[1.125rem] transition hover:opacity-75"
                    >
                      About
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      href="/services"
                      className="text-white font-lexendDeca text-[16px] sm:text-[1.125rem] transition hover:opacity-75"
                    >
                      Services
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      href="/gallery"
                      className="text-white font-lexendDeca text-[16px] sm:text-[1.125rem] transition hover:opacity-75"
                    >
                      Gallery
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      href="/bookings"
                      className="text-white font-lexendDeca text-[16px] sm:text-[1.125rem] transition hover:opacity-75"
                    >
                      Bookings
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-[18px] sm:font-[1.25rem] text-white font-daysOne uppercase">
                  Contact Info
                </p>

                <img src={rectangleTwo} alt="rectangleTwo" className="mt-5" />

                <ul className="mt-[50px] text-sm">
                  <li className="mb-9 flex text-white font-lexendDeca text-[16px] sm:text-[1.125rem]">
                    <Phone className="mr-3" /> 052 304 1850
                  </li>

                  <li className="mb-9 flex text-white font-lexendDeca text-[16px] sm:text-[1.125rem]">
                    <Mail className="mr-3" /> mnlabrosauto@gmail.com
                  </li>

                  <li className="mb-9 flex text-white font-lexendDeca text-[16px] sm:text-[1.125rem]">
                    <Clock9 className="mr-3" /> Monday-Sunday: 8-AM - 8PM <br />
                    Friday: Closed
                  </li>

<<<<<<< HEAD
                  <li className="mb-9 flex text-white font-lexendDeca text-[16px] sm:text-[1.125rem]">
                    <MapPin className="mr-3" /> Warehouse No. 2 21st Street - Al{" "}
                    <br /> Qusais Industrial Area - Al
                    <br />
                    Qusais Industrial Area 1 - Dubai
=======
                  <li className="flex text-white font-lexendDeca text-[1.125rem]">
                    <MapPin className="mr-3" />
                    <Link to={"https://maps.app.goo.gl/372NjKUS7apMyNHJ7"}>
                      Warehouse No. 2 21st Street - Al <br /> Qusais Industrial
                      Area - Al
                      <br />
                      Qusais Industrial Area 1 - Dubai
                    </Link>
>>>>>>> de081e595d7f1f4ebfec18c585938e309b575d59
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[18px] sm:font-[1.25rem] text-white font-daysOne uppercase">
                  Location
                </p>
                <img src={rectangle} alt="rectangle" className="mt-5" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.409005839242!2d55.390992999999995!3d25.290458899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f590d2f2bd979%3A0xe5e698641471b418!2sManila%20Brothers%20Autoworks%20Garage!5e0!3m2!1sen!2sae!4v1730707072174!5m2!1sen!2sae"
                  className="h-72 w-80 border-none mt-12"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[1rem] font-daysOne text-white text-center bg-darkRed w-full h-[76px] flex justify-center items-center">
          &copy; 2024. Manila Brothers Autoworks Filipino Garage. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
