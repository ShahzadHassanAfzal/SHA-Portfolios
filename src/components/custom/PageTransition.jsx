import { motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1];

const PageTransition = ({ children }) => {
    return (
        <div className="relative max-h-[500vh] overflow-hidden z-100">

            {/* Overlay wipe animation */}
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.9, ease }}
                className="fixed top-0 left-0 w-[25%] h-full bg-[#ffffff] origin-bottom z-100"
            />
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.9, ease, delay: 0.1 }}
                className="fixed top-0 left-[20%] w-[25%] h-full bg-[#ffffff] origin-bottom z-100"
            />
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.9, ease, delay: 0.2 }}
                className="fixed top-0 left-[40%] w-[25%] h-full bg-[#ffffff] origin-bottom z-100"
            />
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.9, ease, delay: 0.3 }}
                className="fixed top-0 left-[60%] w-[25%] h-full bg-[#ffffff] origin-bottom z-100"
            />
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.9, ease, delay: 0.4 }}
                className="fixed top-0 left-[80%] w-[25%] h-full bg-[#ffffff] origin-bottom z-100"
            />

            {/* Page content animation */}
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.98, filter: "blur(32px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, scale: 0.98, filter: "blur(32px)" }}
                transition={{ duration: 0.5, ease }}
                className="w-full max-h-[500vh]"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default PageTransition;