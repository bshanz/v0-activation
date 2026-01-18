"use client";

import { abcCards } from "@/content/playbook-data";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const cardColors = [
  {
    badge: "letter-badge-cyan",
    border: "hover:border-[var(--accent-cyan)]/30",
    glow: "group-hover:shadow-[0_8px_32px_-8px_rgba(6,182,212,0.3)]",
    text: "text-[var(--accent-cyan)]",
    bg: "bg-[var(--accent-cyan)]",
  },
  {
    badge: "letter-badge-violet",
    border: "hover:border-[var(--accent-violet)]/30",
    glow: "group-hover:shadow-[0_8px_32px_-8px_rgba(139,92,246,0.3)]",
    text: "text-[var(--accent-violet)]",
    bg: "bg-[var(--accent-violet)]",
  },
  {
    badge: "letter-badge-rose",
    border: "hover:border-[var(--accent-rose)]/30",
    glow: "group-hover:shadow-[0_8px_32px_-8px_rgba(244,63,94,0.3)]",
    text: "text-[var(--accent-rose)]",
    bg: "bg-[var(--accent-rose)]",
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
          <span className="badge-accent mb-4 inline-block">Framework</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            The ABC Framework
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
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
            "flex justify-center mt-16 transition-all duration-700",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}
        >
          <div className="inline-flex items-center gap-4">
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
                  <svg width="32" height="2" className="text-[var(--border)]">
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
