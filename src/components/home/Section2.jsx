import React, { useEffect } from "react";
import { useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import TextMarquee from "../custom/TextMarquee";
import Main from "../../../public/images/AboutMain.webp";
gsap.registerPlugin(ScrollTrigger, SplitText);

const items = [
  "Shahzad • Hassan • Afzal",
  "Shahzad • Hassan • Afzal",
  "Shahzad • Hassan • Afzal",
  "Shahzad • Hassan • Afzal",
];

const Section2 = () => {
  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const logoRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
    tl.to(titleRef.current, {
      width: 0,
      duration: 1,
    });
    tl.to(
      subTitleRef.current,
      {
        width: 0,
        duration: 1,
      },
      "<+0.1",
    );
    tl.to(
      para1Ref.current,
      {
        width: 0,
        duration: 1,
      },
      "<+0.1",
    );
    tl.to(
      para2Ref.current,
      {
        width: 0,
        duration: 1,
      },
      "<+0.1",
    );
    tl.to(
      descRef.current,
      {
        width: 0,
        duration: 1,
      },
      "<+0.1",
    );
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
      scale: 1.3,
    });
  });

  return (
    <div
      id="scroll"
      ref={aboutRef}
      className="relative z-30 min-h-[1/2] w-screen bg-[#050505] text-[#dbdbdb]"
    >
      <div className="absolute top-0 left-1/2 h-96 w-96 animate-pulse bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 h-96 w-96 animate-pulse bg-white/10 blur-3xl rounded-full" />
      <div className="flex justify-center pt-10">
        <span className="inline-flex orbitron-regular rounded-full border border-white/40 px-5 py-2 text-sm uppercase tracking-[3px] text-white/90 backdrop-blur-xl">
          About Me
        </span>
      </div>
      <div className="h-full w-full gap-6 grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Content */}
        <div className="relative z-5 h-full w-full flex flex-col py-15 pl-2 pr-1 sm:pl-3 ">
          <div className="flex flex-col text-white gap-2">
            {/* Title */}
            <div className="relative overflow-hidden">
              <div className="text-4xl sm:text-[56px] outfit-normal">
                About Me
              </div>
              <div
                ref={titleRef}
                className="absolute inset-0 bg-white h-full w-full"
              ></div>
            </div>

            {/* Subtitle */}
            <div className="relative overflow-hidden">
              <div className="text-[18px] sm:text-[19px] outfit-normal mt-3">
                Crafting Modern Web Experiences with MERN Stack & Frontend
                Technologies
              </div>
              <div
                ref={subTitleRef}
                className="absolute inset-0 bg-white h-full w-full"
              ></div>
            </div>

            {/* Paragraph 1 */}
            <div className="relative overflow-hidden">
              <span className="mt-3 flex text-sm outfit-normal tracking-wide">
                "I am a passionate Frontend and MERN Stack Developer dedicated
                to building modern, scalable, and high-performance web
                applications that deliver exceptional user experiences.
                Combining clean code with intuitive design principles, I
                transform ideas into responsive, interactive, and impactful
                digital products."
              </span>
              <div
                ref={para1Ref}
                className="absolute inset-0 bg-white h-full w-full"
              ></div>
            </div>

            {/* Paragraph 2 */}
            <div className="relative overflow-hidden">
              <span className="mt-5 flex text-sm outfit-normal tracking-wide">
                "My expertise includes React.js, JavaScript, Tailwind CSS,
                Node.js, Express.js, MongoDB, and RESTful APIs, allowing me to
                develop complete end-to-end solutions from engaging user
                interfaces to powerful backend systems. I focus on creating
                applications that are fast, secure, maintainable, and optimized
                for both users and businesses."
              </span>
              <div
                ref={para2Ref}
                className="absolute inset-0 bg-white h-full w-full"
              ></div>
            </div>

            {/* Logo + Description */}
            <div className="relative flex gap-2 items-center w-full mt-5 lg:mt-7 mono-light">
              <div className="rounded-full py-6 px-2 flex items-center justify-center bg-white pointer-events-none">
                <div className="text-black orbitron-regular text-2xl uppercase">
                  SHA
                </div>
              </div>

              <div className="flex text-[12px] text-start max-w-75 sm:max-w-105 w-[98%] tracking-wide sm:w-[70%] sm:text-[14px] lg:text-[13px] outfit-normal">
                "Crafting Exceptional Frontend Experiences and Building
                High-Performance MERN Applications — Modern, Scalable, and
                User-Centric Digital Solutions That Drive Growth and Elevate
                Brands."
              </div>

              <div
                ref={descRef}
                className="absolute inset-0 bg-white h-full w-full"
              ></div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative z-5 pb-10 xl:pb-0 h-full w-full flex items-center justify-center">
          <div className="relative w-[93%] pointer-events-none sm:w-[80%] xl:w-[65%] overflow-hidden rounded-xl">
            <img
              src={Main}
              alt="Section2Main"
              ref={imageRef}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <TextMarquee
        items={items}
        className="text-4xl border-t border-b text-white"
      />
    </div>
  );
};

export default React.memo(Section2);
