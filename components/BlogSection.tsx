import React from 'react';

interface BlogSectionProps {
  title: string;
  children: React.ReactNode;
}

const BlogSection: React.FC<BlogSectionProps> = ({ title, children }) => (
  <div>
    <h4 className="font-regular text-[var(--color-black)] leading-[var(--leading-base)] text-[44px] mt-[66px] mb-[33px]">
      <a href="#" className="text-[var(--color-black)]">{title}</a>
    </h4>
    {children}
  </div>
);

export default BlogSection;