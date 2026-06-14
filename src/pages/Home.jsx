import React, { memo } from "react";
import PageTransition from "../components/custom/PageTransition";
import Hero from "../components/home/Hero";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";
import Section5 from "../components/home/Section5";
import Section6 from "../components/home/Section6";
import Section7 from "../components/home/Section7";
import Footer from "../components/custom/Footer";
import Navbar from "../components/custom/Navbar";

const Home = () => {
  return (
    <div className="overflow-hidden cursor-default">
      <PageTransition>
        <Hero />
      </PageTransition>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section7 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
};

export default React.memo(Home);
