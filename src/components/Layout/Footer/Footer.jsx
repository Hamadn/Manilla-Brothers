import { NavLink } from "react-router-dom";
import logoImg from "../../images/Logo.png";
import rectangle from "../../images/rectangle.svg";
import rectangleTwo from "../../images/rectangleTwo.svg";
import location from "../../images/location.png";
import { Phone, Mail, Clock9, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-navyBlue">
        <div className="mx-auto max-w-[120rem] space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="w-56 h-56">
                <img src={logoImg} alt="logo" />
              </div>

              <p className="mt-4 max-w-xs text-white font-lexendDeca">
                &quot;Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Esse non cupiditate quae nam molestias.&quot;
              </p>

              <h2 className="text-white text-xl mt-4 font-daysOne">
                Follow Us
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
                <p className="font-[1.25rem] text-white font-daysOne uppercase">
                  Links
                </p>
                <img
                  src={rectangle}
                  alt="rectangle"
                  className="w-[100px] mt-5"
                />

                <ul className="mt-[50px] text-xl">
                  <li className="mb-4">
                    <NavLink
                      to=""
                      className="text-white font-lexendDeca text-[1.125rem] transition hover:opacity-75"
                    >
                      {" "}
                      Home{" "}
                    </NavLink>
                  </li>

                  <li className="mb-4">
                    <a
                      href="/about"
                      className="text-white font-lexendDeca text-[1.125rem] transition hover:opacity-75"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      href="/services"
                      className="text-white font-lexendDeca text-[1.125rem] transition hover:opacity-75"
                    >
                      {" "}
                      Services{" "}
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      href="/gallery"
                      className="text-white font-lexendDeca text-[1.125rem] transition hover:opacity-75"
                    >
                      {" "}
                      Gallery{" "}
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      href="/bookings"
                      className="text-white font-lexendDeca text-[1.125rem] transition hover:opacity-75"
                    >
                      {" "}
                      Bookings{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/forum"
                      className="text-white font-lexendDeca text-[1.125rem] transition hover:opacity-75"
                    >
                      {" "}
                      Forum{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-[1.25rem] text-white font-daysOne uppercase">
                  Contact Info
                </p>

                <img src={rectangleTwo} alt="rectangleTwo" className="mt-5" />

                <ul className="mt-[50px] text-sm">
                  <li className="mb-9">
                    <a
                      href="#"
                      className="flex text-white font-lexendDeca text-[1.125rem] transition hover:opacity-75"
                    >
                      <Phone className="mr-8" /> 052 304 1850{" "}
                    </a>
                  </li>

                  <li className="mb-9">
                    <a
                      href="#"
                      className="flex text-white font-lexendDeca text-[1.1rem] transition hover:opacity-75"
                    >
                      {" "}
                      <Mail className="mr-8" /> mnlabrosauto@gmail.com{" "}
                    </a>
                  </li>

                  <li className="mb-9">
                    <a
                      href="#"
                      className="flex text-white font-lexendDeca text-[1.125rem] transition hover:opacity-75"
                    >
                      <Clock9 className="mr-8" /> Monday-Sunday: 8-AM - 8PM{" "}
                      <br /> Friday: Closed{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="flex text-white font-lexendDeca text-[1.125rem] transition hover:opacity-75"
                    >
                      <MapPin className="mr-9" /> Warehouse No. 2 21st Street -
                      Al <br /> Qusais Industrial Area - Al
                      <br />
                      Qusais Industrial Area 1 - Dubai{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-[1.25rem] text-white font-daysOne uppercase">
                  Location
                </p>
                <img src={rectangle} alt="rectangle" className="mt-5" />
                <img src={location} alt="location" className="mt-12" />
              </div>
            </div>
          </div>
        </div>
        <p className="text-[1rem] font-daysOne text-white text-center bg-darkRed w-full h-[76px] flex justify-center items-center">
          Copyright &copy; 2024. Manila Brothers Autoworks Filipino Garage. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
