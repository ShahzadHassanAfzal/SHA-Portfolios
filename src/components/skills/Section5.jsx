import { useRef } from "react";
import Marquee from "../custom/TextMarquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const Section5 = () => {
  const containerRef = useRef(null);
  const items = [
    "Shahzad • Hassan • Afzal",
    "Shahzad • Hassan • Afzal",
    "Shahzad • Hassan • Afzal",
    "Shahzad • Hassan • Afzal",
  ];
  const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
      },
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-between min-h-1/2 cursor-default gap-10 bg-[#050505] pt-10 text-white"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-80 w-80 animate-pulse rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 animate-pulse rounded-full bg-white/10 blur-3xl" />

      <Marquee
        items={items}
        className="outfit-light text-2xl sm:text-3xl text-white border-t border-b border-white/50"
      />
      <div>
        <div className="outfit-normal text-center contact-text-responsive leading-none">
          <p>
            “ Let's turn your
            <br />
            <span className="font-normal">vision into a</span>{" "}
            <span className="italic">powerful</span> <br />
            digital <span className="text-white italic">experience</span> “
          </p>
        </div>
        <div className="flex justify-center">
          <NavLink
            to={"/contact"}
            className="relative flex mt-5 overflow-hidden text-base sm:text-xl group px-10 py-3 rounded-md bg-transparent border-white z-2 backdrop-blur-md border-2 text-white outfit-normal transition-all duration-300"
          >
            <div className="relative z-2 group-hover:text-[#050505]">
              Let's Connect Today !
            </div>
            <div className="absolute z-0 inset-0 bg-[#ffffff] transition-transform duration-300 translate-y-full group-hover:translate-y-0"></div>
          </NavLink>
        </div>
      </div>
      <Marquee
        items={items}
        reverse={true}
        className="text-white text-2xl sm:text-3xl bg-transparent border-white/50 border-y-2 outfit-light"
        iconClassName="stroke-white stroke-2 text-white"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default React.memo(Section5);
