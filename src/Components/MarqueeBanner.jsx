import React from "react";
import grayStrip from "../assets/gray-bg.png";
import blueStrip from "../assets/navyblue-bg.png";

const MarqueeBanner = ({ speed = 20 }) => {
  const items = [
    "200+ Events Delivered Across South India",
    "Trusted by 80+ Brands",
    "End-to-End Event Ownership",
  ];
  const textColors = ["text-[#FF4FBF]", "text-yellow-300", "text-white"];
  const topStripRotation = "0deg";
  const mainStripRotation = "-1deg";
  const marqueeRotation = "356deg";
  const marqueeOffsetY = "0%";
  const perforationOffsetY = "9%";

  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden py-10 sm:py-12 md:py-16">
      {/* TOP DARK STRIP */}
      <div
        className="absolute left-1/2 top-[28%] z-10 w-[110%] max-w-none -translate-x-1/2 sm:top-[30%]"
        style={{ rotate: topStripRotation }}
      >
        <img
          src={grayStrip}
          alt="gray"
          className="block w-full h-auto shrink-0"
        />
      </div>

      {/* MAIN STRIP */}
      <div
        className="relative z-20 w-[112%] max-w-none sm:w-[108%]"
        style={{ rotate: mainStripRotation }}
      >
        <img
          src={blueStrip}
          alt="blue"
          className="block h-auto w-full shrink-0"
        />

        {/* <div className="absolute inset-x-[3%] top-[16%] border-t border-dashed border-black/35"></div> */}

        {/* MARQUEE TEXT */}
        <div
          className="absolute inset-0 flex items-center overflow-hidden px-6 sm:px-10 md:px-16"
          style={{ transform: `translateY(${marqueeOffsetY}) rotate(${marqueeRotation})` }}
        >
          <div
            className="flex w-max items-center whitespace-nowrap"
            style={{
              animation: `marquee ${speed}s linear infinite`,
            }}
          >
            {[...items, ...items, ...items].map((text, i) => (
              <span
                key={i}
                className={`text-base font-medium tracking-tight sm:text-xl md:text-[2rem] ${textColors[i % textColors.length]}`}
              >
                {text} <span className="mx-3 text-white/70 md:mx-4">|</span>
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM PERFORATION */}
        {/* <div
          className="absolute inset-x-[1.5%] flex justify-between"
          style={{ bottom: perforationOffsetY }}
        >
          {Array.from({ length: 26 }).map((_, i) => (
            <span
              key={i}
              className="h-3 w-3 rounded-full bg-black sm:h-4 sm:w-4 md:h-5 md:w-5"
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default MarqueeBanner;
