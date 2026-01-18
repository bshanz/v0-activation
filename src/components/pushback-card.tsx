import { cn } from "@/lib/utils";
import type { PushbackItem } from "@/content/playbook-data";

interface PushbackCardProps {
  item: PushbackItem;
  className?: string;
}

export function PushbackCard({ item, className }: PushbackCardProps) {
  return (
    <div
      className={cn(
        "border border-[#EAEAEA] rounded-xl bg-white overflow-hidden",
        "transition-all duration-300 hover:border-black",
        className
      )}
    >
      {/* Objection */}
      <div className="px-5 py-4 bg-[#FAFAFA] border-b border-[#EAEAEA]">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 mt-0.5 text-[#888888]" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </span>
          <p className="text-sm font-medium italic text-black">
            &ldquo;{item.objection}&rdquo;
          </p>
        </div>
      </div>

      {/* Response */}
      <div className="p-5">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 mt-0.5 text-[#0070F3]" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </span>
          <p className="text-sm text-black leading-relaxed">
            {item.response}
          </p>
        </div>
      </div>
    </div>
  );
}

interface PushbackListProps {
  items: PushbackItem[];
  className?: string;
}

export function PushbackList({ items, className }: PushbackListProps) {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-5", className)}>
      {items.map((item) => (
        <PushbackCard key={item.id} item={item} />
      ))}
    </div>
  );
}
