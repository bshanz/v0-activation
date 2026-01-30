"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { sections } from "@/content/playbook-data";
import { cn } from "@/lib/utils";

// Custom nav items for simplified navigation
const navItems = [
  { id: "framework", title: "Framework" },
  { id: "adkar", title: "Diagnosis" },
  { id: "timeline", title: "Timeline" },
  { id: "prelaunch", title: "Playbook" },
  { id: "scenarios", title: "Troubleshooting" },
];

export function StickyNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Map active section to nav item for indicator
  const getActiveNavItem = useCallback(() => {
    // Framework = 10-20-70 + Success Factors
    if (activeSection === "framework" || activeSection === "success-factors") return "framework";
    // Diagnosis = ADKAR
    if (activeSection === "adkar") return "adkar";
    // Timeline = Quick Reference
    if (activeSection === "timeline") return "timeline";
    // Playbook = Pre-Launch + Month 1/2/3
    if (["prelaunch", "month1", "month2", "month3"].includes(activeSection)) return "prelaunch";
    // Troubleshooting = Scenarios + Pushback
    if (activeSection === "scenarios" || activeSection === "pushback") return "scenarios";
    return null;
  }, [activeSection]);

  const activeNavItem = getActiveNavItem();

  // Update indicator position based on active nav item
  const updateIndicator = useCallback(() => {
    if (!activeNavItem) return;
    const activeButton = buttonRefs.current.get(activeNavItem);
    const navContainer = navRef.current;

    if (activeButton && navContainer) {
      const navRect = navContainer.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setIndicatorStyle({
        left: buttonRect.left - navRect.left + 12, // Account for button padding
        width: buttonRect.width - 24, // Subtract padding from both sides
      });
    }
  }, [activeNavItem]);

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

  const activeIndex = navItems.findIndex((item) => item.id === activeNavItem);
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
      <div className="bg-white/95 backdrop-blur-sm border-b border-[var(--border)] shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-display font-bold text-lg text-black hover:text-[#0070F3] transition-colors cursor-pointer touch-action-manipulation"
            >
              v0 Playbook
            </button>

            {/* Navigation links - desktop */}
            <div ref={navRef} className="hidden md:flex items-center gap-1 relative">
              {/* Sliding underline indicator */}
              <span
                className={cn(
                  "absolute bottom-0 h-0.5 rounded-full bg-[#0070F3] transition-all duration-300 ease-out",
                  showIndicator ? "opacity-100" : "opacity-0"
                )}
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                }}
              />

              {navItems.map((item) => (
                <button
                  key={item.id}
                  ref={(el) => {
                    if (el) buttonRefs.current.set(item.id, el);
                  }}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 touch-action-manipulation cursor-pointer",
                    activeNavItem === item.id
                      ? "text-[#0070F3]"
                      : "text-[#666666] hover:text-black"
                  )}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <MobileNav
              navItems={navItems}
              activeNavItem={activeNavItem}
              scrollToSection={scrollToSection}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

interface MobileNavProps {
  navItems: typeof navItems;
  activeNavItem: string | null;
  scrollToSection: (id: string) => void;
}

function MobileNav({ navItems, activeNavItem, scrollToSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#666666] hover:text-black transition-colors rounded-md hover:bg-[#FAFAFA] touch-action-manipulation cursor-pointer"
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
          "absolute top-16 left-0 right-0 bg-white border-b border-[#EAEAEA] shadow-lg transition-all duration-300 overflow-hidden",
          isOpen ? "opacity-100 max-h-[400px]" : "opacity-0 max-h-0 pointer-events-none"
        )}
      >
        <div className="p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsOpen(false);
              }}
              className={cn(
                "w-full px-4 py-3 text-sm text-left rounded-lg transition-colors flex items-center gap-3 touch-action-manipulation cursor-pointer",
                activeNavItem === item.id
                  ? "text-[#0070F3] bg-[rgba(0,112,243,0.05)]"
                  : "text-[#666666] hover:text-black hover:bg-[#FAFAFA]"
              )}
            >
              {activeNavItem === item.id && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3]" aria-hidden="true" />
              )}
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
