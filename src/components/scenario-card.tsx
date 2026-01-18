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
        "border border-[#EAEAEA] rounded-xl bg-white overflow-hidden",
        "transition-all duration-300 hover:border-black",
        className
      )}
    >
      {/* Header */}
      <div className="px-5 py-4 bg-[#FAFAFA] border-b border-[#EAEAEA]">
        <h4 className="font-display font-semibold text-black tracking-tight">
          {scenario.title}
        </h4>
      </div>

      {/* Content */}
      <div className="p-5 space-y-5">
        {/* Problem */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center" aria-hidden="true">
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
            <span className="text-sm font-medium text-[#DC2626]">Problem</span>
          </div>
          <p className="text-sm text-[#666666] pl-8 leading-relaxed">
            {scenario.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[rgba(0,112,243,0.1)] text-[#0070F3] flex items-center justify-center" aria-hidden="true">
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
            <span className="text-sm font-medium text-[#0070F3]">Solution</span>
          </div>
          <p className="text-sm text-black pl-8 leading-relaxed">
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
