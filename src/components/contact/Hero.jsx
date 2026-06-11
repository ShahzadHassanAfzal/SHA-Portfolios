import React, { useRef, useState, memo } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { Loader2 } from "lucide-react";
import OptionInput from "../custom/OptionInput";

const Hero = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "shahzadhassanafzal@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+92 323 6995197",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Okara, Punjab, Pakistan",
    },
  ];

  const budgetOptions = [
    "100$ - 500$",
    "500$ - 1000$",
    "1000$ - 1500$",
    "1500$ - 2000$",
    "2000$ +",
  ];

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I will contact you soon.",
      });

      formRef.current.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error?.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setLoading(false);

      setTimeout(() => {
        setStatus({
          type: "",
          message: "",
        });
      }, 5000);
    }
  };

  return (
    <section className="relative max-h-[500vh] cursor-default w-full overflow-hidden bg-[#050505] px-6 pt-25 pb-13 text-white md:px-10 lg:px-20">
      {/* Background */}
      <div className="absolute top-0 right-0 animate-pulse h-96 w-96 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute top-0 left-0 h-96 w-96 animate-pulse bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-1/5 right-0 h-96 w-96 animate-pulse bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 left-0 h-96 w-96 animate-pulse bg-white/10 blur-3xl rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <div className=" inline-flex items-center rounded-full border border-white px-5 py-2 text-sm uppercase tracking-[3px] text-white backdrop-blur-xl orbitron-regular">
            My Contact
          </div>

          <h1 className="mt-2 text-4xl text-white orbitron-regular sm:text-5xl md:text-6xl lg:text-6xl py-3">
            Let’s Build Something Amazing
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/90 outfit-light sm:text-lg">
            Have a project idea, startup vision, or business goal? I creates
            modern websites, scalable web applications, UI/UX systems, and
            premium digital experiences.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <div className="rounded-lg border border-white p-4 backdrop-blur-xl md:p-10">
            <div>
              <h2 className="text-3xl text-white outfit-regular">
                Contact Information
              </h2>

              <p className="mt-4 text-base leading-relaxed outfit-normal text-white/70">
                Available for freelance projects, startups, business websites,
                web applications, UI/UX, and enterprise-level digital solutions.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="mt-10 flex flex-col gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className=" group flex items-center gap-5 rounded-xl border border-white p-3 transition-all duration-300 "
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#050505] text-sm transition-all duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-lg outfit-normal text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[11px] sm:text-base outfit-normal text-white/60">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-3xl text-white outfit-regular">Follow Us</h3>

              <div className="mt-5 flex items-center gap-4">
                {[
                  {
                    icon: FaGithub,
                    link: "https://github.com/ShahzadHassanAfzal",
                  },
                  {
                    icon: FaLinkedin,
                    link: "https://www.linkedin.com/in/shahzad-hassan-afzal-16507836a/",
                  },
                  {
                    icon: FaInstagram,
                    link: "https://www.instagram.com/shahzadhassanafzal/",
                  },
                ].map((Icon, index) => (
                  <a
                    href={Icon.link}
                    target="_blank"
                    key={index}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white text-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#050505]"
                  >
                    <Icon.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="rounded-lg border border-white p-8 backdrop-blur-2xl md:p-10">
            <div>
              <h2 className="text-3xl text-white outfit-regular">
                Start Your Project
              </h2>

              <p className="mt-4 text-base outfit-normal leading-relaxed text-white/70">
                Fill out the form below and our team will reach out within 24
                hours.
              </p>
            </div>

            {/* Status Message */}
            {status.message && (
              <div
                className={`mt-8 flex items-center gap-3 outfit-normal rounded-2xl border p-4 text-sm ${
                  status.type === "success"
                    ? "border-green-500/20 bg-green-500/10 text-green-400"
                    : "border-red-500/20 bg-red-500/10 text-red-400"
                }`}
              >
                {status.type === "success" ? <FaCheckCircle /> : <FaEnvelope />}

                {status.message}
              </div>
            )}

            {/* Form */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="mt-10 flex flex-col gap-6"
            >
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-3 block outfit-normal text-sm text-white/90">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-lg outfit-normal border border-white px-5 py-4 text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-white/70 focus:border-white"
                  />
                </div>

                <div>
                  <label className="mb-3 outfit-normal block text-sm text-white/90">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-white outfit-normal px-5 py-4 text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-white/70 focus:border-white"
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="mb-3 outfit-normal block text-sm text-white/90">
                  Project Budget
                </label>

                <OptionInput
                  services={budgetOptions}
                  item={"Select Budget"}
                  name={"budget"}
                />
              </div>

              {/* Subject */}
              <div>
                <label className="mb-3 block text-sm outfit-normal text-white/70">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Discussion"
                  className=" w-full rounded-lg border border-white outfit-normal px-5 py-4 text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-white/70 focus:border-white"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-3 outfit-normal block text-sm text-white/90">
                  Message
                </label>
                <textarea
                  rows="6"
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-lg border outfit-normal border-white px-5 py-4 text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-white/70 focus:border-white\ "
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className=" mt-2 inline-flex items-center justify-center cursor-pointer rounded-lg border-2  border-white px-8 relative group overflow-hidden py-4 text-base outfit-normal transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <div className="inline-flex items-center gap-3 text-white group-hover:text-[#050505] relative z-2 transition-all duration-300">
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane />
                    </>
                  )}
                </div>
                <div className="absolute inset-0 transition-transform duration-300 translate-y-full bg-white group-hover:translate-y-0" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
