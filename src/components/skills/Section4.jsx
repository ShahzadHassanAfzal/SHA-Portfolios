import React, { memo } from "react";
import MagneticCard from "../custom/MagneticCard";

const frontendSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "Firebase",
];

const tools = [
  "Git & GitHub",
  "VS Code",
  "Postman",
  "Figma",
  "Vercel",
  "Netlify",
];

const SkillBadge = ({ title }) => {
  return (
    <MagneticCard>
      <div
        className="
            relative
            group
            overflow-hidden
                px-5
                py-2
                rounded-md
                border
                border-white
                backdrop-blur-md
                text-sm
                text-white
                hover:text-black
                transition-all
                duration-300
                outfit-normal
            "
      >
        <div className="relative z-2 text-white group-hover:text-black">
          {title}
        </div>
        <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-200 bg-white" />
      </div>
    </MagneticCard>
  );
};

const SkillCard = ({ heading, skills }) => {
  return (
    <div className="rounded-lg border border-white/70 backdrop-blur-[2px] p-8 text-white transition-all duration-300">
      <h2 className="text-2xl outfit-normal mb-6 text-white">{heading}</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <SkillBadge key={index} title={skill} />
        ))}
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto relative z-10 px-5 cursor-default">
        {/* Background Glow */}
        <div className="absolute bottom-0 right-1/2 h-96 w-96 bg-white/5 blur-3xl animate-pulse rounded-full" />

        {/* Skills Section */}
        <div className="mt-4 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard heading="Frontend TechStacks" skills={frontendSkills} />

            <SkillCard heading="Backend TechStacks" skills={backendSkills} />

            <SkillCard heading="Tools & Others" skills={tools} />
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Section4);
