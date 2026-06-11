import { useRef } from "react";
import Marquee from "../custom/TextMarquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { memo } from "react";

const Section6 = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
      },
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-between min-h-1/2 cursor-default gap-10 bg-[#050505] py-10 text-white"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-80 w-80 animate-pulse rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 animate-pulse rounded-full bg-white/10 blur-3xl" />

      <Marquee
        items={items}
        className="outfit-light text-2xl sm:text-3xl text-white border-t border-b border-white/50"
      />
      <div className="outfit-normal text-center contact-text-responsive leading-none">
        <p>
          “ Let’s build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
          Excellence <span className="text-white italic">together</span> “
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-white text-2xl sm:text-3xl bg-transparent border-white/50 border-y-2 outfit-light"
        iconClassName="stroke-white stroke-2 text-white"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default React.memo(Section6);
