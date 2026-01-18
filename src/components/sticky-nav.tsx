"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { sections } from "@/content/playbook-data";
import { cn } from "@/lib/utils";

export function StickyNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Update indicator position based on active section
  const updateIndicator = useCallback(() => {
    const activeButton = buttonRefs.current.get(activeSection);
    const navContainer = navRef.current;

    if (activeButton && navContainer) {
      const navRect = navContainer.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setIndicatorStyle({
        left: buttonRect.left - navRect.left + 12, // Account for button padding
        width: buttonRect.width - 24, // Subtract padding from both sides
      });
    }
  }, [activeSection]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero (roughly 80% of viewport)
      const scrollThreshold = window.innerHeight * 0.6;
      setIsVisible(window.scrollY > scrollThreshold);

      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Get visible sections (skip hero)
  const visibleSections = sections.slice(1);
  const activeIndex = visibleSections.findIndex((s) => s.id === activeSection);
  const showIndicator = activeIndex !== -1;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      )}
    >
      <div className="glass-card border-b border-white/5 shadow-lg shadow-black/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-display font-bold text-lg text-foreground hover:text-[var(--accent-cyan)] transition-colors cursor-pointer touch-action-manipulation"
            >
              v0 Playbook
            </button>

            {/* Navigation links - desktop */}
            <div ref={navRef} className="hidden md:flex items-center gap-1 relative">
              {/* Sliding underline indicator */}
              <span
                className={cn(
                  "absolute bottom-0 h-0.5 rounded-full bg-[var(--accent-cyan)] transition-all duration-300 ease-out",
                  showIndicator ? "opacity-100" : "opacity-0"
                )}
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  boxShadow: "0 0 8px var(--glow-cyan)",
                }}
              />

              {visibleSections.map((section) => (
                <button
                  key={section.id}
                  ref={(el) => {
                    if (el) buttonRefs.current.set(section.id, el);
                  }}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 touch-action-manipulation",
                    activeSection === section.id
                      ? "text-[var(--accent-cyan)]"
                      : "text-[var(--text-secondary)] hover:text-foreground"
                  )}
                >
                  {section.title}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <MobileNav
              sections={sections}
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

interface MobileNavProps {
  sections: typeof sections;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

function MobileNav({ sections, activeSection, scrollToSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[var(--text-secondary)] hover:text-foreground transition-colors rounded-md hover:bg-white/5 touch-action-manipulation"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        )}
      </button>

      {/* Mobile menu dropdown */}
      <div
        className={cn(
          "absolute top-16 left-0 right-0 glass-card border-b border-white/5 transition-all duration-300 overflow-hidden",
          isOpen ? "opacity-100 max-h-[400px]" : "opacity-0 max-h-0 pointer-events-none"
        )}
      >
        <div className="p-4 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                scrollToSection(section.id);
                setIsOpen(false);
              }}
              className={cn(
                "w-full px-4 py-3 text-sm text-left rounded-lg transition-colors flex items-center gap-3 touch-action-manipulation",
                activeSection === section.id
                  ? "text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/10"
                  : "text-[var(--text-secondary)] hover:text-foreground hover:bg-white/5"
              )}
            >
              {activeSection === section.id && (
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]" aria-hidden="true" />
              )}
              {section.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
