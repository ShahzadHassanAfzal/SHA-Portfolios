import { motion } from "framer-motion";
import React, { memo } from "react";

const ease = [0.76, 0, 0.24, 1];

const PageTransition = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background-color">
      {/* Overlay wipe animation */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.9, ease }}
        className="fixed top-0 left-0 w-[25%] h-full bg-[#ffffff] origin-top z-100"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.9, ease }}
        className="fixed top-0 left-[20%] w-[25%] h-full bg-[#ffffff] origin-bottom z-100"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.9, ease }}
        className="fixed top-0 left-[40%] w-[25%] h-full bg-[#ffffff] origin-top z-100"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.9, ease }}
        className="fixed top-0 left-[60%] w-[25%] h-full bg-[#ffffff] origin-bottom z-100"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.9, ease }}
        className="fixed top-0 left-[80%] w-[25%] h-full bg-[#ffffff] origin-top z-100"
      />

      {/* Page content animation */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.98, filter: "blur(32px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0)" }}
        exit={{ opacity: 0, y: -40, scale: 0.98, filter: "blur(32px)" }}
        transition={{ duration: 1, ease }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default React.memo(PageTransition);
