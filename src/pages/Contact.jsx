import React, { memo } from "react";
import PageTransition from "../components/custom/PageTransition";
import Hero from "../components/contact/Hero";
import Navbar from "../components/custom/Navbar";
import Footer from "../components/custom/Footer";

const Contact = () => {
  return (
    <div className="cursor-default">
      <Navbar />
      <PageTransition>
        <Hero />
      </PageTransition>
      <Footer />
    </div>
  );
};

export default React.memo(Contact);
