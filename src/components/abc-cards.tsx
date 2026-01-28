"use client";

import { frameworkCards } from "@/content/playbook-data";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const cardColors = [
  {
    badge: "letter-badge-rose",
    border: "hover:border-[#666666]",
    glow: "group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]",
    text: "text-[#666666]",
    bg: "bg-[#666666]",
  },
  {
    badge: "letter-badge-violet",
    border: "hover:border-black",
    glow: "group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]",
    text: "text-black",
    bg: "bg-black",
  },
  {
    badge: "letter-badge-cyan",
    border: "hover:border-[#0070F3]",
    glow: "group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]",
    text: "text-[#0070F3]",
    bg: "bg-[#0070F3]",
  },
];

export function ABCCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="framework"
      className="px-4 py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="spotlight opacity-15"
          style={{ top: "20%", right: "-20%" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Section header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          <span className="badge-accent mb-4 inline-block px-5 py-1.5">Framework</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-black">
            The 10-20-70 Framework
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto text-lg">
            Why most tech rollouts fail — and where this playbook focuses.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {frameworkCards.map((card, index) => (
            <div
              key={card.percentage}
              className={cn(
                "group relative transition-all duration-500",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
              style={{
                transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms",
              }}
            >
              <div
                className={cn(
                  "h-full p-6 sm:p-8 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)]",
                  "transition-all duration-300",
                  "group-hover:translate-y-[-4px] group-hover:bg-[var(--bg-elevated)]",
                  cardColors[index].border,
                  cardColors[index].glow
                )}
              >
                {/* Percentage badge */}
                <div className="mb-6">
                  <div className={cn("letter-badge", cardColors[index].badge)}>
                    {card.percentage}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3 tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className={cn(
                    "absolute bottom-0 left-6 right-6 h-0.5 rounded-full transition-all duration-300",
                    "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100",
                    cardColors[index].bg
                  )}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Framework equation - centered below cards */}
        <div
          className={cn(
            "flex flex-col items-center mt-12 sm:mt-16 transition-all duration-700",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
        >
          {/* 10 + 20 + 70 badges row */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-9 sm:h-10 px-3 rounded-lg flex items-center justify-center font-bold text-sm text-white bg-[var(--accent-rose)] transition-transform hover:scale-110 cursor-pointer">
              10%
            </div>
            <span className="text-[var(--text-muted)] font-medium text-lg">+</span>
            <div className="h-9 sm:h-10 px-3 rounded-lg flex items-center justify-center font-bold text-sm text-white bg-[var(--accent-violet)] transition-transform hover:scale-110 cursor-pointer">
              20%
            </div>
            <span className="text-[var(--text-muted)] font-medium text-lg">+</span>
            <div className="h-9 sm:h-10 px-3 rounded-lg flex items-center justify-center font-bold text-sm text-white bg-[var(--accent-cyan)] transition-transform hover:scale-110 cursor-pointer">
              70%
            </div>
          </div>

          {/* = Sustainable Adoption - below and centered */}
          <div className="flex items-center gap-2 mt-4 text-sm sm:text-base text-[var(--text-secondary)]">
            <span className="text-[var(--text-muted)] font-medium">=</span>
            <span className="font-medium">Sustainable Adoption</span>
          </div>

          {/* Explanatory note */}
          <p className="mt-6 text-sm text-[var(--text-muted)] max-w-xl text-center leading-relaxed">
            Organizations over-invest in the tool and under-invest in actually getting people to use it. This playbook systematizes the 70% — making the change management piece prescriptive and actionable.
          </p>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
