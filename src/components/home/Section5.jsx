import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import React from "react";
import { memo } from "react";

const faqData = [
  {
    id: "01",
    question: "What services do you provide?",
    answer:
      "I specialize in Frontend and MERN Stack Development, creating modern, responsive, and scalable web applications tailored to business and user needs.",
  },
  {
    id: "02",
    question: "Which technologies do you work with?",
    answer:
      "My primary stack includes React.js, Next.js, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, REST APIs, and Git/GitHub.",
  },
  {
    id: "03",
    question: "Can you build fully responsive websites?",
    answer:
      "Yes. Every project is designed and developed to provide a seamless experience across mobile devices, tablets, laptops, and large desktop screens.",
  },
  {
    id: "04",
    question: "Do you develop backend systems as well?",
    answer:
      "Absolutely. I build secure backend architectures, REST APIs, authentication systems, database integrations, and server-side applications using Node.js and Express.js.",
  },
  {
    id: "05",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on complexity, features, and requirements. Small websites may take a few days, while larger web applications can take several weeks.",
  },
  {
    id: "06",
    question: "Do you handle deployment and hosting?",
    answer:
      "Yes. I deploy applications on platforms such as Vercel, Netlify, Render, Firebase, and cloud hosting providers while ensuring performance and reliability.",
  },
  {
    id: "07",
    question: "Can you redesign an existing website?",
    answer:
      "Yes. I can modernize outdated websites with improved UI/UX, better responsiveness, optimized performance, and scalable architecture.",
  },
  {
    id: "08",
    question: "Do you follow SEO best practices?",
    answer:
      "Yes. I implement SEO-friendly structures, semantic HTML, performance optimization, accessibility standards, and technical SEO fundamentals.",
  },
];

const Section5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => {
      const newIndex = prev === index ? null : index;

      return newIndex;
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] py-10 text-white">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-80 w-80 animate-pulse rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 animate-pulse rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-8xl">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border orbitron-regular border-white/40 px-5 py-2 text-sm uppercase tracking-[3px] text-white/90 backdrop-blur-xl">
            FAQ's
          </span>

          <h2 className="mt-6 text-white outfit-regular sm:text-5xl md:text-6xl lg:text-7xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-3xl px-2 text-sm leading-relaxed text-white/70 sm:text-lg outfit-normal">
            Find answers to common questions about my development process,
            technologies, project timelines, and services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-6">
          {faqData.map((faq, index) => (
            <div
              id={`faq-item-${index}`}
              key={index}
              className={`overflow-hidden border px-1 transition-all duration-500 md:px-10 ${
                activeIndex === index ? "border-white/20" : "border-white/10"
              }`}
            >
              {/* Question */}
              <div
                role="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full cursor-pointer items-center justify-between gap-5 px-6 py-6 text-left transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl text-white/70 outfit-normal">
                    {faq.id}.
                  </span>

                  <h3 className="text-lg text-white sm:text-2xl outfit-normal">
                    {faq.question}
                  </h3>
                </div>

                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${activeIndex === index ? "border-white/30" : "border-white/10"}`}
                >
                  <FaPlus
                    className={`text-base transition-transform duration-500 ease-in-out ${activeIndex === index ? "rotate-135" : "rotate-0"}`}
                  />
                </div>
              </div>

              {/* Answer */}
              <div
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr] border-t border-white/40 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="relative overflow-hidden">
                  <p className="px-2 pt-4 pb-1 text-base leading-relaxed text-white/90 md:text-xl outfit-light">
                    {faq.answer}
                  </p>
                  <div className="flex justify-end items-end pr-2 pb-5">
                    <NavLink
                      to="/contact"
                      className="group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-lg border border-white/80 px-4 py-3 text-base text-[#dbdbdb] transition-all duration-300 hover:shadow-lg hover:shadow-white/50"
                    >
                      <span className="z-10 transition-colors duration-300 group-hover:text-[#050505] outfit-normal">
                        Let's Connect Today !
                      </span>

                      <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Section5);
