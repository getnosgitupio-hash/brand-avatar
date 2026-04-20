import React from "react";
import boxBlue from "../assets/box-blue.png";
import starAccent from "../assets/OBJECT.png";
import smileAccent from "../assets/bolt-white.png";



const brandHighlights = [
  {
    id: "events",
    title: "200+",
    subtitle: "Events Delivered",
    accent: "smile",
  },
  {
    id: "brands",
    title: "80+",
    subtitle: "Brand Partnerships",
    accent: "star",
  },
  {
    id: "leadership",
    title: (
      <>
        Senior Event
        <br />
        Leadership
      </>
    ),
    subtitle: "On Every Project",
  },
  {
    id: "teams",
    title: "End-to-End",
    subtitle: "Production Teams",
  },
  {
    id: "south",
    title: "South India",
    subtitle: "Event Expertise",
  },
    {
    id: "south",
    title: "One Team",
    subtitle: "Full Ownership",
  },
];

function AccentIcon({ accent }) {
  if (accent === "star") {
    return (
      <img
        src={starAccent}
        alt=""
        className="h-12 w-12 object-contain md:h-24 md:w-24"
      />
    );
  }

  if (accent === "smile") {
    return (
      <img
        src={smileAccent}
        alt=""
        className="h-12 w-12 object-contain md:h-24 md:w-36"
      />
    );
  }

  return null;
}

function HighlightCard({
  title,
  subtitle,
  accent,
  className = "",
  contentClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  bodyClassName = "",
}) {
  return (
    <article
      className={`relative w-full overflow-hidden px-5 py-5 md:px-8 md:py-4 ${className}`}
    >
      <img
        src={boxBlue}
        alt=""
        className="absolute inset-0 h-full w-full object-fill"
      />

      <div
        className={`relative z-10 flex h-full items-center justify-start gap-4 ${bodyClassName}`}
      >
        <div className={`max-w-[88%] text-left ${contentClassName}`}>
          <h3
            className={`font-display text-[30px] uppercase leading-[44px] sm:leading-[60px] tracking-[0.02em] text-white md:text-[54px] ${titleClassName}`}
          >
            {title}
          </h3>
          <p
            className={`mt-2 font-display text-[20px] uppercase leading-[0.95] tracking-[0.04em] text-white md:text-[28px] font-bigshoulders ${subtitleClassName}`}
          >
            {subtitle}
          </p>
        </div>
        {accent ? <AccentIcon accent={accent} /> : null}
      </div>
    </article>
  );
}

export default function Brand() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-4 py-16 md:px-8 md:py-16">
     
     

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="text-center font-display text-[34px] uppercase leading-[44px] tracking-[-0.04em] text-white md:text-[90px]">
          What Makes Brand Avatar Different
        </h2>

   <div className="mx-auto mt-10 grid max-w-5xl gap-2 md:mt-20 md:grid-cols-2">
  {brandHighlights.map((item, index) => (
    <HighlightCard
      key={item.id}
      title={item.title}
      subtitle={item.subtitle}
      accent={item.accent}

      className={`
        ${
          index >= 2
            ? "flex items-center justify-center text-center"
            : ""
        }
        ${
          item.id === "events" || item.id === "brands"
            ? "min-h-[140px] md:min-h-[185px]"
            : item.id === "south"
            ? "min-h-[170px] md:min-h-[220px]"
            : "min-h-[170px] md:min-h-[220px]"
        }
      `}

      bodyClassName={`
        ${
          index >= 2
            ? "flex flex-col items-center justify-center text-center"
            : ""
        }
        ${item.id === "south" ? "pt-3 md:pt-4" : ""}
      `}

      contentClassName={`
        ${
          index >= 2 ? "mx-auto text-center" : ""
        }
        ${
          item.id === "leadership" || item.id === "south"
            ? "max-w-[90%]"
            : item.id === "teams"
            ? "max-w-[76%]"
            : ""
        }
      `}

      titleClassName={`
        ${index >= 2 ? "text-center" : ""}
        ${
          item.id === "events" || item.id === "brands"
            ? "font-black text-[38px] md:text-[68px]"
            : item.id === "leadership"
            ? "text-[34px] md:text-[58px]"
            : item.id === "teams"
            ? "text-[34px] md:text-[52px]"
            : item.id === "south"
            ? "text-[32px] leading-[0.9] md:text-[50px]"
            : ""
        }
      `}

      subtitleClassName={`
        ${index >= 2 ? "text-center" : ""}
        ${
          item.id === "south"
            ? "text-[22px] md:text-[32px]"
            : item.id === "leadership" || item.id === "teams"
            ? "md:text-[36px]"
            : ""
        }
      `}
    />
  ))}
</div>

        <div className="mx-auto mt-10 max-w-4xl text-center md:mt-12">
          <p className="text-sm leading-relaxed head text-white md:text-3xl font-bigshoulders">
            When the room is full, the lights go on, and your brand takes the
            stage...<br className="hidden sm:block"></br> Everything has to work.
          </p>
          <p className="mt-2 text-sm head leading-relaxed text-white md:text-3xl font-bigshoulders">
            That&apos;s why companies trust Brand Avatar.
          </p>
        </div>
      </div>
    </section>
  );
}
