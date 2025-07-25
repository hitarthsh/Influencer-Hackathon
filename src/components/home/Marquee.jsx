import React from "react";

const marqueeText = [
  "AWARD-WINNING FLAVORS",
  "DELIVERY IN UNDER 60 MINUTES AVAILABLE IN SELECT MARKETS",
  "FIND US AT TARGET",
  "FIND US ON GOPUFF",
  "FIND US AT HARRIS TEETER",
  "AVAILABLE NATIONWIDE",
];

const StarIcon = () => (
  <svg
    className="inline mx-2 align-middle"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="#1e3a8a"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L13.09 8.26L18 9.27L14.5 13.14L15.18 19.02L12 16.77L8.82 19.02L9.5 13.14L6 9.27L10.91 8.26L12 2Z"
      fill="#1e3a8a"
      stroke="#1e3a8a"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const Marquee = () => {
  return (
    <div className="w-full bg-yellow-300 py-3 overflow-hidden border-y-2 border-yellow-400">
      <div className="whitespace-nowrap flex animate-marquee items-center">
        {marqueeText.map((text, idx) => (
          <React.Fragment key={idx}>
            <span className="mx-4 text-blue-900 font-extrabold uppercase tracking-widest text-lg">
              {text}
            </span>
            <StarIcon />
          </React.Fragment>
        ))}
        {/* Duplicate for seamless loop */}
        {marqueeText.map((text, idx) => (
          <React.Fragment key={"dup-" + idx}>
            <span className="mx-4 text-blue-900 font-extrabold uppercase tracking-widest text-lg opacity-70">
              {text}
            </span>
            <StarIcon />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
