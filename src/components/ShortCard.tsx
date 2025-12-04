import { Play, Flame } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ShortCardProps {
  views: string;
  thumbnail: string;
  isViral?: boolean;
}

export function ShortCard({ views, thumbnail, isViral }: ShortCardProps) {
  return (
    <div className="glass rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] cursor-pointer group">
      <div className="relative bg-muted overflow-hidden" style={{ aspectRatio: '9/16' }}>
        <ImageWithFallback
          src={thumbnail}
          alt="Short video"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
          </div>
        </div>
        {isViral && (
          <div className="absolute top-3 right-3 bg-secondary/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-white" />
            <span className="text-white text-xs font-semibold">VIRAL</span>
          </div>
        )}
      </div>
      <div className="p-3">
        <div className="flex items-center gap-2 text-white">
          <Play className="w-4 h-4" />
          <span className="font-semibold">{views}M views</span>
        </div>
      </div>
    </div>
  );
}
