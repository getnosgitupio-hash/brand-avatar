import React, { useState } from "react";

import img1 from "../assets/gem-1.png";
import img2 from "../assets/gem-2.png";
import img3 from "../assets/tade.png";
import img4 from "../assets/gem-3.png";

const EventsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const events = [
    { title: "Product Launch Events", image: img1 },
    { title: "Real Estate Launch Events", image: img2 },
    { title: "Trade Shows & Expo Activations", image: img3 },
    { title: "Award Nights & Brand IP Events", image: img4 },
  ];

  return (
    <section id="events" className="w-full bg-black text-white overflow-hidden">

      {/* 🔥 TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 px-4 sm:px-6 md:px-16 lg:px-24 pt-20 md:pt-[20rem] pb-16 md:pb-20">
        
        {/* LEFT */}
        <div>
          <h1 className="uppercase font-extrabold leading-tight md:leading-[0.95] text-center sm:text-left">
            <span className="block text-white text-5xl sm:text-4xl md:text-6xl lg:text-7xl">
              Events We
            </span>
            <span className="block text-yellow-400 text-5xl sm:text-5xl md:text-7xl lg:text-8xl">
              Design And
            </span>
            <span className="block text-yellow-400 text-5xl sm:text-5xl md:text-7xl lg:text-8xl">
              Deliver
            </span>
          </h1>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center max-w-lg text-center sm:text-left">
          <h2 className="text-lg sm:text-xl md:text-6xl text-gray-200 leading-snug">
            High-Impact Events Built Around Your Brand
          </h2>

          <p className="mt-4 md:mt-5 text-sm sm:text-base md:text-2xl text-gray-400 leading-relaxed">
            Brand Avatar specializes in large-scale brand and corporate events
            where execution, experience, and reputation matter.
          </p>
        </div>
      </div>

      {/* 🔥 IMAGE SECTION */}
      <div className="relative h-[420px] sm:h-[500px] md:h-[600px] w-full">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${events[activeIndex].image})` }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

        {/* BIG TEXT */}
        <h1 className="absolute bottom-0 left-4 sm:left-6 md:left-10 text-[60px] sm:text-[100px] md:text-[220px] font-extrabold text-yellow-400 opacity-90 z-0 select-none">
          DELIVER
        </h1>

        {/* FLOATING PANEL */}
        <div className="absolute left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 md:left-16 top-1/2 -translate-y-1/2 z-20 w-[92%] sm:w-[85%] md:w-[90%] max-w-xl">
          
          <div className="bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl">

            {/* HEADER */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 text-gray-300 text-sm sm:text-base md:text-xl border-b border-white/10">
              Most corporate events fall apart before they even begin.
            </div>

            {/* LIST */}
            <div>
              {events.map((item, i) => (
                <div key={i}>
                  
                  <div
                    onClick={() => setActiveIndex(i)}
                    className={`px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-lg md:text-2xl transition-all cursor-pointer
                    ${
                      i === activeIndex
                        ? "text-white font-semibold"
                        : "text-gray-200 hover:text-white"
                    }`}
                    style={
                      i === activeIndex
                        ? {
                            background:
                              "linear-gradient(90deg, #FEE801 0%, #020202 100%)",
                          }
                        : {}
                    }
                  >
                    {item.title}
                  </div>

                  {i !== events.length - 1 && (
                    <div className="border-t border-dashed border-gray-700" />
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default EventsShowcase;
