import React from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const BlogImage: React.FC<BlogImageProps> = ({ src, alt, caption }) => (
  <>
    <img className="w-full mb-3" src={src} alt={alt} />
    {caption && <p className="block text-center my-8 text-lg">{caption}</p>}
  </>
);

export default BlogImage;