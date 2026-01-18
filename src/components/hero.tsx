"use client";

import { heroData } from "@/content/playbook-data";
import { useEffect, useState } from "react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span aria-live="polite" aria-atomic="true" className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-32 overflow-hidden"
    >
      {/* Atmospheric background spotlights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="spotlight opacity-40"
          style={{ top: "-20%", left: "-10%" }}
        />
        <div
          className="spotlight spotlight-violet opacity-30"
          style={{ top: "10%", right: "-15%" }}
        />
        <div
          className="spotlight opacity-20"
          style={{ bottom: "-30%", left: "30%" }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card mb-8 opacity-0 animate-fade-in-down"
          style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm text-[var(--text-secondary)] font-medium tracking-wide">
            Enterprise Change Management
          </span>
        </div>

        {/* Main title */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 opacity-0 animate-fade-in-up text-balance"
          style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
        >
          <span className="gradient-text text-glow">{heroData.title}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl sm:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 font-medium opacity-0 animate-fade-in-up"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          {heroData.subtitle}
        </p>

        {/* Floating stat card */}
        <div
          className="relative max-w-lg mx-auto mb-12 opacity-0 animate-scale-in"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          {/* Core Insight label */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--accent-violet)]/50" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-violet)]">
              Active Sponsorship Triples Success Rates
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--accent-violet)]/50" />
          </div>

          <div className="gradient-border glow animate-glow-pulse p-8 sm:p-10">
            <div className="flex items-center justify-center gap-6 sm:gap-10">
              {/* Primary stat */}
              <div className="text-center">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[var(--accent-cyan)] font-display">
                  <AnimatedCounter value={79} suffix="%" />
                </div>
                <div className="text-sm text-[var(--text-muted)] mt-2 font-medium uppercase tracking-wider">
                  with sponsor
                </div>
              </div>

              {/* Divider */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />
                <span className="text-lg text-[var(--text-muted)] font-light">vs</span>
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />
              </div>

              {/* Secondary stat */}
              <div className="text-center">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[var(--text-muted)] font-display">
                  <AnimatedCounter value={27} suffix="%" />
                </div>
                <div className="text-sm text-[var(--text-muted)] mt-2 font-medium uppercase tracking-wider">
                  without
                </div>
              </div>
            </div>

            {/* Prosci attribution */}
            <p className="mt-8 text-sm text-[var(--text-secondary)] text-center border-t border-[var(--border)] pt-6 leading-relaxed">
              {heroData.coreInsight}
            </p>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
        >
          <a
            href="#timeline"
            className="btn-primary inline-flex items-center gap-2 group touch-action-manipulation"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-y-0.5"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
          <a href="#abc" className="btn-secondary inline-flex items-center gap-2 touch-action-manipulation">
            Learn the Framework
          </a>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 text-[var(--text-muted)]">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-[var(--border)] flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-[var(--accent-cyan)] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
