import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { TimelineAction } from "@/content/playbook-data";

interface ActionTableProps {
  title: string;
  description?: string;
  actions: TimelineAction[];
  className?: string;
}

export function ActionTable({
  title,
  description,
  actions,
  className,
}: ActionTableProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div>
        <h3 className="font-display text-lg font-semibold tracking-tight">{title}</h3>
        {description && (
          <p className="text-sm text-[var(--text-secondary)]">{description}</p>
        )}
      </div>

      {/* Desktop table view */}
      <div className="hidden md:block border border-[var(--border)] rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[var(--bg-elevated)] hover:bg-[var(--bg-elevated)] border-b border-[var(--border)]">
              <TableHead className="w-[100px] font-semibold text-[var(--text-primary)]">Week</TableHead>
              <TableHead className="font-semibold text-[var(--text-primary)]">Action</TableHead>
              <TableHead className="font-semibold text-[var(--text-primary)]">Outcome</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {actions.map((action, index) => (
              <TableRow
                key={action.week}
                className={cn(
                  "hover:bg-[var(--bg-elevated)]/50 transition-colors border-b border-[var(--border)] last:border-0",
                  index % 2 === 0 ? "bg-transparent" : "bg-[var(--bg-surface)]"
                )}
              >
                <TableCell className="font-medium text-[var(--accent-cyan)]">
                  {action.week}
                </TableCell>
                <TableCell className="text-[var(--text-primary)]">{action.action}</TableCell>
                <TableCell className="text-[var(--text-secondary)]">
                  {action.outcome}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-3">
        {actions.map((action, index) => (
          <div
            key={action.week}
            className={cn(
              "border border-[var(--border)] rounded-xl p-4 space-y-2",
              index % 2 === 0 ? "bg-[var(--bg-surface)]" : "bg-[var(--bg-elevated)]"
            )}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] text-sm font-semibold">
                {action.week}
              </span>
            </div>
            <div>
              <p className="text-[var(--text-primary)] font-medium text-sm leading-relaxed">
                {action.action}
              </p>
            </div>
            <div className="pt-1 border-t border-[var(--border)]">
              <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                <span className="font-medium text-[var(--text-muted)] uppercase tracking-wider">Outcome: </span>
                {action.outcome}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Generic table for role identification and ADKAR
interface GenericTableProps {
  title: string;
  description?: string;
  columns: string[];
  rows: Record<string, string>[];
  className?: string;
}

export function GenericTable({
  title,
  description,
  columns,
  rows,
  className,
}: GenericTableProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div>
        <h3 className="font-display text-lg font-semibold tracking-tight">{title}</h3>
        {description && (
          <p className="text-sm text-[var(--text-secondary)]">{description}</p>
        )}
      </div>

      {/* Desktop table view */}
      <div className="hidden md:block border border-[var(--border)] rounded-xl overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-[var(--bg-elevated)] hover:bg-[var(--bg-elevated)] border-b border-[var(--border)]">
              {columns.map((column) => (
                <TableHead key={column} className="font-semibold whitespace-nowrap text-[var(--text-primary)]">
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                className={cn(
                  "hover:bg-[var(--bg-elevated)]/50 transition-colors border-b border-[var(--border)] last:border-0",
                  index % 2 === 0 ? "bg-transparent" : "bg-[var(--bg-surface)]"
                )}
              >
                {Object.values(row).map((cell, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    className={cellIndex === 0 ? "font-medium text-[var(--accent-cyan)]" : "text-[var(--text-primary)]"}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-3">
        {rows.map((row, index) => {
          const values = Object.values(row);
          const keys = Object.keys(row);
          return (
            <div
              key={index}
              className={cn(
                "border border-[var(--border)] rounded-xl p-4 space-y-3",
                index % 2 === 0 ? "bg-[var(--bg-surface)]" : "bg-[var(--bg-elevated)]"
              )}
            >
              {/* First value as header */}
              <div className="flex items-center">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] text-sm font-semibold">
                  {values[0]}
                </span>
              </div>
              {/* Remaining values */}
              <div className="space-y-2">
                {values.slice(1).map((cell, cellIndex) => (
                  <div key={cellIndex} className="text-sm">
                    <span className="font-medium text-[var(--text-muted)] text-xs uppercase tracking-wider">
                      {columns[cellIndex + 1]}:
                    </span>
                    <p className="text-[var(--text-primary)] mt-0.5 leading-relaxed">
                      {cell}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
