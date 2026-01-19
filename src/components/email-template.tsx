"use client";

import { CopyButton } from "./copy-button";
import { cn } from "@/lib/utils";
import type { EmailTemplate as EmailTemplateType } from "@/content/playbook-data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const audienceConfig: Record<
  EmailTemplateType["audience"],
  { label: string; color: string; bgColor: string }
> = {
  champion: {
    label: "To: Champion",
    color: "text-[#0070F3]",
    bgColor: "bg-[rgba(0,112,243,0.05)] border-[rgba(0,112,243,0.2)]",
  },
  team: {
    label: "To: Team",
    color: "text-black",
    bgColor: "bg-[#FAFAFA] border-[#EAEAEA]",
  },
  sponsor: {
    label: "To: Sponsor",
    color: "text-[#666666]",
    bgColor: "bg-[#FAFAFA] border-[#EAEAEA]",
  },
};

const fromConfig: Record<
  EmailTemplateType["from"],
  { label: string; color: string; bgColor: string }
> = {
  sponsor: {
    label: "From: Sponsor",
    color: "text-[#666666]",
    bgColor: "bg-[#FAFAFA] border-[#EAEAEA]",
  },
  champion: {
    label: "From: Champion",
    color: "text-[#0070F3]",
    bgColor: "bg-[rgba(0,112,243,0.05)] border-[rgba(0,112,243,0.2)]",
  },
};

interface EmailTemplateProps {
  template: EmailTemplateType;
  className?: string;
}

export function EmailTemplate({ template, className }: EmailTemplateProps) {
  const fullContent = `Subject: ${template.subject}\n\n${template.body}`;
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 });
  const audience = audienceConfig[template.audience];
  const from = fromConfig[template.from];

  return (
    <div
      ref={ref}
      className={cn(
        "space-y-3 sm:space-y-4 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
    >
      {/* Header - stacks on mobile */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <h4 className="font-display text-base font-semibold tracking-tight">{template.title}</h4>
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={cn(
                "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border",
                from.bgColor,
                from.color
              )}
            >
              {from.label}
            </span>
            <span
              className={cn(
                "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border",
                audience.bgColor,
                audience.color
              )}
            >
              {audience.label}
            </span>
          </div>
        </div>
        <CopyButton text={fullContent} />
      </div>

      <div className="group border border-[#EAEAEA] rounded-xl overflow-hidden transition-all duration-300 hover:border-black bg-white">
        {/* Subject line */}
        <div className="px-3 sm:px-5 py-3 border-b border-[#EAEAEA] bg-[#FAFAFA] relative overflow-hidden">
          {/* Subtle hover effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 bg-white" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 relative">
            <span className="text-xs text-[#888888] uppercase tracking-wider font-medium flex-shrink-0">
              Subject:
            </span>
            <span className="text-sm font-medium text-[#0070F3] group-hover:text-black transition-colors break-words">
              {template.subject}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-3 sm:p-5 relative overflow-x-auto">
          <pre className="whitespace-pre-wrap text-xs sm:text-sm text-[var(--text-primary)] font-mono leading-relaxed break-words">
            {template.body}
          </pre>
        </div>
      </div>
    </div>
  );
}

// Compact version for multiple templates
interface EmailTemplateListProps {
  templates: EmailTemplateType[];
  className?: string;
}

export function EmailTemplateList({ templates, className }: EmailTemplateListProps) {
  return (
    <div className={cn("space-y-8", className)}>
      {templates.map((template) => (
        <EmailTemplate key={template.id} template={template} />
      ))}
    </div>
  );
}
