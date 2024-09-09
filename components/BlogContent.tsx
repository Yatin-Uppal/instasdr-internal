import React from 'react';

interface BlogContentProps {
  children: React.ReactNode;
}

const BlogContent: React.FC<BlogContentProps> = ({ children }) => (
  <section className="bg-[linear-gradient(var(--color-cream) 0, white 110px)] pt-10 lg:pt-16 mt-4">
    <div className="custom_container md:mx-auto">
      {children}
    </div>
  </section>
);

export default BlogContent;