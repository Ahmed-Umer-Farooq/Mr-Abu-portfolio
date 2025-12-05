import React from 'react';

interface VideoBackgroundProps {
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Animated Cyberpunk Background */}
      <div 
        className="absolute inset-0 cyberpunk-animated-bg"
        style={{
          background: `
            linear-gradient(135deg, #0a0015 0%, #1a0030 30%, #2d1b69 70%, #0a0015 100%),
            radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(123, 44, 191, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: '400% 400%, 100% 100%, 100% 100%, 100% 100%',
          animation: 'cyberpunk-flow 20s ease-in-out infinite'
        }}
      />
      
      {/* Matrix-style digital rain effect */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="matrix-char"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
      </div>
      
      {/* Video overlay with specified gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(10,0,30,0.8))',
        }}
      />
    </div>
  );
};

export default VideoBackground;