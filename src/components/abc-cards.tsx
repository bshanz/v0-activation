"use client";

import { abcCards } from "@/content/playbook-data";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const cardColors = [
  {
    badge: "letter-badge-cyan",
    border: "hover:border-[#0070F3]",
    glow: "group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]",
    text: "text-[#0070F3]",
    bg: "bg-[#0070F3]",
  },
  {
    badge: "letter-badge-violet",
    border: "hover:border-black",
    glow: "group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]",
    text: "text-black",
    bg: "bg-black",
  },
  {
    badge: "letter-badge-rose",
    border: "hover:border-[#666666]",
    glow: "group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]",
    text: "text-[#666666]",
    bg: "bg-[#666666]",
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
      id="abc"
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
            The ABC Framework
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto text-lg">
            A proven three-phase approach to driving sustainable technology
            adoption in your organization.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {abcCards.map((card, index) => (
            <div
              key={card.letter}
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
                {/* Letter badge and phase indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className={cn("letter-badge", cardColors[index].badge)}>
                    {card.letter}
                  </div>
                  <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">
                    Phase {index + 1}
                  </span>
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

        {/* Framework flow visualization */}
        <div
          className={cn(
            "flex justify-center mt-12 sm:mt-16 transition-all duration-700",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
        >
          {/* Mobile: vertical flow */}
          <div className="sm:hidden flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              {["A", "B", "C"].map((letter, i) => (
                <div key={letter} className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm text-white transition-transform hover:scale-110",
                      i === 0 && "bg-[var(--accent-cyan)]",
                      i === 1 && "bg-[var(--accent-violet)]",
                      i === 2 && "bg-[var(--accent-rose)]"
                    )}
                  >
                    {letter}
                  </div>
                  {i < 2 && (
                    <svg width="16" height="2" className="text-[var(--border)]" aria-hidden="true">
                      <line x1="0" y1="1" x2="16" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <span className="font-medium">Sustainable Adoption</span>
            </div>
          </div>

          {/* Desktop: horizontal flow */}
          <div className="hidden sm:inline-flex items-center gap-4">
            {["A", "B", "C"].map((letter, i) => (
              <div key={letter} className="flex items-center gap-4">
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm text-white transition-transform hover:scale-110",
                    i === 0 && "bg-[var(--accent-cyan)]",
                    i === 1 && "bg-[var(--accent-violet)]",
                    i === 2 && "bg-[var(--accent-rose)]"
                  )}
                >
                  {letter}
                </div>
                {i < 2 && (
                  <svg width="32" height="2" className="text-[var(--border)]" aria-hidden="true">
                    <line
                      x1="0"
                      y1="1"
                      x2="32"
                      y2="1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                    />
                  </svg>
                )}
              </div>
            ))}
            <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <span className="font-medium">Sustainable Adoption</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
