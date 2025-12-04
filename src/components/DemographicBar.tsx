interface DemographicBarProps {
  label: string;
  percentage: number;
  isHighlight?: boolean;
}

export function DemographicBar({ label, percentage, isHighlight }: DemographicBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className={isHighlight ? 'text-white font-medium' : 'text-muted-foreground'}>
          {label}
        </span>
        <span className={isHighlight ? 'text-primary font-semibold' : 'text-muted-foreground'}>
          {percentage}%
        </span>
      </div>
      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${
            isHighlight
              ? 'bg-gradient-to-r from-primary to-secondary'
              : 'bg-muted-foreground/50'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
