import React, { useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { FaCircleArrowRight } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Section3 = () => {
    const sectionRef = useRef();
    const sliderRef = useRef();
    const servicesRef = useRef();
    const titleRef = useRef([]);
    const descriptionRef = useRef([]);
    const services = [
        { service: "Responsive Design", description: "Creates seamless experiences across desktops, tablets, and mobile devices ......" },
        { service: "Performance Optimization", description: "Improves website speed, loading times, and overall user satisfaction ......" },
        { service: "User-Friendly Interface", description: "Designs intuitive layouts that enhance usability and engagement ......" },
        { service: "SEO-Friendly Development", description: "Builds websites optimized for better search engine visibility ......" },
        { service: "Secure Web Applications", description: "Implements security best practices to protect data and users ......" },
        { service: "Scalable Architecture", description: "Develops flexible solutions that grow with business requirements ......" },
    ]

    return (
        <section ref={servicesRef} className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white cursor-default">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 h-96 w-96 bg-white/10 blur-3xl animate-pulse rounded-full" />
            <div className="absolute bottom-0 right-0 h-96 w-96 bg-white/10 blur-3xl animate-pulse rounded-full" />

            <div className="section4-title outfit-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-5 mt-5">How <span className="outfit-normal">I</span> Help <span className="outfit-normal">Businesses</span></div>
            <div ref={sectionRef} className="h-full w-full overflow-hidden flex flex-col lg:flex-row-reverse gap-5 mt-3">
                <div className="h-full w-full pt-5 px-5 flex">
                    <div>
                        <div className="text-[20px] sm:text-[22px] outfit-normal mt-1">
                            Engineering Exceptional User Experiences with Modern Web Technologies
                        </div>
                        <div className="mt-2 text-[12px] sm:text-sm md:text-base tracking-wide outfit-light">
                            I am a passionate Frontend and MERN Stack Developer dedicated to building modern, responsive, and high-performance web applications. With expertise in React.js, JavaScript, Node.js, Express.js, MongoDB, and Tailwind CSS, I create seamless digital experiences that combine attractive user interfaces with efficient functionality. My focus is on developing scalable, secure, and user-friendly solutions that help businesses establish a strong online presence and achieve their goals.
                        </div>
                        <div className="mt-3 text-[12px] sm:text-sm md:text-base tracking-wide outfit-light">
                            From crafting engaging frontend experiences to developing complete full-stack applications, I transform ideas into reliable digital products. I follow modern development practices, write clean and maintainable code, and prioritize performance, accessibility, and responsiveness. By combining technical expertise with a problem-solving mindset, I deliver web solutions that enhance user engagement, improve business efficiency, and drive long-term growth.</div>
                        <div className="flex gap-2 items-center w-full mt-5 lg:mt-5 outfit-light">
                            <div
                                className="rounded-full py-6 px-2 flex items-center justify-center bg-white pointer-events-none"
                            >
                                <div className="text-black orbitron-regular text-2xl uppercase">SHA</div>
                            </div>

                            <div
                                className="flex text-[12px] sm:text-sm md:text-base tracking-wide max-w-87.5"
                            >
                                "Crafting Modern Interfaces and Powerful MERN Stack Applications That Deliver Exceptional Digital Experiences."
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full w-full flex items-center justify-center pt-6">
                    <div ref={sliderRef} className=" h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 px-5">
                        {services.map((name, i) => {
                            return (
                                <div key={i}>
                                    <div
                                        className="ServiceCard relative group overflow-hidden h-64 md:h-60 border border-white/50 flex flex-col cursor-default justify-center"
                                    >
                                        <div className={`indicator absolute top-0 bg-white h-1`}></div>
                                        <div className="scale-90">

                                            <h2 ref={(el) => (titleRef.current[i] = el)} className="text-[32px] leading-tight pt-2 outfit-regular text-start mt-2">
                                                {name.service}
                                            </h2>
                                            <div ref={(el) => (descriptionRef.current[i] = el)} className="text-[18px] sm:text-base xl:text-[15px] pt-4 text-white/70 text-start outfit-light">
                                                {name.description}
                                            </div>
                                            <div className="lg:text-white mt-2 text-white lg:group-hover:text-white p-8 pt-3 transition-all">
                                                <FaCircleArrowRight className="text-4xl lg:text-base lg:group-hover:scale-220 transition-all duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Section3)