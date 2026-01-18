import { cn } from "@/lib/utils";
import type { TalkingPoint } from "@/content/playbook-data";

interface TalkingPointsProps {
  talkingPoint: TalkingPoint;
  className?: string;
}

export function TalkingPoints({ talkingPoint, className }: TalkingPointsProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <h4 className="font-display text-base font-semibold tracking-tight text-black">{talkingPoint.title}</h4>

      <div className="relative border-l-2 border-[#0070F3] bg-[#FAFAFA] rounded-r-xl p-5 space-y-4">
        {talkingPoint.points.map((point, index) => (
          <div key={index} className="flex gap-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[rgba(0,112,243,0.1)] text-[#0070F3] text-xs font-bold flex items-center justify-center">
              {index + 1}
            </span>
            <p className="text-sm text-black leading-relaxed pt-0.5">{point}</p>
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
