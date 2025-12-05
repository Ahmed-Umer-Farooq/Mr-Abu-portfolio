import React, { useState, useRef, useEffect } from 'react';

const SubtleVideoBackground: React.FC = () => {
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Subtle abstract gaming videos
  const videoSources = [
    'https://cdn.pixabay.com/vimeo/460735773/matrix-46073.mp4',
    'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = () => setHasError(true);
    video.addEventListener('error', handleError);

    // Timeout fallback
    const timeout = setTimeout(() => setHasError(true), 3000);

    return () => {
      clearTimeout(timeout);
      video.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError) {
    return null; // Graceful fallback - no video
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{
          opacity: 0.2,
          filter: 'blur(1px) brightness(0.3)',
        }}
      >
        <source src={videoSources[0]} type="video/mp4" />
        <source src={videoSources[1]} type="video/mp4" />
      </video>
      
      {/* Heavy dark overlay to preserve readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'rgba(5, 5, 20, 0.85)',
        }}
      />
    </div>
  );
};

export default SubtleVideoBackground;