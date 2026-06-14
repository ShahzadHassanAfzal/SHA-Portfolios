import React, { memo, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Portfolio from "../../pages/Portfolio";
import Skills from "../../pages/Skills";
import NotFoundPage from "../../pages/NotFoundPage";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
gsap.registerPlugin(ScrollSmoother);

const AnimatedRoutes = () => {
  const Location = useLocation();
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      smoothTouch: 0.1,
      normalizeScroll: true,
      effects: true,
    });
  }, []);
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <AnimatePresence mode="wait">
          <Routes location={Location} key={Location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default React.memo(AnimatedRoutes);
