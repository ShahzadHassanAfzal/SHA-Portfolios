import { motion } from "framer-motion";
import React, { memo } from "react";

const Section7 = () => {
  const steps = [
    {
      skills: "Frontend Developer",
      Agency: "Fiverr.com",
      Experience: "2024 - Present",
      desc: "Delivered responsive frontend solutions for global clients with consistent excellence.",
    },
    {
      skills: "Frontend & MernStack Developer",
      Agency: "Upwork.com",
      Experience: "2024 - Present",
      desc: "Frontend and MERN Developer with 1+ year experience delivering scalable digital solutions.",
    },
    {
      skills: "Frontend Developer",
      Agency: "Freelancer.com",
      Experience: "2025 - Present",
      desc: "Built modern web interfaces for international clients ensuring quality.",
    },
    {
      skills: "Frontend Developer",
      Agency: "Rise Technologies",
      Experience: "2025 - Present",
      desc: "Developed scalable frontend applications using industry-standard technologies",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-white py-12 px-6 flex cursor-default flex-col items-center justify-center">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-80 w-80 animate-pulse rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 animate-pulse rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-80 w-80 animate-pulse rounded-full bg-white/10 blur-3xl" />
      <div className="absolute left-0 top-1/2 h-80 w-80 animate-pulse rounded-full bg-white/10 blur-3xl" />

      <div className="text-center">
        <span className="inline-flex items-center rounded-full border orbitron-regular border-white/40 px-5 py-2 text-sm uppercase tracking-[3px] text-white/90 backdrop-blur-xl">
          My Journey
        </span>
        {/* Title */}
        <h1 className="text-center text-3xl sm:text-5xl md:text-6xl mt-5 outfit-regular tracking-wide">
          My Development Journey
        </h1>
        <div className="text-sm sm:text-base outfit-normal md:text-lg text-white/80 mt-4 max-w-5xl">
          From learning fundamentals to building modern web applications, my
          development journey reflects continuous growth, innovation, and
          dedication to creating impactful digital experiences.{" "}
        </div>
      </div>
      <div className="max-w-5xl w-full relative mt-10">
        <div className="relative w-full">
          {/* Center Line */}
          <div className="absolute left-1/2 hidden lg:flex w-1 h-full bg-linear-to-b from-white via-gray-500 to-white rounded-full -translate-x-1/2 shadow-[0_0_30px_rgba(0,0,0,0.6)]" />

          <div className="space-y-5 md:space-y-3 relative">
            {steps.map((item, index) => (
              <div key={index} className="relative flex items-center w-full">
                {/* Dot */}
                <motion.div
                  style={{
                    background: "linear-gradient(90deg, #ffffff, #dbdbdb)",
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-1/2 hidden lg:flex -translate-x-1/2 w-5 h-5 rounded-full border border-white shadow-[0_0_25px_rgba(0,0,0,0.7)] z-10"
                />

                {/* Card */}
                <motion.div
                  transition={{ duration: 0.5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={` backdrop-blur-xl border border-white/50 p-8 rounded-lg w-full md:w-112.5
                  ${index % 2 === 0 ? "md:mr-auto md:ml-0 md:pr-12" : "md:ml-auto md:mr-0 md:pl-12"}`}
                >
                  <h2 className="text-3xl outfit-normal">
                    0{index + 1}. {item.Agency}
                  </h2>
                  <p className="text-xl font-semibold mt-1">{item.skills}</p>
                  <p className="text-white outfit-light leading-relaxed">
                    {item.Experience}
                  </p>
                  <p className="text-white outfit-light leading-relaxed border-t border-white/50 mt-2 pt-2">
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Section7);
