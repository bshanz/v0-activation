import { cn } from "@/lib/utils";
import type { Scenario } from "@/content/playbook-data";

interface ScenarioCardProps {
  scenario: Scenario;
  className?: string;
}

export function ScenarioCard({ scenario, className }: ScenarioCardProps) {
  return (
    <div
      className={cn(
        "border border-[var(--border)] rounded-xl bg-[var(--bg-surface)] overflow-hidden",
        "transition-all duration-300 hover:border-[var(--accent-cyan)]/20 hover:shadow-lg hover:shadow-[var(--glow-cyan)]",
        className
      )}
    >
      {/* Header */}
      <div className="px-5 py-4 bg-[var(--bg-elevated)] border-b border-[var(--border)]">
        <h4 className="font-display font-semibold text-foreground tracking-tight">
          {scenario.title}
        </h4>
      </div>

      {/* Content */}
      <div className="p-5 space-y-5">
        {/* Problem */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[var(--accent-rose)]/15 text-[var(--accent-rose)] flex items-center justify-center" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
            </span>
            <span className="text-sm font-medium text-[var(--accent-rose)]">Problem</span>
          </div>
          <p className="text-sm text-[var(--text-secondary)] pl-8 leading-relaxed">
            {scenario.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[var(--accent-emerald)]/15 text-[var(--accent-emerald)] flex items-center justify-center" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <span className="text-sm font-medium text-[var(--accent-emerald)]">Solution</span>
          </div>
          <p className="text-sm text-[var(--text-primary)] pl-8 leading-relaxed">
            {scenario.solution}
          </p>
        </div>
      </div>
    </div>
  );
}

interface ScenarioGridProps {
  scenarios: Scenario[];
  className?: string;
}

export function ScenarioGrid({ scenarios, className }: ScenarioGridProps) {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-5", className)}>
      {scenarios.map((scenario) => (
        <ScenarioCard key={scenario.id} scenario={scenario} />
      ))}
    </div>
  );
}
