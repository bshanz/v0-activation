"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { X, Check, RefreshCw } from "lucide-react";

const doesntWorkItems = [
  "Assigning seats and hoping for the best",
  "One-time training sessions",
  "Expecting organic adoption",
];

const worksItems = [
  "Thoughtful rollout with exec, manager & champion support",
  "Integrating into existing workflows",
  "Builder enablement sessions",
  "Regular office hours",
  "Celebrating and sharing wins",
];

export function WhatWorksComparison() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    <div
      ref={sectionRef}
      className="px-4 pb-16 sm:pb-24"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* What Doesn't Work */}
          <div
            className={cn(
              "transition-all duration-500",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
          >
            <div className="h-full p-6 sm:p-8 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  What Doesn&apos;t Work
                </h3>
              </div>
              <ul className="space-y-4">
                {doesntWorkItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[var(--text-secondary)]"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <X className="w-3 h-3 text-red-500" />
                    </span>
                    <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What Works */}
          <div
            className={cn(
              "transition-all duration-500",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <div className="h-full p-6 sm:p-8 rounded-xl border border-[var(--accent-cyan)] bg-[var(--accent-cyan)]/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan)]/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-[var(--accent-cyan)]" />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  What Works
                </h3>
              </div>
              <ul className="space-y-4">
                {worksItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[var(--text-secondary)]"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--accent-cyan)]/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[var(--accent-cyan)]" />
                    </span>
                    <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Cycle visualization */}
        <div
          className={cn(
            "flex justify-center mt-8 transition-all duration-500",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-secondary)]">
            <RefreshCw className="w-4 h-4 text-[var(--accent-cyan)]" />
            <span>Repeat the cycle for continuous improvement</span>
          </div>
        </div>
      </div>
    </div>
  );
}
