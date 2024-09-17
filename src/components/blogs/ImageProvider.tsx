import React, { useState, ReactNode } from 'react';

interface ImageProps {
  className?: string;
  children: ReactNode;
}

const ImageProvider: React.FC<ImageProps> = ({ className, children }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => setIsZoomed(!isZoomed);

  return (
    <>
      <div
        className={className}
        onClick={toggleZoom}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </div>
      {isZoomed && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={toggleZoom}
        >
          <div
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
            }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageProvider;