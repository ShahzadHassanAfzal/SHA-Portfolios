import React, { useEffect, useRef, memo } from "react";
import gsap from "gsap";
import { FiArrowUpRight } from "react-icons/fi";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { backOut } from "framer-motion";
import {
    FaSearch,
    FaPencilRuler,
    FaCode,
    FaBug,
    FaRocket,
    FaHeadset,
} from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
    const sectionRef = useRef(null);
    const sliderRef = useRef(null);


    const workflowSteps = [
        {
            id: "01",
            title: "Requirement Analysis",
            desc:
                "Understanding project goals, target audience, business requirements, and defining the development roadmap.",
            icon: <FaSearch />,
        },
        {
            id: "02",
            title: "Planning & Design",
            desc:
                "Creating wireframes, user flows, UI concepts, and selecting the best technologies for the project.",
            icon: <FaPencilRuler />,
        },
        {
            id: "03",
            title: "Development",
            desc:
                "Building responsive interfaces, backend systems, APIs, and integrating all project functionalities.",
            icon: <FaCode />,
        },
        {
            id: "04",
            title: "Testing & Optimization",
            desc:
                "Performing quality assurance, fixing bugs, optimizing performance, and ensuring cross-device compatibility.",
            icon: <FaBug />,
        },
        {
            id: "05",
            title: "Deployment",
            desc:
                "Deploying the application securely on production servers with performance and scalability considerations.",
            icon: <FaRocket />,
        },
        {
            id: "06",
            title: "Maintenance & Support",
            desc:
                "Providing updates, monitoring performance, resolving issues, and adding future enhancements.",
            icon: <FaHeadset />,
        },
    ];

    const maincardRef = useRef(null);
    useGSAP(
        () => {
            const slider = sliderRef.current;
            const section = sectionRef.current;

            if (!slider || !section) return;

            const totalScroll =
                slider.scrollWidth - window.innerWidth;

            // Horizontal Scroll
            gsap.to(slider, {
                x: -totalScroll * 1.2,
                ease: "none",


                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: `+=${totalScroll}`,
                    scrub: 2,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,

                    //markers: true,
                },
            });


        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen w-screen flex flex-col justify-center bg-[#050505]"
        >
            {/* Background Effects */}
            <div className="absolute top-0 left-0 h-80 w-80 animate-pulse rounded-full bg-white/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-80 w-80 animate-pulse rounded-full bg-white/10 blur-3xl" />

            <div className="text-center px-2">
                <span className="inline-flex orbitron-regular rounded-full border border-white/40 px-5 py-2 text-sm uppercase tracking-[3px] text-white/90 backdrop-blur-xl">
                    My Workflow
                </span>

                <h2 className="mt-6 outfit-regular bg-white bg-clip-text text-3xl font-semibold text-transparent md:text-6xl lg:text-7xl">
                    My Development Workflow
                </h2>

                <p className="mx-auto mt-5 outfit-normal max-w-3xl text-white/60 md:text-lg">
                    A structured workflow that ensures quality, scalability, and
                    successful delivery of every project from idea to deployment.
                </p>
            </div>
            {/* Slider */}
            <div className="relative z-5 flex mt-7">
                <div
                    ref={sliderRef}
                    className="flex h-full items-center gap-5 pl-5 sm:pl-15 will-change-transform"
                >

                    {/* Service Cards */}
                    {workflowSteps.map((item, index) => (
                        <div
                            key={index}
                            className="service-card group relative z-10 flex h-[40vh] border border-white/10 w-[90vw] max-w-107.5 shrink-0 flex-col justify-between py-7 rounded-[10px] p-5 backdrop-blur-2xl transition-all duration-700"
                        >

                            {/* Top */}
                            <div className="flex items-start justify-between">
                                <span className="text-[19px] outfit-normal leading-none text-white/70">
                                    Step {item.id}
                                </span>

                                <div className="flex h-16 w-16 text-2xl items-center justify-center rounded-full border border-white/10 text-white">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="text-[30px] outfit-normal leading-none tracking-[-2px] text-white">
                                    {item.title}
                                </h2>

                                <p className="mt-6 text-[15px] outfit-light leading-[1.9] tracking-wide text-white/70">
                                    {item.desc}
                                </p>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default React.memo(Section4);