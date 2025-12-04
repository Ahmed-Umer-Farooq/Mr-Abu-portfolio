import React from 'react';
import { CountUp } from './CountUp';
import { GamingStatCardProps } from '../types';
import { LucideIcon } from 'lucide-react';

/**
 * Gaming-themed stat card component with hover effects and trend indicators
 * @param props - GamingStatCardProps containing icon, label, value, and styling options
 */
export const GamingStatCard = React.memo<GamingStatCardProps & { icon: LucideIcon }>(function GamingStatCard({
  icon: Icon,
  label,
  value,
  suffix = '',
  trend,
  trendValue,
  decimals = 1,
  color = 'purple'
}) {
  const colorClasses = {
    purple: 'from-purple-600 to-violet-600',
    pink: 'from-pink-600 to-rose-600',
    cyan: 'from-cyan-600 to-blue-600'
  };

  return (
    <div className="gaming-card p-6 group relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent clip-path-triangle" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className={`relative w-12 h-12 bg-gradient-to-br ${colorClasses[color]} rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
          
          {trend && trendValue && (
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border ${
              trend === 'up' 
                ? 'border-green-500/30 bg-green-500/10 text-green-400' 
                : 'border-orange-500/30 bg-orange-500/10 text-orange-400'
            }`}>
              <span className="text-lg">{trend === 'up' ? '↑' : '↓'}</span>
              <span className="font-mono text-sm font-semibold">{trendValue}</span>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="space-y-3">
          <div className="text-4xl md:text-5xl font-bold text-white font-mono tracking-tight">
            <CountUp end={value} suffix={suffix} decimals={decimals} />
          </div>
          
          {/* Label with scanline effect */}
          <div className="relative">
            <div className="text-muted-foreground font-medium tracking-wide uppercase text-sm">
              {label}
            </div>
          </div>
          
          {/* Progress indicator */}
          <div className="stat-bar">
            <div className="stat-bar-fill" style={{ width: '100%' }} />
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-primary/50" />
      <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-secondary/50" />
    </div>
  );
});

GamingStatCard.displayName = 'GamingStatCard';
