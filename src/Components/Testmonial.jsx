import React, { useEffect, useState } from "react";
import ishaArjunImage from "../assets/isha-arjun.png";
import nehaGuptaImage from "../assets/neha-gupta.png";

const testimonials = [
  {
    quote:
      "Brand Avatar took our annual product launch from a routine corporate event to something our entire leadership team is still talking about.",
    company: "Isha Arjun",
    role: "VP Marketing",
    initials: "IA",
    image: ishaArjunImage,
  },
  {
    quote:
      "The team handled every moving part with calm precision. We walked in with a brief and walked out with an event our clients still mention months later.",
    company: "Neha Gupta",
    role: "Regional Brand Lead",
    initials: "NG",
    image: nehaGuptaImage,
  },
  {
    quote:
      "From strategy to show day execution, Brand Avatar gave us total confidence. Their planning made the entire experience feel premium and effortless.",
    company: "Luxury Retail Group",
    role: "Marketing Director",
    initials: "MD",
  },
];

const stars = Array.from({ length: 5 });

export default function Testmonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="bg-[#F7F7F5] px-4 py-10 pb-10 md:px-8 md:pt-0 md:pb-10">
      <div className="mx-auto max-w-6xl">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-display text-[32px] uppercase leading-[0.95] tracking-[-0.05em] text-black sm:text-[42px] md:text-[84px]">
            What Clients Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-[18px] font-medium leading-[1.3] tracking-[-0.02em] text-black/85 sm:text-[24px] md:mt-8 md:max-w-5xl md:text-[40px] md:leading-[100%]">
            When The Event Matters, Brands Choose Brand Avatar
          </p>
        </div>

        {/* Card */}
        <div className="relative mx-auto mt-8 max-w-5xl border border-[#D9D9D2] bg-transparent px-5 py-10 sm:px-6 md:mt-20 md:px-16 md:py-16">
          
          {/* Corner decorations (slightly smaller for mobile) */}
          <span className="absolute -left-[1px] -top-[1px] h-6 w-6 rounded-br-[20px] border-b border-r border-[#D9D9D2] bg-[#F7F7F5] md:h-10 md:w-10 md:rounded-br-[28px]" />
          <span className="absolute -right-[1px] -top-[1px] h-6 w-6 rounded-bl-[20px] border-b border-l border-[#D9D9D2] bg-[#F7F7F5] md:h-10 md:w-10 md:rounded-bl-[28px]" />
          <span className="absolute -bottom-[1px] -left-[1px] h-6 w-6 rounded-tr-[20px] border-r border-t border-[#D9D9D2] bg-[#F7F7F5] md:h-10 md:w-10 md:rounded-tr-[28px]" />
          <span className="absolute -bottom-[1px] -right-[1px] h-6 w-6 rounded-tl-[20px] border-l border-t border-[#D9D9D2] bg-[#F7F7F5] md:h-10 md:w-10 md:rounded-tl-[28px]" />

          {/* Quote */}
          <p className="mx-auto min-h-[140px] max-w-3xl text-center text-[16px] leading-[1.6] tracking-[-0.02em] sm:text-[18px] md:min-h-[96px] md:max-w-4xl md:text-[22px] md:tracking-[-0.03em]">
            “{activeTestimonial.quote}”
          </p>

          {/* Profile */}
          <div className="mt-8 flex flex-col items-center md:mt-12">
            
            {/* Stars */}
            <div className="flex items-center gap-1 text-[#5340FF] sm:gap-2">
              {stars.map((_, index) => (
                <span key={index} className="text-[18px] sm:text-[20px] md:text-[22px]">
                  ★
                </span>
              ))}
            </div>

            {/* Avatar + Info */}
            <div className="mt-4 flex items-center gap-3 md:mt-5 md:gap-4">
              {activeTestimonial.image ? (
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.company}
                  className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11 md:h-12 md:w-12"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#D6B894,#7E5B3A)] text-[11px] font-semibold text-white sm:h-11 sm:w-11 md:h-12 md:w-12 md:text-[12px]">
                  {activeTestimonial.initials}
                </div>
              )}

              <div className="text-left">
                <p className="text-[16px] leading-none tracking-[-0.02em] text-black sm:text-[18px] md:text-[22px] md:tracking-[-0.03em]">
                  {activeTestimonial.company}
                </p>
                <p className="mt-1 text-[12px] leading-none text-black/45 sm:text-[13px] md:mt-2 md:text-[16px]">
                  {activeTestimonial.role}
                </p>
              </div>
            </div>

            {/* Dots */}
            <div className="mt-6 flex items-center gap-2 md:mt-8">
              {testimonials.map((item, index) => (
                <button
                  key={item.company}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-6 bg-[#5340FF] md:w-8"
                      : "w-2 bg-black/15"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}