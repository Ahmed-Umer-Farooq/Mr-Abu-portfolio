import React, { useState, useCallback } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  style?: React.CSSProperties;
}

/**
 * Optimized image component with lazy loading and error handling
 */
export const LazyImage = React.memo<LazyImageProps>(({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  style 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div className={`bg-gray-800 flex items-center justify-center ${className}`} style={style}>
        <span className="text-gray-400 text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {!isLoaded && (
        <div className={`absolute inset-0 bg-gray-800 skeleton ${className}`} style={style} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        style={style}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
});

LazyImage.displayName = 'LazyImage';