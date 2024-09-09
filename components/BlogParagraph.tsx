import React from 'react';

interface BlogParagraphProps {
  children: React.ReactNode;
}

const BlogParagraph: React.FC<BlogParagraphProps> = ({ children }) => (
  <p className="leading-[var(--leading-looser)] text-[var(--color-black)] text-[22px] mb-10">{children}</p>
);

export default BlogParagraph;