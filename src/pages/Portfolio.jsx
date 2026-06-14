import React, { memo } from "react";
import PageTransition from "../components/custom/PageTransition";
import Hero from "../components/portfolio/Hero";
import Section2 from "../components/portfolio/Section2";
import Section3 from "../components/portfolio/Section3";
import Footer from "../components/custom/Footer";

const Portfolio = () => {
  return (
    <div className="cursor-default">
      <PageTransition>
        <Hero />
      </PageTransition>
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
};

export default React.memo(Portfolio);
