import React from "react";
import { NavLink } from "react-router-dom";
import TextMarquee from "../custom/TextMarquee";

const items2 = [
  "Responsive Design",
  "Clean Code",
  "Modern UI/UX",
  "Scalable Architecture",
  "Performance Optimization",
];
const items1 = [
  "Collaboration",
  "Excellence",
  "Innovation",
  "Precision",
  "Trust",
];

const Section3 = () => {
  return (
    <div className="max-h-[300vh] pt-14 w-screen bg-black/80 relative cursor-default">
      <div className="absolute top-0 right-0 animate-pulse h-96 w-96 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 h-96 w-96 animate-pulse bg-white/10 blur-3xl rounded-full" />

      <div>
        <TextMarquee
          items={items1}
          reverse={true}
          className="text-white bg-transparent text-3xl border-y-2 outfit-light"
          iconClassName="stroke-white stroke-2 text-transparent"
          icon="material-symbols-light:star"
        />
        <div className="my-10 sm:w-[90%] md:w-[80%] mx-auto w-[97%] rounded-2xl border-2 border-white backdrop-blur-sm py-6 md:py-14 text-center z-10 relative">
          <h2 className="text-4xl md:text-6xl text-white outfit-regular">
            Why Choose Me?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto leading-relaxed text-white/80 outfit-normal text-sm sm:text-base">
            I focus on building modern, optimized, responsive, and scalable web
            applications with clean UI/UX, smooth animations, and industry-level
            development standards.
          </p>

          <div className=" flex flex-wrap items-center justify-center gap-2 mt-5 ">
            {[
              "Responsive Design",
              "Clean Code",
              "Performance Optimization",
              "Modern UI/UX",
              "Scalable Architecture",
              "Full Stack Development",
            ].map((item, index) => (
              <div
                key={index}
                className="border-2 group relative overflow-hidden border-white py-2 px-2 text-white rounded-full outfit-normal text-[11px] sm:text-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-white group-hover:text-black relative z-2 transition-all duration-300">
                  {item}
                </div>
                <div className="absolute z-0 inset-0 bg-[#ffffff] transition-transform duration-300 translate-y-full group-hover:translate-y-0"></div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <NavLink
              to={"/contact"}
              className="relative overflow-hidden group px-8 py-3 rounded-md bg-transparent border-white z-2 backdrop-blur-md border-2 text-white outfit-normal transition-all duration-300"
            >
              <div className="relative z-2 group-hover:text-[#050505]">
                Let's Connect Today !
              </div>
              <div className="absolute z-0 inset-0 bg-[#ffffff] transition-transform duration-300 translate-y-full group-hover:translate-y-0"></div>
            </NavLink>
          </div>
        </div>
        <TextMarquee
          items={items2}
          reverse={false}
          className="text-white bg-transparent text-3xl border-y-2 outfit-light"
          iconClassName="stroke-white stroke-2 text-transparent"
          icon="material-symbols-light:square"
        />
      </div>
    </div>
  );
};

export default React.memo(Section3);
