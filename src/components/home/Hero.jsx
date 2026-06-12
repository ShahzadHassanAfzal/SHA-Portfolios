import React, {memo} from 'react'
import Main from "../../../public/images/Main.webp";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import UI from "../../../public/images/responsive-design.svg";
import design from "../../../public/images/web-design.svg";
import user from "../../../public/images/user.svg";
import RotateButton from "../custom/RotateButton";
import { useEffect, useRef } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const text = "Shahzad • Hassan • Afzal • ";

    const menuItems = [
        { name: "Home", id: "home", path: "/" },
        { name: "About", id: "scroll" },
    ];

    const handleScrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div
            id="home"
            className="relative max-h-[500vh] lg:h-screen w-screen bg-black/90 overflow-hidden cursor-default"
        >
            <div className="absolute top-0 left-0 h-96 w-96 animate-pulse bg-white/10 blur-3xl rounded-full" />
            <div className="absolute top-0 left-1/2 animate-pulse h-96 w-96 bg-white/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 h-96 w-96 animate-pulse bg-white/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-1/4 h-96 w-96 animate-pulse bg-white/10 blur-3xl rounded-full" />

            <div className="h-full w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pt-25 main-grid">
                {/* LEFT CONTENT */}
                <div className="h-full w-[90%] mx-auto z-5 text-white outfit-normal flex flex-col justify-center text-2xl">
                    <div>
                        <span>Hey. </span>
                        <span>I'm Shahzad Hassan</span>
                    </div>

                    <div className="flex flex-col text-4xl sm:text-5xl leading-10 sm:leading-12">
                        <span>A Frontend</span>

                        <span className="prata-regular">
                            & MernStack
                        </span>

                        <span>Developer.</span>
                    </div>

                    <div className="text-base mt-3">
                        Turning vision into high-performance digital
                        experiences—where stunning frontend design meets
                        powerful backend architecture. We build lightning-fast,
                        scalable, and secure web solutions that captivate users,
                        drive engagement, and elevate your brand to the next
                        level.
                    </div>

                    <div className="flex justify-between mt-5">
                        <div>
                            <NavLink
                                to="/contact"
                                className="border border-white/80 group relative overflow-hidden text-[#dbdbdb] px-4 py-3 cursor-pointer rounded-lg group hover:shadow-lg hover:shadow-white/50 transition-all duration-300 inline-flex items-center gap-2 text-base"
                            >
                                <div className="text-[#ffffff] z-2 transition-transform group-hover:text-[#050505]">
                                    Let's Connect Today !
                                </div>
                                <div className="absolute z-0 inset-0 bg-white transition-transform duration-300 translate-y-full group-hover:translate-y-0"></div>
                            </NavLink>
                        </div>

                        <div className="flex">
                            <div
                                onClick={() => handleScrollTo("scroll")}
                                className="cursor-pointer"
                            >
                                <RotateButton />
                            </div>
                        </div>
                    </div>
                </div>

                {/* IMAGE */}
                <div className="w-full h-full md:h-full md:w-full flex justify-center">
                    <img
                        src={Main}
                        alt="Main"
                        className="h-full w-full z-9 pointer-events-none"
                    />
                </div>

                {/* RIGHT BOXES */}
                <div className="h-auto w-full flex-row flex-wrap lg:flex-col flex gap-4 items-center justify-center pt-8 pb-20 z-9 sm:px-10">
                    {/* BOX 1 */}
                    <div className="rounded-[10px] gap-3 items-center px-2 h-36 w-75 border border-white flex">
                        <div>
                            <img
                                src={UI}
                                alt="Icon"
                                className="w-70 sm:w-48 pointer-events-none"
                            />
                        </div>

                        <div>
                            <div className="text-base text-white outfit-regular">
                                Responsive Design
                            </div>

                            <div className="text-[12px] text-white outfit-normal">
                                Creates seamless experiences across devices with optimal performance.
                            </div>
                        </div>
                    </div>

                    {/* BOX 2 */}
                    <div className="rounded-[10px] gap-3 items-center px-2 h-36 w-75 border border-white flex">
                        <div>
                            <img
                                src={design}
                                alt="Icon"
                                className="w-48 pointer-events-none"
                            />
                        </div>

                        <div>
                            <div className="text-base text-white outfit-regular">
                                Modern Web Designs
                            </div>

                            <div className="text-[12px] text-white outfit-normal">
                                Clean, modern interfaces focused on usability and engagement.
                            </div>
                        </div>
                    </div>

                    {/* BOX 3 */}
                    <div className="rounded-[10px] gap-3 items-center px-2 h-36 w-75 border border-white flex">
                        <div>
                            <img
                                src={user}
                                alt="Icon"
                                className="w-40 pointer-events-none"
                            />
                        </div>

                        <div>
                            <div className="text-base text-white outfit-regular">
                                User & SEO Friendly Design
                            </div>

                            <div className="text-[12px] text-white outfit-normal">
                                Optimized for users, visibility, speed, and search rankings.
                            </div>
                        </div>
                    </div>
                </div>

                {/* EXTRA SECTION */}
                <div className="h-full w-full extra-section flex-col max-w-[90%] mx-auto hidden z-9 gap-6">
                    <div className="text-white text-3xl outfit-regular">
                        Modern Responsive & SEO-Friendly Web Design
                    </div>

                    <div className="text-white text-xl outfit-light">
                        I create modern, responsive, and user-focused websites
                        that work smoothly on all devices. My designs combine
                        clean UI, fast performance, and SEO-friendly structure
                        to improve search visibility. With intuitive navigation,
                        engaging layouts, and subtle modern animations, I ensure
                        a professional digital experience that attracts,
                        engages, and retains users effectively.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Hero);