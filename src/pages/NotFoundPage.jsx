import React from "react";
import { Link } from "react-router";
import PageTransition from "../components/custom/PageTransition";

const NotFoundPage = () => {
  return (
    <PageTransition>
      <div className="h-screen w-full overflow-hidden flex flex-col cursor-default items-center justify-center bg-[#050505] text-white">
        <h1 className="text-2xl sm:text-4xl orbitron-regular">
          404 | Page Not Found
        </h1>
        <Link
          to="/"
          className="text-xl outfit-normal bg-white/30 hover:bg-white/10 transition-all duration-300 px-5 py-3 mt-5 rounded-lg"
        >
          Return to Home
        </Link>
      </div>
    </PageTransition>
  );
};

export default NotFoundPage;
