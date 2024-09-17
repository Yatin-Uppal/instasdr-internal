import React from 'react';

interface ImageProps {
  className?: string;
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ className, src, alt }) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
    />
  );
};

export default Image;