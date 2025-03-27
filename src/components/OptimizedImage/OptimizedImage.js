import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ 
  src, 
  alt, 
  className,
  width,
  height,
  loading = 'lazy',
  quality = 80,
  format = 'webp'
}) => {
  const [imageSrc, setImageSrc] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!src) return;

    // Check if it's an Unsplash image
    if (src.includes('unsplash.com')) {
      const url = new URL(src);
      // Add image optimization parameters
      url.searchParams.set('auto', 'format');
      url.searchParams.set('fit', 'crop');
      url.searchParams.set('w', width || 800);
      url.searchParams.set('q', quality);
      url.searchParams.set('fm', format);
      setImageSrc(url.toString());
    } else {
      setImageSrc(src);
    }
  }, [src, width, quality, format]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoading ? 'image-loading' : 'image-loaded'}`}
      width={width}
      height={height}
      loading={loading}
      onLoad={() => setIsLoading(false)}
      style={{
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out'
      }}
    />
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  quality: PropTypes.number,
  format: PropTypes.oneOf(['webp', 'jpeg', 'png'])
};

export default OptimizedImage;
