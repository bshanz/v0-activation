"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CollapsibleSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  showDivider?: boolean;
}

export function CollapsibleSection({
  id,
  title,
  subtitle,
  children,
  defaultOpen = false,
  className,
  showDivider = true,
}: CollapsibleSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id={id}
      className={cn("px-4 py-12 sm:py-16 relative", className)}
    >
      {/* Gradient section divider */}
      {showDivider && (
        <div className="absolute top-0 left-0 right-0 h-px">
          <div className="max-w-6xl mx-auto h-full bg-gradient-to-r from-transparent via-[var(--accent-cyan)]/20 to-transparent" />
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <Accordion
          type="single"
          collapsible
          defaultValue={defaultOpen ? id : undefined}
        >
          <AccordionItem
            value={id}
            className={cn(
              "border border-[var(--border)] rounded-xl bg-[var(--bg-surface)] overflow-hidden",
              "transition-all duration-500 ease-out",
              "hover:border-[var(--accent-cyan)]/20 hover:shadow-lg hover:shadow-[var(--glow-cyan)]",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}
          >
            <AccordionTrigger className="px-6 sm:px-8 py-5 sm:py-6 hover:no-underline group data-[state=open]:border-b data-[state=open]:border-[var(--border)] relative overflow-hidden">
              {/* Header glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-cyan)]/5 via-transparent to-[var(--accent-violet)]/5" />
              </div>

              <div className="flex flex-col items-start gap-1.5 text-left relative">
                <h2 className="font-display text-xl sm:text-2xl font-bold group-hover:text-[var(--accent-cyan)] transition-colors duration-300 tracking-tight">
                  {title}
                </h2>
                {subtitle && (
                  <p className="text-sm text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors duration-300">
                    {subtitle}
                  </p>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 sm:px-8 pb-6 sm:pb-8 pt-6">
              <div className="prose prose-invert prose-sm max-w-none">
                {children}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
