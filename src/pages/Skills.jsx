import React, { memo } from "react";
import PageTransition from "../components/custom/PageTransition";
import Hero from "../components/skills/Hero";
import Section2 from "../components/skills/Section2";
import Section3 from "../components/skills/Section3";
import Section4 from "../components/skills/Section4";
import Section5 from "../components/skills/Section5";
import Navbar from "../components/custom/Navbar";
import Footer from "../components/custom/Footer";

const Skills = () => {
  return (
    <div className="cursor-default">
      <Navbar />
      <PageTransition>
        <Hero />
      </PageTransition>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default React.memo(Skills);
