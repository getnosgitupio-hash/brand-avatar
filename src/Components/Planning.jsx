import React from "react";
import blueBg from "../assets/blue.png";
import bgImg from "../assets/bg.png"; 
import yellowImg from "../assets/yellow.png";

const EventSection = () => {
  return (
    <div className="w-full bg-black relative overflow-hidden">

      {/* 🔥 BACKGROUND IMAGE */}
<img
  src={blueBg}
  alt="blue bg"
  className="w-full absolute top-0 left-0 z-10 md:z-40 pointer-events-none"
/>

      {/* 🔵 Blue Background */}
      <img
        src={blueBg}
        alt="blue bg"
        className="w-full absolute sm:top-0 left-0 z-10"
      />

      {/* 🟡 SECTION */}
      <div className="relative z-20 mt-[1rem] md:mt-0 md:pt-24">

        {/* ✅ MOBILE: background applied here */}
        <div
          className="
            relative 
            bg-cover bg-center
            md:bg-none
          "
          style={{
            backgroundImage: `url(${yellowImg})`,
          }}
        >

          {/* ✅ DESKTOP IMAGE ONLY */}
          <img
            src={yellowImg}
            alt="yellow bg"
            className="hidden md:block w-full"
          />

          {/* CONTENT */}
          <div
            className="
              relative z-30
              px-4 py-6
              sm:px-6 sm:py-8
              md:absolute md:inset-x-6 md:inset-y-6
              md:flex md:items-center md:px-16
            "
          >
            <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 text-center font-extrabold">

              {/* Column 1 */}
              <div className="px-3 py-4 border-b border-black md:border-b-0 md:border-r">
                <p className="text-black uppercase head
                  text-base sm:text-lg md:text-[38px]
                  leading-snug md:leading-[100%] tracking-tight">
                  LET’S DESIGN SOMETHING <br className="hidden sm:block" />
                  YOUR BRAND WILL BE PROUD <br className="hidden sm:block" />
                  TO HOST.
                </p>
              </div>

              {/* Column 2 */}
              <div className="px-3 py-4 border-b border-black md:border-b-0 md:border-r">
                <p className="text-black uppercase head
                  text-base sm:text-lg md:text-[38px]
                  leading-snug md:leading-[100%] tracking-tight">
                  SPEAK WITH OUR TEAM TO <br className="hidden sm:block" />
                  DISCUSS YOUR EVENT, <br className="hidden sm:block" />
                  TIMELINE, AND VISION.
                </p>
              </div>

              {/* Column 3 */}
              <div className="px-3 py-4">
                <p className="text-black uppercase head font-bold
                  text-base sm:text-lg md:text-[38px]
                  leading-snug md:leading-[100%] tracking-tight">
                  WE’LL WALK YOU THROUGH <br className="hidden sm:block" />
                  HOW BRAND AVATAR WOULD <br className="hidden sm:block" />
                  PLAN AND DELIVER IT.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="relative z-20 mx-auto max-w-6xl px-4 pb-8 pt-6 md:px-8" />

    </div>
  );
};

export default EventSection;