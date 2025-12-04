import { CountUp } from './CountUp';
import { LucideIcon } from 'lucide-react';

interface AnalyticsCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  suffix?: string;
  trend?: 'up' | 'down';
  trendValue?: string;
  decimals?: number;
}

export function AnalyticsCard({
  icon: Icon,
  label,
  value,
  suffix = '',
  trend,
  trendValue,
  decimals = 1
}: AnalyticsCardProps) {
  return (
    <div className="glass rounded-xl p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]">
      <div className="flex items-start justify-between mb-4">
        <Icon className="w-6 h-6 text-primary" />
        {trend && trendValue && (
          <div className={`flex items-center gap-1 text-sm ${
            trend === 'up' ? 'text-green-500' : 'text-orange-500'
          }`}>
            {trend === 'up' ? '↑' : '↓'}
            <span>{trendValue}</span>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <div className="text-3xl md:text-4xl font-semibold text-white">
          <CountUp end={value} suffix={suffix} decimals={decimals} />
        </div>
        <div className="text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}
