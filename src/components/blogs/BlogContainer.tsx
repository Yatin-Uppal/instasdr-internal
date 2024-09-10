import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface BlogContainerProps {
  children: React.ReactNode;
  slug: string
}

const BlogContainer: React.FC<BlogContainerProps> = ({ children, slug }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes(slug)) {
      const thumbImgDiv = document.querySelector('.thumbimg');
      if (thumbImgDiv) {
        thumbImgDiv.remove();
      }
    }
  }, [location]);

  return (
    <div className="blog-container">
      {children}
    </div>
  );
};

export default BlogContainer;
