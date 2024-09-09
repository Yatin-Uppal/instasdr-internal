import React from 'react';

interface BlogContainerProps {
  children: React.ReactNode;
}

const BlogContainer: React.FC<BlogContainerProps> = ({ children }) => {
  return (
    <div className="blog-container">
      {children}
    </div>
  );
};

export default BlogContainer;
