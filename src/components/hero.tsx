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
      {/* Background gradient blobs - responsive sizes using clamp */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left blue blob */}
        <div
          className="blob blob-blue w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
          style={{
            top: "-15%",
            left: "-10%",
          }}
        />
        {/* Top right purple blob */}
        <div
          className="blob blob-purple w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]"
          style={{
            top: "5%",
            right: "-8%",
          }}
        />
        {/* Bottom center cyan blob */}
        <div
          className="blob blob-cyan w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px]"
          style={{
            bottom: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        {/* Additional subtle blue blob bottom left - hidden on mobile */}
        <div
          className="blob blob-blue hidden sm:block w-[250px] h-[250px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px]"
          style={{
            bottom: "10%",
            left: "-5%",
            opacity: 0.5,
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] mb-8 opacity-0 animate-fade-in-down"
          style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#0070F3] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#0070F3]" />
          </span>
          <span className="text-sm text-[#666666] font-medium tracking-wide">
            Enterprise Change Management
          </span>
        </div>

        {/* Main title */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 opacity-0 animate-fade-in-up text-balance text-black"
          style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
        >
          {heroData.title}
        </h1>

        {/* Subtitle */}
        <p
          className="text-xl sm:text-2xl text-[#666666] max-w-2xl mx-auto mb-12 font-medium opacity-0 animate-fade-in-up"
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
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#0070F3]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0070F3]">
              Active Sponsorship Triples Success Rates
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#0070F3]" />
          </div>

          <div className="relative bg-white border border-[#EAEAEA] rounded-xl p-8 sm:p-10">

            <div className="flex items-center justify-center gap-6 sm:gap-10">
              {/* Primary stat */}
              <div className="text-center">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#0070F3] font-display">
                  <AnimatedCounter value={79} suffix="%" />
                </div>
                <div className="text-sm text-[#888888] mt-2 font-medium uppercase tracking-wider">
                  with sponsor
                </div>
              </div>

              {/* Divider */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#EAEAEA] to-transparent" />
                <span className="text-lg text-[#888888] font-light">vs</span>
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#EAEAEA] to-transparent" />
              </div>

              {/* Secondary stat */}
              <div className="text-center">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#888888] font-display">
                  <AnimatedCounter value={27} suffix="%" />
                </div>
                <div className="text-sm text-[#888888] mt-2 font-medium uppercase tracking-wider">
                  without
                </div>
              </div>
            </div>

            {/* Prosci attribution */}
            <p className="mt-8 text-sm text-[#666666] text-center border-t border-[#EAEAEA] pt-6 leading-relaxed">
              <a href="https://www.prosci.com/methodology-overview" target="_blank" rel="noopener noreferrer" className="text-[#0070F3] hover:underline">Prosci</a> research shows projects with engaged sponsors are 79% likely to meet objectives versus 27% without. This playbook makes sponsor activation incredibly easy.
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-[#333333] transition-colors duration-150 group touch-action-manipulation"
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
          <a
            href="#abc"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#EAEAEA] text-black font-medium rounded-lg hover:border-black transition-colors duration-150 touch-action-manipulation"
          >
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
        <div className="flex flex-col items-center gap-2 text-[#888888]">
          <div className="w-5 h-8 rounded-full border border-[#EAEAEA] flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-[#0070F3] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
