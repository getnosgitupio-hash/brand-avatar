import React from "react";
import grayStrip from "../assets/gray-bg.png";
import blueStrip from "../assets/navyblue-bg.png";
import pinkButtonBg from "../assets/button-bg.png";

const StaticLead = ({ openPopup }) => {
  const textRotation = "-4deg";

  return (
    <div className="relative flex w-full items-center justify-center overflow-x-clip py-16 sm:py-2">
      {/* GRAY STRIP */}
      <div
        className="absolute left-1/2 top-[28%] z-10 w-[112%] max-w-none -translate-x-1/2 sm:top-[30%]"
        style={{ rotate: "0deg" }}
      >
        <img
          src={grayStrip}
          alt="gray"
          className="block w-full h-auto shrink-0 opacity-90"
        />
      </div>

      {/* BLUE STRIP */}
      <div
        className="relative z-20 w-[114%] max-w-none sm:w-[110%]"
        style={{ rotate: "-3deg" }}
      >
        <img
          src={blueStrip}
          alt="blue"
          className="block w-full h-auto shrink-0"
        />

        <div
          className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-12"
          style={{ rotate: textRotation }}
        >
          <p className="text-center text-[11px] font-bold tracking-wide text-white sm:text-base md:text-3xl md:tracking-wider">
            One Brief | One Point of Contact | Zero Coordination Chaos
          </p>
        </div>
      </div>

      {/* BUTTON SECTION */}
      <div className="absolute inset-x-0 -bottom-3 z-30 flex justify-center md:-bottom-28 mt-10">
        <div className="absolute top-9 w-full border-t-2 border-dashed border-yellow-400 md:top-10"></div>

        <button
          type="button"
           onClick={openPopup}
          className="
            relative z-10
            text-xl text-white sm:text-base md:text-4xl
            px-4 sm:px-5 md:px-8
            py-4 sm:py-3.5 md:py-6
            font-bold
            bg-cover bg-center
            transition-all duration-300 hover:scale-105
          "
          style={{
            backgroundImage: `url(${pinkButtonBg})`,
          }}
        >
          START PLANNING YOUR EVENT
        </button>
      </div>
    </div>
  );
};

export default StaticLead;
