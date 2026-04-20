import React from "react";
import bgImage from "../assets/image.webp";
import girlImage from "../assets/Ani.png";
import mobileBgImage from "../assets/image-mobile.svg";

const HeroSection = () => {
  return (
<div className="relative w-full text-white">
  
  {/* ✅ MOBILE BG */}
  <div
    className="block sm:hidden absolute inset-0 bg-contain"
    style={{ backgroundImage: `url(${mobileBgImage})` }}
  />

  {/* ✅ DESKTOP BG */}
  <div
    className="hidden sm:block absolute inset-0 bg-contain"
    style={{ backgroundImage: `url(${bgImage})` }}
  />
      {/* 🔥 GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/100 to-black z-10" />

      {/* MAIN CONTAINER */}
      <div className="relative z-20 flex flex-col h-full px-4 sm:px-6 md:px-12 lg:px-24 pt-20 pb-20 lg:pb-2">
        
        {/* 🔥 TOP CENTER HEADING */}
        <div className="text-center max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-4xl md:text-[110px] head leading-tight md:leading-[95px]">
            ONE PARTNER. <br />
            <span className="text-[#6000FF]">
              TOTAL OWNERSHIP.
            </span>
          </h1>
        </div>

        {/* 🔥 MIDDLE SECTION */}
        <div className="flex flex-col lg:flex-row flex-1 items-center justify-between mt-8 md:mt-0 gap-10">
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl lg:left-28 flex flex-col justify-center lg:relative lg:-top-20 text-center lg:text-left">
            <h4 className="relative text-[35px] sm:text-3xl md:text-6xl text-gray-300 head leading-tight">
              <span>From Concept To</span> <br />
              <span className="text-white">
                Applause, Everything <br className="block sm:hidden" />
                Runs Through <br className="block sm:hidden" />
                One Team.
              </span>
            </h4>

            <p className="mt-4 text-base sm:text-lg md:text-3xl font-semibold text-gray-300">
              Brand Avatar manages the entire event lifecycle so your team stays
              focused on what matters: the brand, the guests, and the outcome.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-end top-0 sm:-top-[7rem] overflow-hidden">
            <img
              src={girlImage}
              alt="model"
              className="h-[400px] sm:h-[580px] object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>
        </div>

        {/* 🔥 BOTTOM GRID */}
        <div className="mt-0 lg:mt-[-80px] mb-10 border border-gray-400 md:mb-40">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {[
                "Ideate event strategy and concept design",
                "Venue planning and stage production",
                "Guest experience and registration systems",
                "Technology, lighting, and AV production",
                "On-ground event management",
                "Post-event reporting and insights",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex min-h-[72px] items-center justify-center border border-gray-400 px-3 py-4 text-center font-bold leading-[1.1] text-gray-300 text-sm sm:min-h-[88px] sm:px-4 sm:text-lg md:min-h-[110px] md:px-6 md:text-[28px] lg:text-[30px]"
                >
                  {item}
                </div>
              ))}
            </div>

          <p className="px-4 py-4 text-center text-sm leading-[1.2] tracking-[-0.02em] text-gray-400 sm:text-base md:px-6 md:py-5 md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] lg:whitespace-nowrap">
            Every project is led by a{" "}
            <span className="font-semibold text-white">
              senior event strategist
            </span>{" "}
            with a dedicated production team behind them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
