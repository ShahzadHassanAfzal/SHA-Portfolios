import React, { useState, useRef, useEffect } from "react";

const OptionInput = ({ services, item, name }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      {/* Hidden Input for EmailJS */}
      <input type="hidden" name={name} value={selected} />

      {/* Button */}
      <div
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 outfit-normal rounded-lg border border-white text-white cursor-pointer"
      >
        <span className={`${selected ? "text-white" : "text-white/70"}`}>
          {selected || item}
        </span>

        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 10l5 5 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {/* Dropdown */}
      <div
        className={`absolute left-0 w-full z-50 bg-[#050505] border border-white rounded-sm mt-1 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {services.map((service, index) => (
          <div
            type="button"
            key={index}
            onClick={() => {
              setSelected(service);
              setOpen(false);
            }}
            className="w-full text-left px-4 py-3 text-sm text-white cursor-pointer transition-colors duration-200 hover:bg-white hover:text-black outfit-regular"
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(OptionInput);
