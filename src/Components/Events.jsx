import React from "react";
import groupImage from "../assets/Group.png";
import layerImage from "../assets/Layer_1.svg";
import isolationImage from "../assets/Isolation_Mode.png";
import buttonBg from "../assets/button-bg.png";

export default function Events({ openPopup }) {
  return (
    <>
      {/* ================= FIRST SECTION ================= */}
      <section className="bg-black px-4 pt-14 pb-0 text-white md:px-10 md:pt-16 md:pb-0">
        <div className="mx-auto max-w-7xl">
          
          {/* Heading */}
          <div>
            <h1 className="font-display font-bold text-[28px] uppercase leading-[1] tracking-[-0.04em] text-white sm:text-[32px] md:text-[92px] md:leading-[0.88] md:tracking-[-0.05em] text-center sm:text-left">
              What Makes Brand Avatar Different
            </h1>

            <h2 className="mt-2 font-bigshoulders font-black text-[34px] uppercase leading-[1] tracking-[0.02em] text-[#6E17FF] sm:text-[42px] md:mt-3 md:text-[92px] md:leading-[0.86] text-center sm:text-left">
              Events Designed Like
              <br />
              Brand Experiences
            </h2>
          </div>

          {/* Top Strip */}
          <div className="mt-8 flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:gap-10">
            
            <p className="max-w-[320px] text-[15px] leading-[1.4] text-white/90 sm:text-[16px] md:max-w-[820px] md:text-[25px] md:leading-[1.2] text-center sm:text-left">
              Many event companies focus 
              <br className="hidden sm:block" />
              on logistics.
            </p>

            <div className="flex items-center gap-4">
              <img
                src={isolationImage}
                alt="icon"
                className="w-[120px] md:w-[300px]"
              />
              <img
                src={layerImage}
                alt="arrow"
                className="w-[100px] md:w-[200px]"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="grid gap-10 pt-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            
            {/* Left */}
            <div>
              <h3>
                <span className="block text-white font-black text-[32px] md:text-[58px]">
                  Brand Avatar
                </span>
                <span className="block mt-1 font-light text-[26px] md:text-[40px]">
                  focuses on the entire experience.
                </span>
              </h3>

              <p className="mt-6 text-[16px] md:text-[24px] text-white/90">
                From concept to execution, we handle everything.
              </p>

              <ul className="mt-5 list-disc pl-6 text-[16px] md:text-[28px] font-semibold space-y-2">
                <li>Cohesive stage design and visual storytelling</li>
                <li>Memorable guest journeys</li>
                <li>Seamless on-ground flow</li>
                <li>Content moments that live beyond the event</li>
              </ul>

              <p className="mt-8 text-[14px] md:text-[22px] text-white/85">
                Your event doesn’t just run smoothly.
              </p>

              <p className="mt-2 font-semibold text-[14px] md:text-[22px]">
                It represents your brand at its best.
              </p>
            </div>

            {/* Right */}
            <div className="flex justify-center md:justify-end">
              <img
                src={groupImage}
                alt="Event"
                className="w-full max-w-[280px] md:max-w-[520px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECOND SECTION (CTA FULL WIDTH) ================= */}
      <section className="w-full bg-black py-8">
        
        <div className="relative w-full flex justify-center items-center">
          
          {/* FULL WIDTH DASHED LINE */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full border-t-2 border-dashed border-yellow-400"></div>

          {/* BUTTON */}
          <button
            type="button"
             onClick={openPopup}
            className="
              relative z-10
              text-white text-xl md:text-4xl
              px-6 md:px-10
              py-6 md:py-8
              font-bold
              bg-cover bg-center
              transition-all duration-300 hover:scale-105
            "
            style={{
              backgroundImage: `url(${buttonBg})`,
            }}
          >
            SEE HOW WE CAN DESIGN YOUR EVENT
          </button>

        </div>

      </section>
    </>
  );
}
