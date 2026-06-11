import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJsSquare,
  FaGithub,
} from "react-icons/fa";

import { TbBrandFramerMotion } from "react-icons/tb";
import React, { memo, useEffect, useRef } from "react";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma, IoLogoVercel } from "react-icons/io5";
import {
  SiGsap,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiNetlify,
  SiPostman,
} from "react-icons/si";
import MagneticCard from "../custom/MagneticCard";

const techStack = [
  {
    icon: <FaHtml5 />,
    name: "HTML5",
    position: "top-[40px] left-[20px]",
    animation: "animate-float-medium",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
    position: "top-[35%] left-[13%]",
    animation: "animate-float-fast",
  },
  {
    icon: <FaJsSquare />,
    name: "JAVASCRIPT",
    position: "bottom-[30%] left-[20px]",
    animation: "animate-rotate-float",
  },
  {
    icon: <FaReact />,
    name: "REACT.JS",
    position: "top-[30px] right-[24px]",
    animation: "animate-float-slow",
  },
  {
    icon: <RiNextjsFill />,
    name: "NEXT.JS",
    position: "top-[30%] right-[5%]",
    animation: "animate-float-medium",
  },
  {
    icon: <SiTailwindcss />,
    name: "TAILWINDCSS",
    position: "bottom-[30%] right-[10px]",
    animation: "animate-float-slow",
  },
  {
    icon: <SiGsap />,
    name: "GSAP",
    position: "bottom-[2%] right-[10%]",
    animation: "animate-rotate-float",
  },
  {
    icon: <TbBrandFramerMotion />,
    name: "MOTION",
    position: "bottom-[10%] left-[13%]",
    animation: "animate-float-fast",
  },
  {
    icon: <FaNodeJs />,
    name: "NODE.JS",
    position: "top-[15%] right-1/3",
    animation: "animate-float-medium",
  },
  {
    icon: <SiExpress />,
    name: "EXPRESS.JS",
    position: "bottom-[15%] right-[28%]",
    animation: "animate-float-slow",
  },
  {
    icon: <SiMysql />,
    name: "MYSQL",
    position: "top-[4%] left-1/3",
    animation: "animate-rotate-float",
  },
  {
    icon: <SiMongodb />,
    name: "MONGODB",
    position: "bottom-[20%] left-1/3",
    animation: "animate-float-fast",
  },
  {
    icon: <SiPostman />,
    name: "POSTMAN",
    position: "bottom-[50%] right-1/5",
    animation: "animate-float-fast",
  },
  {
    icon: <FaGithub />,
    name: "GITHUB",
    position: "top-[8%] left-1/2",
    animation: "animate-float-fast",
  },
  {
    icon: <IoLogoFigma />,
    name: "FIGMA",
    position: "bottom-[3%] left-1/2",
    animation: "animate-rotate-float",
  },
  {
    icon: <VscVscode />,
    name: "VS CODE",
    position: "top-[30%] left-1/3",
    animation: "animate-rotate-float",
  },
  {
    icon: <IoLogoVercel />,
    name: "VERCEL",
    position: "top-[53%] left-1/2",
    animation: "animate-float-fast",
  },
  {
    icon: <SiNetlify />,
    name: "NETLIFY",
    position: "top-[8%] right-1/5",
    animation: "animate-rotate-float",
  },
];

const Section3 = () => {
  return (
    <section className="relative max-h-[500vh] w-full overflow-hidden cursor-default bg-[#050505] text-white">
      <div className="absolute top-0 left-0 h-96 w-96 animate-pulse bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 h-96 w-96 animate-pulse bg-white/10 blur-3xl rounded-full" />
      <div className="flex justify-center pt-10 relative z-5">
        <span className="inline-flex orbitron-regular rounded-full border border-white/40 px-5 py-2 text-sm uppercase tracking-[3px] text-white/90 backdrop-blur-[2px]">
          Skills & Expertise
        </span>
      </div>

      {/* Floating Icons */}
      <div className="pointer-events-none absolute inset-0 z-2">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className={` absolute ${tech.position} ${tech.animation} group `}
          >
            {/* Card */}
            <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border bg-white/5 border-white/20 text-3xl sm:text-4xl text-white">
              {tech.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="h-full w-full text-center relative pt-10 pb-10 z-5">
        <div className="flex items-center justify-center h-full w-full flex-col">
          <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl outfit-regular text-white">
            My Skills and Expertise
          </div>
          <div className="text-xl mt-2 text-white outfit-normal">
            Technologies and tools I use to create professional and scalable web
            applications.
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 mt-6 sm:px-4 px-2 ">
            {techStack.map((item, i) => (
              <MagneticCard key={i}>
                <div className="relative group overflow-hidden h-25 sm:h-28 w-25 sm:w-28 border-white/60 hover:shadow-lg hover:shadow-white/50 transition-all duration-200 border backdrop-blur-[2px] rounded-[5px] gap-2 flex flex-col items-center justify-center">
                  <div className="text-5xl text-white group-hover:text-[#050505] z-10 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div className="text-base outfit-normal text-white group-hover:text-[#050505] z-10 transition-transform duration-500">
                    {item.name}
                  </div>
                  <span className="absolute inset-0 translate-x-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                </div>
              </MagneticCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Section3);
