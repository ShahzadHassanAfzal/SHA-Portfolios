import { NavLink, Link } from "react-router";
import React, { useEffect, useRef, useState, memo } from "react";
import gsap from "gsap";

const Navbar = () => {
  const menuRef = useRef();
  const menuTimelineRef = useRef();
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full justify-center flex">
      <nav
        style={
          showNav
            ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
            : { clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }
        }
        ref={menuRef}
        className="fixed z-100 transition-all duration-300 flex bg-black/30 backdrop-blur-3xl w-full md:w-[70%] lg:w-[60%] md:rounded-lg mt-0 md:mt-3 justify-between items-center h-18 border-b-2 border-white/60 md:border md:border-white px-4 md:px-10"
      >
        <div className="flex z-50 flex-col items-center justify-center cursor-pointer transition-all duration-300 top-4 rounded-xl left-5 lg:left-20">
          <Link to={"/"}>
            <div className="text-white orbitron-regular text-4xl">SHA</div>
          </Link>
        </div>
        <div className="flex gap-2">
          <NavLink to="/">
            <svg
              width="35"
              height="33"
              viewBox="0 0 15 13"
              fill="none"
              className={`text-white border border-white p-1 hover:bg-white hover:text-black transition-all duration-300`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.28261 5.07317L0 7.29268H1.63043V13H6.19565V9.19512H8.80435V13H13.3696V7.29268H15L7.5 0L4.8913 2.53659V0.951219H2.28261V5.07317ZM2.93478 1.58537H4.23913V4.06741L7.5 0.896683L13.4257 6.65854H12.7174V12.3659H9.45652V8.56098H5.54348V12.3659H2.28261V6.65854H1.57435L2.93478 5.33571V1.58537Z"
                fill="currentColor"
              />
            </svg>
          </NavLink>

          <NavLink to="/skills">
            <svg
              width="35"
              height="33"
              viewBox="0 0 18 15"
              fill="none"
              className={`text-white border border-white p-1 hover:bg-white hover:text-black transition-all duration-300`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7.56885L6.09669 4.00011"
                stroke="currentColor"
                strokeWidth="0.7"
              />
              <path
                d="M1.34851 7.58472L6.4452 11.1535"
                stroke="currentColor"
                strokeWidth="0.7"
              />
              <path
                d="M17.45 7.56885L12.3488 4.00011"
                stroke="currentColor"
                strokeWidth="0.7"
              />
              <path
                d="M17.1011 7.58472L11.9999 11.1535"
                stroke="currentColor"
                strokeWidth="0.7"
              />
              <path d="M9 14L11 1" stroke="currentColor" strokeWidth="0.7" />
            </svg>
          </NavLink>
          <NavLink to="/portfolio">
            <svg
              width="35"
              height="33"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`text-white border border-white p-1 hover:bg-white hover:text-black transition-all duration-300`}
            >
              <path d="M3 6A2 2 0 0 1 5 4H10L12 6H19A2 2 0 0 1 21 8V18A2 2 0 0 1 19 20H5A2 2 0 0 1 3 18V6Z" />
            </svg>
          </NavLink>
          <NavLink to="/contact">
            <svg
              width="35"
              height="33"
              viewBox="0 0 13 13"
              fill="none"
              className={`text-white border border-white p-1 hover:bg-white hover:text-black transition-all duration-300`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.48928 1.80178L8.9375 0.353553L12.6464 4.0625L11.1982 5.51072L11.125 5.58395V5.6875V9.57489L2.50169 12.7106L2.14683 12.3558L5.34618 9.15646C5.45696 9.17684 5.57106 9.1875 5.6875 9.1875C6.72303 9.1875 7.5625 8.34806 7.5625 7.3125C7.5625 6.27697 6.72303 5.4375 5.6875 5.4375C4.65197 5.4375 3.8125 6.27697 3.8125 7.3125C3.8125 7.42891 3.82314 7.54302 3.84354 7.65385L0.644226 10.8532L0.289359 10.4983L3.42511 1.875H7.3125H7.41605L7.48928 1.80178Z"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </svg>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Navbar);