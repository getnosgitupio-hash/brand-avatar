import React from "react";
import borderImg from "../assets/border-bg.png";
import starIcon from "../assets/star.png";
import boltIcon from "../assets/bolt.png";
// import smileIcon from "../assets/emoji.png";
import emojiIcon from "../assets/smile.png";
import pinkButtonBg from "../assets/button-bg.png";
import yellowBoxBg from "../assets/yellow-button-bg.png";

const RealitySection = ({ openPopup }) => {
  return (
    <section className="bg-black text-white pt-20 md:pt-20 px-4 relative overflow-hidden">

      <div className="max-w-full mx-auto text-center">

        {/* ================= TOP BADGE ================= */}
        <div className="relative mb-10 md:mb-14 flex justify-center">
          <img src={borderImg} className="w-full max-w-3xl" />

          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-0 sm:gap-4 md:gap-10 px-4 md:px-10">

            {/* LEFT */}
            <div className="flex items-center gap-3 md:gap-5">
              <img src={starIcon} className="w-8 md:w-12" />
              <div className="text-left leading-tight">
                <p className="text-sm md:text-2xl text-gray-400">TRUSTED BY</p>
                <p className="text-yellow-400 font-extrabold text-lg md:text-2xl">
                  80+ BRANDS
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2 md:gap-5 flex-wrap justify-center">
              <img src={boltIcon} className="w-6 md:w-10" />
              <p className="text-yellow-400 font-extrabold text-lg md:text-2xl">
                200+
              </p>
              {/* <img src={smileIcon} className="w-10 md:w-20" /> */}
              <p className="text-sm md:text-2xl text-gray-200">
                EVENTS DELIVERED
              </p>
            </div>

          </div>
        </div>

        {/* ================= HEADING ================= */}
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-extrabold leading-tight mb-4 md:mb-6 tracking-tight">
          THE REALITY MOST{" "}
          <span className="inline-block align-middle">
            <img src={emojiIcon} className="w-[40px] sm:w-[60px] md:w-[95px] inline" />
          </span>{" "}
          BRANDS FACE
        </h2>

        {/* ================= SUBTEXT ================= */}
        <p className="text-gray-300 text-sm sm:text-base md:text-2xl mb-8 md:mb-10">
          Planning an event shouldn’t turn into <br className="hidden md:block" />
          endless vendor follow-ups.
        </p>

        {/* ================= CONTENT ================= */}
        <div className="space-y-4 md:space-y-5 text-gray-300 text-sm sm:text-base md:text-3xl max-w-5xl mx-auto">

          {[
            "Most corporate events fall apart before they even begin.",
            "NOT BECAUSE THE IDEA WAS BAD, BUT BECAUSE THE EXECUTION GETS SCATTERED.",
            "Different vendors for stage, registration, production, and logistics.",
            "Soon your team is busy managing vendors instead of running the event.",
            "And when something goes wrong, nobody owns it.",
          ].map((text, index) => (
            <React.Fragment key={index}>
              
              <p
                className={`transition-all duration-300 cursor-pointer
                ${
                  index === 1
                    ? "text-yellow-400 head uppercase tracking-wide"
                    : "hover:text-yellow-400 head"
                }`}
              >
                {text}
              </p>

              {index !== 4 && (
                <div className="border-t-2 border-dashed border-gray-700"></div>
              )}

            </React.Fragment>
          ))}

        </div>

        {/* ================= YELLOW TICKET ================= */}
        <div className="mt-8 md:mt-12 w-full flex justify-center">
          <div
            className="
              w-full max-w-5xl text-center text-black font-bold
              text-sm sm:text-lg md:text-4xl
              py-4 sm:py-5 md:py-10
              px-4 sm:px-6 md:px-20
              bg-no-repeat bg-center bg-cover
              flex items-center justify-center
            "
            style={{
              backgroundImage: `url(${yellowBoxBg})`,
            }}
          >
            That’s exactly what Brand Avatar is here to fix
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="relative mt-8 md:mt-10 flex justify-center">

          {/* DASH LINE */}
          <div className="absolute top-8 md:top-12 w-full border-t-2 border-dashed border-yellow-400"></div>

          {/* BUTTON */}
          <button
            type="button"
            onClick={openPopup}
            className="
              relative z-10
              text-white text-xl sm:text-lg md:text-4xl
              px-5 sm:px-6 md:px-8
              py-4 sm:py-4 md:py-6
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
    </section>
  );
};

export default RealitySection;
