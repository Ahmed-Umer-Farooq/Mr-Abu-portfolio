// Enums
export enum SocialPlatform {
  EMAIL = 'email',
  YOUTUBE = 'youtube',
  INSTAGRAM = 'instagram',
  DISCORD = 'discord'
}

export enum MetricType {
  VIEWS = 'views',
  LIKES = 'likes',
  COMMENTS = 'comments',
  SHARES = 'shares',
  SUBSCRIBERS = 'subscribers',
  REVENUE = 'revenue'
}

export enum TrendDirection {
  UP = 'up',
  DOWN = 'down'
}

// Core Data Interfaces
export interface YouTubeStats {
  views: number;
  likes: number;
  comments: number;
  shares: number;
  subscribers: number;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: number;
  url: string;
  duration: string;
  uploadDate: string;
  likes?: number;
  comments?: number;
}

export interface Short {
  id: string;
  thumbnail: string;
  views: number;
  url: string;
  isViral?: boolean;
}

export interface AudienceData {
  age: Record<string, number>;
  gender: Record<string, number>;
  geography: Record<string, number>;
}

export interface PerformanceMetrics {
  views: number;
  watchTime: number;
  subscribers: number;
  revenue: number;
  changePercentage: {
    views: number;
    watchTime: number;
    subscribers: number;
    revenue: number;
  };
  trend: {
    views: TrendDirection;
    watchTime: TrendDirection;
    subscribers: TrendDirection;
    revenue: TrendDirection;
  };
}

// Component Props
export interface GamingStatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  suffix?: string;
  trend?: TrendDirection;
  trendValue?: string;
  decimals?: number;
  color?: 'purple' | 'pink' | 'cyan';
}

export interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

export interface HexagonProfileProps {
  imageSrc?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

export interface GamingVideoCardProps {
  title?: string;
  views: string;
  imageSrc?: string;
  isShort?: boolean;
  isViral?: boolean;
}

// Utility Types
export type ApiResponse<T> = {
  data: T;
  success: boolean;
  error?: string;
};

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Type Guards
export const isVideo = (item: Video | Short): item is Video => {
  return 'title' in item && 'duration' in item;
};

export const isShort = (item: Video | Short): item is Short => {
  return !('title' in item) && !('duration' in item);
};

export const isValidMetric = (value: unknown): value is number => {
  return typeof value === 'number' && !isNaN(value) && value >= 0;
};