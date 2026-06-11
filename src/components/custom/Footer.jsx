import React, { memo } from "react";
import { TiStarburst } from "react-icons/ti";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="backdrop-blur-sm cursor-default border-t border-white/70 px-6 mt-20 pt-13 pb-6 bg-[#050505]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-70 w-70 animate-pulse rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-70 w-70 animate-pulse rounded-full bg-white/10 blur-3xl" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {/* Company Info */}
        <div>
          <h3 className="text-3xl text-white outfit-regular text-background-color">
            Shahzad Hassan Afzal
          </h3>
          <p className="text-white/90 mt-3 leading-relaxed outfit-light">
            Passionate full stack developer building scalable, responsive,
            modern web applications with frontend and backend integration.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-4xl text-white outfit-regular text-background-color">
            Quick Links
          </h3>
          <ul className="mt-4 flex flex-col">
            {links.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="relative inline-flex items-center text-white/60 font-medium tracking-wide group"
                >
                  <TiStarburst className="absolute -left-4 text-white text-2xl opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
                  <span className="group-hover:translate-x-4 text-xl md:text-3xl hover:text-white cursor-pointer tracking-wider outfit-light transition-transform duration-300">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="">
          <h4 className="outfit-normal text-white text-3xl">Follow Us</h4>
          <div className="flex flex-col gap-3">
            <div className="flex gap-5 mt-4">
              {[
                {
                  icon: <FaWhatsapp />,
                  link: "https://api.whatsapp.com/send/?phone=923236995197",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/shahzad-hassan-afzal-16507836a/",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/shahzadhassanafzal/",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <p className="text-2xl md:text-md outfit-normal text-white/80">
                    Contact :
                  </p>
                  <div>
                    <p className="outfit-light text-white/50 text-xl md:text-[18px]">
                      +92323-6995197
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-2xl md:text-md outfit-normal text-white/80">
                    Email :
                  </p>
                  <p className="outfit-light text-xl text-white/50 md:text-[18px]">
                    shahzadhassanafzal@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 pt-6 text-white/80 outfit-light border-t border-white/30 ">
        © {new Date().getFullYear()} Shahzad Hassan Afzal. All rights reserved.
      </div>
    </footer>
  );
};

export default React.memo(Footer);