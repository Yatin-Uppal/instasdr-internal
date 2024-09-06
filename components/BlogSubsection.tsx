import React from 'react';

interface BlogSubsectionProps {
  title: string;
  children: React.ReactNode;
}

const BlogSubsection: React.FC<BlogSubsectionProps> = ({ title, children }) => (
  <>
    <h4 className="font-lato text-[var(--color-black)] leading-[var(--leading-base)] text-[32px] mt-[33px] mb-[22px]">{title}</h4>
    {children}
  </>
);

export default BlogSubsection;