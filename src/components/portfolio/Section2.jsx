import ShahzadPortfolio from '../../../public/videos/ShahzadPortfolio.mp4'
import { FaGithub } from "react-icons/fa";
import React, { memo } from 'react'
import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import gsap from 'gsap'
import { FiArrowUpRight } from "react-icons/fi"
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Services = [
    {
        name: "Shahzad Hassan - Portfolios",
        desc: "Exceptional portfolio development with React, Tailwind CSS, GSAP, and Framer Motion. Highly recommended.",
        video: ShahzadPortfolio,
    },
    {
        name: "Hello",
        desc: "Immersive interfaces engineered for intuitive experiences, usability, and scalable digital products.",
        video: ShahzadPortfolio,
    },
    {
        name: "Custom Development",
        desc: "Modern web applications and platforms built with performance, scalability, and future-ready architecture.",
        video: ShahzadPortfolio,
    },
]

const Services2 = [
    {
        name: "Brand Identity",
        desc: "Strategic visual systems crafted to establish trust, consistency, and premium brand positioning.",
        video: ShahzadPortfolio,
    },
    {
        name: "Rise Technologies - Creative Agency",
        desc: "Interactive agency website showcasing modern design, advanced animations, responsiveness, and exceptional user experience.",
        video: ShahzadPortfolio,
    },
    {
        name: "Custom Development",
        desc: "Modern web applications and platforms built with performance, scalability, and future-ready architecture.",
        video: ShahzadPortfolio,
    },
]

const Section2 = () => {

    const videoRefs = useRef([])
    const cardsRef = useRef([])
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const descRef = useRef(null)
    const buttonRef = useRef(null)

    const handleMouseEnter = async (index, e) => {

        const card = e.currentTarget
        const video = videoRefs.current[index]

        if (video) {
            try {
                await video.play()
            } catch (err) {
                console.log(err)
            }
        }

        gsap.killTweensOf([card, video])

        gsap.to(card, {
            y: -14,
            duration: 0.8,
            ease: "power4.out",
            overwrite: "auto",
            force3D: true,
        })

        gsap.to(video, {
            duration: 1.4,
            ease: "power3.out",
            overwrite: "auto",
            force3D: true,
        })

    }

    const handleMouseLeave = (index, e) => {

        const card = e.currentTarget
        const video = videoRefs.current[index]

        if (video) {
            video.pause()
            video.currentTime = 0
        }

        gsap.killTweensOf([card, video])

        gsap.to(card, {
            y: 0,
            duration: 0.8,
            ease: "power4.out",
            overwrite: "auto",
            force3D: true,
        })

        gsap.to(video, {
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            overwrite: "auto",
            force3D: true,
        })

    }

    useEffect(() => {

        const ctx = gsap.context(() => {

            /* =======================================
               Performance Optimization
            ======================================= */

            gsap.set(cardsRef.current, {
                willChange: "transform, opacity",
                transformPerspective: 1200,
                transformOrigin: "center center",
                force3D: true,
            })

            gsap.set(videoRefs.current, {
                willChange: "transform",
                force3D: true,
            })

            /* =======================================
               Master Intro Timeline
            ======================================= */

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
            })

            tl

                .from(sectionRef.current, {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                })

                .from(titleRef.current, {
                    y: 120,
                    opacity: 0,
                    skewY: 4,
                    duration: 1.5,
                    ease: "power4.out",
                    force3D: true,
                }, "-=0.6")

                .from(descRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    force3D: true,
                }, "-=1.1")

            /* =======================================
               Cards Animation
            ======================================= */

            cardsRef.current.forEach((card, index) => {

                if (!card) return

                const video = card.querySelector("video")
                const overlay = card.querySelector(".card-overlay")
                const content = card.querySelector(".card-content")
                const arrow = card.querySelector(".card-arrow")

                /* Initial State */

                gsap.set(card, {
                    y: 120,
                    opacity: 0,
                    scale: 1,
                    force3D: true,
                })

                gsap.set(content, {
                    y: 30,
                    opacity: 0,
                    force3D: true,
                })

                gsap.set(arrow, {
                    scale: 0.8,
                    opacity: 0,
                    force3D: true,
                })

                /* Reveal Timeline */

                const revealTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: "top 88%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    },
                })

                revealTl

                    .to(card, {
                        y: 0,
                        opacity: 1,
                        duration: 1.3,
                        delay: index * 0.08,
                        ease: "power4.out",
                        force3D: true,
                    })

                    .to(content, {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: "power3.out",
                        force3D: true,
                    }, "-=0.9")

                    .to(arrow, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.7,
                        ease: "back.out(1.7)",
                        force3D: true,
                    }, "-=0.8")

                /* Hover Timeline */

                const hoverTl = gsap.timeline({
                    paused: true,
                    defaults: {
                        ease: "power3.out",
                    },
                })

                hoverTl

                    .to(video, {
                        scale: 1.08,
                        duration: 1.4,
                        force3D: true,
                    }, 0)

                    .to(overlay, {
                        opacity: 0.15,
                        duration: 0.8,
                    }, 0)


                    .to(arrow, {
                        rotate: 45,
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        duration: 0.6,
                    }, 0)

                /* Magnetic Hover */

                const moveCard = (e) => {

                    const bounds = card.getBoundingClientRect()

                    const x = e.clientX - bounds.left
                    const y = e.clientY - bounds.top

                    const rotateY = gsap.utils.mapRange(
                        0,
                        bounds.width,
                        -6,
                        6,
                        x
                    )

                    const rotateX = gsap.utils.mapRange(
                        0,
                        bounds.height,
                        6,
                        -6,
                        y
                    )

                    gsap.to(card, {
                        rotateY,
                        rotateX,
                        duration: 0.8,
                        ease: "power3.out",
                        transformPerspective: 1200,
                    })

                }

                const resetCard = () => {

                    gsap.to(card, {
                        rotateY: 0,
                        rotateX: 0,
                        duration: 1,
                        ease: "power4.out",
                    })

                }

                const enter = () => hoverTl.play()
                const leave = () => hoverTl.reverse()

                card.addEventListener("mouseenter", enter)
                card.addEventListener("mouseleave", leave)
                card.addEventListener("mousemove", moveCard)
                card.addEventListener("mouseleave", resetCard)

            })

            /* =======================================
               CTA Button Animation
            ======================================= */

            gsap.from(buttonRef.current, {
                y: 60,
                opacity: 0,
                scale: 0.9,
                duration: 1,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: buttonRef.current,
                    start: "top 95%",
                    toggleActions: "play none none reverse",
                },
            })

            /* =======================================
               Smooth Refresh
            ======================================= */

            ScrollTrigger.refresh()

        }, sectionRef)

        return () => {

            ScrollTrigger.getAll().forEach((trigger) => {
                trigger.kill()
            })

            ctx.revert()

        }

    }, [])

    return (
        <section
            ref={sectionRef}
            className='relative min-h-screen w-screen overflow-hidden bg-[#050505]'
        >

            <div className="absolute top-0 left-0 h-96 w-96 animate-pulse bg-white/10 blur-3xl rounded-full" />
            <div className="absolute top-1/4 right-0 animate-pulse h-96 w-96 bg-white/10 blur-3xl rounded-full" />
            <div className="absolute bottom-1/3 left-1/8 h-96 w-96 animate-pulse bg-white/10 blur-3xl rounded-full" />
            <div className="absolute bottom-1/6 right-1 h-96 w-96 animate-pulse bg-white/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-1 h-96 w-96 animate-pulse bg-white/10 blur-3xl rounded-full" />

            {/* Header */}
            <div className='relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between px-5 sm:px-[8%] pt-15 gap-10'>

                <div className='max-w-3xl'>

                    <h2
                        ref={titleRef}
                        className='mt-5 text-3xl sm:text-6xl leading-[1.15] tracking-tight text-white outfit-normal uppercase'
                    >
                        Interative Portfolio ShowCase
                    </h2>

                </div>

            </div>

            {/* Services Grid */}
            <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-28 px-5 sm:px-[8%] pt-10 pb-5'>

                {/* Left Side */}
                <div className='flex flex-col items-center md:items-end gap-15'>

                    <div
                        ref={descRef}
                        className='max-w-105'
                    >

                        <p className='text-lg sm:text-xl leading-relaxed text-white/80 outfit-normal'>
                            From responsive frontend experiences to powerful MERN Stack applications, I create innovative digital products built for performance, scalability, and growth.
                        </p>

                    </div>

                    <div className='flex flex-col gap-16 lg:gap-24 items-center md:items-start'>

                        {Services2.slice(1).map((service, index) => (

                            <div
                                ref={(el) => (cardsRef.current[index] = el)}
                                to={"/projects"}
                                key={index}
                                onMouseEnter={(e) => handleMouseEnter(index + 1, e)}
                                onMouseLeave={(e) => handleMouseLeave(index + 1, e)}
                                className='relative w-full max-w-110 cursor-default rounded-lg overflow-hidden border-2 border-white'
                            >

                                {/* Card */}
                                <div className='relative overflow-hidden'>

                                    {/* Overlay */}
                                    <div className='card-overlay absolute inset-0 z-10 bg-linear-to-t from-[#050505]/60 via-transparent to-transparent'></div>

                                    {/* Video */}
                                    <video
                                        ref={(el) => (videoRefs.current[index + 1] = el)}
                                        src={service.video}
                                        muted
                                        loop
                                        playsInline
                                        preload='metadata'
                                        className='h-full w-full object-cover transition-transform duration-1000'
                                    />

                                </div>
                                <div className='px-2 pb-3'>
                                    {/* Content */}
                                    <div className='card-content z-20 flex w-full flex-col pt-3'>

                                        <span className='text-3xl sm:text-4xl tracking-tight text-white outfit-normal'>
                                            {service.name}
                                        </span>

                                    </div>

                                    {/* Description */}
                                    <p className='mt-3 text-lg leading-relaxed text-white/80 outfit-normal'>
                                        {service.desc}
                                    </p>

                                    <div className='flex justify-between mt-4'>
                                        <div className='flex gap-2 '>
                                            <a href="#">
                                                <div className='text-6xl text-white transition-all duration-500 hover:bg-white rounded-full hover:text-[#050505]'>
                                                    <FaGithub />
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className='z-20 flex h-14 w-14 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#050505] hover:rotate-45 transition-transform duration-500 '>
                                                    <FiArrowUpRight className='text-2xl' />
                                                </div>
                                            </a>
                                        </div>
                                        <div className='flex relative'>
                                            <NavLink
                                                to={"/contact"}
                                                className=" relative overflow-hidden flex group px-5 rounded-md bg-transparent items-center justify-center border-white z-2 backdrop-blur-md border-2 text-white outfit-normal transition-all duration-300"
                                            >
                                                <div className="relative z-2 group-hover:text-[#050505]">
                                                    Let's Connect Today!
                                                </div>
                                                <div className="absolute z-0 inset-0 bg-[#ffffff] transition-transform duration-300 translate-y-full group-hover:translate-y-0"></div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

                {/* Right Side */}
                <div className='flex flex-col gap-16 lg:gap-24 items-center md:items-start'>

                    {Services.slice(0).map((service, index) => (

                        <div
                            ref={(el) => (cardsRef.current[index + 2] = el)}
                            key={index}
                            onMouseEnter={(e) => handleMouseEnter(index + 3, e)}
                            onMouseLeave={(e) => handleMouseLeave(index + 3, e)}
                            className='relative w-full max-w-110 cursor-default rounded-lg overflow-hidden border-2 border-white'
                        >

                            {/* Card */}
                            <div className='relative overflow-hidden'>

                                {/* Overlay */}
                                <div className='card-overlay absolute inset-0 z-10 bg-linear-to-t from-[#050505]/60 via-transparent to-transparent'></div>

                                {/* Video */}
                                <video
                                    ref={(el) => (videoRefs.current[index + 3] = el)}
                                    src={service.video}
                                    muted
                                    loop
                                    playsInline
                                    preload='metadata'
                                    className='h-full w-full object-cover transition-transform duration-1000'
                                />
                            </div>
                            <div className='px-2 pb-3'>
                                {/* Content */}
                                <div className='card-content z-20 flex w-full flex-col pt-3'>

                                    <span className='text-3xl sm:text-4xl tracking-tight text-white outfit-normal'>
                                        {service.name}
                                    </span>

                                </div>

                                {/* Description */}
                                <p className='mt-3 text-lg leading-relaxed text-white/80 outfit-normal'>
                                    {service.desc}
                                </p>

                                <div className='flex justify-between mt-4'>
                                    <div className='flex gap-2 '>
                                        <a href="#">
                                            <div className='text-6xl text-white transition-all duration-500 hover:bg-white rounded-full hover:text-[#050505]'>
                                                <FaGithub />
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className='z-20 flex h-14 w-14 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#050505] hover:rotate-45 transition-transform duration-500 '>
                                                <FiArrowUpRight className='text-2xl' />
                                            </div>
                                        </a>
                                    </div>
                                    <div className='flex relative'>
                                        <NavLink
                                            to={"/contact"}
                                            className=" relative overflow-hidden flex group px-5 rounded-md bg-transparent items-center justify-center border-white z-2 backdrop-blur-md border-2 text-white outfit-normal transition-all duration-300"
                                        >
                                            <div className="relative z-2 group-hover:text-[#050505]">
                                                Let's Connect Today!
                                            </div>
                                            <div className="absolute z-0 inset-0 bg-[#ffffff] transition-transform duration-300 translate-y-full group-hover:translate-y-0"></div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default React.memo(Section2)