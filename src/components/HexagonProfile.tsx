import { HexagonProfileProps } from '../types';

/**
 * Hexagonal profile image component with animated border and glow effects
 * @param props - HexagonProfileProps containing image source, name, and size
 */
export function HexagonProfile({ imageSrc, name, size = 'lg' }: HexagonProfileProps) {
  const sizes = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32 md:w-40 md:h-40',
    lg: 'w-40 h-40 md:w-56 md:h-56',
    xl: 'w-48 h-48 md:w-72 md:h-72'
  };

  return (
    <div className="relative inline-block group">
      {/* Rotating hexagon border */}
      <div className="absolute inset-0 animate-[hex-spin_20s_linear_infinite]">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <polygon
            points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
            fill="none"
            stroke="url(#hex-gradient)"
            strokeWidth="2"
            className="opacity-80"
          />
          <polygon
            points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
            fill="none"
            stroke="url(#hex-gradient)"
            strokeWidth="1"
            className="opacity-40 blur-sm"
          />
        </svg>
      </div>

      {/* Arena Spotlight Beams */}
      <div className="absolute -inset-12 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        {/* Main spotlight from top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-radial from-yellow-300/30 via-yellow-400/20 to-transparent blur-xl animate-pulse" />
        
        {/* Side spotlights */}
        <div className="absolute top-1/4 -left-8 w-24 h-24 bg-gradient-radial from-blue-400/25 via-blue-500/15 to-transparent blur-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/4 -right-8 w-24 h-24 bg-gradient-radial from-purple-400/25 via-purple-500/15 to-transparent blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Bottom arena lights */}
        <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-gradient-radial from-pink-400/30 via-pink-500/20 to-transparent blur-lg animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-0 right-1/4 w-16 h-16 bg-gradient-radial from-green-400/30 via-green-500/20 to-transparent blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Champion Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-500/10 to-red-500/20 blur-2xl opacity-50 group-hover:opacity-80 transition-all duration-500 animate-pulse" />
      
      {/* Floating Energy Particles */}
      <div className="absolute -inset-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-yellow-400 rounded-full animate-[float-particles_4s_ease-in-out_infinite] shadow-lg shadow-yellow-400/50" />
        <div className="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-orange-400 rounded-full animate-[float-particles_5s_ease-in-out_infinite] shadow-lg shadow-orange-400/50" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-red-400 rounded-full animate-[float-particles_3s_ease-in-out_infinite] shadow-lg shadow-red-400/50" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-[float-particles_4.5s_ease-in-out_infinite] shadow-lg shadow-purple-400/50" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/6 left-2/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-[float-particles_3.5s_ease-in-out_infinite] shadow-lg shadow-blue-400/50" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Energy Field Distortion */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-conic from-transparent via-yellow-400/10 to-transparent animate-[hex-spin_6s_linear_infinite]" />
        <div className="absolute inset-2 bg-gradient-conic from-transparent via-orange-400/10 to-transparent animate-[hex-spin_8s_linear_infinite_reverse]" />
      </div>

      {/* Hexagon mask for image */}
      <div className={`relative ${sizes[size]}`}>
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <clipPath id="hex-clip">
              <polygon points="50,2 94,22 94,78 50,98 6,78 6,22" />
            </clipPath>
            <linearGradient id="overlay-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Background */}
          <polygon
            points="50,2 94,22 94,78 50,98 6,78 6,22"
            fill="#1a1a1a"
          />
          
          {/* Image (if provided) */}
          {imageSrc ? (
            <image
              href={imageSrc}
              width="100"
              height="100"
              clipPath="url(#hex-clip)"
              className="group-hover:scale-110 transition-transform duration-700"
              style={{ filter: 'brightness(1.1) contrast(1.2)' }}
            />
          ) : (
            <text
              x="50"
              y="50"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="url(#overlay-gradient)"
              className="text-3xl font-bold"
            >
              {name.substring(0, 2).toUpperCase()}
            </text>
          )}
          
          {/* Gradient overlay */}
          <polygon
            points="50,2 94,22 94,78 50,98 6,78 6,22"
            fill="url(#overlay-gradient)"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          
          {/* Border */}
          <polygon
            points="50,2 94,22 94,78 50,98 6,78 6,22"
            fill="none"
            stroke="url(#hex-gradient)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Champion Status */}
      <div className="absolute -top-8 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="text-sm font-bold text-yellow-400 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 px-3 py-1 rounded-full border border-yellow-400/50 shadow-lg shadow-yellow-400/30">
          🏆 CHAMPION SPOTLIGHT 🏆
        </div>
      </div>
      
      <div className="absolute -bottom-8 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="text-xs font-mono text-orange-400 bg-gradient-to-r from-orange-600/20 to-red-600/20 px-2 py-1 rounded border border-orange-400/50 shadow-lg shadow-orange-400/30">
          ARENA MASTER • FREE FIRE LEGEND
        </div>
      </div>
    </div>
  );
}
