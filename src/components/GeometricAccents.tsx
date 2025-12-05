import React from 'react';

const GeometricAccents: React.FC = () => {
  return (
    <>
      {/* Hexagonal wireframe behind profile */}
      <div className="hex-wireframe" style={{ top: '20%', left: '10%' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 85,25 85,75 50,95 15,75 15,25"
            fill="none"
            stroke="rgba(0,255,255,0.2)"
            strokeWidth="0.5"
          />
          <polygon
            points="50,15 75,30 75,70 50,85 25,70 25,30"
            fill="none"
            stroke="rgba(255,0,255,0.1)"
            strokeWidth="0.3"
          />
        </svg>
      </div>

      {/* Floating geometric shapes */}
      <div className="floating-geometry" style={{ top: '15%', right: '15%', width: '30px', height: '30px' }}>
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <polygon points="12,2 22,20 2,20" fill="rgba(0,255,255,0.1)" stroke="rgba(0,255,255,0.2)" strokeWidth="1"/>
        </svg>
      </div>

      <div className="floating-geometry" style={{ bottom: '20%', left: '20%', width: '25px', height: '25px', animationDelay: '2s' }}>
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <polygon points="12,2 18,7 18,17 12,22 6,17 6,7" fill="rgba(255,0,255,0.1)" stroke="rgba(255,0,255,0.2)" strokeWidth="1"/>
        </svg>
      </div>

      <div className="floating-geometry" style={{ top: '60%', right: '25%', width: '20px', height: '20px', animationDelay: '4s' }}>
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="12" cy="12" r="10" fill="rgba(255,215,0,0.05)" stroke="rgba(255,215,0,0.1)" strokeWidth="1"/>
        </svg>
      </div>
    </>
  );
};

export default GeometricAccents;