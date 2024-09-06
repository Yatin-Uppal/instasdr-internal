import React from 'react';
import BlogImage from './BlogImage';

interface ImageGridProps {
  images: { src: string; alt: string }[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => (
  <section className="my-22">
    <div className="lg:container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <BlogImage key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  </section>
);

export default ImageGrid;