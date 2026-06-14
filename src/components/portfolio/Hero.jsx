import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";
import { FiCpu, FiAward, FiStar } from "react-icons/fi";
import { HiShieldCheck, HiUserGroup, HiAcademicCap } from "react-icons/hi";
import MagneticCard from "../custom/MagneticCard";

const Hero = () => {
  return (
    <section className=" max-h-[300vh] cursor-default w-full bg-black/95 text-white overflow-hidden relative px-2 pt-25 pb-10">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-96 w-96 bg-white/10  blur-3xl animate-pulse rounded-full" />

      <div className="absolute bottom-0 right-0 h-96 w-96 bg-white/10 blur-3xl animate-pulse rounded-full" />

      {/* Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-base backdrop-blur-md orbitron-regular mb-6">
            My Portfolios & Show Cases
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl orbitron-regular leading-tighttext-white">
            My Portfolios & Show Cases
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-white/85 outfit-normal text-base sm:text-lg leading-relaxed">
            Explore a collection of high-quality digital projects demonstrating
            expertise in modern development, responsive design, scalability, and
            performance.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <NavLink
              to={"/skills"}
              className="relative overflow-hidden group px-5 py-3 rounded-md bg-white hover:bg-transparent hover:border-white z-2 backdrop-blur-md border-2 text-black outfit-normal transition-all duration-300"
            >
              <div className="relative z-2 group-hover:text-white">
                View Skills & Expertise
              </div>
              <div className="absolute z-0 inset-0 bg-[#050505] transition-transform duration-300 translate-y-full group-hover:translate-y-0"></div>
            </NavLink>

            <NavLink
              to={"/contact"}
              className="relative overflow-hidden group px-5 py-3 rounded-md bg-transparent border-white z-2 backdrop-blur-md border-2 text-white outfit-normal transition-all duration-300"
            >
              <div className="relative z-2 group-hover:text-[#050505]">
                Let's Connect Today !
              </div>
              <div className="absolute z-0 inset-0 bg-[#ffffff] transition-transform duration-300 translate-y-full group-hover:translate-y-0"></div>
            </NavLink>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-10">
          {[
            {
              number: <FiCpu />,
              title: "Innovation",
            },
            {
              number: <FiAward />,
              title: "Quality",
            },
            {
              number: <HiShieldCheck />,
              title: "Reliability",
            },
            {
              number: <FiStar />,
              title: "Excellence",
            },
            {
              number: <HiUserGroup />,
              title: "Collaboration",
            },
            {
              number: <HiAcademicCap />,
              title: "Learning",
            },
          ].map((item, index) => (
            <MagneticCard key={index}>
              <div className="relative group overflow-hidden rounded-md border-2 border-white p-4 backdrop-blur-[2px] text-center flex flex-col items-center justify-center">
                <h2 className="relative z-2 group-hover:text-[#050505] transition-transform duration-300 text-5xl sm:text-6xl">
                  {item.number}
                </h2>

                <p className="relative z-2 group-hover:text-[#050505] transition-transform duration-300 text-white/90 text-base sm:text-xl lg:text-[25px] mt-3 outfit-normal">
                  {item.title}
                </p>
                <div className="absolute inset-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0 bg-white" />
              </div>
            </MagneticCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
