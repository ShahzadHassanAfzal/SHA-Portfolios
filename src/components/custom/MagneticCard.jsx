import React, { useRef, useEffect, memo } from "react";
import gsap from "gsap";

const MagneticCard = ({ children }) => {
  const cardRef = useRef();

  useEffect(() => {
    const card = cardRef.current;

    const xTo = gsap.quickTo(card, "x", {
      duration: 0.4,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(card, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    const move = (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      xTo(x * 0.5);
      yTo(y * 0.5);
    };

    const leave = () => {
      xTo(0);
      yTo(0);
    };

    card.addEventListener("mousemove", move);
    card.addEventListener("mouseleave", leave);

    return () => {
      card.removeEventListener("mousemove", move);
      card.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div ref={cardRef} className="will-change-transform">
      {children}
    </div>
  );
};

export default React.memo(MagneticCard);