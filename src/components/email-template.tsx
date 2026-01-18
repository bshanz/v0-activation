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
    color: "text-[var(--accent-violet)]",
    bgColor: "bg-[var(--accent-violet)]/10 border-[var(--accent-violet)]/20",
  },
  team: {
    label: "To: Team",
    color: "text-[var(--accent-cyan)]",
    bgColor: "bg-[var(--accent-cyan)]/10 border-[var(--accent-cyan)]/20",
  },
  sponsor: {
    label: "To: Sponsor",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10 border-emerald-400/20",
  },
};

const fromConfig: Record<
  EmailTemplateType["from"],
  { label: string; color: string; bgColor: string }
> = {
  sponsor: {
    label: "From: Sponsor",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10 border-emerald-400/20",
  },
  champion: {
    label: "From: Champion",
    color: "text-[var(--accent-violet)]",
    bgColor: "bg-[var(--accent-violet)]/10 border-[var(--accent-violet)]/20",
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
        "space-y-4 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h4 className="font-display text-base font-semibold tracking-tight">{template.title}</h4>
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
        <CopyButton text={fullContent} />
      </div>

      <div className="group glass-card rounded-xl overflow-hidden transition-all duration-300 hover:border-[var(--accent-cyan)]/30 hover:shadow-lg hover:shadow-[var(--glow-cyan)]">
        {/* Subject line */}
        <div className="px-5 py-3 border-b border-white/5 bg-white/[0.02] relative overflow-hidden">
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-cyan)]/5 to-transparent" />
          </div>

          <div className="flex items-center gap-2 relative">
            <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">
              Subject:
            </span>
            <span className="text-sm font-medium text-[var(--accent-cyan)] group-hover:text-[var(--accent-cyan)] transition-colors">
              {template.subject}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 relative">
          <pre className="whitespace-pre-wrap text-sm text-[var(--text-primary)] font-mono leading-relaxed">
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
