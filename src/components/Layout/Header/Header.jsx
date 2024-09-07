import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../../../public/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };
  return (
    <div className="relative w-full bg-darkBlue">
      <div className="mx-auto flex max-w-[120rem] items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="w-[90px] h-[90px] relative top-4 after:bg-darkBlue after:absolute after:p-[54px] after:-right-2.5 after:-top-0.5 after:rounded-full z-20 after:-z-10">
            <img src={logo} alt="logo" />
          </span>
          <span className="font-stalinist text-white text-[16px] first-line:text-[24px] pl-2 leading-1 items-end">
            Manila <br className="block content-[''] -mt-[10px]" /> Brothers
          </span>
        </div>
        <div className="hidden grow items-start lg:flex justify-end">
          <ul className="mx-12 inline-flex space-x-12">
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  `inline-flex items-center px-3 py-2 rounded-md text-sm text-white font-lexendDeca uppercase ${isActive ? "bg-mainRed shadow-mainRed shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_10px_#08f,0_0_20px_#08f]" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <span
                className="inline-flex items-center px-3 py-2 text-sm text-white font-lexendDeca uppercase cursor-pointer"
                onClick={toggleAbout}
              >
                About
                <span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </span>
              </span>
              {isAboutOpen && (
                <ul className="absolute rounded-lg mt-2 py-1 shadow-lg z-10 bg-lightBlue">
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-white font-lexendDeca uppercase ${isActive ? "bg-mainRed" : ""}`
                      }
                    >
                      About
                    </NavLink>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-white font-lexendDeca uppercase ${isActive ? "bg-mainRed" : ""}`
                      }
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/gallery"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-white font-lexendDeca uppercase ${isActive ? "bg-mainRed" : ""}`
                      }
                    >
                      Gallery
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/bookings"
                className={({ isActive }) =>
                  `inline-flex items-center px-3 py-2 rounded-md text-sm text-white font-lexendDeca uppercase ${isActive ? "bg-mainRed shadow-mainRed shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_10px_#08f,0_0_20px_#08f]" : ""}`
                }
              >
                Bookings
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className="rounded-md px-3 py-2 text-sm font-lexendDeca uppercase text-black bg-primaryBg shadow-primaryBg shadow-glow"
              >
                <NavLink to="/contact">Contact Us</NavLink>
              </button>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <Menu
            onClick={toggleMenu}
            className="h-6 w-6 cursor-pointer text-white"
          />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5 bg-lightBlue">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="w-[90px] h-[90px]">
                      <img src={logo} alt="logo" />
                    </span>
                    <span className="font-stalinist text-white">
                      Manilla <br className="block content-[''] -mt-2" />
                      Brothers
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    <NavLink
                      to="/"
                      className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-mainRed"
                    >
                      <span className="ml-3 text-base font-medium text-white font-lexendDeca uppercase">
                        Home
                      </span>
                    </NavLink>
                    <NavLink
                      to="/about"
                      className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-mainRed"
                    >
                      <span className="ml-3 text-base font-medium text-white font-lexendDeca uppercase">
                        About
                      </span>
                    </NavLink>
                    <NavLink
                      to="/services"
                      className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-mainRed"
                    >
                      <span className="ml-3 text-base font-medium text-white font-lexendDeca uppercase">
                        Services
                      </span>
                    </NavLink>
                    <NavLink
                      to="/gallery"
                      className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-mainRed"
                    >
                      <span className="ml-3 text-base font-medium text-white font-lexendDeca uppercase">
                        Gallery
                      </span>
                    </NavLink>
                    <NavLink
                      to="/bookings"
                      className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-mainRed"
                    >
                      <span className="ml-3 text-base font-medium text-white font-lexendDeca uppercase">
                        Bookings
                      </span>
                    </NavLink>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
