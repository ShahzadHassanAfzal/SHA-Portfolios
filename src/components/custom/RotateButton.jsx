import React, { memo } from "react";
const RotateButton = () => {
  const text = "Shahzad • Hassan • Afzal • ";

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-26 h-26 flex items-center group justify-center">
        {/* Rotating SVG Ring */}
        <svg
          viewBox="0 0 200 200"
          className="absolute w-full h-full animate-spin-slow border-2 rounded-full"
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100
                 m -80, 0
                 a 80,80 0 1,1 160,0
                 a 80,80 0 1,1 -160,0"
            />
          </defs>

          <text className="text-[14.5px] tracking-[2px] fill-white uppercase outfit-light">
            <textPath href="#circlePath">{text.repeat(2)}</textPath>
          </text>
        </svg>

        {/* Center Button */}
        <div className="w-12 h-12 rounded-full group-hover:scale-110 transition-all duration-200 bg-white flex items-center justify-center shadow-lg z-10">
          <span className="text-black text-2xl">↓</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RotateButton);
