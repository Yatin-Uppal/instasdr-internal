import React from 'react';

interface BlogQuoteProps {
  quote: string;
}

const BlogQuote: React.FC<BlogQuoteProps> = ({ quote }) => (
  <blockquote className="w-4/5 mx-auto relative my-20 py-7 after:absolute after:w-16 after:h-[2px] after:bg-[black] after:left-0 after:right-0 after:top-0 after:opacity-10 after:mx-auto before:absolute before:w-16 before:h-[2px] before:bg-[black] before:left-0 before:right-0 before:bottom-0 before:opacity-10 before:mx-auto">
    <p className="text-[36px] leading-[var(--leading-base)] text-[var(--color-black)] text-center">{quote}</p>
  </blockquote>
);

export default BlogQuote;