import { Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VideoCardProps {
  title: string;
  views: string;
  thumbnail: string;
}

export function VideoCard({ title, views, thumbnail }: VideoCardProps) {
  return (
    <div className="glass rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] cursor-pointer group">
      <div className="relative aspect-video bg-muted overflow-hidden">
        <ImageWithFallback
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Play className="w-4 h-4" />
          <span>{views} views</span>
        </div>
      </div>
    </div>
  );
}
