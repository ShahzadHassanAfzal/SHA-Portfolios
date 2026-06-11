import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="
                max-h-[300vh]
                 cursor-default
                w-full
                bg-black/95
                text-white
                overflow-hidden
                relative
                px-2
                pt-25
            "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-96 w-96 bg-white/10 blur-3xl animate-pulse rounded-full" />

      <div className="absolute bottom-0 right-0 h-96 w-96 bg-white/10 blur-3xl animate-pulse rounded-full" />

      {/* Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-base backdrop-blur-md orbitron-regular mb-6">
            Skills & Expertise
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl orbitron-regular leading-tight text-white">
            My Skills & Expertise
          </h1>

          <p className="max-w-3xl mx-auto mt-8text-white/85 outfit-normal text-base sm:text-lg leading-relaxed">
            Passionate Mern Stack developer building modern, scalable,
            responsive, and high-performance web applications using
            industry-standard technologies and clean development architecture.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <NavLink
              to={"/portfolio"}
              className="relative overflow-hidden group px-5 py-3 rounded-md bg-white hover:bg-transparent hover:border-white z-2 backdrop-blur-md border-2 text-black outfit-normaltransition-all duration-300"
            >
              <div className="relative z-2 group-hover:text-white">
                View Portfolio
              </div>
              <div className="absolute z-0 inset-0 bg-[#050505] transition-transform duration-300 translate-y-full group-hover:translate-y-0"></div>
            </NavLink>

            <NavLink
              to={"/contact"}
              className=" relative overflow-hidden group px-5 py-3 rounded-md bg-transparent border-white z-2 backdrop-blur-md border-2 text-white outfit-normal transition-all duration-300"
            >
              <div className="relative z-2 group-hover:text-[#050505]">
                Let's Connect Today !
              </div>
              <div className="absolute z-0 inset-0 bg-[#ffffff] transition-transform duration-300 translate-y-full group-hover:translate-y-0"></div>
            </NavLink>
          </div>
        </div>

        {/* Stats */}
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-2 mt-10">
          {[
            {
              number: "05+",
              title: "Projects Completed",
            },
            {
              number: "15+",
              title: "Modern Technologies",
            },
            {
              number: "1.5+",
              title: "Years Experience",
            },
            {
              number: "100%",
              title: "Client Satisfaction",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-md border-2 border-white/70 p-8 backdrop-blur-[2px]text-center"
            >
              <h2 className="text-3xl sm:text-4xl orbitron-regular">
                {item.number}
              </h2>

              <p className="text-white/80 text-base sm:text-xl mt-3 outfit-normal">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
