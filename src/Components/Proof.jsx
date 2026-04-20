import React, { useEffect, useState } from "react";
import yellowBg from "../assets/yellow-2.png";
import buttonBg from "../assets/button-bg.png";
import lineImage from "../assets/line-1.png";
import sliderImageOne from "../assets/slider-1.jpeg";
import sliderImageTwo from "../assets/slider-2.jpg";

const proofSlides = [
  {
    title: "Corporate Stages",
    image: sliderImageOne,
  },
  {
    title: "Packed Concert Crowds",
    image: sliderImageTwo,
  },
];

function ProofCard({ slide }) {
  return (
    <article>
      <div className="relative aspect-[1.45/1] overflow-hidden bg-black rounded-sm md:rounded-none">
        {slide.image ? (
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
      </div>

      <p className="mt-3 px-1 text-left font-display text-[16px] uppercase leading-[1.1] tracking-[-0.02em] text-black sm:text-[18px] md:mt-4 md:px-2 md:text-[30px] md:leading-none md:tracking-[-0.03em]">
        {slide.title}
      </p>
    </article>
  );
}

export default function Proof() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % proofSlides.length);
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, []);

  // ✅ Mobile: show 1 slide | Desktop: keep 2 slides
  const visibleSlides =
    typeof window !== "undefined" && window.innerWidth < 768
      ? [proofSlides[activeIndex]]
      : [
          proofSlides[activeIndex],
          proofSlides[(activeIndex + 1) % proofSlides.length],
        ];

  return (
    <section className="bg-[#F7F7F5] px-4 py-6 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-display font-black text-[26px] uppercase leading-[1.05] tracking-[-0.04em] text-black sm:text-[32px] md:text-[78px] md:leading-[0.98] md:tracking-[-0.05em]">
            Proof From The Events We&apos;ve Delivered
            <br className="hidden sm:block" />
            200+ Events. 80+ Brands.
            <br className="hidden sm:block" />
            One Standard: Flawless Execution
          </h2>
        </div>

        {/* Slider */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-3">
          {visibleSlides.map((slide) => (
            <ProofCard key={`${slide.title}-${activeIndex}`} slide={slide} />
          ))}
        </div>

        {/* Dots */}
        <div className="mt-5 flex justify-center gap-2 md:mt-6">
          {proofSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Show proof slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-black md:w-8"
                  : "w-2 bg-black/20"
              }`}
            />
          ))}
        </div>

        {/* Yellow Section */}
        <div className="mx-auto mt-8 max-w-5xl md:mt-14">
          <img
            src={yellowBg}
            alt="Yellow section"
            className="w-full object-contain"
          />
        </div>

        {/* CTA */}
        <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2 py-6 md:mt-8">
          <img
            src={lineImage}
            alt=""
            className="absolute top-1/2 left-0 w-full -translate-y-1/2"
          />

          <div className="relative z-10 flex justify-center">
            <button
              type="button"
              onClick={() => {
                window.open("https://tidycal.com/brandavatar/discovery-call", "_blank", "noopener,noreferrer");
              }}
              className="mx-auto flex h-[80px] w-[360px] items-center justify-center bg-center bg-no-repeat px-4 text-center text-xl font-bold leading-tight text-white shadow-lg transition-all duration-300 hover:scale-105 sm:h-[80px] sm:w-[300px] sm:text-[16px] md:h-[92px] md:w-[550px] md:px-6 md:text-4xl"
              style={{
                backgroundImage: `url(${buttonBg})`,
                backgroundSize: "100% 100%",
              }}
            >
              SEE HOW WE CAN DESIGN YOUR EVENT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
