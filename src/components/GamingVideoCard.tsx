import { Play, Eye } from 'lucide-react';
import { GamingVideoCardProps } from '../types';

/**
 * Gaming video card component with hover effects and viral indicators
 * @param props - GamingVideoCardProps containing title, views, image, and flags
 */
export function GamingVideoCard({ title, views, imageSrc, isShort = false, isViral = false }: GamingVideoCardProps & { title: string }) {
  return (
    <div className="gaming-card p-0 overflow-hidden group cursor-pointer">
      {/* Thumbnail */}
      <div className={`relative bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden ${
        isShort ? 'aspect-[9/16]' : 'aspect-video'
      }`}>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        )}
        
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary blur-2xl opacity-50" />
            <div className={`relative ${isShort ? 'w-12 h-12' : 'w-16 h-16'} rounded-full bg-gradient-to-br ${
              isShort ? 'from-pink-600 to-rose-600' : 'from-purple-600 to-violet-600'
            } flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
              <Play className={`${isShort ? 'w-5 h-5' : 'w-7 h-7'} text-white fill-white ml-1`} />
            </div>
          </div>
        </div>

        {/* Viral badge for shorts */}
        {isViral && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1.5 rounded-md backdrop-blur-sm flex items-center gap-1.5 animate-pulse">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" />
            </svg>
            <span className="text-white text-xs font-bold tracking-wide">VIRAL</span>
          </div>
        )}

        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-secondary/50" />
      </div>

      {/* Info */}
      {!isShort && (
        <div className="p-4 space-y-3">
          <h3 className="text-white font-semibold line-clamp-2 leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground font-mono text-sm">{views}</span>
          </div>
        </div>
      )}

      {isShort && (
        <div className="p-3 bg-gradient-to-r from-pink-600/10 to-rose-600/10 border-t border-pink-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-pink-400" />
              <span className="text-white font-mono font-bold text-sm">{views}</span>
            </div>
            <span className="text-pink-400 text-xs font-semibold uppercase tracking-wider">Short</span>
          </div>
        </div>
      )}
    </div>
  );
}
