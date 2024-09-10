import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface BlogContainerProps {
  children: React.ReactNode;
}

const BlogContainer: React.FC<BlogContainerProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const slug = 'brief-history-ethos-digital-garden';
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
