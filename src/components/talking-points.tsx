import { cn } from "@/lib/utils";
import type { TalkingPoint } from "@/content/playbook-data";

interface TalkingPointsProps {
  talkingPoint: TalkingPoint;
  className?: string;
}

export function TalkingPoints({ talkingPoint, className }: TalkingPointsProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <h4 className="font-display text-base font-semibold tracking-tight">{talkingPoint.title}</h4>

      <div className="relative border-l-2 border-[var(--accent-cyan)] bg-[var(--bg-surface)] rounded-r-xl p-5 space-y-4">
        {/* Subtle glow on the left border */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-cyan)]/50 via-[var(--accent-cyan)]/20 to-transparent pointer-events-none" />

        {talkingPoint.points.map((point, index) => (
          <div key={index} className="flex gap-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)] text-xs font-bold flex items-center justify-center">
              {index + 1}
            </span>
            <p className="text-sm text-[var(--text-primary)] leading-relaxed pt-0.5">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface TalkingPointsListProps {
  talkingPoints: TalkingPoint[];
  className?: string;
}

export function TalkingPointsList({ talkingPoints, className }: TalkingPointsListProps) {
  return (
    <div className={cn("space-y-8", className)}>
      {talkingPoints.map((tp) => (
        <TalkingPoints key={tp.id} talkingPoint={tp} />
      ))}
    </div>
  );
}
