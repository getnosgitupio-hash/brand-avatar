import React from "react";
import leftStripImage from "../assets/leftimages.png";
import rightStripImage from "../assets/rightimages.png";
import numberImage01 from "../assets/01.png";
import numberImage02 from "../assets/02.png";
import numberImage03 from "../assets/03.png";
import numberImage04 from "../assets/04.png";
import numberImage05 from "../assets/05.png";
import buttonBg from "../assets/button-bg.png";
import lineImage from "../assets/line-1.png";

const steps = [
  {
    id: "01",
    title: "Share Your Event Brief",
    description: "Tell us the type of event, timeline, budget and goals.",
    numberImage: numberImage01,
  },
  {
    id: "02",
    title: "Strategy Call With Our Event Team",
    description: "We understand your brand, audience, and expectations.",
    numberImage: numberImage02,
  },
  {
    id: "03",
    title: "Receive A Custom Event Concept",
    description: "Our team creates a tailored concept and execution plan.",
    numberImage: numberImage03,
  },
  {
    id: "04",
    title: "End-to-End Event Production",
    description: "Our team manages every element from venue to execution.",
    numberImage: numberImage04,
  },
  {
    id: "05",
    title: "A Seamless Event Experience",
    description:
      "You host the event with confidence while we run everything behind the scenes.",
    numberImage: numberImage05,
  },
];

function LayerImage({ src, alt = "", className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`absolute inset-0 h-full w-full object-fill ${className}`}
    />
  );
}

// ✅ Hidden on mobile, visible only on md+
function LeftStrip() {
  return (
    <div className="relative mr-2 hidden h-[84px] overflow-hidden md:block md:mr-3 md:h-[118px]">
      <LayerImage src={leftStripImage} className="object-cover object-left" />
    </div>
  );
}

function NumberTile({ imageSrc }) {
  return (
    <div className="relative mx-2 flex h-[84px] items-center justify-center overflow-hidden md:mx-3 md:h-[118px]">
      <img
        src={imageSrc}
        alt=""
        className="relative z-10 h-[92%] w-[92%] object-contain"
      />
    </div>
  );
}

function ContentStrip({ title, description }) {
  return (
    <div className="relative ml-2 h-[84px] min-w-0 overflow-hidden px-3 md:ml-3 md:h-[118px] md:px-6">
      <LayerImage src={rightStripImage} />
      <div className="relative z-10 flex h-full flex-col justify-center">
        <h3 className="font-display text-[18px] uppercase leading-[0.85] tracking-[-0.03em] text-white md:text-[52px]">
          {title}
        </h3>
        <p className="mt-1 font-bigshoulders text-[12px] leading-[1.05] tracking-[0.01em] text-white md:text-[20px]">
          {description}
        </p>
      </div>
    </div>
  );
}

// ✅ Mobile: 2 columns | Desktop: original layout
function StepRow({ step }) {
  return (
    <div
      className={`grid items-center 
        grid-cols-[86px_minmax(0,1fr)] 
        ${
          step.id === "02" || step.id === "04"
            ? "md:grid-cols-[280px_160px_1fr]"
            : "md:grid-cols-[230px_160px_1fr]"
        }`}
    >
      <LeftStrip />
      <NumberTile imageSrc={step.numberImage} />
      <ContentStrip title={step.title} description={step.description} />
    </div>
  );
}

export default function Working() {
  return (
    <section className="bg-black px-0 py-8 md:py-16">
      <div className="mx-auto max-w-full">
        <div className="mx-auto max-w-full text-center">
          <h2 className="font-display font-extrabold text-[24px] uppercase leading-[0.9] tracking-[-0.05em] text-[#5E0BFF] md:text-[92px]">
            How Working With Us Works
          </h2>

          <h2 className="mt-10 font-display text-[32px] sm:text-[34px] uppercase leading:[35px] sm:leading-[1] tracking-[-0.05em] text-white md:text-[82px]">
            A Simple Process Designed For <br className="hidden sm:block" />
            Busy Teams
          </h2>
        </div>

        <div className="mt-14 space-y-[10px] px-4 md:mt-16 md:px-28">
          {steps.map((step) => (
            <StepRow key={step.id} step={step} />
          ))}
        </div>

        <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2 py-6">
          <img
            src={lineImage}
            alt=""
            className="absolute left-0 top-1/2 w-full -translate-y-1/2"
          />

          <div className="relative z-10 flex justify-center">
            <button
              type="button"
              onClick={() => {
                window.open("https://tidycal.com/brandavatar/discovery-call", "_blank", "noopener,noreferrer");
              }}
              className="flex h-[84px] w-[320px] items-center justify-center bg-center bg-no-repeat px-6 py-6 text-center font-display text-xl uppercase leading-none tracking-[0.01em] text-white md:h-[92px] md:w-[550px] md:text-[18px]"
              style={{
                backgroundImage: `url(${buttonBg})`,
                backgroundSize: "100% 100%",
              }}
            >
              <span className="block md:hidden">Start Your Event</span>
              <span className="mt-0 sm:mt-1 block md:hidden">&nbsp; Discussion</span>

              <span className="hidden md:block sm:text-4xl">
                Start Your Event Discussion
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
