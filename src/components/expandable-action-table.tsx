"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useCompletedActions } from "@/hooks/useLocalStorage";
import type { ExpandedTimelineAction, EmailTemplate } from "@/content/playbook-data";
import { Check, Copy, CheckCircle2 } from "lucide-react";

interface ExpandableActionTableProps {
  title: string;
  description?: string;
  actions: ExpandedTimelineAction[];
  emailTemplates?: EmailTemplate[];
  storageKey: string;
  className?: string;
}

export function ExpandableActionTable({
  title,
  description,
  actions,
  emailTemplates = [],
  storageKey,
  className,
}: ExpandableActionTableProps) {
  const { isCompleted, toggleCompleted } = useCompletedActions(storageKey);

  return (
    <div className={cn("space-y-4", className)}>
      <div>
        <h3 className="font-display text-lg font-semibold tracking-tight">{title}</h3>
        {description && (
          <p className="text-sm text-[var(--text-secondary)]">{description}</p>
        )}
      </div>

      <div className="border border-[var(--border)] rounded-xl overflow-hidden">
        {/* Header row */}
        <div className="hidden md:grid grid-cols-[100px_1fr_200px_40px] gap-4 px-4 py-3 bg-[var(--bg-elevated)] border-b border-[var(--border)]">
          <span className="font-semibold text-sm text-[var(--text-primary)]">Week</span>
          <span className="font-semibold text-sm text-[var(--text-primary)]">Action</span>
          <span className="font-semibold text-sm text-[var(--text-primary)]">Outcome</span>
          <span className="font-semibold text-sm text-[var(--text-primary)]">Done</span>
        </div>

        <Accordion type="multiple" className="w-full">
          {actions.map((action, index) => (
            <ExpandableActionRow
              key={action.id}
              action={action}
              emailTemplate={
                action.emailTemplateId
                  ? emailTemplates.find((t) => t.id === action.emailTemplateId)
                  : undefined
              }
              isCompleted={isCompleted(action.id)}
              onToggleCompleted={() => toggleCompleted(action.id)}
              isEven={index % 2 === 0}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
}

interface ExpandableActionRowProps {
  action: ExpandedTimelineAction;
  emailTemplate?: EmailTemplate;
  isCompleted: boolean;
  onToggleCompleted: () => void;
  isEven: boolean;
}

function ExpandableActionRow({
  action,
  emailTemplate,
  isCompleted,
  onToggleCompleted,
  isEven,
}: ExpandableActionRowProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    if (!emailTemplate) return;
    const fullEmail = `Subject: ${emailTemplate.subject}\n\n${emailTemplate.body}`;
    await navigator.clipboard.writeText(fullEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const hasExpandableContent = action.details || action.tips?.length || emailTemplate;

  return (
    <AccordionItem
      value={action.id}
      className={cn(
        "border-b border-[var(--border)] last:border-b-0",
        isEven ? "bg-transparent" : "bg-[var(--bg-surface)]"
      )}
    >
      {/* Desktop view */}
      <div className="hidden md:block">
        <AccordionTrigger
          className={cn(
            "px-4 py-3 hover:bg-[var(--bg-elevated)]/50 transition-colors w-full",
            !hasExpandableContent && "cursor-default [&>svg]:hidden"
          )}
          disabled={!hasExpandableContent}
        >
          <div className="grid grid-cols-[100px_1fr_200px_40px] gap-4 items-center w-full text-left">
            <span
              className={cn(
                "font-medium text-[var(--accent-cyan)] text-sm",
                isCompleted && "line-through opacity-60"
              )}
            >
              {action.week}
            </span>
            <span
              className={cn(
                "text-[var(--text-primary)] text-sm",
                isCompleted && "line-through opacity-60"
              )}
            >
              {action.action}
            </span>
            <span
              className={cn(
                "text-[var(--text-secondary)] text-sm",
                isCompleted && "line-through opacity-60"
              )}
            >
              {action.outcome}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompleted();
              }}
              className={cn(
                "w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all",
                isCompleted
                  ? "bg-[var(--accent-cyan)] border-[var(--accent-cyan)] text-white"
                  : "border-[var(--border)] hover:border-[var(--accent-cyan)]"
              )}
              aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
            >
              <Check className={cn("w-4 h-4", isCompleted ? "text-white" : "text-[var(--border)]")} />
            </button>
          </div>
        </AccordionTrigger>

        {hasExpandableContent && (
          <AccordionContent className="px-4 pb-4">
            <div className="pl-[100px] pr-[40px] space-y-4">
              <ExpandedContent
                action={action}
                emailTemplate={emailTemplate}
                copiedEmail={copiedEmail}
                onCopyEmail={handleCopyEmail}
              />
            </div>
          </AccordionContent>
        )}
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        <AccordionTrigger
          className={cn(
            "px-4 py-3 hover:bg-[var(--bg-elevated)]/50 transition-colors w-full",
            !hasExpandableContent && "cursor-default [&>svg]:hidden"
          )}
          disabled={!hasExpandableContent}
        >
          <div className="flex flex-col items-start gap-2 w-full text-left pr-2">
            <div className="flex items-center justify-between w-full">
              <span
                className={cn(
                  "inline-flex items-center px-2.5 py-1 rounded-md bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] text-sm font-semibold",
                  isCompleted && "line-through opacity-60"
                )}
              >
                {action.week}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleCompleted();
                }}
                className={cn(
                  "w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all",
                  isCompleted
                    ? "bg-[var(--accent-cyan)] border-[var(--accent-cyan)] text-white"
                    : "border-[var(--border)] hover:border-[var(--accent-cyan)]"
                )}
                aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
              >
                {isCompleted && <Check className="w-4 h-4" />}
              </button>
            </div>
            <p
              className={cn(
                "text-[var(--text-primary)] font-medium text-sm leading-relaxed",
                isCompleted && "line-through opacity-60"
              )}
            >
              {action.action}
            </p>
            <p
              className={cn(
                "text-[var(--text-secondary)] text-xs",
                isCompleted && "line-through opacity-60"
              )}
            >
              <span className="font-medium text-[var(--text-muted)] uppercase tracking-wider">
                Outcome:{" "}
              </span>
              {action.outcome}
            </p>
          </div>
        </AccordionTrigger>

        {hasExpandableContent && (
          <AccordionContent className="px-4 pb-4">
            <ExpandedContent
              action={action}
              emailTemplate={emailTemplate}
              copiedEmail={copiedEmail}
              onCopyEmail={handleCopyEmail}
            />
          </AccordionContent>
        )}
      </div>
    </AccordionItem>
  );
}

interface ExpandedContentProps {
  action: ExpandedTimelineAction;
  emailTemplate?: EmailTemplate;
  copiedEmail: boolean;
  onCopyEmail: () => void;
}

function ExpandedContent({
  action,
  emailTemplate,
  copiedEmail,
  onCopyEmail,
}: ExpandedContentProps) {
  return (
    <div className="space-y-4 pt-2">
      {action.details && (
        <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {action.details}
        </div>
      )}

      {action.tips && action.tips.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Tips
          </h4>
          <ul className="space-y-1">
            {action.tips.map((tip, index) => (
              <li
                key={index}
                className="text-sm text-[var(--text-secondary)] flex items-start gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan)] shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {emailTemplate && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Email Template
            </h4>
            <button
              onClick={onCopyEmail}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all",
                copiedEmail
                  ? "bg-green-100 text-green-700"
                  : "bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:bg-[var(--border)] hover:text-[var(--text-primary)]"
              )}
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3 h-3" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  Copy Email
                </>
              )}
            </button>
          </div>
          <div className="bg-[var(--bg-elevated)] rounded-lg p-4 border border-[var(--border)]">
            <div className="mb-2 pb-2 border-b border-[var(--border)]">
              <span className="text-xs text-[var(--text-muted)]">Subject: </span>
              <span className="text-sm text-[var(--text-primary)] font-medium">
                {emailTemplate.subject}
              </span>
            </div>
            <pre className="text-sm text-[var(--text-secondary)] whitespace-pre-wrap font-sans leading-relaxed">
              {emailTemplate.body}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
